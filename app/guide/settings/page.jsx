"use client";
import { useState } from 'react';
import { Space, Text, Paper, Switch, Divider,ActionIcon,Select, Chip, Group,rem  } from "@mantine/core";
import ProfilePhoto from "@/app/components/profile/ProfilePhoto";
import PersonalInfo from "@/app/components/profile/PersonalInfo";
import LocationUser from "@/app/components/profile/LocationUser";
import { IconChevronDown,IconX } from "@tabler/icons-react";
import { userLocationsList } from "@/app/utils/constants";
export default function Settings() {

    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');
  
    const handleSelectChange = (value) => {
      setSelectedValue(value);
      // Prevent adding duplicates or empty values
      if (value && !selectedLanguages.includes(value)) {
        setSelectedLanguages((currentLanguages) => [...currentLanguages, value]);
      }
    };
  
    const handleChipDelete = (value) => {
      setSelectedLanguages((currentLanguages) =>
        currentLanguages.filter((language) => language !== value)
      );
    };

    const RemoveIcon = ({ onRemove }) => (
        <ActionIcon onClick={onRemove}>
          <IconX stroke={2} size={16} />
        </ActionIcon>
      );










  return (
    <div>
      <Text size="lg" fw={"bold"}>
        Profile Settings
      </Text>
      <Space h="md" />
      <Paper shadow="md" p="md">
        <ProfilePhoto />
        <PersonalInfo />

        <Text size="lg" fw={"bold"} my={10}>
          Accept New Customer
        </Text>
        <Text size="sm" fw={500} my={10}>
          Receptionist can booked manually
        </Text>
        <Switch size="xl" onLabel="ON" offLabel="OFF" />
        <Space h="md" />
        <Divider h="md" />

        <Text size="lg" fw={"bold"} my={10}>
          Accept MTB Level
        </Text>
        <Text size="sm" fw={500} my={10}>
          Set language in which language you can communicate with customers
        </Text>
        <Select  w={"30%"} rightSection={<IconChevronDown stroke={1.5} />}
          placeholder="Select Level"
          data={["Beginer", "Intermediate", "Expert"]}
          defaultValue="Beginer"
          allowDeselect={false}
        />
        <Space h="lg" />
        <Divider h="md" />

        <Text size="lg" fw={"bold"} my={10}>
          Language
        </Text>
        <Text size="sm" fw={500} my={10}>
          Set language in which language you can communicate with customers
        </Text>
        {/* <Select w={"30%"} rightSection={<IconChevronDown stroke={1.5} />}
          placeholder="Select Language"
          data={["Beginer", "Intermediate", "Expert"]}
          defaultValue=""
          allowDeselect={false}
        /> */}







<Select
        w={"30%"}
        rightSection={<IconChevronDown stroke={1.5} />}
        placeholder="Select Language"
        data={["Beginner", "Intermediate", "Expert"]}
        value={selectedValue}
        onChange={handleSelectChange}
        // allowDeselect={false}
        clearable
        onClear={() => setSelectedValue('')}
      />
      <Group mt="md">
        {selectedLanguages.map((language) => (
        //   <Chip
        //     key={language}
        //     value={language}
        //     // rightSection={
        //         // <ActionIcon size="xs" onClick={() => handleChipDelete(language)}>
        //         //   <IconX size={16}  onClick={() => handleChipDelete(language)} />
        //         // </ActionIcon>
        //     //   }

        //     //   icon={<IconX  stroke={2} size={16}  onClick={() => handleChipDelete(language)}  />}

        //     // icon={<RemoveIcon onRemove={() => handleChipDelete(language)} />}

        //   >
        //     {language}
        //   </Chip>

        <Chip
            key={language}
            value={language}
            // Use the ActionIcon as the icon prop and handle the delete inside its onClick
            icon={
              <ActionIcon size="xs" onClick={() => handleChipDelete(language)}>
                <IconX size={26} stroke={2} />
              </ActionIcon>
            }
            // Prevent the chip's onClick from triggering when the icon is clicked
            onClick={(event) => event.stopPropagation()}
          >
            {language}
          </Chip>
        ))}
        </Group>










        <Space h="lg" />
        <Divider h="sm" />

        <LocationUser list={userLocationsList} />
      </Paper>


      

    </div>
  );
}
