import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Calendar } from "lucide-react";
import { generateCalendarLinks } from "@/lib/calendar";

const DateSection = () => {
  const weddingDate = new Date("2026-02-07T18:00:00");
  const endDate = new Date("2026-02-08T00:00:00");

  const event = {
    title: "PietSas Wedding",
    description: "Join us for our special day!",
    location: "Wedding Venue, Address",
    start: weddingDate,
    end: endDate,
  };

  const calendarLinks = generateCalendarLinks(event);

  return (
    <section className="text-center bg-primary/5 rounded-xl p-12">
      {/* <h2 className="text-4xl font-bold mb-6">Save the Date</h2> */}
      <div className="text-2xl font-light space-y-4">
        <p className="text-primary">Saturday</p>
        <p className="text-3xl font-bold my-2">February 7, 2026</p>
        <p className="text-primary">at 18:00</p>

        <div className="pt-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Calendar className="h-4 w-4" />
                Add to Calendar
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <a
                  href={calendarLinks.google}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Calendar
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href={calendarLinks.ical} download="wedding.ics">
                  iCal / Outlook
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </section>
  );
};

export default DateSection;
