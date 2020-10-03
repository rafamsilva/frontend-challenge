import React, { Fragment, useState } from "react";
import axios from "axios";
import IconSearch from "../../../assets/icons/icon-magnifier-grey.svg";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function Home() {
  const [loading, setLoading] = useState(false);
  const [filmes, setFilmes] = useState([]);

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

        setFilmes([]);
      }
    }, 500);
  };

  return (
    <form className="container">
      <label>
        <img src={IconSearch} />
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
                  <Fragment key={i}>
                    <div>
                      <p>{item.original_title}</p>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      />
                    </div>
                  </Fragment>
                )}
              </Fragment>
            );
          })}
      </div>
    </form>
  );
}

export default Home;
