interface CalendarEvent {
  title: string;
  description: string;
  location: string;
  start: Date;
  end: Date;
}

export function generateCalendarLinks(event: CalendarEvent) {
  const formatDate = (date: Date) =>
    date.toISOString().replace(/-|:|\.\d+/g, "");

  // Google Calendar
  const google = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    event.title
  )}&dates=${formatDate(event.start)}/${formatDate(
    event.end
  )}&details=${encodeURIComponent(
    event.description
  )}&location=${encodeURIComponent(event.location)}`;

  // iCal
  const ical = `data:text/calendar;charset=utf8,BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
URL:${location.href}
DTSTART:${formatDate(event.start)}
DTEND:${formatDate(event.end)}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`;

  return { google, ical };
}
