import fetch from 'node-fetch';

export async function handler(event) {
    const API_URL = "https://my-json-server.typicode.com/nattsnb/bookify-data-to-post";

    try {
        const path = event.path.replace("/.netlify/functions/proxy", "");
        const url = `${API_URL}${path}`;

        const response = await fetch(url, {
            method: event.httpMethod,
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await response.json();

        return {
            statusCode: response.status,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Error proxying request", details: error.message }),
        };
    }
}