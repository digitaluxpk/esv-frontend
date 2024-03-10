import {
  Text,
  Paper,
  Flex,
  useMantineColorScheme,
  Grid,
  Box,
  Space,
  Center,
  ActionIcon,
  List,
  Group,
  Button,
  Anchor,
} from "@mantine/core";
import {
  IconPhone,
  IconBolt,
  IconChevronRight,
  IconChevronLeft,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
export default function TodayBooking({}) {
  const theme = useMantineColorScheme();

  const booking = [
    { id: 1, key: "Name", value: "Miracle" },
    { id: 2, key: "Participants", value: "2" },
    { id: 3, key: "Time", value: "09:00 am" },
    { id: 4, key: "Location", value: "ESV" },
  ];

  return (
    <Paper shadow="sm" p="sm">
      <Flex align="center" justify="space-between" mb={12}>
        <Text size="xl" fw={700}>
          Today Booking
        </Text>

        <Flex justify="space-between" align="center">
          <ActionIcon size={42} variant="filled" disabled bg="transparent">
            <IconChevronLeft stroke={1.5} />
          </ActionIcon>

          <ActionIcon
            size={42}
            variant="filled"
            bg="none"
            c="dark"
            color="dark"
          >
            <IconChevronRight stroke={2.5} />
          </ActionIcon>
        </Flex>
      </Flex>
      <Paper shadow="xs" p="md" bg="#F9F9FB">
        <List size="sm" fw={600} component={Group}>
          <List.Item>MTB Lesson</List.Item>
          <List.Item>Downhill Youth</List.Item>
          <List.Item>Beginner</List.Item>
        </List>
        <Space h="md" />
        <Grid align="center" justify="space-between" mt={5}>
          {booking.map((obj) => (
            <React.Fragment key={obj.id}>
              <Grid.Col span={5}>
                <Text size="xs">{obj.key}</Text>
                <Text size="sm" fw={600}>
                  {obj.value}
                </Text>
              </Grid.Col>
            </React.Fragment>
          ))}
        </Grid>
        <Space h="lg" />
        <Flex align="center" justify="space-between">
          <Button
            size="sm"
            fw={500}
            leftSection={<IconPhone size={18} />}
            variant="default"
          >
            Contact
          </Button>

          <Button
            fw={500}
            size="sm"
            leftSection={<IconBolt size={18} />}
            variant="default"
          >
            Start Activity
          </Button>
        </Flex>
        <Space h="lg" />

        <Center>
          <Anchor
            justify="center"
            size="sm"
            c="dark"
            href=""
            component={Link}
            target="_blank"
            underline="always"
          >
            View Details
          </Anchor>
        </Center>
      </Paper>
    </Paper>
  );
}
