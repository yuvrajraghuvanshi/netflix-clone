
import './App.css';
import Row from './components/Row';
import Banner from './components/Banner'
import requests from './requests';
import Nav from './components/Nav'
function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner/>
       <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
       isLargeRow/>
       <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
       <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
       <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
       <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
       <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
       <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies}/>
       <Row title="Documantaries" fetchUrl={requests.fetchDocumantaries}/>
    </div>
  );
}

export default App;


// 5b412c79dcda853a03084221bd66b723