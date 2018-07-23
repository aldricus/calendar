import {h} from 'hyperapp';
import dateFns from "date-fns";

export const Days = ({state, actions}) => {
  const dateFormat = "dddd";
  const days = [];
  let startDate = dateFns.startOfWeek(state.currentMonth);
  for (let i = 0; i < 7; i++) {
    days.push(
      <div class="col col-center" key={i}>
        {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
      </div>
    );
  }
  return   <div class="days row">{days}</div>;
}