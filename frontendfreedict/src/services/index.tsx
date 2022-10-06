import axios from "axios";

export const dictionaryapi = axios.create({
  baseURL: "https://api.dictionaryapi.dev/api/v2/entries/en/",
});

export const api = axios.create({
  baseURL: "localhost:3333",
});
