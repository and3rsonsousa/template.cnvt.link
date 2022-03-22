import { AppDataType } from "~/types";

export function getAppData() {
	let AppDataType: AppDataType = {
		// name  			=>	nome que ficará no <title></title>
		// className 	=>	classes aplicadas ao compomponent <App></App>
		app: {
			name: "cnvt.link",
			className: "bg-gray-100",
		},
		container: {
			className:
				"px-16 py-12 bg-gray-50 shadow shadow-gray-300/50 rounded-xl",
		},
		// Ordem de aparição
		// LOGO | NOME | EXCERT
		header: {
			logo: {
				url: "/logo.svg",
				component: undefined,
				className: "w-52 mx-auto mb-8",
			},
			name: {
				title: "Árvore de Links",
				className: "text-2xl",
			},
			//texto que fica logo abaixo ao logo
			excerpt: `Use texto simples ou <strong>HTML</strong> para destacar seu texto.`,
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
				name: "Botão principal",
				url: "botao-principal",
				primary: true,
				redirect: "",
			},
			{
				name: "Botão Comum",
				url: "botao-comum",
				redirect: "",
			},
			{
				group: [
					{
						name: `<span class='text-sm uppercase font-medium'>Grupo de</span><br/><span class='text-xl'>Botões</span>`,
						url: "botao-comum",
						redirect: "",
						primary: true,
					},
					{
						name: `<span class='text-sm uppercase font-medium'>Usando</span><br/><span class='text-xl'>HTML</span>`,
						url: "botao-comum",
						redirect: "",
					},
				],
			},
			{
				name: "Botão com link",
				url: "https://cnvt.link",
			},
			{
				name: "Botão para download",
				url: "/seo.jpg",
				download: true,
			},
			{
				name: `Também é posível inserir um texto entre os botões<br/>e usar códigos <strong>HTML</strong> para direcionar a atenção<br/><span class="text-xs">Use esses comandos com sabedoria.</span><br/><h3 class="text-xl font-bold text-gray-700 my-4">Divisão de Categoria</h3><hr/>`,
			},
			{
				spaceless: true,
				group: [
					{
						name: "Outro grupo",
						url: "",
					},
					{
						name: "Sem espaço",
						url: "",
					},
				],
			},

			//Botões Footer
			{
				icon: "tiktok",
				url: "https://tiktok.com/@agenciacanivete",
				footer: true,
			},
			{
				icon: "whatsapp",
				url: "https://api.whatsapp.com/send/?phone=&text&app_absent=0",
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
		],
	};

	return AppDataType;
}
