"use client";

import { Button, Flex, Image, Text, Title } from "@mantine/core";
import Link from "next/link";

export default function SuccessResetPassword() {
  return (
    <Flex
      direction={"column"}
      w={"100%"}
      gap={"lg"}
      justify={"center"}
      align={"center"}
    >
      <Image src={"/assets/svg/check-icon.svg"} w={56} />
      <Title>Password reset!</Title>
      <Flex justify="center" align="center" direction="column">
        <Text ta={"center"} size="sm" c={"dark.3"}>
          Your password has been successfully reset. Click below to log in
          magically.
        </Text>
      </Flex>
      <Button
        fullWidth
        type="submit"
        component={Link}
        href={"/guide"}
        radius={"xs"}
        size="md"
      >
        continue
      </Button>
    </Flex>
  );
}
