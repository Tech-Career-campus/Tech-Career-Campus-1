import React, { useEffect, useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { fetchSyllabus } from '../../../FetchFunctions/FetchFunctions'


const SyllabusComponent = () => {
  const [syllabusData, setSyllabusData] = useState()

  useEffect(() => {

    fetchSyllabus()
      .then(data => {
        setSyllabusData(data?.data[0].corse);
      })

  }, [])

  return (
    <>
      <h1>סילבוס</h1>
      <VerticalTimeline>
        <h1>{syllabusData?.name}</h1>
        {syllabusData?.CourseInformation.map((courseItem => {
          return (
            <VerticalTimelineElement
            key={courseItem.nameSubject}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="2011 - present"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
              <h2 className="vertical-timeline-element-title">{courseItem.nameSubject}</h2>
              <h4 className="vertical-timeline-element-subtitle">
                <ul>
                  {courseItem.topics.map((topic, index) => {
                    return <li key={index}>{topic.subject}</li>;
                  })}
                </ul>
              </h4>
              <p>
                {courseItem.summery}
              </p>
            </VerticalTimelineElement>)
        }))}

      </VerticalTimeline>;
    </>
  )
};
export default SyllabusComponent;