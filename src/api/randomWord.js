import axios from "axios";

const getRandomWord = axios.create({
    baseURL:'http://api.ddwoo.top/api/yan.php'
})

const getWord = ()=>getRandomWord({
    method:'GET',
    url:''
})
export default getWord


