import React from 'react';
import './App.css';
import Row from '../../components/Row';
import request from '../../requests'
import requests from '../../requests';


function App() {
  return (
    <div className="App">
      <h1> Hello Colin</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending}/>
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated}/>
      <Row title="ACTION" fetchUrl={requests.fetchActionMovies}/>
      <Row title="COMEDY" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="HORROR" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="ROMANCE" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="DOCUMENTARY" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
