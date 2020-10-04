import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import axios from "axios";
import IconSearch from "../../../assets/icons/icon-magnifier-grey.svg";
import LogoEmpty from "../../../assets/illustrations/illustration-empty-state.png";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Home() {
  const [loading, setLoading] = useState(false);
  const [filmes, setFilmes] = useState(undefined);

  const onChange = async (event) => {
    const value = event.target.value;
    setLoading(true);

    setTimeout(async () => {
      const result = value.replace(" ", "+");
      if (result) {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=d9f5d960ce56448a494c27ce4acbd779&query=${result}`
        );

        setLoading(false);

        const { data } = response;
        const { results } = data;
        setFilmes(results);
      } else {
        setLoading(false);

        setFilmes(undefined);
      }
    }, 1000);
  };

  return (
    <form className="container">
      <label>
        <img src={IconSearch} alt="serch" />
        {loading && (
          <Loader
            type="ThreeDots"
            color="#0a1014"
            width=" 30px"
            height=" 20px"
          />
        )}
        <input type="text" onChange={onChange} placeholder="Search movies..." />
      </label>
      <div className="content-img">
        {filmes &&
          filmes.map((item, i) => {
            return (
              <Fragment key={i}>
                {item.poster_path && (
                  <div>
                    <Link to={`/details/${item.id}`}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                        alt="filmes"
                      />
                    </Link>
                  </div>
                )}
              </Fragment>
            );
          })}
      </div>
      {!filmes && (
        <div className="logo-empty">
          <img src={LogoEmpty} alt="empty" />
          <h1>Nenhum registro encontrado...</h1>
        </div>
      )}
    </form>
  );
}

export default Home;
