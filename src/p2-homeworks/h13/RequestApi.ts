// https://neko-cafe-back.herokuapp.com/auth/test, body: {success: true},
import axios from 'axios';

export const sendData = async (success: boolean): Promise<string> => {
    return await axios({
        method: 'post',
        url: 'https://neko-cafe-back.herokuapp.com/auth/test',
        data: {
            success
        }
    })
        .then((response: any) => response.data.errorText)
        .catch((error: any) => error.message)
}

