"use client";

import {
  Button,
  Table,
  useMantineTheme,
  Badge,
  Paper,
  Flex,
  Group,
  Menu,
  Space,
  Text,
} from "@mantine/core";
import { IconPointFilled, IconChevronDown } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import FiltersModal from "@/app/components/modals/FiltersModal";
import Link from "next/link";
export default function InvoiceTable({ headers, data, tableHeading }) {
  const [filtersOpened, handleFilters] = useDisclosure(false);
  const theme = useMantineTheme();

  const rows = data?.map((invoice) => (
    <Table.Tr key={invoice.id}>
      <Table.Td>{invoice.invoice_id}</Table.Td>
      <Table.Td>{invoice.month}</Table.Td>
      <Table.Td>{invoice.date}</Table.Td>
      <Table.Td ta={"center"}>{invoice.bookings}</Table.Td>
      <Table.Td> {invoice.amount}</Table.Td>
      <Table.Td>
        <Badge
          size="md"
          tt="capitalize"
          p={10}
          bg={invoice.status == "UnPaid" ? "#FFF5DA" : "#E8FFF1"}
          c={invoice.status == "UnPaid" ? "#FF7E33" : "#008949"}
          leftSection={
            <IconPointFilled
              stroke={invoice.status === "UnPaid" ? "#FF7E33" : "#008949"}
            />
          }
        >
          {invoice.status}
        </Badge>
      </Table.Td>
      <Table.Td>
        <Link
          href={{
            pathname: "/guide/invoice/123",
            query: { status: invoice.status },
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
