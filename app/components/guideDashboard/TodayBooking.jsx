import {
  Text,
  Paper,
  Flex,
  Grid,
  Space,
  Center,
  ActionIcon,
  List,
  Group,
  Button,
  Anchor,
  useMantineTheme,
} from "@mantine/core";
import {
  IconPhone,
  IconBolt,
  IconChevronRight,
  IconChevronLeft,
  IconRefresh,
} from "@tabler/icons-react";
import { useState } from "react";
import Link from "next/link";
import React from "react";
import { today_booking_list } from "@/app/utils/constants";

export default function TodayBooking() {
  const [showFullWidthButton, setShowFullWidthButton] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useMantineTheme();
  const toggleVisibility = () => setShowFullWidthButton(!showFullWidthButton);

  const handleNext = () => {
    if (currentIndex < today_booking_list.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentBooking = today_booking_list[currentIndex];

  return (
    <Paper shadow="sm" p="sm" h="100%">
      <Flex align="center" justify="space-between">
        <Text size="xl" fw={700}>
          Today's Booking
        </Text>

        <Flex justify="space-between" align="center">
          <ActionIcon
            size={42}
            variant="filled"
            c={currentIndex === 0 ? "" : "dark"}
            bg="transparent"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
          >
            <IconChevronLeft stroke={2} />
          </ActionIcon>

          <ActionIcon
            size={42}
            variant="filled"
            c={currentIndex === today_booking_list.length - 1 ? "" : "dark"}
            bg="none"
            onClick={handleNext}
            disabled={currentIndex === today_booking_list.length - 1}
          >
            <IconChevronRight stroke={2} />
          </ActionIcon>
        </Flex>
      </Flex>

      <Paper shadow="xs" p="sm" mt="sm" bg="#F9F9FB">
        <List size="sm" fw={600} component={Group}>
          {currentBooking.list.map((item, index) => (
            <List.Item key={index}>{item}</List.Item>
          ))}
        </List>

        <Space h="md" />
        <Grid align="center" justify="space-between" mt={5}>
          {currentBooking.info.map((item, index) => (
            <Grid.Col span={5} key={index}>
              <Text size="xs">{item.key}</Text>
              <Text size="sm" fw={600}>
                {item.value}
              </Text>
            </Grid.Col>
          ))}
        </Grid>
        <Space h="lg" />

        {showFullWidthButton ? (
          <Button
            fullWidth
            bg={theme.colors.dark[7]}
            leftSection={<IconRefresh size={16} />}
            onClick={toggleVisibility}
          >
            Return Equipment
          </Button>
        ) : (
          <Flex align="center" justify="space-between">
            <Button
              size="sm"
              fw={500}
              leftSection={<IconPhone size={18} />}
              variant="default"
              onClick={toggleVisibility} // Toggle visibility on click
            >
              Contact
            </Button>

            <Button
              fw={500}
              size="sm"
              leftSection={<IconBolt size={18} />}
              variant="default"
              onClick={toggleVisibility} // Toggle visibility on click
            >
              Start Activity
            </Button>
          </Flex>
        )}
        <Space h="lg" />

        <Center>
          <Anchor
            size="sm"
            c="dark"
            href="#"
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
