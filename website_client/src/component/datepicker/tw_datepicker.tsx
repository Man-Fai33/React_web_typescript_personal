import { useState } from "react";
import 'react-datepicker/dist/react-datepicker.css';
import ReactDatePicker from "react-datepicker";

const range = (start: number, end: number, step: number) => {
     //start 日期開始的時間   end是日期結束時間   step年與年的間隔
     const result = [];
     for (let i = start; i <= end; i += step) {
          result.push(i);
     }
     return result;
};
const getMinguoYear = (date: Date) => {
     const year = date.getFullYear();
     const minguoYear = year - 1911;
     return minguoYear;

}
const TWYear = (date: Date): Date => {
     if (!(date instanceof Date)) {
          throw new Error('Invalid input. Please provide a valid Date object.');
     }
     const taiwanYear = (date.getFullYear() - 1911).toString().replace(/^0+/, '');

     const taiwanDate = new Date(Number(taiwanYear), date.getMonth(), date.getDate());
     return taiwanDate;
}

export default function Tw_Datepicker(props: {
     date: Date
     onChange: (chosen: Date) => void
     selectsEnd?: boolean
     selectsStart?: boolean
}) {
     const [twYear] = useState(new Date())
     const years = range(1, getMinguoYear(new Date()) + 100, 1);
     //客製化的年份
     const months = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
     <ReactDatePicker
          selectsEnd={props.selectsEnd}
          selectsStart={props.selectsStart}
          // 時間格式 
          dateFormat="yyy/MM/dd"
          //客製化的calendar 
          renderCustomHeader={({
               date,
               changeYear,
               changeMonth,
               decreaseMonth,
               increaseMonth,
               prevMonthButtonDisabled,
               nextMonthButtonDisabled,
          }) => (
               //calendar header  styles and events
               <div
                    style={{
                         width: "100%",
                         marginTop: 8,
                         marginBottom: 8,
                         display: "flex",
                         justifyContent: "space-around",
                    }}
               >

                    <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                         {"<"}
                    </button>
                    <div style={{ paddingTop: 4, height: "100%", display: "flex", justifyItems: 'center', justifySelf: "center" }}>民國年:</div>
                    <select
                         value={date.getFullYear()}
                         onChange={({ target: { value } }) => changeYear(Number(value))}
                    >
                         {years.map((option) => (
                              <option key={option} value={option}>
                                   {option}
                              </option>
                         ))}
                    </select>

                    <select
                         value={months[date.getMonth()]}
                         onChange={({ target: { value } }) =>
                              changeMonth(months.indexOf(value))
                         }
                    >
                         {months.map((option) => (
                              <option key={option} value={option}>
                                   {option}
                              </option>
                         ))}
                    </select>

                    <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                         {">"}
                    </button>
               </div>
          )}
          //選擇中時間調節 （不要動）
          selected={props.date.getFullYear() !== twYear.getFullYear() ? props.date : TWYear(twYear)}
          onChange={props.onChange}
     />


}