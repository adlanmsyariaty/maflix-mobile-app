const express = require("express");
const app = express();
const port = 3000;
const axios = require("axios");
const Redis = require("ioredis");
const redis = new Redis();

const usersBaseUrl = "http://localhost:3001";
const moviesBaseUrl = "http://localhost:3002";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/movies", async (req, res) => {
  try {
    const moviesCache = await redis.get("movies");
    if (moviesCache) {
      res.status(200).json(JSON.parse(moviesCache));
    } else {
      const { data: movie } = await axios.get(`${moviesBaseUrl}/movies?search`);
      await redis.set("movies", JSON.stringify(movie));
      res.status(200).json(movie);
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

app.get("/movies/:id", async (req, res) => {
  try {
    const id = +req.params.id;
    const movieDetailCache = await redis.get("movieDetail");

    if (!movieDetailCache || JSON.parse(movieDetailCache).id !== id) {
      const { data: movie } = await axios.get(`${moviesBaseUrl}/movies/${id}`);
      const { data: user } = await axios.get(
        `${usersBaseUrl}/users/${movie.UserMongoId}`
      );
      movie.User = user;

      await redis.set("movieDetail", JSON.stringify(movie));
      res.status(200).json(movie);
    } else if (JSON.parse(movieDetailCache).id === id) {
      res.status(200).json(JSON.parse(movieDetailCache));
    }

  } catch (error) {
    if (error.response.data.message === "Movie not found") {
      res.status(404).json({
        message: error.response.data.message,
      });
    } else if (error.response.data.message === "USER_NOT_FOUND") {
      res.status(404).json({
        message: error.response.data.message,
      });
    } else {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }
});

app.delete("/movies/:id", async (req, res) => {
  try {
    const id = +req.params.id;

    await axios.get(`${moviesBaseUrl}/movies/${id}`);

    let moviesCache = await redis.get("movies");
    const movieDetailCache = await redis.get("movieDetail");

    let newCache = JSON.parse(moviesCache);

    let deletedDataIndex = JSON.parse(moviesCache).findIndex(
      (movie) => movie.id === id
    );

    await axios.delete(`${moviesBaseUrl}/movies/${id}`);

    if (deletedDataIndex !== -1) {
      newCache.splice(deletedDataIndex, 1);
      await redis.set("movies", JSON.stringify(newCache));

      if (movieDetailCache && JSON.parse(movieDetailCache).id === id) {
        await redis.del("movieDetail");
      }

    }

    res.status(200).json({
      message: "Data has been successfully",
    });
  } catch (error) {
    if (error.response.data.message === "Movie not found") {
      res.status(404).json({
        message: error.response.data.message,
      });
    } else {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }
});

app.post("/movies", async (req, res) => {
  try {
    const {
      title,
      synopsis,
      trailerUrl,
      imgUrl,
      rating,
      genres,
      casts,
      UserMongoId,
    } = req.body;

    const { data: newData } = await axios.post(`${moviesBaseUrl}/movies`, {
      title,
      synopsis,
      trailerUrl,
      imgUrl,
      rating: +rating,
      authorId: 1,
      UserMongoId,
      genres,
      casts,
    });

    const { data: newMovie } = await axios.get(`${moviesBaseUrl}/movies/${newData.id}`);

    delete newMovie.Casts

    let moviesCache = await redis.get("movies");
    let newMoviesCache = JSON.parse(moviesCache)
    newMoviesCache.push(newMovie)
    await redis.set("movies", JSON.stringify(newMoviesCache))

    res.status(201).json(newMovie);
  } catch (error) {
    console.log(error);
    if (error.response.status === 400) {
      res.status(400).json({
        message: error.response.data.message,
      });
    } else {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }
});

app.listen(port, () => {
  console.log("server connected for user on ", port);
});
