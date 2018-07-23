import dateFns from "date-fns";

export const actions = {

  onDateClick: (day) => state =>  ({
    selectedDate: (state) => day
  }),

  nextMonth: (e) => state => ({
    currentMonth: dateFns.addMonths(state.currentMonth, 1)
  }),

  prevMonth: (e)  => state => ({
    currentMonth: dateFns.subMonths(state.currentMonth, 1)
  }),

  addDays: (day) => state =>{
    return {
      days: state.days.concat(day)
    }
  },
}