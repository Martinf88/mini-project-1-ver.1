import FilmCard from "../components/FilmCard";
import { Film } from "../types/Film";
import { HomePageProps } from "../types/HomePageProps";

const HomePage: React.FC<HomePageProps> = ({
  films,
  searchterm,
  toggleFavorite,
  favorites,
}) => {
  const searchedFilms: Film[] = films.filter((f) =>
    f.title.toLowerCase().includes(searchterm.toLowerCase())
  );

  return (
    <div className="film-grid">
      {searchedFilms.map((f: Film) => (
        <FilmCard
          key={f.id}
          f={f}
          isFavorite={favorites.some((fav) => fav.id === f.id)}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
};

export default HomePage;
