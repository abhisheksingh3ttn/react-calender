import { React, useState } from "react";
import ReactDOM from "react-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import './calender.scss';

const localizer = momentLocalizer(moment);

function App() {
    const data = [
        {
            trackName: "Olive track",
            reviewStatus: "YET_TO_START",
            assessments: [
                {
                    id: "65c20d2ad56ce0e86945139d",
                    name: "javascript",
                    startDate: "2024-02-18T10:42:50.637Z",
                    endDate: "2024-02-20T10:43:52.447Z",
                    status: "COMPLETED"
                }
            ],
            id: "65c20d0ed56ce0e86945138d",
            projectName: "Olive Gaea",
            accountName: "Olive Gaea India Private Limited",
            startDate: "2024-02-18T10:42:22.432Z",
            endDate: "2024-02-20T10:43:52.518Z"
        },
        {
            trackName: "Neo track",
            reviewStatus: "IN_PROGRESS",
            assessments: [
                {
                    id: "65c20d2ad56ce0e8694532i5",
                    name: "javascript",
                    startDate: "2024-02-21T10:42:50.637Z",
                    endDate: "2024-02-24T10:43:52.447Z",
                    status: "COMPLETED"
                }
            ],
            id: "65c20d0ed56ce0e86945432i5",
            projectName: "Gi Goe",
            accountName: "Gi Goe India Pvt Ltd",
            startDate: "2024-02-21T10:42:22.432Z"
        },
        {
            trackName: "TTN track",
            reviewStatus: "COMPLETED",
            assessments: [
                {
                    id: "65c20d2ad56ce0e8694532i8",
                    name: "javascript",
                    startDate: "2024-02-21T10:42:50.637Z",
                    endDate: "2024-02-24T10:43:52.447Z",
                    status: "COMPLETED"
                }
            ],
            id: "65c20d0ed56ce0e86945432i8",
            projectName: "TTN World",
            accountName: "TTN India Pvt Ltd",
            startDate: "2024-02-21T10:42:22.432Z",
            endDate: "2024-02-24T10:43:52.518Z"
        },
        {
            trackName: "MLI track",
            reviewStatus: "NO_STATUS",
            assessments: [
                {
                    id: "65c20d2ad56ce0e8694532i7",
                    name: "javascript",
                    startDate: "2024-02-26T10:42:50.637Z",
                    endDate: "2024-02-27T10:43:52.447Z",
                    status: "NO_STATUS"
                }
            ],
            id: "65c20d0ed56ce0e86945432i8",
            projectName: "MLI World",
            accountName: "MLI India Pvt Ltd",
            startDate: "2024-02-26T10:42:22.432Z",
            endDate: "2024-02-27T10:43:52.518Z"
        }
    ];

    const eventResult = data.map(item => {
            if(!item.endDate){
                item.reviewStatus = 'IN_PROGRESS';
                item.endDate = item.startDate;
            }
            return {
                title: item.projectName+' - '+item.trackName+' - '+item.reviewStatus,
                start: item.startDate,
                end: item.endDate,
                description: item.reviewStatus
                //resource: 'test'
            }
        }
    );
    
  const event = ({ event }) => {
    console.log(event);
    return (
      <div className={event.description.toLowerCase()}> {event.title}</div>
    );
  };

  return (
    <div className="App" style={{ minHeight: 580 }}>
        
        <Calendar
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="month"
            events={eventResult}
            style={{ height: "100vh" }}
            components={{event}}
        />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
