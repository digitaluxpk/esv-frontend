"use client";
import React, { useState } from "react";
import { Menu, Button, Table,Group,Text,Flex } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import BookingGuides from "../avatar/BookingGuides";
import Link from "next/link";
import AcceptBookingModal from "@/app/components/modals/AcceptBookingModal";
import CancelBookingModal from "@/app/components/modals/CancelBookingModal";
export default function VendorNewBookingTable({headers, data,bookingType }) {
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [acceptModalOpened, handleAcceptModal] = useDisclosure(false);
  const [cancelModalOpened, handleCancelModal] = useDisclosure(false);

  const rows = data?.map((booking) => (
    <Table.Tr key={booking.id}>
      <Table.Td>{booking.prod_name}</Table.Td>
      <Table.Td >{booking.date}</Table.Td>
      <Table.Td >

      <Text bg="#DCDFEA" fz={"xs"}  px={3}  py={3} fw={500} style={{border:'1px solid #eee',borderRadius:'5px',maxWidth:'fit-content' }}  >{booking.location}    </Text>

      </Table.Td>
      <Table.Td ta="center">{booking.bikes}</Table.Td>

      <Table.Td >
      {/* <Text bg="#eff1f5" w={35} fz={"small"}  p={4} fw={500} >{booking.heights}  <span style={{fontWeight:400,fontSize:'12px'}} >{booking.total}</span>   </Text> */}
       
        <Flex justify={"center"} align="center">
          <Text bg="#DCDFEA" fz={"sm"}  px={4} mr={5} py={3} fw={500} style={{border:'1px solid #eee',borderRadius:'5px' }}  >{booking.heights}    </Text>
          <Text fw={400} fz={"xs"} >{"  "} {booking.total}</Text>
        </Flex>
      </Table.Td>
      <Table.Td ta="center">
       {booking.protections}
      </Table.Td>
      <Table.Td>
        <BookingGuides data={booking.guides} />
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
            {headers?.map((col) => (
              <Table.Th key={col.id}>{col.name}</Table.Th>
            ))}
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
      />
    </>
  );
}
