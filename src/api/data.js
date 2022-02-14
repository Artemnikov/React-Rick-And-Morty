import axios from "axios";

export const getData = async (page) => {
    const data = await axios.get(page)
    try {
        return data
    }   catch (err) {
        return({message: err})
    }
}

export const getTest = async () => {
    const data = await axios.get('/resource') .then(res => console.log(res.data))
}