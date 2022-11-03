import { Doughnut, Line } from "react-chartjs-2";
import {
  blue,
  green,
  light,
  Blue,
  lightGreen,
  red,
} from "@mui/material/colors";

import { Chart, registerables } from "chart.js";
import { useContext } from "react";
import { MinistryStatContext } from "../MinistryStatisticsCardSection";
Chart.register(...registerables);

export default function DemoGraph() {
  const { results } = useContext(MinistryStatContext);
  const { agencyStat } = results;
  let agencyNames = [],
    agencyComplaintCount = [];

  for (let agency of agencyStat) {
    agencyNames.push(agency.agency.name);
    agencyComplaintCount.push(agency.complaintsCount);
  }

  const data = {
    datasetIdKey: "_ID",
    labels: [...agencyNames],
    datasets: [
      {
        data: [...agencyComplaintCount],
        backgroundColor: [red[400], green[800], lightGreen[400], blue[200]],
      },
    ],
  };
  return (
    <>
      <Doughnut datasetIdKey="id" data={data} />
    </>
  );
}
