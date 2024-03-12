"use client";

import {
  Text,
  Paper,
  Flex,
  Select,
  
  Grid,
  Space,
} from "@mantine/core";
import { useState } from "react";
import { gudieBookingStatus } from "@/app/utils/DashboardConstants";
import StatusCards from "@/app/components/guideDashboardComponents/StatusCards";
import ReportChart from "@/app/components/guideDashboardComponents/ReportChart";
import { IconChevronDown } from "@tabler/icons-react";
import TodayBooking from "@/app/components/guideDashboardComponents/TodayBooking";
import BookingTable from "@/app/components/guideDashboardComponents/BookingTable";



export default function Guide() {
  const [value, setValue] = useState(null);

  const durations = [
    { value: "1months", label: "1 Month" },
    { value: "3months", label: "3 Months" },
    { value: "6months", label: "6 Months" },
    { value: "1year", label: "1 Year" },
  ];
  return (
    <div>
      <Grid gutter="lg">
        {gudieBookingStatus?.map((booking) => (
          <StatusCards key={booking.id} booking={booking} />
        ))}
      </Grid>
      <Space h="lg" />
      <Grid>
        <Grid.Col span={8}>
          <Paper shadow="sm" p="sm">
            <Flex align="center" justify="space-between" >
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
            <ReportChart />
          </Paper>
        </Grid.Col>
        <Grid.Col span={4}>
          <TodayBooking />
        </Grid.Col>
      </Grid>
      <Space h="lg" />
      <BookingTable />

    </div>
  );
}
