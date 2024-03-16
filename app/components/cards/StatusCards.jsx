"use client";
import { Text, Paper, Flex, Grid, useMantineTheme } from "@mantine/core";
import { IconArrowUp, IconArrowDown } from "@tabler/icons-react";

export default function StatusCards({ booking }) {
  const theme = useMantineTheme();
  // Determine the background color based on booking performance
  const backgroundColor =
    booking.performance === "profit" ? theme.colors.green[0] : "#FEF3F2";
  // Determine the icon color based on booking performance
  const iconColor =
    booking.performance === "profit" ? theme.colors.green[7] : "red";
  const textColor =
    booking.performance === "profit" ? theme.colors.green[7] : "primary-red";

  return (
    <Grid.Col span={3}>
      <Paper shadow="sm" p="sm">
        <Text size="sm" c="{grey.8}" fw={500}>
          {booking.title}
        </Text>
        <Text size="md" mt={4} c="{grey.8}" fw={600}>
          {booking.count}
        </Text>

        <Flex align="center" justify="space-between" mt={4} h={30}>
          <Flex bg={backgroundColor} justify="flex-start" align="center">
            {booking.performance === "profit" ? (
              <IconArrowUp stroke={2} color={iconColor} size={16} />
            ) : (
              <IconArrowDown stroke={2} color={iconColor} size={16} />
            )}
            <Text size="xs" c={textColor} fw={800}>
              {booking.performance_count}
            </Text>
          </Flex>
          <Text size={10} fw={500}>
            {booking.performance_text}
          </Text>
        </Flex>
      </Paper>
    </Grid.Col>
  );
}
