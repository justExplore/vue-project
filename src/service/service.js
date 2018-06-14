import axios from "axios";
import Utils from "../lib/Utils";

axios.defaults.withCredentials = true;

const request = (method, url, params) => {
    if (method == "get") {
        return axios({
            method: method,
            url: `${url}?${Utils.toUrlParam(params)}`,
            timeout: 10000
        }).then(response => {
            let data = response.data;
            return data;
        })
    }
};

export const requestUserInfo = (params) => {
    return request("get", "/api/users", params);
};
