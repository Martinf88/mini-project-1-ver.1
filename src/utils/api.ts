import { Film } from "../types/Film";

const API_URL = "https://ghibliapi.vercel.app/films/";

async function fetchFilms(): Promise<Film[]> {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const apiData: Film[] = await response.json();
  console.log("Data från Api: ", apiData);

  return apiData;
}

export { fetchFilms };
