import axios from "axios";


export async function getImg(){
    const {data} = await axios.get('/api/get')
    return data
}