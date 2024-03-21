"use client";

import {
  Space,
  Text,
  Divider,
  Avatar,
  FileButton,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import { IconCloudUpload } from "@tabler/icons-react";

export default function ProfilePhoto() {
  const [file, setFile] = useState(null);
  const theme = useMantineTheme();

  const handleFileChange = (fileList) => {
    // Check if files are selected
    if (fileList.length > 0) {
      const file = fileList[0];
      // Create a URL for the file
      const url = URL.createObjectURL(file);
      console.log("url is ", url);
      setFile(url);
    }
  };
  return (
    <div>
      <Text size="sm" fw={600}>
        Profile Photo
      </Text>
      <Text size="xs" mt="sm">
        Formats: png, jpg, gif. Max size: 1 MB.
      </Text>
      <Space h="lg" />
      <Group>
        <Avatar
          size="xl"
          radius="xl"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png"
        />

        <FileButton
          onChange={handleFileChange}
          accept="image/png,image/jpeg"
          ml={30}
        >
          {(props) => (
            <Button
              bg={theme.colors.dark[7]}
              {...props}
              leftSection={<IconCloudUpload size={17} />}
            >
              Upload image
            </Button>
          )}
        </FileButton>

        {file && (
          <Text size="sm" ta="center" mt="sm">
            Picked file: {file.name}
          </Text>
        )}
      </Group>

      <Space h="md" />

      <Divider h="xs" />
    </div>
  );
}
