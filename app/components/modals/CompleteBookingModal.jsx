"use client";

import {
  Button,
  Center,
  Space,
  Flex,
  Modal,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons-react";
import { useToggle } from "@mantine/hooks";
import Link from "next/link";
import { useState } from 'react';
export default function CompleteBookingModal({ opened, close }) {
//   const [type, toggle] = useToggle(["Great", "Congrats"]);
//   const theme = useMantineTheme();

const [type, setType] = useState('Great');
  const theme = useMantineTheme();

  const handleClick = () => {
    setType((prevType) => (prevType === 'Great' ? 'Congrats' : 'Great'));
  };

  return (
    <Modal
      shadow={"lg"}
      centered
      opened={opened}
      onClose={close}
      size={400}
      overlayProps={{
        blur: 1,
      }}
    >
      <Center w={"100%"}>
        <Flex
          direction={"column"}
          wrap={"wrap"}
          px="20"
          w={"100%"}
          align={"center"}
          gap={"xs"}
          justify={"center"}
        >
          <IconCircleCheck
            size={40}
            stroke={1.5}
            bg="#D1FADF"
            radius={10}
            color={theme.colors.green[6]}
          />

          <Text fw={700} fz={20} ta={"center"}>
            {type === "Great" ? "Great!" : "Congrats"}
          </Text>

          <Text fs="xs" ta="center" fw={400}>
            {type === "Great" ? (
              "  Hey Theo! Thanks a lot for return equipment!"
            ) : (
              <>
                You have earned <strong>$15</strong> in this tour. Best of luck
                for your next tour.
              </>
            )}
          </Text>
          <Space h="sm" />

          <Button

            fullWidth
            type="submit"
            // onClick={() => toggle()}
            onClick={handleClick}
            fw={500}
            fz={"md"}
            radius={0}
            variant="filled"
            component={Link}
            href={{
              pathname: "/guide/bookings/123",
              query: { status: "completed" },
            }}
          >
            Back to home
          </Button>
        </Flex>
      </Center>
      <Space h="md" />
    </Modal>
  );
}
