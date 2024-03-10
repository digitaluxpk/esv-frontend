"use client";
import { Text, Paper, Flex, Grid,useMantineTheme} from "@mantine/core";
import { IconArrowUp, IconArrowDown } from "@tabler/icons-react";
export default function StatusCards({ booking }) {
  const theme = useMantineTheme();

  return (
    <Grid.Col span={3}>
      <Paper shadow="sm" p="sm">
        <Text size="sm" c="{grey.8}" fw={500}>
          {booking.title}
        </Text>
        <Text size="md" mt={4} c="{grey.8}" fw={600}>
          {booking.count}
        </Text>

        {booking.performance === "profit" ? (
          <Flex align="center" justify="space-between" mt={4} h={30}>
            <Flex bg={theme.colors.green[0]} justify="flex-start" align="center">
              <IconArrowUp stroke={2} color="green" size={16} />
              <Text size="xs" c="green" fw={800}>
                {booking.performance_count}
              </Text>
            </Flex>
            <Text size={10} fw={500}>
              {booking.performance_text}
            </Text>
          </Flex>
        ) : booking.performance === "loss" ? (
          <Flex align="center" justify="space-between" mt={4} h={30}>
            <Flex bg="#FEF3F2" justify="flex-start" align="center">
              <IconArrowDown stroke={2} color="red" size={16} />
              <Text size="xs" c="primary-red" fw={800}>
                {booking.performance_count}
              </Text>
            </Flex>
            <Text size={10} fw={500}>
              {booking.performance_text}
            </Text>
          </Flex>
        ) : null}
      </Paper>
    </Grid.Col>
  );
}
