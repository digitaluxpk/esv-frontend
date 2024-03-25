"use client";

import {
  Button,
  Center,
  Divider,
  Flex,
  Modal,
  Pill,
  Text,
} from "@mantine/core";
import { useState } from "react";
import { DatePicker } from "@mantine/dates";
import { useMultiSelection } from "@/app/hooks/useMultiSelection";
import { locations } from "@/app/utils/constants";
import "./styles.css";

export default function AvailabiltySelection({
  opened,
  close,
  handleAvailableDates,
}) {
  const { selectedValues, handleSelection } = useMultiSelection();
  const [selectedDates, setSelectedDates] = useState([]);
  const today = new Date();
  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 60);
  return (
    <Modal
      opened={opened}
      size={500}
      onClose={close}
      centered
      withCloseButton={false}
    >
      <Center w={"100%"}>
        <Flex direction={"column"} px={20} my={15} align={"center"}>
          <Text ta={"center"} fw={600} fz={24}>
            Select Date (s) you want to mark available
          </Text>
          <DatePicker
            mt={15}
            minDate={today}
            maxDate={maxDate}
            size={"lg"}
            type="multiple"
            value={selectedDates}
            onChange={setSelectedDates}
          />
          <Divider my={20} w={"100%"} />
          <Text fw={500} fz={16} w={"100%"} ta={"start"}>
            Select your location (s)
          </Text>
          <Flex
            my={20}
            w={"100%"}
            align={"center"}
            gap={"sm"}
            wrap={"wrap"}
            direction={"row"}
          >
            {locations?.map((item) => {
              const isSelected = selectedValues?.includes(item);
              const colorProps = {
                c: isSelected ? "white" : "black",
                bg: isSelected ? "black" : "transparent",
              };

              return (
                <Pill
                  style={{ border: "1px solid rgba(163, 163, 163, 0.5)" }}
                  size="md"
                  {...colorProps}
                  key={item}
                  onClick={() => handleSelection(item)}
                >
                  {item}
                </Pill>
              );
            })}
          </Flex>

          <Flex direction={"row"} justify={"space-between"} w={"100%"} mt={10}>
            <Button
              size="md"
              w={"49%"}
              fw={500}
              fz={"md"}
              radius={0}
              variant="outline"
              color="gray"
              c={"black"}
              onClick={close}
            >
              Cancel
            </Button>
            <Button
              size="md"
              w={"49%"}
              fw={500}
              fz={"md"}
              radius={0}
              variant="filled"
              onClick={() => {
                handleAvailableDates(selectedDates);
                close();
              }}
            >
              Add Available
            </Button>
          </Flex>
        </Flex>
      </Center>
    </Modal>
  );
}
