import Nav from "./nav";

// Handle multiple neighboring children like this:
// https://stackoverflow.com/a/64575947/13347795
export default function Layout({ children }: { children: JSX.Element | JSX.Element[] }): JSX.Element {
	return (
		<>
			<Nav></Nav>
			<main>
				{children}
			</main>
		</>
	)
}