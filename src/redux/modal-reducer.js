import defaultImages from "../images/not_found.gif";
const SET_MODAL = 'SET-MODAL';

const initState = {
    isShow: false,
    url: defaultImages,
    hdurl: defaultImages,
    title: 'Данных нет',
    date: 'Возможно дата еще не наступила или нет сохраненных данных',
    explanation: ''
};

const modalReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_MODAL:
            return !state.isShow
                ? {
                    ...state,
                    isShow: !state.isShow,
                    url: action.newImage.url,
                    hdurl: action.newImage.hdurl,
                    title: action.newImage.title,
                    date: action.newImage.date,
                    explanation: action.newImage.explanation
                }
                : {
                    ...state,
                    isShow: !state.isShow
                };
        default:
            return state;
    }
};

const setModalImageAC = (newImage) => ({type: SET_MODAL, newImage});

export const setModalImage = (newImage) => (dispatch) => {
    dispatch(setModalImageAC(newImage));
};

export default modalReducer;