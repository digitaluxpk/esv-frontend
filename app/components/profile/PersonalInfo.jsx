"use client";

import {
  Space,
  Text,
  Input,
  Divider,
  Button,
  TextInput,
  Grid,
  Flex,
  InputBase,
  useMantineTheme,
} from "@mantine/core";
import { IMaskInput } from "react-imask";

import { textInputStyles } from "@/app/components/profile/profileStyle";
import ChangeNumberModal from "@/app/components/modals/ChangeNumberModal";
import PasswordChangeModal from "@/app/components/modals/PasswordChangeModal";
import EmailChangeModal from "@/app/components/modals/EmailChangeModal";

import { useDisclosure } from "@mantine/hooks";

export default function ProfilePhoto() {
  const [changeNumber, setChangeNumber] = useDisclosure(false);
  const [changePassword, setChangePassword] = useDisclosure(false);
  const [changeEmail, setChangeEmail] = useDisclosure(false);
  const theme = useMantineTheme();

  return (
    <div>
      <Space h="md" />
      <Text size="sm" fw={600}>
        Personal info
      </Text>
      <Text size="xs" mt="sm">
        Your log-in credentials and the name that is displayed in reports.
      </Text>
      <Space h="lg" />

      <Grid component={Flex}>
        <Grid.Col span={5}>
          <TextInput
            styles={textInputStyles}
            label="Name"
            placeholder="Your Name"
            value={"Theo"}
            inputWrapperOrder={["label", "error", "input", "description"]}
          />
        </Grid.Col>
        <Grid.Col span={5}>
          <TextInput
            styles={textInputStyles}
            label="Email"
            value={"rbrajumullah100@gmail.com"}
            placeholder="Your Email"
            inputWrapperOrder={["label", "error", "input", "description"]}
            rightSection={
              <Button
                fz="xs"
                size="xs"
                mr={60}
                pr={10}
                miw={90}
                c={"white"}
                onClick={() => setChangeEmail.open()}
                bg={theme.colors.dark[7]}
              >
                Change
              </Button>
            }
          />
        </Grid.Col>
        <Grid.Col span={5}>
          <InputBase
            styles={textInputStyles}
            label="Whatsapp Number"
            component={IMaskInput}
            mask="+91 0000 0000 0000"
            placeholder="Your phone"
            value={"+91 2348 5556 2264"}
            rightSection={
              <Button
                fz="xs"
                size="xs"
                mr={60}
                pr={10}
                miw={90}
                c={"white"}
                onClick={() => setChangeNumber.open()}
                bg={theme.colors.dark[7]}
              >
                Change
              </Button>
            }
          />
        </Grid.Col>

        <Grid.Col span={5}>
          <Text size="md">Password</Text>
          <Input
            component="button"
            styles={textInputStyles}
            label="Password"
            pointer
            variant="filled"
            onClick={() => setChangePassword.open()}
          >
            Change Password
          </Input>
        </Grid.Col>
      </Grid>
      <Space h="md" />
      <Divider h="sm" />

      <ChangeNumberModal
        opened={changeNumber}
        close={() => setChangeNumber.close()}
      />

      <PasswordChangeModal
        opened={changePassword}
        close={() => setChangePassword.close()}
      />

      <EmailChangeModal
        opened={changeEmail}
        close={() => setChangeEmail.close()}
      />
    </div>
  );
}
