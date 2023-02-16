import axios from "axios";
import fetchURL from "../Utils/fetchURL";

class VacationServices {



    async getAllVacations() {
        const response = await axios.get<ResponseType>(`${fetchURL.vacationsFetchURL}`, {
            headers: {
                authentication: window.localStorage.getItem('token')
            }
        })
        return response.data;
    }

    async getVacationsByPage(user: any, page: number, liked: boolean, present: boolean, future: boolean) {
        const response = await axios.get<ResponseType>(`${fetchURL.vacationsFetchURL}page`, {
            params: {
                page: page,
                liked: liked,
                present: present,
                future: future
            },
            headers: {
                authentication: window.localStorage.getItem('token'),
                userId: user.sub
            }
        })
        return response.data;
    }

    async getVacationById(id: string) {
        const response = await axios.get<ResponseType>(`${fetchURL.vacationsFetchURL}${id}`, {
            headers: {
                authentication: window.localStorage.getItem('token')
            }
        })
        return response.data;
    }

    async postNewVacation(vacation: FormData) {

        const response = await axios.post<ResponseType>(`${fetchURL.vacationsFetchURL}`, vacation, {
            headers: {
                authentication: window.localStorage.getItem('token')
            }
        });
        return response.data;
    }

    async deleteVacation(vacationId: number) {

        const response = await axios.delete<ResponseType>(`${fetchURL.vacationsFetchURL}${vacationId}`, {
            headers: {
                authentication: window.localStorage.getItem('token')
            }
        });
        return response.data;
    }

    async postLikeVacation(vacationId: number) {
        const response = await axios.post<ResponseType>(`${fetchURL.vacationsFetchURL}like`, { vacation: vacationId }, {
            headers: {
                authentication: window.localStorage.getItem('token'),
            }
        });
        return response.data;
    }

    async postUnLikeVacation(vacationId: number) {

        const response = await axios.post<ResponseType>(`${fetchURL.vacationsFetchURL}unlike`, { vacation: vacationId }, {
            headers: {
                authentication: window.localStorage.getItem('token')
            }
        });
        return response.data;
    }

    async getUserLikedVacation() {

        const response = await axios.get<ResponseType>(`${fetchURL.vacationsFetchURL}userliked`, {
            headers: {
                authentication: window.localStorage.getItem('token')
            }
        });
        return response.data;
    }

    async getVacationLikes(id: number) {

        const response = await axios.get<ResponseType>(`${fetchURL.vacationsFetchURL}vacationlikes`, {
            params: { id: id },
            headers: {
                authentication: window.localStorage.getItem('token')
            }
        });
        return response.data;
    }

    async getVacationAndLikes() {

        const response = await axios.get<ResponseType>(`${fetchURL.vacationsFetchURL}reports`, {
            headers: {
                authentication: window.localStorage.getItem('token')
            }
        });
        return response.data;
    }

    async downloadFile() {
        const response = await axios.get<ResponseType>(`${fetchURL.vacationsFetchURL}download`, {
            headers: {
                authentication: window.localStorage.getItem('token')
            }
        });
        return response.data;
    }

}

const vacationServices = new VacationServices()
export default vacationServices;