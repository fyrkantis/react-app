import Layout from "../components/layout";

export default function Index(): JSX.Element {
	return (
		<Layout>
			<header>
				<h1>Dave&apos;s Amazing Data Application</h1>
				<hr />
				<p>It&apos;s great!</p>
				<fieldset>
					<legend>Currently surveiling</legend>
					<p><span>0</span> users</p>
				</fieldset>
			</header>
			<article>
				<h2>What does DATA do?</h2>
				<p>DATA is a data application that collects data from users and stores it in a database.</p>
				<section>
					<h3>DATA accomplishes this by:</h3>
					<ul>
						<li>Collecting data from users</li>
						<li>Storing data in a database</li>
						<li>End of list</li>
					</ul>
				</section>
				<section>
					<h3>Changing the world</h3>
					<p>DATA is changing the world by collecting data from users and storing it in a database.</p>
					<p>We&apos;re not sure how yet, but we&apos;re sure it&apos;s going to be great.</p>
					<p>When DATA changes the world, we&apos;ll let you know.</p>
				</section>
				<section>
					<h3>DATA&apos;s features include:</h3>
					<ul>
						<li>Collecting data from users</li>
						<li>Storing data in a database</li>
						<li>End of list</li>
					</ul>
				</section>
			</article>
		</Layout>
	)
}
