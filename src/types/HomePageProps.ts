import { Film } from "./Film";

export interface HomePageProps {
  films: Film[];
  searchterm: string;
  toggleFavorite: (id: string) => void;
  favorites: Film[];
}
