import * as axios from "axios";

const instance = axios.create({
        withCredentials:true,
        baseURL:`https://social-network.samuraijs.com/api/1.0/`,
        headers:{"API-KEY":"f4976d4d-67fc-4dad-bf50-b0757093e7fa"},
});

export const usersAPI = {
    getUsers (currentPage = 1 , pageSize = 10  ){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },



    getProfile  (userId/*= 23100*/) {
        return instance.get(`profile/${userId}`)

    },

    follow (userId){
        return instance.post(`follow/${userId}`/*,{}*/)
            .then(response => {
                return response.data;
            });
    },

    unfollow (userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    }
};

export const authAPI ={
    me(){
        return instance.get(`auth/me`)
              }
}



