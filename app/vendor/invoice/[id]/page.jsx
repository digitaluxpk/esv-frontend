"use client";
import { useState } from "react";
import React from "react";
import { Text, Button, Space, Grid, Badge } from "@mantine/core";
import { IconArrowNarrowLeft, IconPointFilled } from "@tabler/icons-react";

import {
  invoiceDetail,
  vendorOngoingBookingTableHeader,
  vendorOngoingBookingTableData,
} from "@/app/utils/constants";

import { useSearchParams } from "next/navigation";

import Link from "next/link";
import StatusCards from "@/app/components/cards/StatusCards";
import VendorOngoingBookingTable from "@/app/components/tables/VendorOngoingBookingTable";
export default function InvoiceDetail() {
  const searchParams = useSearchParams();
  const type = searchParams.get("status");

  const [activityStatus, setActivityStatus] = useState(
    type ? type.toLowerCase() : "Paid"
  );

  return (
    <div style={{ marginLeft: "1%" }}>
      <Link href="/vendor/invoice">
        <Button
          size="md"
          color="dark"
          leftSection={<IconArrowNarrowLeft size={20} />}
          variant="transparent"
        >
          Back
        </Button>
      </Link>

      <Text size="xl" fw="800">
        February 2024
      </Text>
      <Badge
        size="md"
        mt={6}
        tt="capitalize"
        // p={12}
        bg={activityStatus == "paid" ? "#E0FFEC" : "#FFF5DA"}
        c={activityStatus == "paid" ? "#008949" : "#FF7E33"}
        leftSection={
          <IconPointFilled
            stroke={activityStatus === "paid" ? "#008949" : "#FF7E33"}
          />
        }
      >
        {activityStatus === "paid" ? "Paid" : "UnPaid"}
      </Badge>

      <Space h="sm" />

      <Grid gutter="lg">
        {invoiceDetail?.map((invoice) => (
          <StatusCards key={invoice.id} booking={invoice} count={3} />
        ))}
      </Grid>

      <Space h="md" />

      <VendorOngoingBookingTable
        headers={vendorOngoingBookingTableHeader}
        data={vendorOngoingBookingTableData}
        tableHeading={"Invoice ID - #12785"}
        bookingType={""}
      />
    </div>
  );
}
