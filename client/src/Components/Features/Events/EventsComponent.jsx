
import React, { useEffect } from 'react';
import "./Events.css";
import { useState } from 'react';
import { getEvents, createEvent, updateEvent, deleteEvent } from '../../../Redux/actions/eventsActions';
import { useDispatch, useSelector } from 'react-redux';

const Events = () => {
    const dispatch = useDispatch();
    const events = useSelector(state => state.events);
    const { user } = useSelector(state => state.user)

    const [isForm, setForm] = useState(false)
    const [isUpdate, setUpdate] = useState(false)
    const [newEvent, setNewEvent] = useState({
        eventName: "",
        massage: ""
    });

    const [eventUpdate, setEventUpdate] = useState({
        eventId: "",
        eventName: "",
        massage: "",
    });

    useEffect(() => {
        dispatch(getEvents());
    }, [])

    const hendleChange = (e) => {
        setNewEvent(
            {
                ...newEvent, userId: user.id,
                [e.target.name]: e.target.value
            }
        )
    }

    const hendleChange1 = (e) => {
        setEventUpdate(
            {
                ...eventUpdate,
                [e.target.name]: e.target.value
            }
        )
    }

    return (
        <div className="Body">
            <h1> ארועים בטק קריירה </h1>
            <div>
                <button onClick={() => { setForm(isForm ? false : true) }}> הוספת ארוע </button>
                {
                    isForm ?
                        <form onSubmit={(e) => { e.preventDefault() }}>
                            <input type="text" name="eventName" value={newEvent.eventName} placeholder="שם האירוע" onChange={(e) => { hendleChange(e) }} />
                            <textarea name="massage" id="massage" cols="100" rows="10" value={newEvent.massage} placeholder="הקלד כאן" onChange={(e) => { hendleChange(e) }}></textarea>
                            <button type="submit" onClick={() => { dispatch(createEvent(newEvent)) }} > שלח </button>
                        </form> : ""
                }
                {
                    events?.map((event) => {
                        return (
                            <div key={event._id} className="EventsNews">
                                <div>
                                    שם הארוע :{event.eventName}
                                    הודעה :{event.massage}
                                    <button onClick={() => { setUpdate(isUpdate ? false : true); setEventUpdate({ ...eventUpdate, eventId: event._id }) }}> עדכן </button>
                                    {
                                        isUpdate && event._id === eventUpdate.eventId ?
                                            <div>
                                                <input type="text" name="eventName" value={eventUpdate.eventName} onChange={(e) => { hendleChange1(e) }} />

                                                <textarea cols="100" rows="0.5" name="massage" value={eventUpdate.massage} onChange={(e) => { hendleChange1(e) }}></textarea>
                                                <input type="button" id="confirmUpdates" value="אישור עדכונים" onClick={() => { dispatch(updateEvent(eventUpdate)); setUpdate(false )}} />
                                            </div> : ""
                                    }
                                    <input type="button" id="deleteBtn" value="מחק" onClick={()=>dispatch(deleteEvent(event._id))} />
                                    <hr></hr>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Events;
