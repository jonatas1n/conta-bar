import { Container } from "../../components/Container";
import { useAppContext } from "../../hooks/Context";
import { GuestItem } from "../../components/guests/GuestItem";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import Add from "@mui/icons-material/Add";
import { NavigationHeader } from "../../components/NavigationHeader";

export const Guests = () => {
  const { guests, addGuest } = useAppContext();

  if (Object.keys(guests).length === 0) addGuest();

  return (
    <Container>
      <NavigationHeader
        nextOption={{ href: "/conta-bar/products", label: "Avançar para os produtos" }}
      />
      <Stack spacing={2}>
        {Object.values(guests).map((guest) => (
          <GuestItem key={guest.id} guest={guest} />
        ))}
        <Button variant="contained" onClick={addGuest}>
          <Add />
        </Button>
      </Stack>
    </Container>
  );
};
