import React, { useState } from "react";
import { Link } from "react-router-dom";
import Mymovie from "../../components/mymovie/Mymovie";
import data from "../../data.json";

import "./home.css";

function Home() {
  const [state, setstate] = useState(data);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    search(searchValue);
    resetInputField();
  };
  // console.log("hhhhhhhh", state.movies);
  // console.log("hhhhhhhh", data);

  function search() {
    const results = data.filter((item) => {
      return item.title.toLowerCase().includes(searchValue.toLowerCase());
      // console.log("gqshcbfjcbsquhgvidsvsdjiwjn", item);
    });
    setstate(results);
  }
  return (
    <div>
      <div className="background"></div>

      <div className="logo-name">
        <img
          className="logo"
          src="https://img.hdtoday.tv/xxrz/400x400/100/c4/93/c49337aa9c92d6fbf56b6b5830c6849c/c49337aa9c92d6fbf56b6b5830c6849c.png"
          alt=""
        />
        <h1 className="title">HDMovies</h1>
      </div>
      <div className="movie-middle">
        <label className="form-movies">
          <input
            className="input-movies"
            value={searchValue}
            onChange={handleSearchInputChanges}
            type="search"
            placeholder="Enter Your Film..."
          />
          <button
            className="btn-movies"
            type="submit"
            onClick={callSearchFunction}
          >
            Search
          </button>
        </label>
      </div>
      <div>
        <div className="Sm">
          <a href="https://www.facebook.com/" target="_blank">
            <div className="fb-btn">
              <img
                className="img-sm"
                alt="facebook sharing button"
                src="https://platform-cdn.sharethis.com/img/facebook.svg"
              />
              <span className="st-label">7.8k</span>
            </div>
          </a>
          <a href="https://twitter.com/" target="_blank">
            <div className="tw-btn">
              <img
                className="img-sm"
                alt="twitter sharing button"
                src="https://platform-cdn.sharethis.com/img/twitter.svg"
              />
              <span className="st-label">18.2k</span>
            </div>
          </a>
          <a href="https://www.whatsapp.com/" target="_blank">
            {" "}
            <div className="WT-btn">
              <img
                className="img-sm"
                alt="whatsapp sharing button"
                src="https://platform-cdn.sharethis.com/img/whatsapp.svg"
              />
              <span className="st-label">20.3k</span>
            </div>
          </a>
          <a href="https://www.messenger.com/" target="_blank">
            <div className="messenger-btn">
              <img
                className="img-sm"
                alt="messenger sharing button"
                src="https://platform-cdn.sharethis.com/img/messenger.svg"
              />
              <span className="st-label">18.5k</span>
            </div>
          </a>
          <a href="https://www.reddit.com/" target="_blank">
            <div className="reddit-btn" data-network="reddit">
              <img
                className="img-sm"
                alt="reddit sharing button"
                src="https://platform-cdn.sharethis.com/img/reddit.svg"
              />
              <span className="st-label">3.9k</span>
            </div>
          </a>
          <a href="https://telegram.org/" target="_blank">
            <div className="tel-btn">
              <img
                alt="telegram sharing button"
                src="https://platform-cdn.sharethis.com/img/telegram.svg"
              />
              <span className="st-label">2.2k</span>
            </div>
          </a>
        </div>
      </div>

      <Link to="/register" className="nav-link">
        <button className="home-btn"> Go To Our Movies </button>
      </Link>

      <div>
        <div className="popular">
          <h2>Popular Movies</h2>
          <button className="filter-btn">Filter</button>
        </div>

        <div className="my-films">
          {state.movies.map((item) => {
            return <Mymovie key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
