export type BackdropType = {
	className?: string | JSX.Element;
	url?: { path: string; className: string };
};
export type NameType = { title: string; className: string };
export type LogoType = {
	url?: string;
	component?: JSX.Element;
	className?: string;
};
export type HeaderType = {
	name?: NameType;
	excerpt?: string;
	logo?: LogoType;
	className?: string;
};

export type ButtonLinkType = {
	name?: string | JSX.Element;
	className?: string;
	download?: true | false;
	primary?: true | false;
	url: string;
	redirect?: string;
	footer?: true | false;
	icon?: "tiktok" | "instagram" | "facebook" | "email" | "whatsapp";
};

export type AppDataType = {
	app: { className: string; name: string };
	backdrop?: BackdropType;
	container?: { className: string };
	header: HeaderType;
	links: ButtonLinkType[];
};
