import Link from "next/link";

export default function Nav(): JSX.Element {
	return (
		<nav>
			<ul>
				<li><Link href="/">Home</Link></li>
				<li><Link href="/users/">Users</Link></li>
			</ul>
		</nav>
	)
}