import { useState, useEffect, useCallback } from "react";
import API from '../API';

const useMovieFetch = movieId => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    //useCallback hook prevents endless loop 
    //and rerenders only when movieId changes
    const fetchMovie = useCallback(async () => {
        try {
            setLoading(true);
            setError(false);

            const movie = await API.fetchMovie(movieId);
            const credits = await API.fetchCredits(movieId);
           
            const directors = credits.crew.filter(
                member => member.job === 'Director'
            );
            setState({
                ...movie,
                actors: credits.cast,
                directors

            })
            setLoading(false);

        } catch (error) {
            setError(true);
        }
    },[movieId]);
    useEffect(() => {
        
        fetchMovie();
    }, [movieId,fetchMovie]);

    

    return {state, loading, error};
}
export default useMovieFetch;
