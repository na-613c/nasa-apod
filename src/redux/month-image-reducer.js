import {getPicture} from "../api/api";

const SET_ARRAY = 'SET-ARRAY';
const START_LOADING = 'START-LOADING';
let queryCounter = 0;

const initState = {
    query: 0,
    isLoad: false,
    imagesArray: []
};

const monthImageReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_ARRAY:
            return (state.query === action.query) ? {
                ...state,
                query: action.query,
                imagesArray: action.imagesArray,
                isLoad: false
            } : {
                ...state,
                isLoad: true
            };
        case START_LOADING:
            return {
                ...state,
                query: action.query > state.query ? action.query : state.query,
                isLoad: true
            };
        default:
            return state;
    }
};

const setImagesArrayAC = (imagesArray, query) => ({type: SET_ARRAY, imagesArray, query});
const startLoadingAC = (query) => ({type: START_LOADING, query});

export const setImagesArray = (date) => async (dispatch) => {
    const currentQueryCounter = ++queryCounter;
    dispatch(startLoadingAC(currentQueryCounter));

    let imagesArray = [];
    const daysInMonth = 32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate();

    for (let i = 1; i <= daysInMonth; i++) {
        let currentDate = new Date(date.getFullYear(), date.getMonth(), i);
        imagesArray.push(await getPicture(currentDate));
    }

    dispatch(setImagesArrayAC(imagesArray.filter(i => i.explanation), currentQueryCounter));
};


export default monthImageReducer;