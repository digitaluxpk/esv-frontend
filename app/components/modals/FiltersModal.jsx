"use client";

import {
  Button,
  Center,
  Divider,
  Flex,
  Modal,
  Select,
  Text,
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { useForm } from "@mantine/form";

export default function FiltersModal({ opened, close }) {
  const form = useForm({
    initialValues: {
      location: "ESV1",
      duration: "Today",
      catagory: "Youth",
    },
    validate: {},
  });
  return (
    <Modal
      shadow={"lg"}
      centered
      opened={opened}
      onClose={close}
      withCloseButton
      size={420}
      overlayProps={{
        blur: 3,
      }}
      title={
        <Center miw="100%">
          <Text fw={700} size="lg" align="center">
            Filter
          </Text>
        </Center>
      }
    >
      <Divider size="xs"></Divider>
      <form
        onReset={form.onReset}
        onSubmit={form.onSubmit((values) => console.log(values))}
      >
        <Center w={"100%"} mt={10}>
          <Flex
            direction={"column"}
            wrap={"wrap"}
            px={30}
            w={"100%"}
            align={"center"}
            gap={"sm"}
            justify={"center"}
          >
            <Select
              allowDeselect={false}
              withCheckIcon={false}
              w={"100%"}
              variant="filled"
              radius={0}
              rightSection={<IconChevronDown />}
              label={
                <Text mb={4} fz={"sm"}>
                  Duration
                </Text>
              }
              size="md"
              value={form.values.duration}
              data={[
                { value: "Today", label: "Full Day" },
                { value: "This Week", label: "This Week" },
                { value: "This Month", label: "This Month" },
                { value: "This 3 Month", label: "This 3 Month" },
                { value: "This 6 Month", label: "This 6 Month" },
                { value: "This Year", label: "This Year" },
              ]}
              {...form.getInputProps("duration")}
            />
            <Select
              allowDeselect={false}
              withCheckIcon={false}
              w={"100%"}
              variant="filled"
              radius={0}
              rightSection={<IconChevronDown />}
              label={
                <Text mb={4} fz={"sm"}>
                  Catagory
                </Text>
              }
              size="md"
              value={form.values.catagory}
              data={[
                { value: "Youth", label: "Youth" },
                { value: "Child", label: "Child" },
                { value: "Old", label: "Old" },
              ]}
              {...form.getInputProps("catagory")}
            />
            <Select
              allowDeselect={false}
              withCheckIcon={false}
              w={"100%"}
              variant="filled"
              radius={0}
              rightSection={<IconChevronDown />}
              label={
                <Text mb={4} fz={"sm"}>
                  Location
                </Text>
              }
              size="md"
              value={form.values.location}
              data={[
                { value: "ESV1", label: "ESV1" },
                { value: "ESV2", label: "ESV2" },
                { value: "ESV3", label: "ESV3" },
                { value: "ESV4", label: "ESV4" },
              ]}
              {...form.getInputProps("location")}
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
                Reset
              </Button>
              <Button
                type="submit"
                w={"49%"}
                fw={500}
                fz={"md"}
                radius={0}
                variant="filled"
              >
                Filter
              </Button>
            </Flex>
          </Flex>
        </Center>
      </form>
    </Modal>
  );
}
