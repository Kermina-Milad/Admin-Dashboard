import { api } from "./base";

export const postLogin = async({ locale, values }) => {
    // @ts-ignore
    api.defaults.headers = { locale };
    const res = await api.post("/auth/login", {
        email: values.email,
        password: values.password,
    });
    return res.data;
};

export const authenticate = (data, next) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("jwt", JSON.stringify(data));
        next();
    }
};

export const logout = async(next) => {
    if (typeof window !== "undefined") {
        localStorage.removeItem("jwt");
        next();

        // const res = await api.post('/logout');
        // if(res.data) {
        //   next();
        // }

        // return fetch('${api}/api/logout', {
        // 	method: 'GET'
        // }).then(res => {
        // 	console.log('Logout', res);
        // }).catch(err => {
        // 	console.log(err);
        // });
    }
};

export const isAuthenticated = () => {
    if (typeof window == "undefined") {
        return false;
    }
    if (localStorage.getItem("jwt")) {
        return JSON.parse(localStorage.getItem("jwt"));
    } else {
        return false;
    }
};