export default function filter(state = '', action) {
    switch (action.type) {
        case 'FILTER_CATEGORY':
            return action.payload;
        default: return state;
    }

}