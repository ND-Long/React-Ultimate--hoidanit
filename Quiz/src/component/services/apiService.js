import axios from '../../utils/axiosCustomize';

const postCreateUser = (email, password, username, role, image) => {
    const datSubmit = new FormData();
    datSubmit.append("email", email)
    datSubmit.append("password", password)
    datSubmit.append("username", username)
    datSubmit.append("role", role)
    datSubmit.append("userImage", image)
    return axios.post("/api/v1/participant", datSubmit)
}

const getAllUser = () => {
    return axios.get("/api/v1/participant/all")
}

export { postCreateUser, getAllUser } 