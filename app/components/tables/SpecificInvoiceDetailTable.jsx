"use client";

import {
  Button,
  Table,
  useMantineTheme,
  Group,
  Menu,
  Text,
  Space,
  Paper,
  Flex,
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";
import FiltersModal from "@/app/components/modals/FiltersModal";
export default function SpecificInvoiceDetailTable({
  headers,
  data,
  tableHeading,
}) {
  const [filtersOpened, handleFilters] = useDisclosure(false);
  const theme = useMantineTheme();

  const rows = data?.map((invoice) => (
    <Table.Tr key={invoice.id}>
      <Table.Td>{invoice.booking_id}</Table.Td>
      <Table.Td>{invoice.date}</Table.Td>
      <Table.Td>{invoice.name}</Table.Td>
      <Table.Td>{invoice.catagory}</Table.Td>
      <Table.Td w="24%"> {invoice.prod_name}</Table.Td>
      <Table.Td>{invoice.earning}</Table.Td>
      <Table.Td>
        <Link
          href={{
            pathname: "/guide/bookings/123",
            query: { status: "Completed" },
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
      <Paper shadow="xs" p="md">
        <Flex align="center" justify="space-between">
          <Text size="lg" fw={700}>
            {tableHeading}
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
      </Paper>
    </>
  );
}
