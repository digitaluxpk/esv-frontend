"use client";

import { Button, Center, Flex, Modal, Text, Select } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import { IconInfoCircle } from "@tabler/icons-react";
import Link from "next/link";
export default function CancelBookingModal({ opened, close, booking,userType }) {
  const form = useForm({
    initialValues: {
      reason: "unavailable",
    },
    validate: {},
  });
  return (
    <Modal
      styles={{
        header: { color: "blue" },
      }}
      shadow={"lg"}
      centered
      opened={opened}
      onClose={close}
      size={450}
      overlayProps={{
        blur: 3,
      }}
    >
      <form
        onReset={form.onReset}
        onSubmit={form.onSubmit((values) => console.log(values))}
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
            <IconInfoCircle size={40} stroke={2} color="#FF1616" />

            <Text fw={700} fz={20} ta={"center"}>
               Cancel Booking!
            </Text>

            <Flex justify={"center"} align="flex-start">
              <Text fs="sm" fw={500}>
                Are you are sure?{" "}
              </Text>
              <Text fz="sm" fw={300}>
                You want to cancel this bookings
              </Text>
            </Flex>

            <Select
              allowDeselect={false}
              withCheckIcon={false}
              w={"100%"}
              radius={0}
              rightSection={<IconChevronDown />}
              label={
                <Text mb={4} fz={"sm"}>
                  Select a reason
                </Text>
              }
              size="md"
              value={form.values.reason}
              data={[
                { value: "unavailable", label: "Unavailable" },
                { value: "Child", label: "Child" },
                { value: "Old", label: "Old" },
              ]}
              {...form.getInputProps("reason")}
            />

            <Flex
              align={"center"}
              w={"100%"}
              direction={"row"}
              justify="space-between"
              my={15}
            >
              <Button
                w={"49%"}
                fw={500}
                fz={"md"}
                radius={0}
                variant="outline"
                color={"dark.3"}
                type="reset"
              >
                Cancel
              </Button>

              <Link 
              
              // href={{
              //     pathname: "/${userType}/bookings/123",
              //     query: { status: "canceled" },
              //   }}
              
              href={`/${userType}/bookings/123?status=canceled`}
               component={Button}>

    <Button  fw={500}
                fz={"md"}
                radius={0}
                variant="filled"  mr={20}>
      Reject Booking
    </Button>

</Link>






              {/* <Button
                component={Link}
                href={{
                  pathname: "/${userType}/bookings/123",
                  query: { status: "canceled" },
                }}
                // type="submit"
                w={"49%"}
                fw={500}
                fz={"md"}
                radius={0}
                variant="filled"
              >
                Submit
              </Button> */}
            </Flex>
          </Flex>
        </Center>
      </form>
    </Modal>
  );
}
