import React, { useEffect } from 'react';
import { useState } from 'react';
import { getEvents } from '../../../Redux/actions/eventsActions';
import { useDispatch, useSelector } from 'react-redux';

const StudentsEventComponent = () => {
    const dispatch = useDispatch();
    const events = useSelector(state => state.events);
    const { user } = useSelector(state => state.user)
    // const { stuff } = useSelector(state => state.stuff)

    useEffect(() => {
        dispatch(getEvents());
    }, [])

    return (
        <div className="Body">
            <h1> ארועים בטק קריירה </h1>
            {
                <div>
                    {
                        events?.map((event) => {
                            return (
                                <div key={event._id} className="EventsNews">
                                    <div>
                                        שם הארוע :{event.eventName}
                                        הודעה :{event.massage}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}
export default StudentsEventComponent;
