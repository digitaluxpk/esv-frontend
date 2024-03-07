"use client";

import { Anchor, Box, Center, Flex, Group, Text } from "@mantine/core";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import ForgotPasswordForm from "@/app/components/signInFlow/ForgotPasswordForm";
import { useToggle } from "@mantine/hooks";
import CheckYourEmail from "@/app/components/signInFlow/CheckYourEmail";

export default function ForgotPassword() {
  const [type, toggle] = useToggle(["forgot", "checkemail"]);

  return (
    <Center mx={"auto"} h={"100vh"}>
      <Box w={400} mx="auto" px={10}>
        <Flex
          w={"100%"}
          direction={"column"}
          gap={"lg"}
          justify={"center"}
          align={"center"}
        >
          {type === "forgot" ? (
            <ForgotPasswordForm handleForgotPassword={() => toggle()} />
          ) : (
            <CheckYourEmail  />
          )}
          <Anchor component={Link} href={"/signin"}>
            <Group align="center" c={"dark.3"}>
              <IoMdArrowRoundBack />
              <Text size="sm" c={"dark.3"}>
                Back to log in
              </Text>
            </Group>
          </Anchor>
        </Flex>
      </Box>
    </Center>
  );
}
