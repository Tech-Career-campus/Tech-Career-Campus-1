import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getSyllabus,
  updateSyllabus,
  updateSubSubject,
} from "../../../Redux/actions/SyllabusAction";
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
  const [isClicked, setIsClicked] = useState(false);
  const [courseId, setcourseId] = useState("");
  const [topicSubject, setTopicSubject] = useState("");
  const [newSyllabus, setNewSyllabus] = useState({});
  const [subSubject, setsubSubject] = useState({});
  const HandleChange = (e, subjectId) => {
    setNewSyllabus({
      ...newSyllabus,
      _id: courseId,
      name: e.target.name,
      value: e.target.value,
      SubjectId: subjectId,
    });
  };
  const HandleTopicChange = (e, subjectId, array, array_id) => {
    setsubSubject({
      ...subSubject,
      _id: courseId,
      courseInformationId: subjectId,
      array, array,
      array_id: array_id,
      arrayField: e.target.name,
      newValue: e.target.value
    });
  };

  const dispatch = useDispatch();
  useEffect(() => dispatch(getSyllabus(course)), [dispatch, course]);
  useEffect(() => {
    setcourseId(syllabus._id)
  }, [HandleChange, HandleTopicChange])
  return (
    <>
      {
        <>
          <h1>{syllabus.name}</h1>
          <Timeline>
            {syllabus?.CourseInformation?.map((courseItem, index) => {
              return (
                <div key={index}>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Paper elevation={3}>
                        <Typography variant="h6" component="h1">
                          <h2>{courseItem.nameSubject}</h2>

                          <button
                            className="btn"
                            onClick={(e) => {
                              setIsClicked(true);
                            }}
                          >
                            עריכה
                          </button>
                          {isClicked ? (
                            <div>
                              <input
                                placeholder={courseItem.nameSubject}
                                name="nameSubject"
                                type="text"
                                onChange={(e) =>
                                  HandleChange(e, courseItem._id)
                                }
                              />
                              <button
                                type="button"
                                onClick={(e) => {
                                  setIsClicked(false);
                                  // console.log(newSyllabus);
                                  dispatch(updateSyllabus(newSyllabus,e));
                                }}
                                className="btn"
                              >
                                בצע שינויים
                              </button>
                            </div>
                          ) : null}
                        </Typography>
                        <Typography>
                          <h4>
                            <ul>
                              {courseItem.topics.map((topic, index) => {
                                return (
                                  <div>
                                    <li key={topic._id}>{topic.subject} </li>
                                    {isClicked ? (
                                      <div>
                                        <label htmlFor="" style={{ display: 'inline' }}>
                                          {`נושא מספר  ${++index}`}
                                        </label>
                                        <input
                                          // placeholder={topic.subject}
                                          key={topic._id}
                                          name="subject"
                                          type="text"
                                          placeholder={topic.subject}
                                          onChange={(e) =>
                                            HandleTopicChange(e, courseItem._id, "topics", topic._id)
                                          }
                                          type="text"
                                        />
                                        <button
                                          type="button"
                                          value={topic._id}
                                          onClick={() => {
                                            setIsClicked(false);
                                            dispatch(updateSubSubject(subSubject))
                                          }
                                          }

                                          className="btn"
                                        >
                                          בצע שינויים
                                        </button>
                                      </div>
                                    ) : null}
                                  </div>
                                );
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
                </div>
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