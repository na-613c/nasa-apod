import React, {useEffect} from 'react';
import CalendarContainer from './components/Calendar/CalendarContainer';
import GridPictures from './components/GridPictures/GridPictures';
import ModalImageContainer from './components/ModalImage/ModalImageContainer';
import Content from './components/Content/Content';
import 'react-calendar/dist/Calendar.css';
import './App.css';
import {compose} from "redux";
import {connect} from "react-redux";
import {setImage} from "./redux/image-reducer";
import {setModalImage, setModalImages} from "./redux/modal-reducer";
import {setImagesArray} from "./redux/month-image-reducer";
import {formatDate} from "./api/api";


const App = (props) => {

    const {
        image,
        setImage,
        modalImages,
        setModalImage,
        setModalImages,
        monthImages,
        setImagesArray,
        isLoadMonthImages,
    } = props;

    const getDate = () => {
        return !localStorage.getItem('date')
            ? new Date()
            : new Date(localStorage.getItem('date'));
    };

    useEffect(() => {
        setImage(getDate());
        setImagesArray(getDate());
    }, []);

    let onChange = (value) => {
        const localDate = formatDate(value);
        const currentDate = formatDate(new Date());

        localDate === currentDate
            ? localStorage.removeItem('date')
            : localStorage.setItem('date', value);

        setImage(value);
    };

    const onActiveStartDateChange = ({activeStartDate, value, view}) => {
        setImagesArray(activeStartDate);
    };

    return (
        <div>
            <div className='App-wrapper'>
                <CalendarContainer
                    onChange={onChange}
                    onActiveStartDateChange={onActiveStartDateChange}
                    value={getDate()}/>
                <Content img={image} setModal={setModalImage}/>
                <GridPictures imgArray={monthImages} setModal={setModalImages} isLoad={isLoadMonthImages}/>
            </div>
            <ModalImageContainer images={modalImages} setModal={setModalImage}/>
        </div>
    )
};

const mapStateToProps = (state) => ({
    image: state.imageReducer,
    modalImages: state.modalReducer,
    monthImages: state.monthImageReducer.imagesArray,
    isLoadMonthImages: state.monthImageReducer.isLoad
});

const AppContainer = compose(
    connect(mapStateToProps, {
        setImage,
        setModalImage,
        setModalImages,
        setImagesArray,
    })
)(App);

export default AppContainer;
