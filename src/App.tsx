import "./App.css";
import { useState } from "react";
import { Film } from "./types/Film";

import HomePage from "./pages/HomePage";
import SearchField from "./components/SearchField";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  const [films, setFilms] = useState<Film[]>([]);
  const [searchterm, setSearchterm] = useState<string>("");
  const [favorites, setFavorites] = useState<Film[]>([]);
  // TODO: State för olika views, homepage & favpage
  // Visa med hjälp av conditional rendering

  const toggleFavorite = (id: string) => {
    const filmToToggle = films.find((film) => film.id === id);
    if (!filmToToggle) return;

    if (favorites.some((fav) => fav.id === id)) {
      setFavorites(favorites.filter((fav) => fav.id !== id));
    } else {
      setFavorites([...favorites, filmToToggle]);
    }
  };

  return (
    <>
      <div className="app">
        <header className="app-header">
          <h1>Welcome to Studio Ghibli's magical world!</h1>
        </header>
        <main>
          <SearchField
            setSearchterm={setSearchterm}
            searchterm={searchterm}
            setFilms={setFilms}
          />
          <HomePage
            films={films}
            searchterm={searchterm}
            toggleFavorite={toggleFavorite}
            favorites={favorites}
          />
          <FavoritesPage
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        </main>
      </div>
    </>
  );
}

export default App;
