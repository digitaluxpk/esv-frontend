"use client";

import { Grid, Space } from "@mantine/core";

import { vendorBookingStatus, booking_report } from "@/app/utils/constants";
import StatusCards from "@/app/components/cards/StatusCards";
import ReportChart from "@/app/components/charts/ReportChart";
import VendorBookingTable from "@/app/components/tables/VendorBookingTable";

export default function Dashboard() {
  return (
    <div>
      <Grid gutter="lg">
        {vendorBookingStatus?.map((booking) => (
          <StatusCards key={booking.id} booking={booking} count={3} />
        ))}
      </Grid>
      <Space h="lg" />
      <Grid>
        <Grid.Col span={12}>
          <ReportChart
            graphName={"Booking report"}
            graphReport={booking_report}
          />
        </Grid.Col>
        
      </Grid>
      <Space h="lg" />
      <VendorBookingTable />
    </div>
  );
}
