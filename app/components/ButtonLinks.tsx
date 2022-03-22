import { Link } from "remix";
import { ButtonLinkType } from "~/types";

export default function ButtonLinks({ links }: { links: ButtonLinkType[] }) {
	return (
		<div className="links">
			{links.map((link, index) => (
				<ButtonLink {...link} key={index} />
			))}
		</div>
	);
}

export function ButtonLink({
	name,
	url,
	className = "",
	download = false,
	primary = false,
}: ButtonLinkType) {
	// Se for download
	return download ? (
		<a
			href={url}
			download
			className={`button ${primary ? "button-primary" : ""} ${className}`}
			target="_blank"
			rel="noreferrer"
		>
			{name}
		</a>
	) : // Se não, testa se tem https:// para link externo
	/^https:\/\//.test(url) ? (
		<a
			href={url}
			className={`button ${primary ? "button-primary" : ""} ${className}`}
			target="_blank"
			rel="noreferrer"
		>
			{name}
		</a>
	) : (
		// por fim exibe Link do remix
		<Link
			to={url}
			className={`button ${primary ? "button-primary" : ""} ${className}`}
		>
			{name}
		</Link>
	);
}
