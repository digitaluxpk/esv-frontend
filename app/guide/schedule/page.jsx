"use client";
import FullCalendar from "@fullcalendar/react";
import { useState } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, ThemeIcon } from "@mantine/core";
import { IconPhoto } from "@tabler/icons-react";

const CustomHeaderComponent = () => {
  return (
    <>
      <ThemeIcon>
        <IconPhoto style={{ width: "70%", height: "70%" }} />
      </ThemeIcon>
      <Text>customComponent</Text>
    </>
  );
};

export default function GuideSchedule() {
  const [currentEvents, setCurrentEvents] = useState([]);
  const [newEventOpened, handleNeweEvent] = useDisclosure(false);

  const handleDateSelect = (selectInfo) => {
    console.log("helllo date selected");
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  function handleEventClick(clickInfo) {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  }

  function handleEvents(events) {
    setCurrentEvents(events);
  }

  const handleAddAvailablity = () => {
    handleNeweEvent.open();
  };

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin]}
        headerToolbar={{
          start: "title prev,next",
          center: "customComponent",
          end: "customComponent addAvailability",
        }}
        customButtons={{
          addAvailability: {
            text: "Add availability",
            click: handleAddAvailablity,
          },
        }}
        customViews={{
          customComponent: <CustomHeaderComponent />,
        }}
        initialView="dayGridMonth"
        selectable={true}
        select={() => handleDateSelect()}
        eventClick={handleEventClick}
        eventsSet={handleEvents} // called after events are initialized/added/changed/removed
        /* you can update a remote database when these fire:
      eventAdd={function(){}}
      eventChange={function(){}}
      eventRemove={function(){}}
      */
      />
      <Drawer
        opened={newEventOpened}
        onClose={() => handleNeweEvent.close()}
        title="Authentication"
        withCloseButton={false}
        position="right"
        size="xl"
      >
        {/* Drawer content */}
        hello
      </Drawer>
    </>
  );
}
