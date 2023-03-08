import './App.css';
import Card from './components/Card/Card';

function App() {
  const movies = [
    {
      title: 'Bright',
      subtitle: '2017, David Ayer',
      duration: '117',
      genre: 'Action, Drama',
      poster: 'https://upload.wikimedia.org/wikipedia/en/a/a7/BrightPoster.jpeg',
      img_link: 'https://occ-0-3933-2705.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABffPAIPjEhT-aDZ2CPJqSvpx5OnrhKOXDYgwT2PIskGUmpJtnTgSHsWnJv84EVD_6XUt0hcgOVdyF2REM8Mvcia5Dx7rLq1QprqQ.jpg?r=b7e'
    },
    {
      title: 'Tom Raider',
      subtitle: '2018, Roar Uthang',
      duration: '125',
      genre: 'Action, Fantasy',
      poster: 'https://m.media-amazon.com/images/M/MV5BOTY4NDcyZGQtYmVlNy00ODgwLTljYTMtYzQ2OTE3NDhjODMwXkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_.jpg',
      img_link: 'https://pad.mymovies.it/filmclub/2016/11/257/coverlg_home.jpg'
    }
  ]
  return (
    <div className="App">
      {movies.map((movie) => {
         return <Card movie={movie}/>
      })}
    </div>
  );
}

export default App;
