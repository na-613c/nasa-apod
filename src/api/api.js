const api_key = 'SaoJfZRzRAH13d01ZBCtcITtjs6ydPcNhxjK4O7c';
const baseURL = 'https://api.nasa.gov/planetary/apod';

export const getPicture = (date,hd = false) => {
    let url = `${baseURL}?date=${date}&api_key=${api_key}&hd=${hd}`;
    return fetch(url).then(response => response.json());
};
