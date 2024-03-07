"use client";

import {
  Anchor,
  Box,
  Button,
  Center,
  Flex,
  Group,
  PasswordInput,
  Text,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useToggle } from "@mantine/hooks";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import SuccessResetPassword from "@/app/components/signInFlow/SuccessResetPassword";
// import { resetPassword } from "@/app/api/auth/Authentications";
// import { useRouter, useSearchParams } from "next/navigation";

export default function SetNewPassword() {
  const [type, toggle] = useToggle(["newPassword", "success"]);
  // const router = useRouter();
  // const searchParams = useSearchParams();
  const form = useForm({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    validate: {
      newPassword: (value) =>
        value.length < 8 ? "Password must be at least 8 characters" : null,
      confirmPassword: (value, values) =>
        value !== values.newPassword ? "Passwords did not match" : null,
    },
  });

  const handleReset = async (values: {
    newPassword: string;
    confirmPassword: string;
  }) => {
    if (form.isValid("confirmPassword")) {
      const data = { password: values.newPassword };
      console.log("reset data", data);
      toggle();
      // const token = searchParams.get("token");
      // const status = await resetPassword(data, token);
      // if (status) router.push("/signin");
    }
  };

  return (
    <Center mx={"auto"} h={"100vh"}>
      <Box w={400} mx="auto" px={10}>
        {type === "newPassword" ? (
          <form onSubmit={form.onSubmit((values) => handleReset(values))}>
            <Flex
              direction={"column"}
              gap={"lg"}
              justify={"center"}
              align={"center"}
            >
              <Title>Set new password</Title>
              <Text size="sm" ta={"center"} c={"dark.3"}>
                Your password has been successfully reset. Click below to log in
                magically.
              </Text>
              <PasswordInput
                w={"100%"}
                variant="filled"
                size="md"
                radius="xs"
                label="New password"
                placeholder="enter password"
                {...form.getInputProps("newPassword")}
              />
              <PasswordInput
                w={"100%"}
                variant="filled"
                size="md"
                radius="xs"
                label="Re-type password"
                placeholder="confirm password"
                {...form.getInputProps("confirmPassword")}
              />
              <Button fullWidth type="submit" radius={"xs"} size="md">
                Reset Password
              </Button>
              <Anchor component={Link} href={"/signin"}>
                <Group align="center" c={"dark.3"}>
                  <IoMdArrowRoundBack />
                  <Text size="sm" c={"dark.3"}>
                    Back to log in
                  </Text>
                </Group>
              </Anchor>
            </Flex>
          </form>
        ) : (
          <SuccessResetPassword />
        )}
      </Box>
    </Center>
  );
}
