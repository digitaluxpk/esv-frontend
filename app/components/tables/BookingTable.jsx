"use client";

import { useState } from "react";
import {
  SegmentedControl,
  Group,
  Flex,
  Menu,
  Button,
  Paper,
  Space,
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import FiltersModal from "@/app/components/modals/FiltersModal";
import NewBookingTable from "@/app/components/tables/NewBookingTable";
import OngoingBookingTable from "@/app/components/tables/OngoingBookingTable";
import { booking_table_data } from "@/app/utils/constants";
import { ongoing_booking_table_header } from "@/app/utils/constants";

import { ongoing_booking_table_data } from "@/app/utils/constants";

export default function BookingTable() {
  const [activeTab, setActiveTab] = useState("new");

  const [filtersOpened, handleFilters] = useDisclosure(false);

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
        </Flex>
        <Space h="md" />

        {/* Conditional rendering based on activeTab */}
        {activeTab === "new" && <NewBookingTable data={booking_table_data} />}
        {activeTab === "ongoing" && (
          <OngoingBookingTable
            headers={ongoing_booking_table_header}
            data={ongoing_booking_table_data}
            bookingType={"ongoing"}
          />
        )}
      </Paper>
    </>
  );
}
