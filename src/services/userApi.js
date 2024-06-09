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
    },
    register(payload){
        return apiClient
            .post('/customers/register', { ...payload })
            .then(response => response.data)
            .catch(error => {
                console.error(error)
                return error
            })
    },
    getMe(){    
        return apiClient
        .get('/users/me', { 
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
         }})
        .then(response => response.data)
        .catch(error => {
            console.error(error)
            return error
        })  
    }
}

export default userApi