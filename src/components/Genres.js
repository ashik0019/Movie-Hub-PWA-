import { Chip } from "@material-ui/core";
import axios from "axios";
import { useEffect } from "react";

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {
  //genres add function
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  //genres remove function
  const handleRemove = (genre) =>{
    setSelectedGenres (
        selectedGenres.filter((selected) => selected.id !== genre.id )
    );
    setGenres([...genres, genre])
    setPage(1);
  }

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    setGenres(data.genres);
  };

  console.log(genres);

  useEffect(() => {
    fetchGenres();
    return () => {
      setGenres({});
    };
    //eslint-disable-next-line
  }, []);

  return (
    <div style={{ marginTop: 1, marginBottom: 6 }}>
      {selectedGenres &&
        selectedGenres.map((genre) => (
          <Chip
            key={genre.id}
            label={genre.name}
            style={{ margin: 2 }}
            clickable
            onDelete={() => handleRemove(genre)}
            size="small"
            color="primary"
          />
        ))}
      {genres &&
        genres.map((genre) => (
          <Chip
            key={genre.id}
            label={genre.name}
            style={{ margin: 2 }}
            clickable
            onClick={() => handleAdd(genre)}
            size="small"
          />
        ))}
    </div>
  );
};

export default Genres;
