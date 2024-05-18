import apiClient from './axios'

const bookingsApi = {
    getBookings(params){
        return apiClient
            .get('/bookings', { params })
            .then(response => response.data)
            .catch(error => {
                console.error(error)
                return error
            })
    }    
}

export default bookingsApi