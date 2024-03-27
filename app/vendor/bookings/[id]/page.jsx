"use client";
import React, { useState, useEffect } from "react";

import {
  Paper,
  Flex,
  Text,
  Button,
  Space,
  Divider,
  Grid,
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

import ContactsCard from "@/app/components/cards/ContactsCard";
import CompleteBookingModal from "@/app/components/modals/CompleteBookingModal";
import CancelBookingModal from "@/app/components/modals/CancelBookingModal";
import { useSearchParams } from "next/navigation";
import BookingDetailStatusBadge from "@/app/components/badge/BookingDetailStatusBadge";

import Link from "next/link";
export default function Bookings() {
  const [bookingCompletion, handleBookingCompletion] = useDisclosure(false);
  const [cancelModalOpened, handleCancelModal] = useDisclosure(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [componentKey, setComponentKey] = useState(0);
  const searchParams = useSearchParams();
  const type = searchParams.get("status");
  console.log("type is ", type);

  const [activityStatus, setActivityStatus] = useState(
    type ? type.toLowerCase() : "pending"
  );

  const handleAcceptBooking = () => {
    setActivityStatus("accepted");
  };

  const handleRequestCancelBooking = () => {
    setActivityStatus("canceled");
  };
  useEffect(() => {
    console.log("Activity Status changed to:", activityStatus);
  }, [activityStatus]);

  const handleSelectBooking = (booking) => {
    setSelectedBooking(booking);
  };

  const theme = useMantineTheme();

  return (
    <div style={{ marginLeft: "10%" }}>
      <Flex align="center" justify="space-between">
        <Link href="/vendor/bookings">
          <Button
            leftSection={<IconArrowNarrowLeft size={14} />}
            variant="default"
          >
            Back
          </Button>
        </Link>
      </Flex>

      <Space h="sm" />
      <Paper shadow="sm" p="md">
        <Paper shadow="xs" p="sm" mt="sm" bg="#F9F9FB">
          <Flex align="center" justify="space-between">
            <Text fw={700} fz="lg">
              Booking Details - #12785
            </Text>

            <BookingDetailStatusBadge activityStatus={activityStatus} />
          </Flex>
          <Divider my="md" />
          <Space h="sm" />

          <Grid>
            <Grid.Col span={4}>
              <Text size="xs" c="#737373">
                Customer Name
              </Text>

              <Text size="sm" mt="xs" c="#292929" fw={600}>
                Miracle
              </Text>
            </Grid.Col>

            <Grid.Col span={4}>
              <Text size="xs" c="#737373">
                Created Date
              </Text>

              <Text size="sm" mt="xs" c="#292929" fw={600}>
                24/02/2024
              </Text>
            </Grid.Col>
            <Grid.Col span={4}>
              <Text size="xs" c="#737373">
                Fulfilment dates(s)
              </Text>

              <Text size="sm" mt="xs" c="#292929" fw={600}>
                24/02/2024
              </Text>
            </Grid.Col>
            <Grid.Col span={4}>
              <Text size="xs" c="#737373">
                Start Date & Time
              </Text>

              <Text size="sm" mt="xs" c="#292929" fw={600}>
                -
              </Text>
            </Grid.Col>
            <Grid.Col span={4}>
              <Text size="xs" c="#737373">
                End Date & Time
              </Text>

              <Text size="sm" mt="xs" c="#292929" fw={600}>
                -
              </Text>
            </Grid.Col>
            <Grid.Col span={4}>
              <Text size="xs" c="#737373">
                Duration
              </Text>

              <Text size="sm" mt="xs" c="#292929" fw={600}>
                Half Day
              </Text>
            </Grid.Col>

            <Grid.Col span={4}>
              <Text size="xs" c="#737373">
                Participants
              </Text>

              <Text size="sm" mt="xs" c="#292929" fw={600}>
                2
              </Text>
            </Grid.Col>
            <Grid.Col span={4}>
              <Text size="xs" c="#737373">
                Category
              </Text>

              <Text size="sm" mt="xs" c="#292929" fw={600}>
                Youth
              </Text>
            </Grid.Col>
            <Grid.Col span={4}>
              <Text size="xs" c="#737373">
                Location
              </Text>

              <Text size="sm" mt="xs" c="#292929" fw={600}>
                ESV
              </Text>
            </Grid.Col>
            <Grid.Col span={4}>
              <Text size="xs" c="#737373">
                Product
              </Text>

              <Text size="sm" mt="xs" c="#292929" fw={600}>
                {}
              </Text>
            </Grid.Col>
            <Grid.Col span={4}>
              <Text size="xs" c="#737373">
                Level
              </Text>

              <Text size="sm" mt="xs" c="#292929" fw={600}>
                Advance
              </Text>
            </Grid.Col>
            <Grid.Col span={4}>
              <Text size="xs" c="#737373">
                Number of Bikes
              </Text>

              <Text size="sm" mt="xs" c="#292929" fw={600}>
                5
              </Text>
            </Grid.Col>
            <Grid.Col span={4}>
              <Text size="xs" c="#737373">
                Number of Prot. Packs
              </Text>

              <Text size="sm" mt="xs" c="#292929" fw={600}>
                5
              </Text>
            </Grid.Col>
            <Grid.Col span={4}>
              <Text size="xs" c="#737373">
                Height (cm)
              </Text>
              <Flex justify={"flex-start"} align={"center"} mt="xs">
                <Text
                  bg="#DCDFEA"
                  fz={"sm"}
                  px={3}
                  mr={5}
                  py={3}
                  fw={600}
                  style={{
                    border: "1px solid #eee",
                    borderRadius: "5px",
                    maxWidth: "fit-content",
                  }}
                >
                  176
                </Text>

                <Text
                  bg="#DCDFEA"
                  fz={"sm"}
                  px={3}
                  py={3}
                  fw={600}
                  style={{
                    border: "1px solid #eee",
                    borderRadius: "5px",
                    maxWidth: "fit-content",
                  }}
                >
                  176
                </Text>
              </Flex>
            </Grid.Col>
            <Grid.Col span={4}>
              <Text size="xs" c="#737373">
                Bike type
              </Text>
              <Flex justify={"flex-start"} align={"center"} mt="xs">
                <Text
                  bg="#DCDFEA"
                  fz={"xs"}
                  px={3}
                  mr={5}
                  py={3}
                  fw={600}
                  style={{
                    border: "1px solid #eee",
                    borderRadius: "5px",
                    maxWidth: "fit-content",
                  }}
                >
                  E-bike
                </Text>
                <Text
                  bg="#DCDFEA"
                  fz={"xs"}
                  px={3}
                  py={3}
                  fw={600}
                  style={{
                    border: "1px solid #eee",
                    borderRadius: "5px",
                    maxWidth: "fit-content",
                  }}
                >
                  Enduro
                </Text>
              </Flex>
            </Grid.Col>
            <Grid.Col span={4}>
              <Text size="xs" c="#737373">
                Guides
              </Text>

              <Text size="sm" mt="xs" c="#292929" fw={600}>
                -
              </Text>
            </Grid.Col>
            <Grid.Col span={4}>
              <Text size="xs" c="#737373">
                Amount
              </Text>

              <Text size="sm" mt="xs" c="#292929" fw={600}>
                CHF 275.00
              </Text>
            </Grid.Col>
            <Grid.Col span={4}>
              <Text size="xs" c="#737373" mb={"xs"}>
                Equipment status
              </Text>
              <BookingDetailStatusBadge activityStatus={activityStatus} />
            </Grid.Col>
            <Grid.Col span={4}>
              <Text size="xs" c="#737373" mb={"xs"}>
                Fulfilment status
              </Text>
              <BookingDetailStatusBadge activityStatus={activityStatus} />
            </Grid.Col>
          </Grid>
        </Paper>
        <Space h="sm" />
        <Flex align="center" justify="flex-end">
          {activityStatus === "pending" && (
            <>
              <Button
                variant="default"
                mr={20}
                component={Link}
                href={`/vendor/dashboard`}
              >
                {" "}
                Reject Booking
              </Button>

              <Button
                variant="filled"
                bg={theme.colors.dark[7]}
                onClick={handleAcceptBooking}
              >
                Accept Booking
              </Button>
            </>
          )}
          {(activityStatus === "accepted" || activityStatus === "ongoing") && (
            <Button
              onClick={() => handleCancelModal.open()}
              mr={20}
              variant="default"
            >
              Cancel Booking
            </Button>
          )}
          <CompleteBookingModal
            opened={bookingCompletion}
            onClose={() => {
              handleBookingCompletion.close(); // Assuming this is correct according to your state management
              handleRequestCancelBooking();
            }}
          />
          <CancelBookingModal
            opened={cancelModalOpened}
            close={() => {
              handleCancelModal.close();
              setActivityStatus("canceled");
              setComponentKey((prevKey) => prevKey + 1);
            }}
            booking={selectedBooking}
            userType={"vendor"}
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
