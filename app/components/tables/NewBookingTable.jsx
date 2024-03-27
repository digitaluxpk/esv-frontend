"use client";
import React, { useState } from "react";
import { Menu, Button, Table } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import BookingGuides from "../avatar/BookingGuides";
import Link from "next/link";
import AcceptBookingModal from "@/app/components/modals/AcceptBookingModal";
import CancelBookingModal from "@/app/components/modals/CancelBookingModal";
export default function NewBookingTable({ data }) {
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [acceptModalOpened, handleAcceptModal] = useDisclosure(false);
  const [cancelModalOpened, handleCancelModal] = useDisclosure(false);

  const rows = data?.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.id}</Table.Td>
      <Table.Td w="24%">{element.name}</Table.Td>
      <Table.Td>{element.date}</Table.Td>
      <Table.Td>{element.location}</Table.Td>
      <Table.Td ta="center">{element.participants}</Table.Td>
      <Table.Td>
        <BookingGuides data={element.guides} />
      </Table.Td>

      <Table.Td>
        <Menu
          shadow="md"
          position="left-start"
          offset={3}
          withArrow
          arrowPosition="center"
          p={2}
        >
          <Menu.Target>
            <Button
              radius={5}
              ps={10}
              pe={10}
              fw={500}
              size="sm"
              variant="default"
            >
              Action
            </Button>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item onClick={() => handleAcceptModal.open()}>
              Accept Booking
            </Menu.Item>
            <Menu.Item onClick={() => handleCancelModal.open()}>
              Cancel Booking
            </Menu.Item>
            <Menu.Item component={Link} href="/guide/bookings/123">
              Booking details
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Table
        stickyHeader
        stickyHeaderOffset={80}
        striped={true}
        highlightOnHover
        withTableBorder
        withRowBorders={false}
        horizontalSpacing="sm"
        verticalSpacing="lg"
      >
        <Table.Thead bg="#eff1f5">
          <Table.Tr>
            <Table.Th  >Booking ID</Table.Th>
            <Table.Th>Product Name</Table.Th>
            <Table.Th>Fulfilment Date(s)</Table.Th>
            <Table.Th>Location</Table.Th>
            <Table.Th>Participants</Table.Th>
            <Table.Th>Other guide</Table.Th>
            <Table.Th>Action</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>

      <AcceptBookingModal
        opened={acceptModalOpened}
        close={() => handleAcceptModal.close()}
        booking={selectedBooking}
      />

      <CancelBookingModal
        opened={cancelModalOpened}
        close={() => handleCancelModal.close()}
        booking={selectedBooking}
        userType={"guide"}
      />
    </>
  );
}
