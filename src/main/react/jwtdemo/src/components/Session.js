import axios from "axios";

export const tokenValid = () => {

    return !!localStorage.getItem("token");

};

export const logout = () => {
    localStorage.removeItem("token");
};

export const login = (name, password) => {
    return axios.post(`/api/authenticate?username=${name}&password=${password}`)
        .then(res => {
            localStorage.setItem("token", res.headers.authorization);
            return true;
        })
        .catch(() => {
            return false;
        })
}