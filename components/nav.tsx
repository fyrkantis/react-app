import Link from "next/link";
import { useRouter } from 'next/router';
import type { GetStaticProps } from 'next';

const pages = [
	{ name: "Home", href: "/" },
	{ name: "Users", href: "/users/" },
	{ name: "My Account", href: null }
]


export const getStaticProps: GetStaticProps<Record<string, never>> = () => {
	return { props: {} };
}

// From this bootstrap tutorial:
// https://getbootstrap.com/docs/5.3/components/navbar/
export default function Nav(): JSX.Element {
	const router = useRouter();

	return (
		<nav className="navbar bg-dark navbar-dark navbar-expand-sm">
			<div className="collapse navbar-collapse">
				<ul className="navbar-nav">
					{pages.map((page, index) => {
						let innerLink = page.href === null ? (<span className="nav-link disabled">{page.name}</span>) : (
							page.href == router.asPath ? (<Link className="nav-link active" href={page.href}>{page.name}</Link>)
							: (<Link className="nav-link" href={page.href}>{page.name}</Link>)
						)
						return <li key={index} className="navbar-item">{innerLink}</li>
					})}
				</ul>
			</div>
		</nav>
	)
}