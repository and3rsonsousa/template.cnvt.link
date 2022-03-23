import { AppDataType } from "~/types";

export function getAppData() {
	let AppDataType: AppDataType = {
		// name  			=>	nome que ficará no <title></title>
		// className 	=>	classes aplicadas ao compomponent <App></App>
		app: {
			name: "Fontenele Coutiho Odontologia",
			className: "bg-gray-100",
		},

		// Ordem de aparição
		// LOGO | NOME | EXCERT
		header: {
			logo: {
				url: "/logo.png",
				component: undefined,
				className: "w-28 mx-auto mb-8",
			},
			name: {
				title: `<span class="text-3xl text-brand-2">Fontenele Coutinho</span><br/><span class="text-sm uppercase tracking-wider">Odontologia</span>`,
				className: "",
			},
			//texto que fica logo abaixo ao logo
			excerpt: `<span class="font-light">🍃 Seu <span class="font-bold">SORRISO LEVE</span> como deve ser.</span>`,
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
				name: `<span class="text-xl font-semibold block -mb-8">Agende sua consulta em</span>`,
			},
			{
				group: [
					{
						name: `Sobral<br/><span class="text-xs text-brand-1 uppercase tracking-wide">Fale com a Alice</span>`,
						url: "whatsapp-sobral",
						primary: true,
						redirect:
							"https://wa.me/5588994694910?text=Oi,%20Alice.%20Gostaria%20de%20marcar%20uma%20consulta.",
					},
					{
						name: `Carnaubal<br/><span class="text-xs text-brand-1 uppercase tracking-wide">Fale com a Sammya</span>`,
						url: "whatsapp-carnaubal",
						primary: true,
						redirect:
							"https://wa.me/5588999698851?text=Oi,%20Sammya.%20Gostaria%20de%20marcar%20uma%20consulta.",
					},
				],
			},

			{
				name: "Onde estamos",
				url: "https://goo.gl/maps/bbgvxcq5K6KrEP2u7",
			},

			{
				name: "Vanessa & Émerson",
				url: "https://instagram.com/fontenelecoutinho",
			},

			{
				name: "Nossos Serviços",
				url: "https://instagram.com/fontenelecoutinho",
			},

			{
				name: `<div><img src="/flor.png" class="w-20 mt-8 mx-auto" /></div>`,
			},

			//Botões Footer
			{
				icon: "tiktok",
				url: "https://tiktok.com/@fontenelecoutinho",
				footer: true,
			},
			{
				icon: "instagram",
				url: "https://instagram.com/fontenelecoutinho",
				footer: true,
			},
			{
				icon: "facebook",
				url: "https://facebook.com/fontenelecoutinho",
				footer: true,
			},
			{
				icon: "email",
				url: "email",
				redirect: "mailto:fontenelecoutinho@gmail.com",
				footer: true,
			},
		],
	};

	return AppDataType;
}
