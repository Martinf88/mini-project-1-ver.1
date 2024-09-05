import { fetchFilms } from "../utils/api";
import { Film } from "../types/Film";

interface SearchFieldProps {
  setSearchterm: (term: string) => void;
  searchterm: string;
  setFilms: (films: Film[]) => void;
}

const SearchField: React.FC<SearchFieldProps> = ({
  setSearchterm,
  searchterm,
  setFilms,
}) => {
  const handleGetMovies = async () => {
    try {
      const data = await fetchFilms();

      const sortedFilms = data.sort((a, b) => a.release_date - b.release_date);

      setFilms(sortedFilms);
    } catch (error) {
      console.error("Failed to fetch films: ", error);
    }
  };

  return (
    <nav>
      <button onClick={handleGetMovies}>Ladda in filmer</button>
      <button>Mina Favoriter</button>
      <input
        type="text"
        placeholder="Sök..."
        value={searchterm}
        onChange={(e) => setSearchterm(e.target.value)}
      />
    </nav>
  );
};

export default SearchField;
