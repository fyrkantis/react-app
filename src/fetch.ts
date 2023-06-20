import useSWR from "swr"

const fetcher = (url: URL) => fetch(url).then(response => response.json());

// Stolen from:
// https://swr.vercel.app/examples/basic
export function FetchStatistics(): string {
	const { data, error, isLoading } = useSWR("/api/statistics/", fetcher);

	if (error) return "[Error]";
	if (isLoading) return "[Loading...]";
	const value = data.users;
	if (value === undefined) return "[Malformed data]";
	return value
}