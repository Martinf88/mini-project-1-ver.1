import FilmCard from "../components/FilmCard";
import { Film } from "../types/Film";
import { FavoritesPageProps } from "../types/FavoritesPageProps";

const FavoritesPage: React.FC<FavoritesPageProps> = ({
  favorites,
  toggleFavorite,
}) => {
  return (
    <div className="film-grid">
      {favorites.map((f: Film) => (
        <FilmCard
          key={f.id}
          f={f}
          isFavorite={true}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
};

export default FavoritesPage;
