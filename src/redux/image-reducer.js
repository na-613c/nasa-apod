import {getPicture} from "../api/api";
import defaultImages from "../images/not_found.gif";

const SET_IMAGE = 'SET-IMAGE';
const SET_LOADING = 'SET-LOADING';

const initImgState = {
    isLoad: false,
    url: defaultImages,
    hdurl: defaultImages,
    title: 'Данных нет',
    date: 'Возможно дата еще не наступила или нет сохраненных данных',
    explanation: ''
};

const imageReducer = (state = initImgState, action) => {
    switch (action.type) {
        case SET_IMAGE:
            return {
                ...state,
                url: action.newImage.url,
                hdurl: action.newImage.hdurl,
                title: action.newImage.title,
                date: action.newImage.date,
                explanation: action.newImage.explanation,
                isLoad: !state.isLoad
            };
        case SET_LOADING:
            return {
                ...state,
                isLoad: !state.isLoad
            };
        default:
            return state;
    }
};

const setImageAC = (newImage) => ({type: SET_IMAGE, newImage});
const setLoadingAC = () => ({type: SET_LOADING});


export const setImage = (date) => async (dispatch) => {
    dispatch(setLoadingAC());
    const response = await getPicture(date);
    dispatch(setImageAC(response));
};

export default imageReducer;