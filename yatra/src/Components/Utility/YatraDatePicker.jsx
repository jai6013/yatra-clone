import React, {useState} from 'react';
import DateFnsUtils from "@date-io/date-fns";
import {
    DatePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import {createMuiTheme} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";
import pink from "@material-ui/core/colors/pink";

const materialTheme = createMuiTheme({
    // overrides: {
    //     MuiPickersToolbar: {
    //         toolbar: {
    //             backgroundColor: "#EA2231",
    //         },
    //     },
    //     MuiPickersCalendarHeader: {
    //         switchHeader: {
    //             backgroundColor: "white",
    //             color: "#EA2231",
    //         },
    //     },
    // },
    palette: {
    primary: pink,
  }
});

function YatraDatePicker() {
  const [selectedDate, handleDateChange] = useState(new Date());
  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <ThemeProvider theme={materialTheme}>
          <DatePicker
            value={selectedDate}
            format="dd MMM yy"
            variant="inline"
            onChange={handleDateChange}
            animateYearScrolling
            disablePast
            autoOk
            style={{ width: "100%", color: "#F34F4F" }}
            PopoverProps={{
              anchorOrigin: { horizontal: "center", vertical: "bottom" },
              transformOrigin: { horizontal: "center", vertical: "bottom" }
            }}

      />
        </ThemeProvider>
      </MuiPickersUtilsProvider>
    </div>
  );
}

export { YatraDatePicker };