import apiClient from './axios'



const bookingsApi = {
    getBookings(){
        return apiClient
            .get('/bookings', { 
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

export default bookingsApi