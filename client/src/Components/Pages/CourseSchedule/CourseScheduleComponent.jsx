import React from 'react';
import "./CourseSchedule.css";

const CourseSchedule = ()=>{
  return (
    <div className="BodyCourse">
      <div>
      <iframe
        title={"Course schedule"}
        src="https://calendar.google.com/calendar/embed?src=104sovb0e3cdrk1rplkap2b91g%40group.calendar.google.com&ctz=Asia%2FJerusalem"
        style={{ border: " 0" }}
        fontSize="16"
        width="1000"
        height="600"
        frameBorder="1"
        scrolling="yes"
      ></iframe>
      </div>
    </div>
  );
}
export default CourseSchedule
