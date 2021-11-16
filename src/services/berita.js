import axios from 'axios'

export const getBeritaS = () => axios.get("https://newsapi.org/v2/everything?q=tesla&from=2021-10-16&sortBy=publishedAt&apiKey=95748fa6a3da4b2397c9e30a28ce58c9")