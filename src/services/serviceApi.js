import axios from "axios";
const token = process.env.REACT_APP_TOKEN;
const baseUrl = process.env.REACT_APP_BASE_URL;
const fetchDataKecematan = () => {
    const promise = new Promise((resolve, reject) => {
        axios.get(baseUrl + 'kecamatan/', {
            headers: {
                'Authorization': token,
            }
        }).then(
            (result) => {
                resolve(result.data);
            },
            (err) => {
                reject(err);
            }
        )
    })
    return promise
}

const fetchDataKelurahan = () => {
    const promise = new Promise((resolve, reject) => {
        axios.get(baseUrl + 'kelurahan/', {
            headers: {
                'Authorization': token,
            }
        }).then(
            (result) => {
                resolve(result.data);
            },
            (err) => {
                reject(err);
            }
        )
    })
    return promise
}

const serviceApi = {
    fetchDataKecematan,
    fetchDataKelurahan
}


export default serviceApi;