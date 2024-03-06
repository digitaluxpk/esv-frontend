"use client";

import {
  ActionIcon,
  AppShell,
  Avatar,
  Burger,
  Button,
  Flex,
  Group,
  Image,
  Menu,
  Text,
} from "@mantine/core";
import Link from "next/link";
import { IconPlus } from '@tabler/icons-react';
import { IconChevronDown } from '@tabler/icons-react';
import { IconBell } from '@tabler/icons-react';

export default function Header({
  toggleMobile,
  mobileOpened,
  desktopOpened,
  toggleDesktop,
}) {
  return (
    <AppShell.Header>
      <Group h="100%" justify="space-between" pl="md">
        <Group h={"100%"}>
          <Burger
            opened={mobileOpened}
            onClick={toggleMobile}
            hiddenFrom="sm"
            size="sm"
          />
          <Burger
            opened={desktopOpened}
            onClick={toggleDesktop}
            visibleFrom="sm"
            size="sm"
          />
          <Group>
            <Link href={"/"}>
              <Image w={48} h={48} src={"/assets/svg/app_icon.svg"} />
            </Link>
          </Group>
        </Group>

        <Group px={"lg"} gap={"sm"} align="center">
          <Button hiddenFrom="xs" radius={0}>
            <IconPlus />
          </Button>

          <Button visibleFrom="xs" radius={0} leftSection={<IconPlus />}>
            Create New Booking
          </Button>
          <ActionIcon c={"black"} size={"xl"} variant="transparent">
            <IconBell  width={26} />
          </ActionIcon>
          <Menu position="bottom-end" withArrow>
            <Menu.Target>
              <Group>
                <Avatar src={"/assets/images/avatar1.png"} />
                <Flex visibleFrom="xs" direction={"column"}>
                  <Text fw={600}>Sure Name</Text>
                </Flex>
                <IconChevronDown />
              </Group>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>Application</Menu.Label>
              <Menu.Item>Settings</Menu.Item>
              <Menu.Item>Messages</Menu.Item>
              <Menu.Item>Gallery</Menu.Item>
              <Menu.Item>Search</Menu.Item>
              <Menu.Item color="red">Delete my account</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Group>
    </AppShell.Header>
  );
}
