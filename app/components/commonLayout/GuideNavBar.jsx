"use client";

import { ActionIcon, AppShell, Flex, NavLink, Text } from "@mantine/core";
import Link from "next/link";
import {
  IconCalendarStats,
  IconLayoutGrid,
  IconSettings,
  IconCalendarCheck,
  IconMoneybag,
} from "@tabler/icons-react";
import { usePathname } from "next/navigation";

export default function GuideNavBar({}) {
  const pathname = usePathname();
  return (
    <AppShell.Navbar>
      <AppShell.Section>
        <Flex direction={"column"} gap={12} p={"md"} my={"md"}>
          <NavLink
            component={Link}
            href="/guide"
            active={pathname.includes("/guide/dashboard")}
            label={
              <Text fz={16} fw={400}>
                Dashboard
              </Text>
            }
            leftSection={
              <ActionIcon
                c={pathname.includes("/guide/dashboard") ? "primary-red" : "black"}
                variant="transparent"
              >
                <IconLayoutGrid stroke={1.5} />
              </ActionIcon>
            }
          />
          <NavLink
            component={Link}
            href="/guide/schedule"
            active={pathname.includes("/guide/schedule")}
            label={
              <Text fz={16} fw={400}>
                Schedule
              </Text>
            }
            leftSection={
              <ActionIcon
                c={pathname.includes("/guide/schedule") ? "primary-red" : "black"}
                variant="transparent"
              >
                <IconCalendarCheck stroke={1.5} />
              </ActionIcon>
            }
          />
          <NavLink
            component={Link}
            href="/guide/invoice"
            active={pathname.includes("/guide/invoice")}
            label={
              <Text fz={16} fw={400}>
                Invoice
              </Text>
            }
            leftSection={
              <ActionIcon
                c={pathname.includes("/guide/invoice") ? "primary-red" : "black"}
                variant="transparent"
              >
                <IconMoneybag stroke={1.5} />
              </ActionIcon>
            }
          />
          <NavLink
            component={Link}
            href="/guide/bookings"
            active={pathname.includes("/guide/bookings")}
            label={
              <Text fz={16} fw={400}>
                Bookings
              </Text>
            }
            leftSection={
              <ActionIcon
                c={pathname.includes("/guide/bookings") ? "primary-red" : "black"}
                variant="transparent"
              >
                <IconCalendarStats stroke={1.5} />
              </ActionIcon>
            }
          />
          <NavLink
            component={Link}
            href="/guide/settings"
            active={pathname.includes("/guide/settings")}
            label={
              <Text fz={16} fw={400}>
                Account Settings
              </Text>
            }
            leftSection={
              <ActionIcon
                c={pathname.includes("/guide/settings") ? "primary-red" : "black"}
                variant="transparent"
              >
                <IconSettings stroke={1.5} />
              </ActionIcon>
            }
          />
        </Flex>
      </AppShell.Section>
    </AppShell.Navbar>
  );
}
