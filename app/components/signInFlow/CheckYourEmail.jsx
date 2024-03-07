"use client";

import { Anchor, Button, Flex, Group, Image, Text, Title } from "@mantine/core";
import Link from "next/link";
import React from "react";

export default function CheckYourEmail() {
  const handleResend = async () => {
  //   if (typeof window !== "undefined") {
  //     const data = { email: localStorage.getItem("userEmail") };
  //     await forgotPassword(data);
  //   }
  };
  return (
    <Flex
      direction={"column"}
      w={"100%"}
      gap={"lg"}
      justify={"center"}
      align={"center"}
    >
      <Image src={"/assets/svg/mail-icon.svg"} w={56} />
      <Title>Check your email</Title>
      <Flex justify="center" align="center" direction="column">
        <Text size="sm" c={"dark.3"}>
          We sent a password reset link to:
        </Text>
        <Text size="sm">example@email.com</Text>
      </Flex>
      <Button
        fullWidth
        component={Link}
        href={"/setnewpassword"}
        type="submit"
        radius={"xs"}
        size="md"
      >
        Open email app
      </Button>
      <Group justify="center">
        <Text size="sm">Didn’t receive the email?</Text>
        <Anchor onClick={handleResend} size="sm">
          Click to resend
        </Anchor>
      </Group>
    </Flex>
  );
}
