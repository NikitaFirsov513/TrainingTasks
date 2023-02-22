import { useEffect } from "react"
import { getMonthForNumber } from "../../utils/getMonthForNumber";
import { getNextDays } from "../../utils/getNextDays";
import { getPrevDays } from "../../utils/getPrevDays";
import './Date.scss'

type DateListElem = {
    month: number;
    date: number;
    day: number;
}



export const DatePicker = () => {


    let date = new Date();
    //getPrevDays(date);
    getNextDays(date);
    useEffect(() => {



        /*console.log(date.getDate())
        console.log(date.getDay())
        console.log(date.getMonth())
        console.log(getMonthForNumber(date.getMonth()))
*/



    }, [])

    return (
        <div className="date-wrapper">
            <h1>Date</h1>

        </div>)
}