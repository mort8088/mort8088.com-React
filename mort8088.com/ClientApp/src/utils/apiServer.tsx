export function apiServer(calling: string): string {
    let host = "";
    if (process.env.NODE_ENV === "development") {
        // Code specific to development mode
        host = "http://localhost:5000";
    } else {
        // Code specific to production mode
        host = "http://localhost:5000";
    }

    if (calling === "/rss") return host + calling;

    return host + "/api" + calling;
}
