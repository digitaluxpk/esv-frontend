"use client";

import { Button, Table, useMantineTheme, Badge } from "@mantine/core";
import { IconPointFilled } from "@tabler/icons-react";
import Link from "next/link";
export default function OngoingBookingTable({ headers, data }) {
  const theme = useMantineTheme();

  const rows = data?.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.booking_id}</Table.Td>
      <Table.Td>{element.date}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.catagory}</Table.Td>
      <Table.Td w="24%"> {element.prod_name}</Table.Td>
      <Table.Td>
        <Badge
          size="md"
          tt="capitalize"
          p={12}
          bg={
            element.status == "Ongoing"
              ? theme.colors.skyBlue[1]
              : element.status == "Completed"
              ? theme.colors.green[1]
              : "#de9792"
          }
          c={
            element.status == "Ongoing"
              ? theme.colors.skyBlue[6]
              : element.status == "Completed"
              ? theme.colors.green[6]
              : "#F04438"
          }
          leftSection={
            <IconPointFilled
              stroke={
                element.status === "Ongoing"
                  ? theme.colors.skyBlue[5]
                  : element.status === "Completed"
                  ? theme.colors.green[5]
                  : "#F04438"
              }
            />
          }
        >
          {element.status}
        </Badge>
      </Table.Td>
      <Table.Td>
        <Link
          href={{
            pathname: "/guide/bookings/123",
            query: { status: element.status },
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
    </>
  );
}
