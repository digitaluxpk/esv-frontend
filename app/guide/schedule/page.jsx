"use client";
import FullCalendar from "@fullcalendar/react";
import { useState } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Text, Group, Flex, Image, Button } from "@mantine/core";
import AvailabiltySelection from "@/app/components/modals/AvailabiltySelection";
import { convertDates } from "@/app/utils/helpers";
import BookingDetail from "@/app/components/drawer/bookingDetail";
import "./styles.css";

export default function GuideSchedule() {
  const [availablityOpened, handleAddAvailablity] = useDisclosure(false);
  const [eventOpened, handleViewEvent] = useDisclosure(false);
  const [events, setEvents] = useState([
    {
      title: "Full Day",
      start: new Date("2024-03-24T14:20+01:00").toISOString(),
      end: new Date("2024-03-29"),
    },
    { start: new Date("2024-03-06T14:20+01:00").toISOString() },
    { title: "", start: new Date("2024-03-06T16:20+01:00").toISOString() },
    {
      start: "2024-03-24",
      display: "background",
    },
    {
      start: "2024-03-06",
      display: "background",
    },
  ]);
  const handleAvailableDates = (values) => {
    // Convert existing event dates to a Set for efficient lookups
    const existingDatesSet = new Set(events?.map((event) => event.start));
    // Create and filter new events in a single iteration
    const filteredNewEvents = convertDates(values).reduce((acc, date) => {
      if (!existingDatesSet.has(date)) {
        acc.push({ start: date, display: "background" });
      }
      return acc;
    }, []);
    setEvents([...events, ...filteredNewEvents]);
  };

  const handleEventClick = (clickInfo) => {
    handleViewEvent.open();
  };

  return (
    <>
      <Flex direction={"row"} gap={"md"} align={"center"} justify={"end"}>
        <Group>
          <Image src={"/assets/svg/white-icon.svg"} />
          <Text>Unavailable</Text>
        </Group>
        <Group>
          <Image src={"/assets/svg/gray-icon.svg"} />
          <Text>Available</Text>
        </Group>
        <Button
          bg="#292929"
          radius={0}
          onClick={() => handleAddAvailablity.open()}
        >
          Add availability
        </Button>
      </Flex>
      <FullCalendar
        headerToolbar={{
          start: "title prev,next",
          right: "",
        }}
        initialDate={new Date()}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events} // Set the events state
        eventClick={handleEventClick} // Handle event click
      />
      <BookingDetail
        eventOpened={eventOpened}
        handleViewEvent={handleViewEvent}
      />
      <AvailabiltySelection
        opened={availablityOpened}
        close={() => handleAddAvailablity.close()}
        handleAvailableDates={handleAvailableDates}
      />
    </>
  );
}
