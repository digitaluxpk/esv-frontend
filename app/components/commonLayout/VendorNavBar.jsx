"use client";

import { ActionIcon, AppShell, Flex, NavLink, Text } from "@mantine/core";

import Link from "next/link";
import { useState } from "react";
import {
  IconCalendarStats,
  IconLayoutGrid,
  IconSettings,
  IconCalendarCheck,
  IconMoneybag,
} from "@tabler/icons-react";

export default function VendorNavBar({}) {
  const [active, setActive] = useState(0);

  return (
    <AppShell.Navbar>
      <AppShell.Section>
        <Flex direction={"column"} gap={12} p={"md"} my={"md"}>
          <NavLink
            component={Link}
            href="/vendor"
            active={active === 0}
            onClick={() => setActive(0)}
            label={
              <Text fz={16} fw={400}>
                Dashboard
              </Text>
            }
            leftSection={
              <ActionIcon
                c={active === 0 ? "primary-red" : "black"}
                variant="transparent"
              >
                <IconLayoutGrid stroke={1.5} />
              </ActionIcon>
            }
          />
          <NavLink
            component={Link}
            href="/vendor/schedule"
            active={active === 1}
            onClick={() => setActive(1)}
            label={
              <Text fz={16} fw={400}>
                Schedule
              </Text>
            }
            leftSection={
              <ActionIcon
                c={active === 1 ? "primary-red" : "black"}
                variant="transparent"
              >
                <IconCalendarCheck stroke={1.5} />
              </ActionIcon>
            }
          />
          <NavLink
            component={Link}
            href="/vendor/invoice"
            active={active === 2}
            onClick={() => setActive(2)}
            label={
              <Text fz={16} fw={400}>
                Invoice
              </Text>
            }
            leftSection={
              <ActionIcon
                c={active === 2 ? "primary-red" : "black"}
                variant="transparent"
              >
                <IconMoneybag stroke={1.5} />
              </ActionIcon>
            }
          />
          <NavLink
            component={Link}
            href="/vendor/bookings"
            active={active === 3}
            onClick={() => setActive(3)}
            label={
              <Text fz={16} fw={400}>
                Bookings
              </Text>
            }
            leftSection={
              <ActionIcon
                c={active === 3 ? "primary-red" : "black"}
                variant="transparent"
              >
                <IconCalendarStats stroke={1.5} />
              </ActionIcon>
            }
          />
          <NavLink
            component={Link}
            href="/vendor/settings"
            active={active === 4}
            onClick={() => setActive(4)}
            label={
              <Text fz={16} fw={400}>
                Account Settings
              </Text>
            }
            leftSection={
              <ActionIcon
                c={active === 4 ? "primary-red" : "black"}
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
