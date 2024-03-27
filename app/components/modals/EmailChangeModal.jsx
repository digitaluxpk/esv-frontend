"use client";

import {
  Button,
  Center,
  Divider,
  Flex,
  Modal,
  TextInput,
  Text,
} from "@mantine/core";

import { useForm } from "@mantine/form";
import { textInputStyles } from "@/app/components/modals/styles";
export default function EmailChangeModal({ opened, close }) {
  const form = useForm({
    initialValues: {
      email: "rbrajumullah100@gmail.com",
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
        blur: 1,
      }}
      title={
        <Center miw="100%">
          <Text fw={800} size="xl" align="center">
            Change Email
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
            
            <TextInput
            label="Email"
              placeholder="Enter your email"
              w={"100%"}
              styles={{ textInputStyles }}
              {...form.getInputProps("email")}
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
                fw={600}
                fz={"md"}
                radius={0}
                variant="outline"
                color={"dark.3"}
                type="reset"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                w={"49%"}
                fw={600}
                fz={"md"}
                radius={0}
                variant="filled"
              >
                Update
              </Button>
            </Flex>
          </Flex>
        </Center>
      </form>
    </Modal>
  );
}
