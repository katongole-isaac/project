import { Doughnut, Line, Pie, Bar } from "react-chartjs-2";
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

const oneHunPercent = 100;
export default function DemoGraph({ _line, _pie, _doughnut, _bar }) {
  const { results } = useContext(MinistryStatContext);
  const { agencyStat, totalComplaints } = results;
  let agencyNames = [],
    agencyComplaintCount = [],
    agencyComplaintCountInPercent = [];

  for (let agency of agencyStat) {
    agencyNames.push(agency.agency.name);
    agencyComplaintCount.push(agency.complaintsCount);
    let countInPercentage =
      (agency.complaintsCount / totalComplaints) * oneHunPercent;
    agencyComplaintCountInPercent.push(countInPercentage);
  }

  const data = {
    datasetIdKey: "_ID",
    labels: [...agencyNames],
    datasets: [
      {
        label: "Agencies",
        data: [...agencyComplaintCount],
        backgroundColor: [red[400], green[800], lightGreen[400], blue[200]],
      },
    ],
  };
  const dataForPie = {
    datasetIdKey: "_ID",
    labels: [...agencyNames],
    datasets: [
      {
        label: "Agencies",
        data: [...agencyComplaintCountInPercent],
        backgroundColor: [red[400], green[800], lightGreen[400], blue[200]],
      },
    ],
  };

  //for agencyNames aganist complaints  e.g a/c * 100%
  if (_doughnut) return <Doughnut datasetIdKey="id" data={data} />;

  //for agency aganist complaints === its a bar graph
  if (_bar) return <Bar data={data} />;

  //agency aganist complaints in (%) expressed as a Pie chart
  if (_pie) return <Pie data={dataForPie} />;
}
