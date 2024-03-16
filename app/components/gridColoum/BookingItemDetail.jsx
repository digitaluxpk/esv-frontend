"use client";
import React from "react";
import { Grid, Text } from "@mantine/core";
import BookingGuides from "../avatar/BookingGuides";

export default function BookingDetailItem({ label, value, guide }) {
  return (
    <Grid.Col span={4}>
      <Text size="xs" c="#737373">
        {label}
      </Text>
      {value && (
        <Text size="sm" mt="xs" c="#292929" fw={600}>
          {value}
        </Text>
      )}
      {guide && <BookingGuides data={guide} />}
    </Grid.Col>
  );
}
