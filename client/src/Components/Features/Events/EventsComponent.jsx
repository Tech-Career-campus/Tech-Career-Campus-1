import React, { useEffect } from 'react';
import "./Events.css";
<<<<<<< HEAD
import { useState } from "react";
import {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../../../Redux/actions/eventsActions";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";
=======
import { useState } from 'react';
import { getEvents, updateEvent, deleteEvent } from '../../../Redux/actions/eventsActions';
import { useDispatch, useSelector } from 'react-redux';
import { FaPlus } from 'react-icons/fa';
import { hebrewVariables } from '../../../utils/hebrewVariables';
import FormEvent from './FormEventComponent';
>>>>>>> 8c4baac3673c69d6b02e98ce3ddc9c307f0dd31f

const Events = () => {
    const dispatch = useDispatch();
    const events = useSelector(state => state.events);
    const { user } = useSelector(state => state.user)

  const [isForm, setForm] = useState(false);
  const [isUpdate, setUpdate] = useState(false);
  const [newEvent, setNewEvent] = useState({
    eventName: "",
    massage: "",
  });


<<<<<<< HEAD
  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);
=======
    const [eventUpdate, setEventUpdate] = useState({
        eventId: "",
        eventName: "",
        message: "",
    });
>>>>>>> 8c4baac3673c69d6b02e98ce3ddc9c307f0dd31f

  const hendleChange = (e) => {
    setNewEvent({
      ...newEvent,
      userId: user._id,
      [e.target.name]: e.target.value,
    });
  };

  const hendleChange1 = (e) => {
    setEventUpdate({
      ...eventUpdate,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="Body">
      <div className="titel-event">
        <div className="updete">
          <p> ארועים בטק קריירה </p>
        </div>
        <div className="bth-add">
          <button
            onClick={() => {
              setForm(isForm ? false : true);
            }}
          >
            
            <FaPlus />
          </button>
        </div>
      </div>
      <div className="body-updete">
        {
          <div className="form-event">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type="text"
                name="eventName"
                id="eventName"
                value={newEvent.eventName}
                placeholder="שם האירוע"
                onChange={(e) => {
                  hendleChange(e);
                }}
              />
              <br></br>
              <br></br>
              <textarea
                name="massage"
                id="massage"
                cols="100"
                rows="10"
                value={newEvent.massage}
                placeholder="הקלד כאן"
                onChange={(e) => {
                  hendleChange(e);
                }}
              ></textarea>
              <br />
              <div className="bth-send-event">
                <button
                  type="submit"
                  onClick={() => {
                    dispatch(createEvent(newEvent));
                  }}
                >
                  
                  שלח
                </button>
              </div>
            </form>
            : ""
          </div>
        }
        {events?.map((event) => {
          return (
            <div className="EventsNews">
              <div key={event._id}>
                <div className="inputs-massage">
                  שם הארוע :{event.eventName}
                  <br></br>
                  הודעה :{event.massage}
                </div>
<<<<<<< HEAD
                <div className="bth-e">
                  <button
                    onClick={() => {
                      setUpdate(isUpdate ? false : true);
                      setEventUpdate({ ...eventUpdate, eventId: event._id });
                    }}
                  >
                    
                    עדכן
                  </button>
                 
                  <input
                    type="button"
                    id="deleteBtn"
                    value="מחק"
                    onClick={() => dispatch(deleteEvent(event._id))}
                  />
                   {isUpdate && event._id === eventUpdate.eventId ? (
                    <div className="form-event1">
                      <input
                        id="eventName"
                        type="text"
                        name="eventName"
                        value={eventUpdate.eventName}
                        onChange={(e) => {
                          hendleChange1(e);
                        }}
                      />

                      <textarea
                        id="massage"
                        cols="100"
                        rows="0.5"
                        name="massage"
                        value={eventUpdate.massage}
                        onChange={(e) => {
                          hendleChange1(e);
                        }}
                      ></textarea>
                      <input
                        type="button"
                        id="confirmUpdates"
                        value="אישור עדכונים"
                        onClick={() => {
                          dispatch(updateEvent(eventUpdate));
                          setUpdate(false);
                        }}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
=======
                {
                    user.role === "Staff" ?
                        <div className="bth-add">
                            <button onClick={() => { setForm(isForm ? false : true); }}> <FaPlus /> </button>
                        </div>
                        : ""
                }
            </div>

            <div className="body-updete">
                {
                    isForm ?
                        <FormEvent user={user} />
                        : ""
                }
                {
                    events?.map((event) => {
                        return (
                            <div className="EventsNews" key={event._id} >
                                <div key={event._id} >

                                    <div className="inputs-massage">
                                        {hebrewVariables.eventNameTitle}: {event.eventName}
                                        <br></br>
                                        {hebrewVariables.eventMassagetTitle}: {event.massage}
                                    </div>

                                    <div className="bth-e">
                                        {
                                            user.role === "Staff" ?
                                                <>
                                                    <button onClick={() => { setUpdate(isUpdate ? false : true); setEventUpdate({ ...eventUpdate, eventId: event._id }) }}> {hebrewVariables.update} </button>
                                                    {
                                                        isUpdate && event._id === eventUpdate.eventId ?
                                                            <div>
                                                                <input type="text" name="eventName" value={eventUpdate.eventName} onChange={(e) => { hendleChange1(e) }} />
                                                                <textarea cols="100" rows="0.5" name="massage" value={eventUpdate.massage} onChange={(e) => { hendleChange1(e) }}></textarea>
                                                                <input type="button" id="confirmUpdates" value={hebrewVariables.confirmUpdates} onClick={() => { dispatch(updateEvent(eventUpdate)); setUpdate(false) }} />
                                                            </div> : ""
                                                    }
                                                    <button id="deleteBtn" onClick={() => dispatch(deleteEvent(event._id))}> {hebrewVariables.delete}</button>
                                                </> : ""
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
>>>>>>> 8c4baac3673c69d6b02e98ce3ddc9c307f0dd31f
            </div>
        </div>
    )
}
export default Events;