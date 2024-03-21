import {
  Text,
  Paper,
  Grid,
  Space,
  Center,
  List,
  Group,
  Button,
  useMantineTheme,
} from "@mantine/core";

import Link from "next/link";
import React from "react";

export default function NewBookingCard({ bookings,onClose }) {
  const theme = useMantineTheme();

  return (
    <div>
      {bookings?.map((booking, bookingIndex) => (
        <Paper key={bookingIndex} shadow="xs" p="sm" mt="sm" bg="#fdfdfd">
          <List size="xs" fw={600} component={Group}>
            {booking.list.map((item, index) => (
              <List.Item key={index}>{item}</List.Item>
            ))}
          </List>

          <Space h="md" />
          <Grid align="center" justify="space-between" mt={5}>
            {booking.info.map((item, index) => (
              <Grid.Col span={5} key={index}>
                <Text size="xs">{item.key}</Text>
                <Text size="xs" mt={10} fw={600}>
                  {item.value}
                </Text>
              </Grid.Col>
            ))}
          </Grid>
          <Space h="lg" />

          <Center>
            <Button
              fullWidth
              variant="default"
              onClick={onClose}
              component={Link}
              href={{
                pathname: "/guide/bookings/123",
                query: { status: "pending" },
              }}
            >
              View Details
            </Button>
          </Center>
        </Paper>
      ))}
    </div>
  );
}
