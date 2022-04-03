import { AppDataType } from "~/types";

export function getAppData() {
	let AppDataType: AppDataType = {
		// name  			=>	nome que ficará no <title></title>
		// className 	=>	classes aplicadas ao compomponent <App></App>
		app: {
			name: "cnvt.link",
			className: "bg-gray-100",
		},

		// Ordem de aparição
		// LOGO | NOME | EXCERT
		header: {
			logo: {
				url: "/logo.svg",
				component: undefined,
				className: "w-36 mx-auto mb-8",
			},
			name: {
				title: `Árvore de links`,
				className: "",
			},
			//texto que fica logo abaixo ao logo
			excerpt: `<span class="font-light text-xs uppercase tracking-wide">criado e mantido pela empresa Canivete</span>`,
			// css class for the whole header,
			// className: "",
		},
		// backdrop: {
		// className: "bg-black/20",
		// url: {
		// path: "/backdrop.svg",
		// className: "-mr-32 -mt-56 text-brand-3 -ml-96",
		// className: "opacity-25 scale-150 mt-16 md:scale-125 md:-mt-32 xl:-mt-96",
		// },
		// },
		links: [
			{
				name: `<span class="text-xl font-semibold block -mb-8">Item em forma de texto</span>`,
			},
			{
				group: [
					{
						name: `Botão 1<br/><span class="text-xs text-brand-1 uppercase tracking-wide">Texto abaixo</span>`,
						url: "whatsapp-1",
						type: "primary",
						redirect: "",
					},
					{
						name: `Botão 2<br/><span class="text-xs text-brand-1 uppercase tracking-wide">Texto abaixo</span>`,
						url: "whatsapp-carnaubal",
						type: "primary",
						redirect: "",
					},
				],
			},

			{
				name: "Link comum",
				url: "",
			},
			{
				spaceless: true,
				group: [
					{
						name: `Botão 1 Simples`,
						url: "whatsapp-1",
						redirect: "",
					},
					{
						name: `Botão 2 Simples`,
						url: "whatsapp-carnaubal",
						redirect: "",
					},
				],
			},
			{
				name: "Alternativo",
				url: "alternativo",
				redirect: "",
				type: "alternative",
			},

			//Botões Footer
			{
				icon: "tiktok",
				url: "https://tiktok.com/@agenciacanivete",
				footer: true,
			},
			{
				icon: "instagram",
				url: "https://instagram.com/agenciacanivete",
				footer: true,
			},
			{
				icon: "facebook",
				url: "https://facebook.com/agenciacanivete",
				footer: true,
			},
			{
				icon: "email",
				url: "email",
				redirect: "mailto:fontenelecoutinho@gmail.com",
				footer: true,
			},
			{
				icon: "whatsapp",
				url: "whatsapp",
				redirect: "https://wa.me/5588981082050",
				footer: true,
			},
		],
	};

	return AppDataType;
}
