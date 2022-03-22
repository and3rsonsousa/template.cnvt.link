import {
	FaFacebookF as Facebook,
	FaInstagram as Instagram,
	FaTiktok as TikTok,
	FaWhatsapp as WhatsApp,
} from "react-icons/fa";
import { HiOutlineMail as Email } from "react-icons/hi";
import { ButtonLinkType } from "~/types";
import { ButtonLink } from "./ButtonLinks";

export default function Footer({ footerLinks }: { footerLinks: ButtonLinkType[] }) {
	return (
		<div className="footer">
			{footerLinks.map((icon, index) => (
				<IconLink icon={icon.icon} url={icon.url} key={index} />
			))}
		</div>
	);
}

export function IconLink({ icon, url, className = "" }: ButtonLinkType) {
	if (!icon) throw new Error("'icon' não está definindo");
	return <ButtonLink name={icons[icon]} className={`icon-link ${className}`} url={url} />;
}

let icons = {
	tiktok: <TikTok />,
	facebook: <Facebook />,
	instagram: <Instagram />,
	email: <Email />,
	whatsapp: <WhatsApp />,
};
