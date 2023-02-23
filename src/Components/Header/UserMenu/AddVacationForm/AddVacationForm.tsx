import { AxiosError } from "axios";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setRender } from "../../../../App/renderSlice copy";
import { VacationModel } from "../../../../Models/VacationModel";
import vacationServices from "../../../../Services/vacationServices";
import { useOnClickOutside } from "../../../../Utils/onClickOutSideHook";
import "./AddVacationForm.scss";

interface OwnProps {
    setOpenNewVacationForm: any
}

function AddVacationForm(props: OwnProps): JSX.Element {

    const dispatch = useDispatch();
    const render = useSelector((state: any) => state.render);
    const { register, handleSubmit, reset } = useForm<VacationModel>();
    const [selectedImage, setSelectedImage] = useState<any>();
    const [invalidStartDate, setInvalidStartDate] = useState<boolean>(false);
    const [invalidEndDate, setInvalidEndDate] = useState<boolean>(false);
    const [invalidImage, setInvalidImage] = useState<boolean>(false);

    async function onSubmitVacation(data: VacationModel) {

        setInvalidStartDate(false)
        setInvalidEndDate(false)

        if (Date.parse(data.startDate) < (Date.parse(new Date().toString()))) {
            setInvalidStartDate(true)
            return
        }

        if (Date.parse(data.startDate) > Date.parse(data.endDate)) {
            setInvalidEndDate(true)
            return
        }

        try {
            const formDataVacation = new FormData();
            formDataVacation.append("destination", data.destination)
            formDataVacation.append("description", data.description)
            formDataVacation.append("startDate", data.startDate)
            formDataVacation.append("endDate", data.endDate)
            formDataVacation.append("price", data.price.toString())
            formDataVacation.append("image", selectedImage)

            if (selectedImage.size > 500000) {
                setInvalidImage(true);
                return;
            }

            await vacationServices.postNewVacation(formDataVacation);
            reset();
            props.setOpenNewVacationForm(false);
            dispatch(setRender(render + 1));
        } catch (err: AxiosError | any) {
            console.error(err);
        }
    }

    const refOne = useRef<any>();
    useOnClickOutside(refOne, () => props.setOpenNewVacationForm(false))

    return (
        <div className="AddVacationForm" ref={refOne}>
            <form className="main-form" onSubmit={handleSubmit(onSubmitVacation)}>
                <div className="form-div">
                    <label className="form-label" htmlFor="vacation-destination-input">destination</label>
                    <input id="vacation-destination-input" className="form-input" type="text" {...register("destination")} required />
                </div>
                <div className="form-div">
                    <label className="form-label" htmlFor="vacation-description-input">description</label>
                    <textarea id="vacation-description-input" className="form-input form-textarea" {...register("description")} required />
                </div>
                <div className="form-div">
                    <label className="form-label" htmlFor="vacation-startDate-input">start</label>
                    <input id="vacation-startDate-input" className="form-input" type="date" {...register("startDate")} required />
                    {invalidStartDate && <span className="error-span">invalid start date</span>}
                </div>
                <div className="form-div">
                    <label className="form-label" htmlFor="vacation-endDate-input">end</label>
                    <input id="vacation-endDate-input" className="form-input" type="date" {...register("endDate")} required />
                    {invalidEndDate && <span className="error-span">invalid end date</span>}
                </div>
                <div className="form-div">
                    <label className="form-label" htmlFor="vacation-price-input">price</label>
                    <input id="vacation-price-input" className="form-input" type="number" {...register("price")} min="0" max="10000" required />
                </div>

                <div className="form-div">
                    <label className="form-label" htmlFor="vacation-image-input">image</label>
                    <input onChange={(e: any) => {
                        setSelectedImage(e.target.files[0])
                        if (e.target.files[0].size > 500000) {
                            setInvalidImage(true);
                        } else {
                            setInvalidImage(false);
                        }
                    }} id="vacation-image-input" className="form-input form-img" type="file" required />
                    {invalidImage && <span className="error-span">Image size is too big</span>}
                </div>
                <button className="form-btn">Add Vacation</button>
            </form>
        </div>
    );
}

export default AddVacationForm;
