"use client";

import { useState } from "react";
import {
  SegmentedControl,
  Group,
  Flex,
  Menu,
  Button,
  Table,
  Paper,
  Space,
} from "@mantine/core";
import { show_records } from "@/app/utils/DashboardConstants";
import { IconChevronDown } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import FiltersModal from "@/app/components/modals/FiltersModal";
import BookingGuides from "../guideDashboardComponents/BookingGuides";

import { booking_table_data } from "@/app/utils/DashboardConstants";

export default function BookingTable() {
  const [activeTab, setActiveTab] = useState("new");
  const [booking, setShowBooking] = useState("10");
  const [filtersOpened, handleFilters] = useDisclosure(false);

  const rows = booking_table_data.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.id}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.date}</Table.Td>
      <Table.Td>{element.location}</Table.Td>
      <Table.Td ta="center">{element.participants}</Table.Td>
      <Table.Td>
{/* {element.guides} */}

<BookingGuides data={element.guides} />

      </Table.Td>
      {/* <Table.Td>{element.action}</Table.Td> */}

      <Table.Td>
        <Menu
          shadow="md"
          position="left-start"
          offset={3}
          withArrow
          arrowPosition="center"
          p={4}
        >
          <Menu.Target>
            <Button radius={5} p={4} fw={500} size="sm" variant="default">
              Action
            </Button>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item>Accept as Leader</Menu.Item>
            <Menu.Item>Accept as Guide</Menu.Item>
            <Menu.Item>Request to Cancel</Menu.Item>
            <Menu.Item>Booking details</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Paper shadow="xs" p="md">
        <Flex align="center" justify="space-between">
          <SegmentedControl
            withItemsBorders={false}
            value={activeTab}
            onChange={setActiveTab}
            color="dark"
            data={[
              { label: "New booking request (25)", value: "new" },
              { label: "Ongoing Booking (57)", value: "ongoing" },
            ]}
          />

          <Group>
            <Menu>
              <Menu.Target>
                <Button
                  radius={0}
                  variant="default"
                  rightSection={<IconChevronDown />}
                >
                  Show 10 rows
                </Button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item>Option no 1</Menu.Item>
                <Menu.Item>Option no 2</Menu.Item>
                <Menu.Item>Option no 3</Menu.Item>
              </Menu.Dropdown>
            </Menu>
            <Button
              radius={0}
              variant="default"
              rightSection={<IconChevronDown />}
              onClick={() => handleFilters.open()}
            >
              Filter by
            </Button>
          </Group>

          <FiltersModal
            opened={filtersOpened}
            close={() => handleFilters.close()}
          />

          {/* table */}
        </Flex>
        <Space h="md" />
        <Table
        stickyHeader stickyHeaderOffset={80}
          striped={true}
          highlightOnHover
          withTableBorder
          withRowBorders={false}
          horizontalSpacing="sm"
          verticalSpacing="lg"
        >
          <Table.Thead bg="#eff1f5">
            <Table.Tr>
              <Table.Th>Booking ID</Table.Th>
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
      </Paper>
    </>
  );
}
