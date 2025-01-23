import { useAppContext } from "../../hooks/Context";
import { GuestItem } from "./GuestItem";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import Add from "@mui/icons-material/Add";
import { NavigationHeader } from "../../components/NavigationHeader";
import { InfoCard } from "../../components/InfoCard";
import { SmTitleText } from "../../components/SmTitleText";

export const Guests = () => {
  const { guests, addGuest } = useAppContext();

  return (
    <>
      <NavigationHeader
        nextOption={{
          href: "/products",
          label: "Avançar para os produtos",
        }}
      />
      <SmTitleText title="Participantes" />
      <Stack spacing={2}>
        {Object.values(guests).map((guest) => (
          <GuestItem key={guest.id} guest={guest} />
        ))}
        {Object.values(guests).length === 0 && (
          <InfoCard>
            Para começar, adicione nomes de quem dividiu a conta, clicando no{" "}
            <Add fontSize="small" />. Depois, é só passar para os produtos.
          </InfoCard>
        )}
        <Button variant="outlined" onClick={addGuest}>
          <Add fontSize="large" />
        </Button>
      </Stack>
    </>
  );
};
