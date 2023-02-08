import { AxiosError } from "axios";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setRender } from "../../../../App/renderSlice copy";
import { VacationModel } from "../../../../Models/VacationModel";
import vacationServices from "../../../../Services/vacationServices";
import "./AddVacationForm.scss";

function AddVacationForm(props: any): JSX.Element {

    const dispatch = useDispatch();
    const render = useSelector((state: any) => state.render);
    const { register, handleSubmit, reset } = useForm<VacationModel>();

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
    }, []);

    async function onSubmitVacation(data: VacationModel) {
        try {
            const token = await vacationServices.postNewVacation(data)
            reset()
            dispatch(setRender(render + 1))
        } catch (err: AxiosError | any) {
            console.error(err)
        }
    }

    const refOne = useRef<any | null>(null);

    function handleClickOutside(e: any) {
        if (!refOne.current.contains(e.target)) {
            props.isOpen(false);
        } else {
            props.isOpen(true);
        }
    }

    return (
        <div className="AddVacationForm" ref={refOne}>
            <form onSubmit={handleSubmit(onSubmitVacation)}>
                <div className="form-div">
                    <label className="form-label" htmlFor="vacation-destination-input">destination</label>
                    <input id="vacation-destination-input" className="form-input" type="text" {...register("destination")} required />
                </div>
                <div className="form-div">
                    <label className="form-label" htmlFor="vacation-description-input">description</label>
                    <input id="vacation-description-input" className="form-input" type="text" {...register("description")} required />
                </div>
                <div className="form-div">
                    <label className="form-label" htmlFor="vacation-startDate-input">start</label>
                    <input id="vacation-startDate-input" className="form-input" type="date" {...register("startDate")} required />
                </div>
                <div className="form-div">
                    <label className="form-label" htmlFor="vacation-endDate-input">end</label>
                    <input id="vacation-endDate-input" className="form-input" type="date" {...register("endDate")} required />
                </div>
                <div className="form-div">
                    <label className="form-label" htmlFor="vacation-price-input">price</label>
                    <input id="vacation-price-input" className="form-input" type="number" {...register("price")} required />
                </div>
                {/* place holder image */}
                <div className="form-div">
                    <label className="form-label" htmlFor="vacation-image-input">image</label>
                    <input id="vacation-image-input" className="form-input" type="text" {...register("image")} required />
                </div>
                <button className="form-btn">Add Vacation</button>
            </form>
        </div>
    );
}

export default AddVacationForm;
