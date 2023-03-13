import axios from "axios";

export const useUser = () => {


    const getUser = async ( token ) => {
        const res = await axios({
            headers: {
                Authorization: `Bearer ${token}`
            },
            method: 'GET',
            url: 'https://dry-castle-66151.herokuapp.com/api/v1/users/me',
        });
        return  res.data.data.doc
    }
   

    return { getUser }
}