import axios from "axios";

// export async function authenticate(email) {
//     const reqUrl = `https://chatbox-backend-qeni.onrender.com/discover/authenticate`;
//     const result = await axios.post(reqUrl,email);
//     return result.data;
// }

export async function checkUserExist(email) {
    const reqUrl = `https://dashboard-backend-5w38.onrender.com/discover/doesUserExist/${email}`;
    const result = await axios.get(reqUrl);
    return result.data;
}

export async function getUser(email) {
    const reqUrl = `https://dashboard-backend-5w38.onrender.com/discover/user/${email}`;
    const result = await axios.get(reqUrl);
    return result.data;
}

export async function registerUser(userData) {
    const reqUrl = `https://dashboard-backend-5w38.onrender.com/discover/register`;
    const result = await axios.post(reqUrl,userData);
    return result.data;
}

export async function userLogin(email, password) {
    const reqUrl = `https://dashboard-backend-5w38.onrender.com/discover/login`;
    const result = await axios.post(reqUrl,{email,password});
    return result.data;
}

export async function otpMail({email, name=""}) {
    const reqUrl = `https://dashboard-backend-5w38.onrender.com/discover/registerMail`;
    const result = await axios.post(reqUrl,{email,name});
    return result.data;
}

export async function verifyOTP(code) {
    const reqUrl = `https://dashboard-backend-5w38.onrender.com/discover/verifyOTP?code=${code}`;
    const result = await axios.get(reqUrl);
    return result.data;
}

export async function getDashboardList(filterType) {
    const reqUrl = `https://dashboard-backend-5w38.onrender.com/discover/getData?filterType=${filterType}`;
    const result = await axios.get(reqUrl);
    return result.data;
}

