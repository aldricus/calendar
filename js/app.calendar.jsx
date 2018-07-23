import { h, app } from "hyperapp";
import {actions} from "./actions/";
import {state} from "./state/";
import {Calendar} from "./views/Calendar";

const App = (state, actions) => (
<div class="App">
        <header>
          <div id="logo">
            <span class="icon">date_range</span>
            <span>
              Hyperapp<b>calendar</b>
            </span>
          </div>
        </header>
        <main>
          <Calendar state={state} actions={actions} />
        </main>
</div>
)

const main = app(state, actions, App, document.getElementById("calendar"));
