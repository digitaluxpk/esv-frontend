"use client";

import { Paper, Flex, Text, Group, Menu, Button, Space } from "@mantine/core";

import { booking_history_table_header } from "@/app/utils/constants";
import { booking_history_table_data } from "@/app/utils/constants";

import { IconChevronDown } from "@tabler/icons-react";
import OngoingBookingTable from "@/app/components/tables/OngoingBookingTable";
import FiltersModal from "../../components/modals/FiltersModal";
import { useDisclosure } from "@mantine/hooks";

export default function Bookings() {
  const [filtersOpened, handleFilters] = useDisclosure(false);

  return (
    <div>
      <Paper shadow="sm" p="md">
        <Flex align="center" justify="space-between">
          <Text fw={700} fz="md">
            Booking History
          </Text>

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

        <OngoingBookingTable
          headers={booking_history_table_header}
          data={booking_history_table_data}
        />
      </Paper>
    </div>
  );
}
