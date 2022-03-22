import { BackdropType } from "~/types";

export default function Backdrop({ className, url }: BackdropType) {
	return (
		<div className={`backdrop ${className}`}>{url && <img src={url.path} className={url.className} alt="" />}</div>
	);
}
