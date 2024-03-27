"use client";

import { Badge,useMantineTheme } from "@mantine/core";
import {
    IconPointFilled,
  
  } from "@tabler/icons-react";
export default function BookingDetailStatusBadge({ activityStatus }) {
    const theme = useMantineTheme();
  return (
    <>
      <Badge
        size="md"
        tt="capitalize"
        p={12}
        bg={
          activityStatus == "pending"
            ? "#FFF5DA"
            : activityStatus == "accepted"
            ? "#E6F5FF"
            : activityStatus == "completed"
            ? theme.colors.green[1]
            : activityStatus === "canceled"
            ? "#FFE8E6"
            : "#E6F5FF"
        }
        c={
          activityStatus == "pending"
            ? "#FF7E33"
            : activityStatus == "accepted"
            ? "#0BA5EC"
            : activityStatus == "completed"
            ? theme.colors.green[7]
            : activityStatus === "canceled"
            ? "red"
            : "#0BA5EC"
        }
        leftSection={
          <IconPointFilled
            stroke={
              activityStatus === "pending"
                ? "#FF7E33"
                : activityStatus === "accepted"
                ? "#0BA5EC"
                : activityStatus == "completed"
                ? theme.colors.green[7]
                : activityStatus === "canceled"
                ? "red"
                : "#0BA5EC"
            }
          />
        }
      >
        {activityStatus === "pending"
          ? "Pending"
          : activityStatus === "accepted"
          ? "Ongoing"
          : activityStatus === "completed"
          ? "Completed Booking"
          : activityStatus === "canceled"
          ? "Canceled Booking"
          : "Ongoing"}
      </Badge>
    </>
  );
}
