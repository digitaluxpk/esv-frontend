"use client";

import { Tooltip, Avatar, Text } from "@mantine/core";

export default function BookingGuides({ data }) {
  if (!Array.isArray(data) || data.length === 0) {
    return <Text>-</Text>;
  }
  return (
    <Tooltip.Group openDelay={300} closeDelay={100}>
      <Avatar.Group spacing="sm">
        {data.slice(0, 3).map((guide, index) => (
          <Tooltip key={index} label={guide.name}>
            <Avatar src={guide.img} radius="xl" />
          </Tooltip>
        ))}
        {data.length > 3 && (
          <Tooltip
            label={data.map((guide) => guide.name).join(", ")}
            position="top"
          >
            <Avatar radius="xl">+{data.length - 3}</Avatar>
          </Tooltip>
        )}
      </Avatar.Group>
    </Tooltip.Group>
  );
}
