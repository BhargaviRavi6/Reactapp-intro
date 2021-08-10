import * as React from 'react';
import './style.css';
class Movie extends React.Component{
render(){
    return  (
        <div className='movie-card'>
        <img src={this.props.banner}></img>
{this.props.name} {this.props.likes}{this.props.hero}</div>
    );

}

}


export default Movie;