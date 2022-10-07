import axios from 'axios';
const errorF =respon=>respon.status===200?respon.data:Promise.reject(respon)
const instos = axios.create({
    baseURL:'https://picsum.photos/',
})
// https://picsum.photos/v2/list?page=2&limit=100
  const  api_photos = {
    photoLists : (page,limit)=> instos.get(`v2/list?page=${page}&limit=${limit}`)
    .then(errorF),
    photoItem : (id,width,height)=> instos.get(`/id/${id}/${width}/${height}`)
    .then(errorF),
   
}


export  default api_photos