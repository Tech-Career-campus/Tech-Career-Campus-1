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


      {/* <VerticalTimeline>
        {
          syllabus?.map((course) => {
            return (
              <>
                <h1>{course.name}</h1>
                {course.CourseInformation.map((courseItem) => {
                  return (
                    <VerticalTimelineElement
                      key={courseItem.nameSubject}
                      className="vertical-timeline-element--work"
                      contentStyle={{
                        background: "rgba(255, 99, 38, 0.9)",
                        color: "#fff",
                      }}
                      contentArrowStyle={{
                        borderRight: "7px solid  rgba(255, 99, 38, 0.9)",
                      }}
                      date="2011 - present"
                      iconStyle={{
                        background: "rgba(255, 99, 38, 0.9)",
                        color: "rgba(255, 99, 38, 0.9)",
                      }}
                    >
                      <h2 className="vertical-timeline-element-title">
                        {courseItem.nameSubject}
                      </h2>
                      <h4 className="vertical-timeline-element-subtitle">
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
                    </VerticalTimelineElement>
                  );
                })}
              </>

            )
          })
        }

      </VerticalTimeline> */}
    </>
  )
};
export default SyllabusComponent;