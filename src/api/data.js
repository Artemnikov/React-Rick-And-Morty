import axios from "axios";

export const getData = async (page) => {
    const data = await axios.get(page)
    try {
        return data
    }   catch (err) {
        return({message: err})
    }
}