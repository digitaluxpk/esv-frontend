"use client";

import {
  Badge,
  Button,
  Divider,
  Drawer,
  Flex,
  Grid,
  Paper,
  Space,
  Text,
  useMantineTheme,
} from "@mantine/core";
import {
  IconPointFilled,
  IconBell,
  IconBolt,
  IconRefresh,
  IconPhone,
} from "@tabler/icons-react";
import { bookingDetails } from "@/app/utils/constants";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useState } from "react";
import BookingDetailItem from "@/app/components/gridColoum/BookingItemDetail";
import CompleteBookingModal from "@/app/components/modals/CompleteBookingModal";
import { useDisclosure } from "@mantine/hooks";

export default function BookingDetail({ eventOpened, handleViewEvent }) {
  const [returnEquipmentClicked, setReturnEquipmentClicked] = useState(false);
  const [bookingCompletion, handleBookingCompletion] = useDisclosure(false);
  const [activityStatus, setActivityStatus] = useState("accepted");
  const theme = useMantineTheme();

  const handleAcceptBooking = () => {
    setActivityStatus("accepted");
  };

  const handleStartActivity = () => {
    setActivityStatus("started");
  };

  return (
    <Drawer
      opened={eventOpened}
      onClose={() => handleViewEvent.close()}
      withCloseButton={false}
      position="right"
      size="50%"
    >
      <Flex direction={"column"} mt={10}>
        <Flex gap={20}>
          <Button
            variant="transparent"
            c={"black"}
            leftSection={<IoMdArrowRoundBack />}
            onClick={() => handleViewEvent.close()}
          >
            Back
          </Button>
          <Text fw={600} fz={24}>
            06 February 2024
          </Text>
        </Flex>
        <Paper withBorder p="md" mt={20}>
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
            {(activityStatus === "accepted" ||
              activityStatus === "ongoing") && (
              <Button
                leftSection={<IconBell size={16} />}
                variant="default"
                onClick={() => {}}
              >
                Remind me
              </Button>
            )}

            {(activityStatus === "accepted" ||
              activityStatus === "ongoing") && (
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
      </Flex>
    </Drawer>
  );
}
