import { LoaderFunction, MetaFunction, useLoaderData } from "remix";
import { getAppData } from "~/lib/app.server";

import { App, Backdrop, Container, Footer, Header, ButtonLinks } from "~/components";
import { AppDataType, ButtonLinkType } from "~/types";

export const meta: MetaFunction = ({ data }: { data: AppDataType }) => {
	return { title: data.app.name || "cnvt.link" };
};

export const loader: LoaderFunction = async () => {
	let { app, container, header, links } = getAppData();

	return { app, container, header, links };
};

export default function Index() {
	let { app, container, header, links } = useLoaderData<AppDataType>();

	let mainLinks: Array<ButtonLinkType> = [];
	let footerLinks: Array<ButtonLinkType> = [];

	links.map((link) => {
		if (link.footer) {
			footerLinks.push(link);
		} else {
			mainLinks.push(link);
		}
		return link;
	});

	return (
		<App className={app.className}>
			<Container className={container && container.className}>
				<>
					{/* <Backdrop {...backdrop} /> */}
					<div className="content">
						<Header {...header}></Header>
						<ButtonLinks links={mainLinks} />
						<Footer footerLinks={footerLinks} />
					</div>
				</>
			</Container>
		</App>
	);
}
