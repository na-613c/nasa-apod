import defaultImages from "../images/not_found.gif";

const SET_MODAL_IMAGE = 'SET-MODAL-IMAGE';

const initImageState = {
    url: defaultImages,
    hdurl: defaultImages,
    media_type: "image",
    title: 'Данных нет',
    date: 'Возможно дата еще не наступила или нет сохраненных данных',
    explanation: ''
};

const initState = {
    isShow: false,
    key: 0,
    viewedImages: [initImageState]
};


const modalReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_MODAL_IMAGE:
            return !state.isShow
                ? {
                    ...state,
                    isShow: !state.isShow,
                    key: action.key,
                    viewedImages: action.viewedImages,
                }
                : {
                    ...state,
                    isShow: !state.isShow
                };
        default:
            return state;
    }
};

const setModalImageAC = (viewedImages, key = 0) => ({
    type: SET_MODAL_IMAGE,
    viewedImages,
    key
});

export const setModalImages = (newImagesArray, key) => (dispatch) => {
    dispatch(setModalImageAC(newImagesArray, key));
};

export const setModalImage = (newImage) => (dispatch) => {
    dispatch(setModalImageAC(newImage));
};

export default modalReducer;