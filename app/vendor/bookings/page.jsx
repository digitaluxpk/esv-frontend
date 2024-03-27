"use client";

import { Paper, Flex, Text, Group, Menu, Button, Space } from "@mantine/core";

import { IconChevronDown } from "@tabler/icons-react";

import FiltersModal from "../../components/modals/FiltersModal";
import { useDisclosure } from "@mantine/hooks";
import {
  vendorOngoingBookingTableHeader,
  vendorOngoingBookingTableData,
} from "@/app/utils/constants";
import VendorOngoingBookingTable from "@/app/components/tables/VendorOngoingBookingTable";
export default function Bookings() {
  const [filtersOpened, handleFilters] = useDisclosure(false);

  return (
    <div>
      <Paper shadow="sm" p="md" mt={10}>
        <Flex align="center" justify="space-between">
          <Text fw={700} fz="lg">
            Orders
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

        <VendorOngoingBookingTable
          headers={vendorOngoingBookingTableHeader}
          data={vendorOngoingBookingTableData}
          bookingType={"ongoing"}
        />
      </Paper>
    </div>
  );
}
