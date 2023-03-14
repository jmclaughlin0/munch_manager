import React, {useState} from "react";
import {Header, Segment} from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function FoodLog(){
    const [startDate, setStartDate] = useState(new Date());

    return(
        <div className={'App-header'} align={'center'}>
            <Header color='white' content={'Welcome to the Food Logger'}/>
            <Segment size={'large'} inverted color={'blue'}>
                <DatePicker showIcon
                            dateFormat="dd/MM/yyyy H:mm"
                            showTimeSelect
                            timeIntervals={15}
                            todayButton="Today"
                            withPortal
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                />
            </Segment>
        </div>
    );
}