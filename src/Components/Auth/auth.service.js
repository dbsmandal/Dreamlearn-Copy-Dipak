import axios from "axios";

const API_URL = "https://dreamlearn-capstone.herokuapp.com/";

const signup = async (name, username, email, password, role) => {
    await axios.post(`${API_URL}api/auth/signup`, {
        name,
        username,
        email,
        password,
        role
    })
    // .then((response) => {
    //     console.log("user successfully signed in");
    //     //localStorage.setItem("user", JSON.stringify(response.data));
    // })
};

const signin = async (username, password) => {
    await axios
        .post(`${API_URL}api/auth/signin`, {
            username,
            password,
        }).then((response) => {
            if (response.data) {
                localStorage.setItem("user", JSON.stringify(response.data));

            }
            return response.data;
        });
}

const logout = () => {
    // localStorage.removeItem("user");
    localStorage.clear();
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
    signup,
    signin,
    logout,
    getCurrentUser
};

export default AuthService;
