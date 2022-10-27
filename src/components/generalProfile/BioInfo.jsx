import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

const BioInfo = () => {
  return (
    <>
      <Stack>
        <Typography varaint="h5" fontSize={20} fontWeight={700}>
          FullName
        </Typography>
        <Typography varaint="body1">FullName</Typography>
        <Typography varaint="h5">Migrant</Typography>
      </Stack>
    </>
  );
};

export default BioInfo;
