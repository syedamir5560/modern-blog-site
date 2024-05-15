import axios from "axios";



const getPost=axios.get(`https://6643cb3f6c6a6565870858dc.mockapi.io/blog`);
const getPostById=(id)=>axios.get(`https://6643cb3f6c6a6565870858dc.mockapi.io/blog/${id}`);

export default{
    getPost,
    getPostById
}
