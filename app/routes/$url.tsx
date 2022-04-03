import { LoaderFunction, redirect } from "remix";
import { getAppData } from "~/lib/app.server";
import { AppDataType, ItemType } from "~/types";

export const loader: LoaderFunction = async ({ params }) => {
	let data: AppDataType = await getAppData();
	let itemLink: ItemType | undefined;

	data.links.map((link) => {
		if (link.group) {
			link.group.forEach((link_group) => {
				if (link_group.url === params.url) {
					itemLink = link_group;
				}
			});
		} else {
			if (link.url === params.url) {
				itemLink = link;
			}
		}
		return false;
	});

	console.log(itemLink);

	if (!itemLink) throw new Error("Não existe Link");
	if (!itemLink.redirect) throw new Error("Não existe Redirect");
	return redirect(itemLink.redirect);
};
