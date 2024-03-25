"use client";
import { useState } from "react";
import { AreaChart } from "@mantine/charts";
import { booking_report, durations } from "@/app/utils/constants";
import { IconChevronDown } from "@tabler/icons-react";

import { Text, Paper, Flex, Select, Space } from "@mantine/core";
export default function ReportChart() {
  const [value, setValue] = useState(null);

  return (
    <Paper shadow="sm" p="sm">
      <Flex align="center" justify="space-between">
        <Text size="xl" fw={700}>
          Booking report
        </Text>
        <Select
          mih={30}
          w={100}
          data={durations}
          value={value}
          onChange={(newValue) => setValue(newValue)}
          placeholder="Select "
          fz={10}
          size="sm"
          icon={<IconChevronDown stroke={1.5} />}
        />
      </Flex>
      <Space h="md" />
      <AreaChart
        h={290}
        data={booking_report}
        dataKey="date"
        series={[{ name: "Bookings", color: "indigo.6" }]}
        curveType="monotone"
        connectNulls
      />
    </Paper>
  );
}
