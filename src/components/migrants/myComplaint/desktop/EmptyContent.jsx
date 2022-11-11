import { Box, Stack, Typography } from "@mui/material";

export default function EmptyContent() {
  return (
    <>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Stack sx={{ position: "absolute", top: "5em" }}>
          <Typography variant="h6" className="text-muted">
            Welcome, select a complaint in the left panel
          </Typography>
        </Stack>
      </Box>
    </>
  );
}
