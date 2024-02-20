import { React, useState } from "react";
import ReactDOM from "react-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import './calender.scss';
import {data} from "./processData";
import { reviewStatus } from "./constants";

const localizer = momentLocalizer(moment);

function App() {

    const [stateData, setStateData] = useState(data);

    function filterMap (status) {
        return stateData.filter(item => item.reviewStatus === status).map((item, index) => {
            item.dataClass = `${item.reviewStatus}-${index}`;
            return item;
        });
    }
    const yetToStartResult = filterMap(reviewStatus.YET_TO_START);
    const inProgressResult = filterMap(reviewStatus.IN_PROGRESS);
    const noStatusResult = filterMap(reviewStatus.NO_STATUS);
    const completedResult = filterMap(reviewStatus.COMPLETED);
    const dataResult = yetToStartResult.concat(inProgressResult, noStatusResult, completedResult);

    const eventResult = dataResult.map((item, index) => {
            if(!item.endDate){
                item.reviewStatus = 'IN_PROGRESS';
                item.endDate = item.startDate;
            }
            return {
                title: item.projectName+' - '+item.trackName+' - '+item.reviewStatus,
                start: new Date(item.startDate),
                end: new Date(item.endDate),
                description: item.dataClass
                //resource: 'test'
            }
        }
    );
    
  const event = ({ event }) => {
    //console.log(event);
    return (
      <div className={event.description.toLowerCase()}> {event.title}</div>
    );
  };

  return (
    <div className="App" style={{ minHeight: 580, display : 'flex'}}>
        {/* <div style={{ width: '15%', height: 'auto', border: '1px solid #000'}}>
            {{}}
        </div> */}
        <div style={{ width: '100%'}}>
        <Calendar
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="month"
            events={eventResult}
            style={{ height: "100vh" }}
            components={{event}}
            onSelectEvent={event => alert(event.title)}
        />
        </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
