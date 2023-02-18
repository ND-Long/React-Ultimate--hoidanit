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

const getAllUser = () => {
    return axios.get("/api/v1/participant/all")
}



const putUpdateUser = (id, username, role, image) => {
    const dataUpdate = new FormData();
    dataUpdate.append("id", id)
    dataUpdate.append("username", username)
    dataUpdate.append("role", role)
    dataUpdate.append("userImage", image)
    return axios.put("/api/v1/participant", dataUpdate);
}


const deleteUser = (id) => {
    const dataDelete = new FormData();
    dataDelete.append("id", id)
    return axios.delete("/api/v1/participant", { data: dataDelete });
}

const paginationUser = (page, limit) => {
    const dataPaginationUser = new FormData();
    return axios.get(`/api/v1/participant?page=${page}&limit=${limit}`)
}

const postLogin = (email, password, delay) => {
    return axios.post(`/api/v1/login`, { email, password, delay: 1000 })
}

const postSignup = (email, username, password, delay) => {
    return axios.post(`/api/v1/participant`, { email, username, password, delay: 1000 })
}

const getQuizByUser = () => {
    return axios.get("/api/v1/quiz-by-participant")
}

const getDataQuizById = (id) => {
    return axios.get(`/api/v1/questions-by-quiz?quizId=${id}`)
}

const postSubmitQuiz = (payload) => {
    return axios.post(`/api/v1/quiz-submit`, { ...payload })

}

const postNewQuiz = (description, name, difficulty, quizImage) => {
    const dataAddQuiz = new FormData();
    dataAddQuiz.append("description", description)
    dataAddQuiz.append("name", name)
    dataAddQuiz.append("difficulty", difficulty)
    dataAddQuiz.append("quizImage", quizImage)
    return axios.post(`/api/v1/quiz`, dataAddQuiz)
}

const getAllQuiz = () => {
    return axios.get(`/api/v1/quiz/all`)
}

const deleteQuiz = (id) => {
    return axios.delete(`/api/v1/quiz/${id}`)
}

const putUpdateQuiz = (id, description, name, difficulty, quizImage) => {
    const dataUpdateQuiz = new FormData();
    dataUpdateQuiz.append("id", id);
    dataUpdateQuiz.append("description", description);
    dataUpdateQuiz.append("name", name);
    dataUpdateQuiz.append("difficulty", difficulty);
    dataUpdateQuiz.append("quizImage", quizImage);
    return axios.put(`/api/v1/quiz`, dataUpdateQuiz)
}

export {
    postCreateUser, getAllUser, putUpdateUser,
    deleteUser, paginationUser, postLogin,
    postSignup, getQuizByUser, getDataQuizById,
    postSubmitQuiz, postNewQuiz, getAllQuiz,
    deleteQuiz, putUpdateQuiz
} 