"use client";
import { useState } from "react";
import React from "react";
import {
  Paper,
  Flex,
  Text,
  Button,
  Space,
  Divider,
  Grid,
  Badge,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconArrowNarrowLeft,
  IconPointFilled,
  IconBell,
  IconBolt,
  IconRefresh,
  IconPhone,
} from "@tabler/icons-react";
import { bookingDetails } from "@/app/utils/constants";
import BookingDetailItem from "@/app/components/gridColoum/BookingItemDetail";
import ContactsCard from "@/app/components/cards/ContactsCard";
import CompleteBookingModal from "@/app/components/modals/CompleteBookingModal";
import { useSearchParams } from "next/navigation";

import Link from "next/link";
export default function Bookings() {
  const [returnEquipmentClicked, setReturnEquipmentClicked] = useState(false);
  const [bookingCompletion, handleBookingCompletion] = useDisclosure(false);

  const searchParams = useSearchParams();
  const type = searchParams.get("status");
  console.log("type is ",type)
  const [activityStatus, setActivityStatus] = useState(
    type ? type.toLowerCase() : "pending"
  );

  const handleAcceptBooking = () => {
    setActivityStatus("accepted");
  };

  const handleStartActivity = () => {
    setActivityStatus("started");
  };

  const theme = useMantineTheme();

  return (
    <div style={{ marginLeft: "10%" }}>
      <Flex align="center" justify="space-between">
        <Link href="/guide/bookings">
          <Button
            leftSection={<IconArrowNarrowLeft size={14} />}
            variant="default"
          >
            Back
          </Button>
        </Link>

        {activityStatus !== "started" &&
        returnEquipmentClicked &&
        activityStatus !== "completed" ? (
          <Link href="/guide/bookings">
            <Button variant="default">
              {returnEquipmentClicked ? "Mark Completed" : "Request for cancel"}
            </Button>
          </Link>
        ) : null}
      </Flex>

      <Space h="sm" />
      <Paper shadow="sm" p="md">
        <Paper shadow="xs" p="sm" mt="sm" bg="#F9F9FB">
          <Flex align="center" justify="space-between">
            <Text fw={700} fz="lg">
              Booking Details - #12785
            </Text>
            <Badge
              size="md"
              tt="capitalize"
              p={12}
              bg={
                activityStatus == "pending"
                  ? "#FFF5DA"
                  : activityStatus == "accepted"
                  ? "#E6F5FF"
                  : returnEquipmentClicked
                  ? "none"
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
                  : returnEquipmentClicked
                  ? "black"
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
                      : returnEquipmentClicked
                      ? "white"
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
                : returnEquipmentClicked
                ? "Download Form"
                : "Ongoing"}
            </Badge>
          </Flex>
          <Divider my="md" />
          <Space h="sm" />

          <Grid>
            {bookingDetails?.map((detail, index) => (
              <BookingDetailItem
                key={index}
                label={detail.label}
                value={detail.value}
                guide={detail.guides}
              />
            ))}
          </Grid>
        </Paper>
        <Space h="sm" />

        <Flex align="center" justify="flex-end">
          {activityStatus == "pending" && (
            <Button variant="filled" onClick={handleAcceptBooking}>
              Accept Booking
            </Button>
          )}
          {(activityStatus === "accepted" || activityStatus === "ongoing") && (
            <Button
              mr={20}
              leftSection={<IconBell size={16} />}
              variant="default"
              onClick={() => {}}
            >
              Remind me
            </Button>
          )}

          {(activityStatus === "accepted" || activityStatus === "ongoing") && (
            <Button
              bg={theme.colors.dark[7]}
              leftSection={<IconBolt size={16} />}
              onClick={handleStartActivity}
            >
              Start Activity
            </Button>
          )}

          <>
            {activityStatus === "started" && (
              <>
                {returnEquipmentClicked && (
                  <Button
                    mr={20}
                    leftSection={<IconPhone size={16} />}
                    variant="default"
                    onClick={() => {}}
                  >
                    Contact Customer
                  </Button>
                )}
                <Button
                  bg={theme.colors.dark[7]}
                  leftSection={<IconRefresh size={16} />}
                  onClick={() => {
                    handleBookingCompletion.open();
                    setReturnEquipmentClicked(true);
                  }}
                >
                  Return Equipment
                </Button>
              </>
            )}
          </>
          <CompleteBookingModal
            opened={bookingCompletion}
            close={() => {
              handleBookingCompletion.close();
              setActivityStatus("completed");
              setReturnEquipmentClicked(false); // Resetting returnEquipmentClicked when modal is closed
            }}
          />
        </Flex>
      </Paper>
      <Space h="lg" />

      {(activityStatus == "ongoing" ||
        activityStatus == "accepted" ||
        activityStatus == "started") && <ContactsCard />}
    </div>
  );
}
