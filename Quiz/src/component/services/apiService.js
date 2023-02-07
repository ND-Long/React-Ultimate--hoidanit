import axios from '../../utils/axiosCustomize';

const postCreateUser = (email, password, username, role, image) => {
    const dataSubmit = new FormData();
    dataSubmit.append("email", email)
    dataSubmit.append("password", password)
    dataSubmit.append("username", username)
    dataSubmit.append("role", role)
    dataSubmit.append("userImage", image)
    return axios.post("/api/v1/participant", dataSubmit);
}
// const postCreateUser = (email, password, username, role, image) => {
//     return axios.post("/api/v1/participant", { email, password, username, role, image });
// }

const getAllUser = () => {
    return axios.get("/api/v1/participant/all")
}
// const getAllUser = () => {
//     return axios.get("/api/v1/participant")
// }



const putUpdateUser = (id, username, role, image) => {
    const dataUpdate = new FormData();
    dataUpdate.append("id", id)
    dataUpdate.append("username", username)
    dataUpdate.append("role", role)
    dataUpdate.append("userImage", image)
    return axios.put("/api/v1/participant", dataUpdate);
}
// const putUpdateUser = (id, username, role, image) => {
//     return axios.put(`/api/v1/participant/${id}`, { username, role, image });
// }

const deleteUser = (id) => {
    const dataDelete = new FormData();
    dataDelete.append("id", id)
    console.log(dataDelete)
    return axios.delete("/api/v1/participant", { data: dataDelete });
}
// const deleteUser = (id) => {
//     return axios.delete(`api/v1/participant/${id}`);
// }

const paginationUser = (page, limit) => {
    const dataPaginationUser = new FormData();
    return axios.get(`/api/v1/participant?page=${page}&limit=${limit}`)
}

const postLogin = (email, password, delay) => {
    return axios.post(`/api/v1/login`, { email, password, delay: 1000 })
}
// const postSignup = (email, username, password) => {
//     return axios.post(`/api/v1/register`, { email, username, password })
// }
const postSignup = (email, username, password, delay) => {
    return axios.post(`/api/v1/participant`, { email, username, password, delay: 1000 })
}

export { postCreateUser, getAllUser, putUpdateUser, deleteUser, paginationUser, postLogin, postSignup } 