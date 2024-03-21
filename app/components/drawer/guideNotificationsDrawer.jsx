"use client";

import {
  Drawer,
  Box,
  Text,
  Title,
  useMantineTheme,
  Divider,
  Image,
  Flex,
  Space,
} from "@mantine/core";
import { guideNotificationsList } from "@/app/utils/constants";
import NewBookingCard from "@/app/components/cards/NewBookingCard";
import React from "react";

export default function GuideNotificationDrawer({ opened, onClose }) {
  const theme = useMantineTheme();
  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      title={
        <Box>
          <Title order={3} fw={"bold"}>
            My Notifications
          </Title>
          <Text size="xs" c={theme.primaryColor} fw={700} mt={16}>
            Mark all as read
          </Text>
        </Box>
      }
      padding="md"
      size="md"
      fw={"bold"}
      position="right"
    >
      <Divider h="xs" />

      {guideNotificationsList?.map((notification) => (
        <React.Fragment key={notification.id}>
          <Flex align="start" justify="space-between">
            <Image w={50} h={50} src={"/assets/svg/app_icon.svg"} />
            <Box ml={12} mt={16}>
              <Text size="sm">
                <span style={{ fontWeight: 600 }}>{notification.title}</span> •{" "}
                {notification.time}
              </Text>
              {notification.status === "new" ? (
                <NewBookingCard
                  bookings={notification.detail}
                  onClose={onClose}
                />
              ) : (
                <Text size="xs">{notification.description}</Text>
              )}
            </Box>
          </Flex>
          <Space h="xs" />
          <Divider h="xs" />
        </React.Fragment>
      ))}
    </Drawer>
  );
}
