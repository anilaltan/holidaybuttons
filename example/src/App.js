import React from 'react'

import { HolidayButtons } from 'holidaybuttons'
import 'holidaybuttons/dist/index.css'

const App = () => {
  return (
    <div>
      <HolidayButtons type=''>Happy Holidays Season</HolidayButtons>
      <HolidayButtons type='easter'>Happy Holidays Season</HolidayButtons>
      <HolidayButtons type='christmas'>Happy Holidays Season</HolidayButtons>
      <HolidayButtons type='halloween'>Happy Holidays Season</HolidayButtons>
      <HolidayButtons type='fatherDay'>Happy Holidays Season</HolidayButtons>
      <HolidayButtons type='motherDay'>Happy Holidays Season</HolidayButtons>
    </div>
  )
}

export default App
