"use client";
import { Text, Paper, Flex, ActionIcon, Table } from "@mantine/core";
import { IconPhone, IconMail } from "@tabler/icons-react";
import { contacts_list } from "@/app/utils/constants";

export default function ContactsCard({}) {
  const rows = contacts_list?.map((user) => (
    <Table.Tr key={user.id}>
      <Table.Td>{user.name}</Table.Td>
      <Table.Td>{user.role}</Table.Td>
      <Table.Td>{user.phone}</Table.Td>
      <Table.Td>{user.email}</Table.Td>
      <Table.Td>
        <Flex justify="flex-start" align="center">
          <ActionIcon size={36} me={12} variant="default" bg="transparent">
            <IconPhone stroke={1.5} />
          </ActionIcon>

          <ActionIcon size={36} variant="default" bg="none">
            <IconMail stroke={1.5} />
          </ActionIcon>
        </Flex>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Paper shadow="sm" p="sm">
      <Text size="lg" fw={700}>
        Contacts
      </Text>

      <Table
        stickyHeader
        stickyHeaderOffset={80}
        striped={true}
        highlightOnHover
        withRowBorders={false}
        horizontalSpacing="sm"
        verticalSpacing="lg"
      >
        <Table.Thead bg="#eff1f5">
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Role</Table.Th>
            <Table.Th>Phone</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>Action</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Paper>
  );
}
