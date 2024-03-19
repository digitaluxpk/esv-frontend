"use client";

import { Grid, Space } from "@mantine/core";

import { summaryList } from "@/app/utils/constants";

import StatusCards from "@/app/components/cards/StatusCards";
import ReportChart from "@/app/components/charts/ReportChart";
import InvoiceTable from "@/app/components/tables/InvoiceTable";

import {
  invoice_table_header,
  invoice_table_data,
  invoice_earning_report,
} from "@/app/utils/constants";

export default function Invoice() {
  return (
    <div>
      <Grid gutter="lg">
        {summaryList?.map((summary) => (
          <StatusCards key={summary.id} booking={summary} count={4} />
        ))}
      </Grid>
      <Space h="lg" />
      <Grid>
        <Grid.Col span={12}>
          <ReportChart
            graphName={"Earning report"}
            graphReport={invoice_earning_report}
          />
        </Grid.Col>
      </Grid>
      <Space h="lg" />
      <InvoiceTable
        headers={invoice_table_header}
        data={invoice_table_data}
        tableHeading={"Invoice"}
      />
    </div>
  );
}
