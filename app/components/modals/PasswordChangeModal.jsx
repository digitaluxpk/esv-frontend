"use client";

import {
  Button,
  Center,
  Divider,
  Flex,
  Modal,
  Select,
  Text,
  PasswordInput,
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
export default function PasswordChangeModal({ opened, close }) {
  const [visible, { toggle }] = useDisclosure(false);
  const form = useForm({
    initialValues: {
      oldPassword: "secret",
      newPassword: "secret",
      confirmPassword: "secret",
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
            Change Password
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
            <PasswordInput
              w={"100%"}
              label="Old password"
              defaultValue="secret"
              visible={visible}
              onVisibilityChange={toggle}
              {...form.getInputProps("oldPassword")}
            />

            <PasswordInput
              w={"100%"}
              label="New Password"
              defaultValue="secret"
              visible={visible}
              onVisibilityChange={toggle}
              {...form.getInputProps("newPassword")}
            />
            <PasswordInput
              w={"100%"}
              label="Confirm password"
              defaultValue="secret"
              visible={visible}
              onVisibilityChange={toggle}
              {...form.getInputProps("confirmPassword")}
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
