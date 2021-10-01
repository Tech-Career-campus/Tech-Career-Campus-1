import React from "react";
import { useDispatch } from "react-redux";
import { hebrewVariables } from "../../../utils/hebrewVariables";
import { createEvent } from "../../../Redux/actions/eventsActions";
import { useState } from "react";

const FormEvent = ({ user }) => {
    const dispatch = useDispatch();
    const [newEvent, setNewEvent] = useState({
        eventName: "",
        message: ""
    });

    const handleChange = (e) => {
        setNewEvent(
            {
                ...newEvent, userId: user._id,
                [e.target.name]: e.target.value
            }
        )
    }

    return (
        <div className="form-event">
            <form onSubmit={(e) => { e.preventDefault() }}>
                <input type="text" name="eventName" id="eventName" value={newEvent.eventName} placeholder={hebrewVariables.eventNamePlaceholder} onChange={(e) => { handleChange(e) }} />
                <br></br>
                <br></br>
                <textarea name="message" id="massage" cols="100" rows="10" value={newEvent.message} placeholder={hebrewVariables.eventMessagePlaceholder} onChange={(e) => { handleChange(e) }}></textarea>
                <br />
                <div className="bth-send-event">
                    <button type="submit" onClick={() => { dispatch(createEvent(newEvent)); setNewEvent({ eventName: "", message: "" })}} > {hebrewVariables.send} </button>
                </div>
            </form>
        </div>
    )
}
export default FormEvent;