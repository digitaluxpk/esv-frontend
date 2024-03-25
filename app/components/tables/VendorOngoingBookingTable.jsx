"use client";

import { Button, Table, useMantineTheme, Badge,Flex,Text,ScrollArea } from "@mantine/core";
import { IconPointFilled } from "@tabler/icons-react";
import BookingGuides from "../avatar/BookingGuides";
import Link from "next/link";
export default function VendorOngoingBookingTable({
  headers,
  data,
  bookingType,
}) {
  const theme = useMantineTheme();

  const rows = data?.map((booking) => (
    <Table.Tr key={booking.id}>
      <Table.Td w={"25%"}>{booking.orderId}</Table.Td>
      <Table.Td w={"25%"}>{booking.date}</Table.Td>
      <Table.Td w={"25%"}>{booking.customer}</Table.Td>
      <Table.Td w={"25%"}>{booking.catagory}</Table.Td>
      <Table.Td w={"25%"}> {booking.prod_name}</Table.Td>
     
      <Table.Td w={"25%"}>
      {booking.bikeTypes.map((bike) => {
        <Text
          bg="#DCDFEA"
          fz={"xs"}
          px={3}
          py={3}
          fw={500}
          style={{
            border: "1px solid #eee",
            borderRadius: "5px",
            maxWidth: "fit-content",
          }}
        >
          {bike.name}{" "}
        </Text>;
      })}
      </Table.Td>

      <Table.Td w={"25%"} ta={"center"}>{booking.bikes}</Table.Td>
      <Table.Td w={"25%"}>
        {" "}
        <Flex justify={"center"} align="center">
          <Text
            bg="#DCDFEA"
            fz={"sm"}
            px={4}
            mr={5}
            py={3}
            fw={500}
            style={{ border: "1px solid #eee", borderRadius: "5px" }}
          >
            {booking.heights}{" "}
          </Text>
          <Text fw={400} fz={"xs"}>
            {"  "} {booking.total}
          </Text>
        </Flex>
      </Table.Td>
      <Table.Td> {booking.protections}</Table.Td>
      <Table.Td>
        <BookingGuides data={booking.guides} />
      </Table.Td>
      <Table.Td> {booking.amount}</Table.Td>

      <Table.Td w={"25%"}>
        <Badge
          size="md"
          tt="capitalize"
          p={12}
          bg={theme.colors.skyBlue[1]}
          c={theme.colors.skyBlue[6]}
          leftSection={<IconPointFilled stroke={theme.colors.skyBlue[5]} />}
        >
          {booking.fulfilment_status}
        </Badge>
      </Table.Td>

      <Table.Td>
        <Badge
          size="md"
          tt="capitalize"
          p={12}
          bg={theme.colors.green[1]}
          c={theme.colors.green[6]}
          leftSection={<IconPointFilled stroke={theme.colors.green[5]} />}
        >
          {booking.equipment_status}
        </Badge>
      </Table.Td>

      <Table.Td>
        <Link
          href={{
            pathname: "/guide/bookings/123",
            query: { status: booking.fulfilment_status },
          }}
        >
          <Button
            radius={2}
            ps={10}
            pe={10}
            fw={600}
            size="sm"
            variant="default"
          >
            View Details
          </Button>
        </Link>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
    <ScrollArea  w={"100%"}  scrollbarSize={8}>
      <Table  
        stickyHeader
        // stickyHeaderOffset={30}
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
      </ScrollArea>
    </>
  );
}
