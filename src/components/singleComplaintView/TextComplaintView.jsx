import { Box, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { SingleComplaintContext } from "./SingleComplaintView";

export default function TextComplaintView() {
  const { res, classes } = useContext(SingleComplaintContext);

  return (
    <>
      {res.desc && (
        <Box sx={{ p: 1, display: "flex" }}>
          <Typography variant="body2">
            {res.desc} Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Facere voluptatibus libero voluptates maxime beatae id consequatur.
            Nobis rerum eum cumque veritatis minima expedita quos aspernatur
            vitae nihil sapiente atque, quod deleniti consectetur earum et,
            itaque incidunt ipsam distinctio libero pariatur cupiditate, a iure?
            Eaque facere fuga, quidem nesciunt labore officia! Ea reiciendis
            nihil numquam aspernatur aliquam labore aliquid dolorem at, saepe
            magnam temporibus quasi voluptates facilis blanditiis nemo nobis cum
            sint? Nihil eius modi perspiciatis aperiam ipsam commodi earum
            aliquam sunt officia tempore illum odio, tenetur possimus laborum
            quod obcaecati veniam cumque. Nihil debitis consequuntur doloribus
            dolorum at recusandae voluptatibus.
          </Typography>
        </Box>
      )}
    </>
  );
}
