import { Box, Chip, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { firstLetterUpperCase } from "../../utils/firstLetterUpperCase";
const BioInfo = ({ user }) => {
  return (
    <>
      <Stack marginTop={2}>
        <Typography varaint="h5" mb={1} fontSize={20} fontWeight={700}>
          {`${firstLetterUpperCase(user.firstname)} ${firstLetterUpperCase(
            user.lastname
          )}`}
        </Typography>
        <Typography varaint="body1">{user.email}</Typography>
        <Typography varaint="body1">{user.phone}</Typography>

        <Typography varaint="body1" sx={{ fontWeight: 600, mb: 1 }}>
          Agency: {firstLetterUpperCase(user.myAgency.name)}
        </Typography>
        <Box>
          <Chip label="Migrant"  />
        </Box>
      </Stack>
    </>
  );
};

export default BioInfo;
