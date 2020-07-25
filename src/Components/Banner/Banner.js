import React, { useEffect, useState } from "react";
import axios from "../../API/axios";
import requests from "../../API/request";
import "./Banner.css";
const baseUrl = "https://image.tmdb.org/t/p/original/";
const Banner = () => {
  const [movie, setMovie] = useState([]);
  const fetchData = async () => {
    const request = await axios.get(requests.fetchNetflixOriginals);
    setMovie(
      request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
      ]
    );
  };
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            ${baseUrl}${movie?.backdrop_path}
        )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_title}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
};

export default Banner;
