// import * as React from 'react';
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers-pro';
// import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
// import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';

// export default function Calendar() {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <DemoContainer components={['DateRangeCalendar', 'DateRangeCalendar']}>
//         <DemoItem>
//           <DateRangeCalendar calendars={1} />
//         </DemoItem>
//         {/* <DemoItem label="2 calendars">
//           <DateRangeCalendar calendars={2} />
//         </DemoItem> */}
//       </DemoContainer>
//     </LocalizationProvider>
//   );
// }



import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function BasicDateCalendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar />
    </LocalizationProvider>
  );
}