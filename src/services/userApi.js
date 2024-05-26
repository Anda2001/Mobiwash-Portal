import apiClient from './axios'

const userApi = {
    login(data){
        return apiClient
            .post('/users/login', data)
            .then(response => response.data)
            .catch(error => {
                console.error(error)
                return error
            })
    }  
}

export default userApi