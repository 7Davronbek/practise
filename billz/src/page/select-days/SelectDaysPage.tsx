import {DateRange} from 'react-date-range';
import {useState} from "react";
import React from "react";

const SelectDaysPage: React.FC = () => {
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        },
    ]);

    console.log(date)

    return (
        <div className='SelectDaysPage'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='headerSearchItem'>
                            <DateRange
                                editableDateInputs={true}
                                onChange={(item) => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className='date'
                                minDate={new Date()}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectDaysPage;