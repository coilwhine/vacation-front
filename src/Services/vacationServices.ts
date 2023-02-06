import axios from "axios";
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
}

const vacationServices = new VacationServices()
export default vacationServices;