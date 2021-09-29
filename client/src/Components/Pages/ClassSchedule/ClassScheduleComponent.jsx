// import "./Class.css";
// import { WorkWeek, Month, Agenda, Inject, ScheduleComponent, Day, Week, ViewsDirective, ViewDirective } from "@syncfusion/ej2-react-schedule";
// import { loadCldr } from "@syncfusion/ej2-base";
// import { useState, useMemo ,useEffect} from 'react';
// import { useTable } from 'react-table';
// import { fetchDailySchedule } from '../../../FetchFunctions/FetchFunctions'

// const ClassScheduleComponent = () => {
//  // const [myData, setMyData] = useState();

// useEffect(() => {
//   fetchDailySchedule().then((response) => setMyData(response));
// }, []);
// console.log()
//   loadCldr(
//     require("cldr-data/main/he/ca-gregorian.json"),
//     require("cldr-data/main/he/numbers.json"),
//     require("cldr-data/main/he/timeZoneNames.json")
//   );


//   return (
//     <div className="BodyClass">
//       <div id="schedule">
//         <ScheduleComponent
//           locale="he"
//           height="500px"
//           enableRtl={true}
//           firstDayOfWorkWeek={0}
//         >
//           <ViewsDirective>
//             <ViewDirective option='Day' displayName="היום" />
//             <ViewDirective option='Week' displayName="שבוע" />
//             <ViewDirective option='WorkWeek' displayName="שבוע עבודה" />
//             <ViewDirective option='Month' displayName="חודש" />
//           </ViewsDirective>
//           <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
//         </ScheduleComponent>
//       </div>
//     </div>
//   );
// };
// export default ClassScheduleComponent;

import "./Class.css";
// import { WorkWeek, Month, Agenda, Inject, ScheduleComponent, Day, Week, ViewsDirective, ViewDirective } from "@syncfusion/ej2-react-schedule";
// import { loadCldr } from "@syncfusion/ej2-base";
import { fetchDailySchedule } from '../../../FetchFunctions/FetchFunctions'
import { useState, useMemo, useEffect } from 'react';
import { useTable } from 'react-table';
// import fetcher from "../../../utils/fetcher"



const ClassScheduleComponent = () => {
  const [schedule, setScheduled] = useState({})
  const [isTaken, setIsTaken] = useState(false);
  const [className, setClassName] = useState("פיתוח");
  const [hourId, SetHourId] = useState("");
  const [dayId, SetDayId] = useState("");

  useEffect(() => {
    fetchDailySchedule().then((response) => setScheduled(response));
  }, []);
  console.log(schedule)


  //    const updateSchedule = (newSchedule) => async dispatch => {
  //     await fetcher("http://localhost:8080/api/classSchedule", {
  //         method: 'POST',
  //         headers:{
  //             "Accept":"apllication/json",
  //             "Content-Type":"application/json" 
  //         },
  //         body: JSON.stringify({ 

  //         })
  //     })
  //         // .then(response => dispatch({
  //         //     type: UPDATE_SCHEDULE,
  //         //     payload: response.data
  //         // }))
  //         // .catch(error => console.log(error))
  // }

  const select = className

  const data = useMemo(
    () => [
      {
        col1: '8-10',
        col2: isTaken,
        col3: hourId,
      },
      {
        col1: '10-12',
        col2: isTaken,
        col3: hourId,
      },
      {
        col1: '12-14',
        col2: isTaken,
        col3: hourId,

      },
      {
        col1: '14-16',
        col2: isTaken,
        col3: hourId,

      },
      {
        col1: '16-18',
        col2: isTaken,
        col3: hourId,

      },
      {
        col1: '18-20',
        col2: isTaken,
        col3: hourId,

      },
      {
        col1: '20-22',
        col2: isTaken,
        col3: hourId,

      },
    ],
    []
  )

  const columns = useMemo(()=>{
    const x=()=>(change)=>{
      schedule[0].map((day,i)=> i === change? !day:day)
    }
    () => [
      {
        Header: 'שעות',
        accessor: 'col1', // accessor is the "key" in the data
        id: dayId
      },
      {
        Header: 'ראשון',
        // accessor: 'col1', // accessor is the "key" in the data
        id: dayId,
        Cell: ({row})=>(
          setIsTaken(row[i])
        )
      },
      {
        Header: 'שני',
        // accessor: 'col2',
        id: dayId

      },
      {
        Header: 'שלישי',
        // accessor: 'col3', // accessor is the "key" in the data
        id: dayId

      },
      {
        Header: 'רביעי',
        // accessor: 'col1', // accessor is the "key" in the data
        id: dayId

      },
      {
        Header: 'חמישי',
        // accessor: 'col2', // accessor is the "key" in the data
        id: dayId
      },
    ]
  },
    [schedule]
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  const onOrOff = (value) => {
    console.log(columns);
    setIsTaken(
      isTaken ? false : true
    )
  }
  return (

    <div>
      {
        schedule[0]?.data?.map((day, index) => {
          return <div>
            {day[index].map((hour, index) => {
              return <p>{hour[index]}</p>
            })}

          </div>
        })
      }
      <table {...getTableProps()} style={{ border: 'solid 1px black' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} >
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: 'solid 3px blue',
                    color: 'black',
                  }}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  if (cell.index == 0) { return <td></td> }
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: '20px',
                        border: 'solid 1px gray',
                      }}
                    >

                      <button onClick={onOrOff} style={{ width: '30px', height: '20px', backgroundColor: isTaken ? "red" : "green", display: { ...columns[0].Header === 'שעות' ? 'none' : 'block' } }} />

                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table >
    </div >
  );

}
export default ClassScheduleComponent;



