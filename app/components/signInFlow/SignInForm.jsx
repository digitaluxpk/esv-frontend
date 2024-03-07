"use client";

import { useForm } from "@mantine/form";
import {
  Anchor,
  Box,
  Button,
  Center,
  Checkbox,
  Flex,
  Grid,
  Group,
  PasswordInput,
  Text,
  TextInput,
  Image,
} from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SignInForm({ handleSubmit }) {
  const pathname = usePathname();
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 8 ? "Password must be at least 8 characters" : null,
    },
  });

  const handleClick = () => {
    // next line need to be removed its just for development
    // handleSubmit();
    if (pathname !== "/signin" && form.isValid("email", "password")) {
      handleSubmit();
    } else if (pathname === "/signin" && form.isValid("email")) {
      handleSubmit();
    }
  };

  return (
    <Grid>
      <Center mx={"auto"} h={"100vh"}>
        <Box w={400} mx="auto" px={10}>
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <Flex direction={"column"} gap={"xl"} justify={{ sm: "start" }}>
              <Flex direction={"column"} align={"center"}>
                <Image src={"/assets/svg/app_icon.svg"} w={56} h={56} />
                <Text fw={600} fz={24}>Welcome back</Text>
                <Text fw={400} fz={16} c={"gray"}>
                  Please enter your details.
                </Text>
              </Flex>
              <TextInput
                variant="filled"
                size="md"
                radius="xs"
                label="Email"
                placeholder="your@email.com"
                {...form.getInputProps("email")}
              />
              <PasswordInput
                variant="filled"
                size="md"
                radius="xs"
                label="Password"
                placeholder="Your password"
                {...form.getInputProps("password")}
              />
              <Group justify="space-between">
                <Checkbox size="sm" label="Remember me for 30 days" />
                <Anchor component={Link} href={"/forgotpassword"} size="sm">
                  Forgot password?
                </Anchor>
              </Group>
              <Button
                fullWidth
                type="submit"
                onClick={handleClick}
                radius={0}
                size="md"
              >
                Sign in
              </Button>
            </Flex>
          </form>
        </Box>
      </Center>
    </Grid>
  );
}
