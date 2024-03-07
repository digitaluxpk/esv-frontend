"use client";

import { Button, Flex, Text, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";

export default function ForgotPasswordForm({ handleForgotPassword }) {
  const form = useForm({
    initialValues: {
      email: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const handleClick = () => {
    if (form.isValid("email")) {
      handleForgotPassword();
    }
  };

  return (
    <form
      style={{ width: "100%" }}
      onSubmit={form.onSubmit((values) => console.log(values))}
    >
      <Flex direction={"column"} gap={"lg"} justify={"center"} align={"center"}>
        <Title>Forgot password?</Title>
        <Text size="sm" c={"dark.3"}>
          No worries, we’ll send you reset instructions.
        </Text>
        <TextInput
          w={"100%"}
          variant="filled"
          size="md"
          radius="xs"
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
        />
        <Button
          fullWidth
          type="submit"
          onClick={handleClick}
          radius={"xs"}
          size="md"
        >
          Reset Password
        </Button>
      </Flex>
    </form>
  );
}
