import React from "react";
import Row from "./Components/Row";
import requests from "./API/request";
import './App.css'
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Navbar/>
        <Banner/>  
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} /> 
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} /> 
      </div>
    );
  }
}

export default App;
