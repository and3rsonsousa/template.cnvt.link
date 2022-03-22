import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "remix";
import styles from "./app.css";

export function links() {
	return [
		{ rel: "stylesheet", href: styles },
		{
			rel: "shortcut icon",
			href: "/favicon.png",
		},
	];
}

export default function App() {
	return (
		<html lang="pt-br">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<Meta />
				<Links />
				<script
					dangerouslySetInnerHTML={{
						__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K4GHVPZ');`,
					}}
				></script>
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
