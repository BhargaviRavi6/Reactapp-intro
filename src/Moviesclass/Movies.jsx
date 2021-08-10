import React from 'react';
import Movie from '../Movies/Movie.jsx'
import './style.css';

class Moviesclass extends React.Component{
    getMovie = (name,likes,hero,banner) => {
                return <Movie name={name} likes={likes} hero={hero} banner={banner}/>;
    };
    render(){


        return  (        
            <div className='Movie-section'>
               {this.getMovie(
"Maharashi",
'120.09k',
'MaheshBabu',
'https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Maharshi_poster.jpg/220px-Maharshi_poster.jpg'

               )
               }
               {this.getMovie(
                   'Avengers',
                   '123.7',
                   'hero',
                   'https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810'
               )
                   
               }
                {this.getMovie(
                   'jersey',
                   '153.7',
                   'Nani',
                   'https://m.media-amazon.com/images/M/MV5BYjc0MWFiYTMtNmYyOS00ODczLWEyMzItNzI4YjY0YjJjZGVjXkEyXkFqcGdeQXVyNzEwNjg3MjE@._V1_.jpg'
               )
                   
               }
            
         
            </div>
            
            );
          }
        }

export default Moviesclass;