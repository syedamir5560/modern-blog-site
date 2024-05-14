import axios from "axios";

const API = `https://66433b303c01a059ea220c27.mockapi.io/blog`

const getBlog = axios.get(API)

export default getBlog
