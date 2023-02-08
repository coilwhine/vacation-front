import axios from "axios";
import { VacationModel } from "../Models/VacationModel";
import fetchURL from "../Utils/fetchURL";

class VacationServices {
    async getAllVacations() {
        const response = await axios.get<ResponseType>(`${fetchURL.vacationsFetchURL}vacations`)
        return response.data;
    }

    async getVacationById(id: string) {
        const response = await axios.get<ResponseType>(`${fetchURL.vacationsFetchURL}${id}`)
        return response.data;
    }

    async postNewVacation(vacation: VacationModel) {

        const response = await axios.post<ResponseType>(`${fetchURL.vacationsFetchURL}addvacation`, { ...vacation });
        return response.data;
    }

    async deleteVacation(vacationId: number) {

        const response = await axios.delete<ResponseType>(`${fetchURL.vacationsFetchURL}deletevacation/${vacationId}`);
        return response.data;
    }

    async postLikeVacation(vacationId: number) {

        const response = await axios.post<ResponseType>(`${fetchURL.vacationsFetchURL}like`, { vacation: vacationId }, {
            headers: {
                authentication: window.localStorage.getItem('token')
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

        const response = await axios.post<ResponseType>(`${fetchURL.vacationsFetchURL}vacationlikes`, { id });
        return response.data;
    }

}

const vacationServices = new VacationServices()
export default vacationServices;