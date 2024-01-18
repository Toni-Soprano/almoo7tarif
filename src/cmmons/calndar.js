import React from 'react'



function calendar () {
return (
<DateCalendar
  defaultValue={initialValue}
  loading={isLoading}
  onMonthChange={handleMonthChange}
  renderLoading={() => <DayCalendarSkeleton />}
  slots={{
    day: ServerDay,
  }}
  slotProps={{
    day: {
      highlightedDays,
    } as any,
  }}
/>
)
}