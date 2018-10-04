export default function dataMovie(state = [], action) {
    switch (action.type) {
        case 'DATA_MOVIES':
            return action.payload;
        case 'DELETE_MOVIES':
            let newMovie = [...state];
            newMovie.splice(action.type, 1);
            return newMovie;
        default: return state;
    }
}