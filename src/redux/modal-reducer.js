import defaultImages from "../images/not_found.gif";

const SET_MODAL_IMAGE = 'SET-MODAL-IMAGE';
const MOVE_ARRAY = 'MOVE-ARRAY';

const initImageState = {
    url: defaultImages,
    hdurl: defaultImages,
    title: 'Данных нет',
    date: 'Возможно дата еще не наступила или нет сохраненных данных',
    explanation: ''
};

const initState = {
    isShow: false,
    viewedImages: [initImageState],
    key: 0,
    isShowPrev: false,
    isShowNext: false,
};


const modalReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_MODAL_IMAGE:
            return !state.isShow
                ? {
                    ...state,
                    isShow: !state.isShow,
                    viewedImages: action.viewedImages,
                    key: action.key,
                    isShowPrev: action.isShowPrev,
                    isShowNext: action.isShowNext,
                }
                : {
                    ...state,
                    isShow: !state.isShow
                };
        case MOVE_ARRAY:
            return {
                ...state,
                key: action.key,
                isShowPrev: action.isShowPrev,
                isShowNext: action.isShowNext
            };
        default:
            return state;
    }
};

const showHideFlow = (array = [], id) => {
    const size = array.length;
    const resultObject = (isShowPrev, isShowNext) => ({isShowPrev, isShowNext});

    if (size === 1) return resultObject(false, false);
    if (id + 1 === size) return resultObject(true, false);
    if (id === 0) return resultObject(false, true);
    return resultObject(true, true);
};

const setModalImageAC = (viewedImages, isShowPrev, isShowNext, key = 0) => ({
    type: SET_MODAL_IMAGE,
    viewedImages,
    key,
    isShowPrev,
    isShowNext
});

const moveImageAC = (key, isShowPrev, isShowNext) => ({type: MOVE_ARRAY, key, isShowPrev, isShowNext});

export const setModalImages = (newImagesArray, key) => (dispatch) => {
    const buttonShow = showHideFlow(newImagesArray, key);
    dispatch(setModalImageAC(newImagesArray, buttonShow.isShowPrev, buttonShow.isShowNext, key));
};

export const setModalImage = (newImage) => (dispatch) => {
    const buttonShow = showHideFlow(newImage, 0);
    dispatch(setModalImageAC(newImage, buttonShow.isShowPrev, buttonShow.isShowNext));
};

export const movePrev = (key,images) => (dispatch) => {
    key--;
    const buttonShow = showHideFlow(images, key);
    dispatch(moveImageAC(key, buttonShow.isShowPrev, buttonShow.isShowNext));
};

export const moveNext = (key,images) => (dispatch) => {
    key++;
    const buttonShow = showHideFlow(images, key);
    dispatch(moveImageAC(key, buttonShow.isShowPrev, buttonShow.isShowNext));
};

export default modalReducer;