import { Film } from "./Film";

export interface FavoritesPageProps {
  favorites: Film[];
  toggleFavorite: (id: string) => void;
}
