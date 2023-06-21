import Layout from "../components/layout";
import { useRouter } from 'next/router';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps<Record<string, never>> = () => {
	return { props: {} };
};

export default function Index(): JSX.Element {
	const router = useRouter();

	return (
		<Layout>
			<header>
				<h1>404: Not Found</h1>
				<hr />
				<p>The page <strong>{ router.asPath }</strong> could not be found.</p>
			</header>
		</Layout>
	)
}
