import axios from "axios";

let url = "https://yousab-tech.com/jaiden/public/api";

export let clientUrl;

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === "development") {
    clientUrl = "http://localhost:5173";
} else {
    clientUrl = "https://worldpts.com";
    // clientUrl = 'http://localhost:4173'
}

export const api = axios.create({
    baseURL: url,
});

export const API_KEY = "AIzaSyAMn2Lb6WoSOsXKtMoITtHMNsErkkz_w5k";