import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSyllabus } from "../../../Redux/actions/SyllabusAction";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const SyllabusComponent = () => {
  const syllabus = useSelector((state) => state.syllabus);
  const course = useSelector((state) => state.course);

  const dispatch = useDispatch();
  useEffect(() => dispatch(getSyllabus(course)), [dispatch, course]);
  return (
    <>
      {
        <>
          <h1>{syllabus.name}</h1>
          <Timeline position="alternate">
            {syllabus?.CourseInformation?.map((courseItem) => {
              return (
                <>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Paper elevation={6} style={{backgroundColor:'#f1f1f1'}} >
                        <Typography variant="h6" component="h1">
                          <h2>{courseItem.nameSubject}</h2>
                        </Typography>
                        <Typography style={{padding:'20px'}} sx={{ m: 3 }}>
                          <h4> 
                            <ul style={{listStyleType:'none',}}>
                              {courseItem.topics.map((topic, index) => {
                                return <li key={index}>{topic.subject}</li>;
                              })}
                            </ul>
                          </h4>
                          <p>{courseItem.summery}</p>
                          <ul style={{listStyleType:'none'}}>
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
                                    <a href={link.Presentations}>
                                      Presentation
                                    </a>{" "}
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
              );
            })}
          </Timeline>
        </>
      }
      )
    </>
  );
};
export default SyllabusComponent;
