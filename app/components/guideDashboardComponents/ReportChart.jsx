"use client"

import { AreaChart } from '@mantine/charts';
import {booking_report} from '@/app/utils/DashboardConstants';

export default function ReportChart() {
  return (
    <AreaChart
      h={290}
      data={booking_report}
      dataKey="date"
      series={[{ name: 'Bookings', color: 'indigo.6' }]}
      curveType="monotone"
      connectNulls
    />
  );
}