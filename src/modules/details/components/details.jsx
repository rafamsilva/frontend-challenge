import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import IconReturn from "../../../assets/icons/icon-arrow-grey.png";
import LogoIMDB from "../../../assets/logos/logo-imdb.svg";
import IconHeart from "../../../assets/icons/icon-heart-grey.svg";
import IconHeartFull from "../../../assets/icons/icon-heart-full.svg";

function Details() {
  const { id } = useParams();
  const [filme, setFilme] = useState(null);
  const [favorite, setFavorite] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=d9f5d960ce56448a494c27ce4acbd779`
      );
      setFilme(response.data);
    })();
  }, [id]);

  return (
    <form className="container">
      <div className="back-route">
        <Link to={"/"}>
          <img src={IconReturn} alt="return"></img>
        </Link>
      </div>
      {filme && (
        <div className="content-details">
          <div className="details">
            <h1>{filme.original_title}</h1>
            <div className="buttons-details">
              <div className="imdb">
                <div className="icon-imdb">
                  <img src={LogoIMDB} alt="imdb" />
                </div>

                <div className="imdb-average">{filme.vote_average}</div>
              </div>
              <button
                type="button"
                style={{
                  backgroundColor: !favorite ? "#0a1014" : "#FF4040",
                  border: !favorite ? "1px solid #7a8c99" : "1px solid #FF4040",
                }}
                onClick={() => {
                  setFavorite(!favorite);
                }}
              >
                <div className="heart">
                  <img
                    src={!favorite ? IconHeart : IconHeartFull}
                    alt="heart"
                  />
                </div>
                <div
                  className="text-button"
                  style={{
                    color: !favorite ? "#7a8c99" : "#fbfcfd",
                  }}
                >
                  Adicionar para os favoritos
                </div>
              </button>
            </div>
            <div className="overview">
              <label>Overview</label>
              <p>{filme.overview}</p>
            </div>
            <div className="row-genero-empresa">
              <div className="genero">
                <label>Gênero</label>
                {filme.genres.map((item) => (
                  <p>{item.name}</p>
                ))}
              </div>
              {filme.production_companies.length > 0 && (
                <div className="empresas">
                  <label>Empresas</label>
                  {filme.production_companies.map((item) => (
                    <p>{item.name}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
          <img
            className="movie-img"
            src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
            alt="filme"
          />
        </div>
      )}
    </form>
  );
}

export default Details;
