"use client";
import { useState } from "react";
import React from "react";
import {
  Paper,
  Flex,
  Text,
  Button,
  Space,
  Grid,
  Badge,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconArrowNarrowLeft, IconPointFilled } from "@tabler/icons-react";
import {
  invoiceDetail,
  invoiceDetailTableHeader,
  invoiceDetailTableData,
} from "@/app/utils/constants";
import { useSearchParams } from "next/navigation";

import Link from "next/link";
import StatusCards from "@/app/components/cards/StatusCards";
import SpecificInvoiceDetailTable from "@/app/components/tables/SpecificInvoiceDetailTable";
export default function InvoiceDetail() {
  const searchParams = useSearchParams();
  const type = searchParams.get("status");

  const [activityStatus, setActivityStatus] = useState(
    type ? type.toLowerCase() : "Paid"
  );

  const theme = useMantineTheme();

  return (
    <div style={{ marginLeft: "1%" }}>
      {/* <Flex align="center" justify="space-between"> */}
      <Link href="/guide/invoice">
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

      <SpecificInvoiceDetailTable
        headers={invoiceDetailTableHeader}
        data={invoiceDetailTableData}
        tableHeading={"Invoice ID - #12785"}
      />
    </div>
  );
}
