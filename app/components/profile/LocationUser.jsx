"use client";
import { Space, Text, Divider, Chip, Group } from "@mantine/core";
import { useState } from "react";
export default function LocationUser({ list }) {
  const [selectedLocation, setSelectedLocation] = useState("any");
  return (
    <div>
      <Text size="lg" fw={800} my={10}>
        Location
      </Text>
      <Text size="sm" my={10}>
        Set location in which <strong>Ecole Suisse De VTT</strong>
      </Text>
      <Chip.Group value={selectedLocation} onChange={setSelectedLocation}>
        <Group justify="start" mt={"sm"}>
          {list?.map((loc) => (
            <Chip key={loc.key} value={loc.value} color={"black"} >
              {loc.location}
            </Chip>
          ))}
        </Group>
      </Chip.Group>
      <Space h="md" />
    </div>
  );
}
