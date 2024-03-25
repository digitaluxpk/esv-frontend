"use client";

import { Button, Center, Flex, Modal, Text } from "@mantine/core";
import Link from "next/link";
export default function AcceptBookingModal({ opened, close, booking }) {
  return (
    <Modal
      shadow={"lg"}
      centered
      opened={opened}
      onClose={close}
      withCloseButton
      size={440}
      overlayProps={{
        blur: 3,
      }}
      fw={900}
      my={30}
      p={10}
      title={
        <Center miw="100%">
          <Text fw={700} size="lg" align="center">
            Please Select one
          </Text>
        </Center>
      }
    >
      <Center w={"100%"}>
        <Flex
          direction={"column"}
          wrap={"wrap"}
          px={30}
          w={"100%"}
          align={"center"}
          gap={"sm"}
          justify={"center"}
        >
          <Text fw={400} fz={13} c="#525252">
            Do you want to lead this group with 2 other guides? Then you will
            get paid according to Payment Group 2
          </Text>

          <Flex
            align={"center"}
            w={"100%"}
            direction={"row"}
            justify="space-between"
            // my={15}
          >
            <Button
              component={Link}
              href={{
                pathname: "/guide/bookings/123",
                query: { status: "pending" },
              }}
              fw={500}
              fz={"md"}
              radius={0}
              variant="outline"
              color={"dark"}
              type="reset"
            >
              Accept as Guide
            </Button>

            <Button
              type="submit"
              fw={500}
              fz={"md"}
              radius={0}
              variant="filled"
            >
              Accept as Leader
            </Button>
          </Flex>
        </Flex>
      </Center>
    </Modal>
  );
}
