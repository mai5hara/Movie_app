import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchPlot } from '../store/actions/movieActions';

const MovieDetails = ({movieDetail, id, fetchPlot}) => {
    
    console.log(movieDetail)
    console.log(id)
    console.log(movieDetail.Title)

    useEffect(() => {
        fetchPlot(id)
        console.log('loaded!')
    },[])

    // console.log(movieDetail)
    return (
        <div>
            <h2>{movieDetail.Title}</h2>
            <img 
                width="200"
                alt={`The movie title ${movieDetail.Title}`}
                src={movieDetail.Poster}
            />
            <p>{movieDetail.Director}</p>
            <p>{movieDetail.Actors}</p>
            <p>{movieDetail.Plot}</p>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {

    return {
        movieDetail: state.movie.movieDetail,
        id: ownProps.match.params.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPlot: (movieDetail) => dispatch(fetchPlot(movieDetail))
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
