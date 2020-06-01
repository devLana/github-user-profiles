import React from 'react';
import Layout from "./Layout";
import SearchBox from "./SearchBox";

const Home = () => {
  document.title = "Github Profile";

  return (
    <Layout>
      <div id="home--container">
        <h1>Search for a Github user</h1>
        <div className="search-box--container">
          <SearchBox />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
