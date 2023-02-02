import axios from '../../utils/axiosCustomize';

const postCreateUser = (email, password, username, role, image) => {
    const dataSubmit = new FormData();
    dataSubmit.append("email", email)
    dataSubmit.append("password", password)
    dataSubmit.append("username", username)
    dataSubmit.append("role", role)
    dataSubmit.append("userImage", image)
    return axios.post("/api/v1/participant", dataSubmit)
}

const getAllUser = () => {
    return axios.get("/api/v1/participant/all")
}

const putUpdateUser = (id, username, role, image) => {
    const dataUpdate = new FormData();
    dataUpdate.append("id", id)
    dataUpdate.append("username", username)
    dataUpdate.append("role", role)
    dataUpdate.append("userImage", image)
    return axios.put("/api/v1/participant", dataUpdate)
}

export { postCreateUser, getAllUser, putUpdateUser } 