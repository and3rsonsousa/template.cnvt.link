import { Link } from "remix";
import { ItemType } from "~/types";

export default function ButtonLinks({ links }: { links: ItemType[] }) {
	return (
		<div className={`links`}>
			{links.map((link, index) => {
				if (link.group) {
					return (
						<div
							className={`grid grid-cols-2 ${
								!link.spaceless ? "gap-2" : "group"
							}`}
						>
							{link.group.map((link, index) => (
								<ButtonLink {...link} key={index} />
							))}
						</div>
					);
				} else {
					return <ButtonLink {...link} key={index} />;
				}
			})}
		</div>
	);
}

export function ButtonLink({
	name,
	url,
	className = "",
	download,
	primary,
}: ItemType) {
	// Se for download

	if (url !== undefined) {
		return download ? (
			<a
				href={url}
				download
				className={`button ${
					primary ? "button-primary" : ""
				} ${className}`}
				target="_blank"
				rel="noreferrer"
			>
				<Name name={name} />
			</a>
		) : // Se não, testa se tem https:// para link externo
		/^https:\/\//.test(url) ? (
			<a
				href={url}
				className={`button ${
					primary ? "button-primary" : ""
				} ${className}`}
				target="_blank"
				rel="noreferrer"
			>
				<Name name={name} />
			</a>
		) : (
			// por fim exibe Link do remix
			<Link
				to={url}
				className={`button ${
					primary ? "button-primary" : ""
				} ${className}`}
			>
				<Name name={name} />
			</Link>
		);
	} else {
		return (
			<div className={`py-5`}>
				<Name name={name} />
			</div>
		);
	}
}

export function Name({ name }: { name?: string | JSX.Element }) {
	if (name) {
		if (typeof name === "string") {
			return /<.*>/.test(name) ? (
				<span dangerouslySetInnerHTML={{ __html: name }} />
			) : (
				<span>{name}</span>
			);
		}
		return name;
	}
	throw new Error("name not defined");
}
