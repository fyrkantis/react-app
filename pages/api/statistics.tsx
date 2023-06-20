import { IncomingMessage, ServerResponse } from "http";

export default function Statistics(request: IncomingMessage, response: ServerResponse): void {
	response.setHeader("Content-Type", "application/json");
	// Sends empty JSON response:
	response.end(JSON.stringify({ users: 122345 }));
}