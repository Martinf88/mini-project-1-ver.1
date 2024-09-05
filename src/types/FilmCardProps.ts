import { Film } from "./Film";

export interface FilmCardProps {
  f: Film;
  isFavorite: boolean;
  toggleFavorite: (id: string) => void;
}
