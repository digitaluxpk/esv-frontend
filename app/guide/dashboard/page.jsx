"use client";

import { Grid, Space } from "@mantine/core";

import { gudieBookingStatus } from "@/app/utils/constants";
import StatusCards from "@/app/components/cards/StatusCards";
import ReportChart from "@/app/components/charts/ReportChart";
import { IconChevronDown } from "@tabler/icons-react";
import TodayBooking from "@/app/components/guideDashboard/TodayBooking";
import BookingTable from "@/app/components/tables/BookingTable";

export default function Guide() {
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
          <ReportChart />
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
