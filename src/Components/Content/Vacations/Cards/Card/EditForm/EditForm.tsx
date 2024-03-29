import { AxiosError } from "axios";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setRender } from "../../../../../../App/renderSlice";
import { VacationModel } from "../../../../../../Models/VacationModel";
import vacationServices from "../../../../../../Services/vacationServices";
import { useOnClickOutside } from "../../../../../../Utils/onClickOutSideHook";
import "./EditForm.scss";

interface OwnProps {
    setEditFormOpen: any;
    cardData: VacationModel;
}

function EditForm(props: OwnProps): JSX.Element {

    const dispatch = useDispatch();
    const render = useSelector((state: any) => state.render);
    const { register, handleSubmit, reset } = useForm<VacationModel>();
    const [selectedImage, setSelectedImage] = useState<any>();
    const [invalidEndDate, setInvalidEndDate] = useState<boolean>(false);
    const [invalidImage, setInvalidImage] = useState<boolean>(false);

    async function onSubmitEditVacation(data: VacationModel) {

        setInvalidEndDate(false)
        setInvalidImage(false)

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
            formDataVacation.append("id", props.cardData.id.toString())
            if (selectedImage) {
                formDataVacation.append("image", selectedImage)

            }

            if (selectedImage && selectedImage.size > 500000) {
                setInvalidImage(true);
                return;
            }

            await vacationServices.putEditVacation(formDataVacation, props.cardData.id);
            reset();
            props.setEditFormOpen(false);
            dispatch(setRender(render + 1));
        } catch (err: AxiosError | any) {
            console.error(err);
        }
    }

    const refOne = useRef<any>();
    useOnClickOutside(refOne, () => props.setEditFormOpen(false))

    return (
        <div className="EditForm" ref={refOne}>
            <form className="main-form" onSubmit={handleSubmit(onSubmitEditVacation)}>
                <div className="form-div">
                    <label className="form-label" htmlFor="edit-vacation-destination-input">destination</label>
                    <input id="edit-vacation-destination-input" className="form-input" type="text" defaultValue={props.cardData.destination} {...register("destination")} required />
                </div>
                <div className="form-div">
                    <label className="form-label" htmlFor="edit-vacation-description-input">description</label>
                    <textarea id="edit-vacation-description-input" className="form-input form-textarea" defaultValue={props.cardData.description} {...register("description")} required />
                </div>
                <div className="form-div">
                    <label className="form-label" htmlFor="edit-vacation-startDate-input">start</label>
                    <input id="edit-vacation-startDate-input" className="form-input" type="date" defaultValue={props.cardData.startDate} {...register("startDate")} required />
                </div>
                <div className="form-div">
                    <label className="form-label" htmlFor="edit-vacation-endDate-input">end</label>
                    <input id="edit-vacation-endDate-input" className="form-input" type="date" defaultValue={props.cardData.endDate} {...register("endDate")} required />
                    {invalidEndDate && <span className="error-span">invalid end date</span>}
                </div>
                <div className="form-div">
                    <label className="form-label" htmlFor="edit-vacation-price-input">price</label>
                    <input id="edit-vacation-price-input" className="form-input" type="number" defaultValue={props.cardData.price} {...register("price")} min="0" max="10000" required />
                </div>

                <div className="form-div">
                    <label className="form-label" htmlFor="edit-vacation-image-input">image</label>
                    <input onChange={(e: any) => {
                        setSelectedImage(e.target.files[0])
                        if (e.target.files[0].size > 500000) {
                            setInvalidImage(true);
                        } else {
                            setInvalidImage(false);
                        }
                    }} id="edit-vacation-image-input" className="form-input form-img" type="file" style={{
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.5)), url(https://daniel-vacation.s3.eu-west-1.amazonaws.com/${props.cardData.image})`
                    }} />

                    {invalidImage && <span className="error-span">Image size is too big</span>}
                </div>
                <button className="form-btn">Edit Vacation</button>
            </form>
        </div>
    );
}

export default EditForm;


// להוסיף שהוא יביא את התוכן לפני העריכה