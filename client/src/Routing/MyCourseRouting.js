import React from 'react'
import CourseSchedule from '../Components/Pages/CourseSchedule/CourseScheduleComponent';

import DailySchedule from '../Components/Pages/DailySchedule/DailyScheduleComponent';
import StudentGradesComponent from '../Components/Pages/Grades/StudentGradesComponent'
import AdminGradesComponent from '../Components/Pages/Grades/AdminGradesComponent'
import Syllabus from '../Components/Pages/Syllabus/SyllabusComponent'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'


const MyCourseRouting = () => {
    // temp role for switch component
    const role = "student"
    return (
        <>
            <Tabs
                defaultActiveKey="home"
                transition={false}
                id="noanim-tab-example"
                className="mb-3"
                
            >
                <Tab eventKey="daily-schedule" title="לוז יומי">
                    <DailySchedule />
                </Tab>
                <Tab eventKey="grades" title="ציונים">
                    <StudentGradesComponent />
                </Tab>
                <Tab eventKey="course-schedule" title="לוז קורס" >
                    <CourseSchedule />
                </Tab>
                <Tab eventKey="syllabus" title="סילבוס" >
                    <Syllabus />
                </Tab>
                <Tab eventKey="edit-course-schedual" title="סגל" disabled={role ==="student" ? false : true}>
                    <AdminGradesComponent />
                </Tab>
            </Tabs>
        </>
    )
}
export default MyCourseRouting;