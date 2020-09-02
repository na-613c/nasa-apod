import defaultImages from "../images/not_found.gif";

const api_key = 'SaoJfZRzRAH13d01ZBCtcITtjs6ydPcNhxjK4O7c';
const baseURL = 'https://api.nasa.gov/planetary/apod';

const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};

export const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
};

export const getPicture = async (date, hd = false) => {
    const url = `${baseURL}?date=${formatDate(date)}&api_key=${api_key}&hd=${hd}`;
    const response = await fetch(url).then(response => response.json());
    return parseResponse(response);
};

const parseResponse = (response) => {
    const url = !response.url ? defaultImages : response.url;
    return {
        url: !response.url ? defaultImages : url,
        hdurl: !response.hdurl ? url : response.hdurl,
        title: !response.title ? 'Данных нет' : response.title,
        media_type: !response.media_type ? 'image' : response.media_type,
        date: !response.date
            ? 'Возможно дата еще не наступила или нет сохраненных данных'
            : new Date(response.date).toLocaleString("en-US", options),
        explanation: response.explanation
    };
};