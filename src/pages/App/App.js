import React from 'react';
import './App.css';
import Row from '../../components/Row';
import requests from '../../requests';
import Nav from '../../components/Nav';
import Banner from '../../components/Banner';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row 
      title="NETFLIX ORIGINALS" 
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow
      />
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
