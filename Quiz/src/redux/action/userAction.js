export const FETCH_USER_ACCESS_LOGIN = "FETCH_USER_ACCESS_LOGIN"

export const doLogin = (data) => {
    return {
        type: FETCH_USER_ACCESS_LOGIN,
        payload: data
    }
}