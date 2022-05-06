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

export const profileAPi ={
    getProfile  (userId) {
        return instance.get(`profile/${userId}`);

    },
    getStatus (userId) {
        return instance.get(`profile/status/${userId}`);

    },
    updateStatus (status) {
        return instance.put(`profile/status`,{status:status});

    },

}

export const authAPI = {
    me(){
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe });
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}



