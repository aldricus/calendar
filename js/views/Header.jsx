import {h} from 'hyperapp';
import dateFns from "date-fns";

const dateFormat = "MMMM YYYY";
export const Header = ({state, actions}) => (
    <div class="header row flex-middle">
      <div class="col col-start">
        <div class="icon" onclick={actions.prevMonth}>
          chevron_left
        </div>
      </div>
      <div class="col col-center">
        <span>
          {dateFns.format(state.currentMonth, dateFormat)}
        </span>
      </div>
      <div class="col col-end" onclick={actions.nextMonth}>
        <div class="icon">chevron_right</div>
      </div>
    </div>
)
