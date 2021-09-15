import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSyllabus } from "../../../Redux/actions/SyllabusAction";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const SyllabusComponent = () => {
  const syllabus = useSelector((state) => state.syllabus.state);

  const dispatch = useDispatch();
  useEffect(() => dispatch(getSyllabus()), [dispatch]);
  return (
    <>

      {
        syllabus?.map((course) => {
          return (
            <>
              <h1>{course.name}</h1>
              <Timeline>
                {
                  course.CourseInformation.map((courseItem) => {
                    return (
                      <>
                        <TimelineItem>
                          <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                          </TimelineSeparator>
                          <TimelineContent>
                            <Paper elevation={3} >
                              <Typography variant="h6" component="h1">
                                <h2 >
                                  {courseItem.nameSubject}
                                </h2>
                              </Typography>
                              <Typography>
                                <h4 >
                                  <ul>
                                    {courseItem.topics.map((topic, index) => {
                                      return <li key={index}>{topic.subject}</li>;
                                    })}
                                  </ul>
                                </h4>
                                <p>{courseItem.summery}</p>
                                <ul>
                                  <h3>Links:</h3>
                                  {courseItem.links.map((link) => {
                                    return (
                                      <>
                                        <li>
                                          {" "}
                                          <a href={link.tasks}>Google Drive</a>{" "}
                                        </li>
                                        <li>
                                          {" "}
                                          <a href={link.Presentations}>Presentation</a>{" "}
                                        </li>
                                      </>
                                    );
                                  })}
                                </ul>
                              </Typography>
                            </Paper>
                          </TimelineContent>
                        </TimelineItem>
                      </>
                    )
                  })
                }
              </Timeline>
            </>
          )
        })
      }
    </>
  )
};
export default SyllabusComponent;