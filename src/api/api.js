import defaultImages from "../images/not_found.gif";

const api_key = 'SaoJfZRzRAH13d01ZBCtcITtjs6ydPcNhxjK4O7c';
const baseURL = 'https://api.nasa.gov/planetary/apod';


export const getPicture = async (date, hd = false) => {
    const url = `${baseURL}?date=${formatDate(date)}&api_key=${api_key}&hd=${hd}`;
    const response = await getQuery(url);
    return parseResponse(response);
};

export const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
};

const getQuery = (url) => {
    return fetch(url).then(response => response.json());
};

const parseResponse = (response) => {
    const url = !response.url ? defaultImages : response.url;
    return {
        url: !response.hdurl ? defaultImages : url,
        hdurl: !response.hdurl ? url : response.hdurl,
        title: !response.title ? 'Данных нет' : response.title,
        date: !response.date ? 'Возможно дата еще не наступила или нет сохраненных данных' : response.date,
        explanation: response.explanation
    };
};