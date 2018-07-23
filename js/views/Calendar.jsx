import {h} from 'hyperapp';
import {Header} from "./Header";
import {Days} from "./Days";
import {Cells} from "./Cells";

export const Calendar = ({state, actions}) => (
  <div>
      <div class="calendar">
        <Header actions={actions} state={state} />
        <Days actions={actions} state={state} />
        <Cells actions={actions} state={state} />
      </div>
  </div>
)