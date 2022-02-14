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
    const data = await axios.get('https://1dt6vm4s7e.execute-api.eu-central-1.amazonaws.com/Prod/test') .then(res => console.log(res))
}