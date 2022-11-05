import { Doughnut, Line, Pie, Bar, PolarArea } from "react-chartjs-2";
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
import { getRandomColor } from "../../../utils/getRandomColor";
Chart.register(...registerables);

const oneHunPercent = 100;
export default function DemoGraph({ _line, _pie, _doughnut, _bar, _polar }) {
  const { results } = useContext(MinistryStatContext);
  console.log(results);
  let {
    agencyStat,
    totalComplaints,
    forwardedComplaints,
    pendingComplaints,
    seenComplaints,
    workedUponComplaints,
  } = results;
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
  ///getting randomColors for display
  const colors = getRandomColor(agencyNames.length);
  console.log(colors);
  const data = {
    datasetIdKey: "_ID",
    labels: [...agencyNames],
    datasets: [
      {
        label: "Agencies",
        data: [...agencyComplaintCount],
        backgroundColor: [...colors],
      },
    ],
    borderWidth: 1,
  };

  const dataForPie = {
    datasetIdKey: "_ID",
    labels: [...agencyNames],
    datasets: [
      {
        label: "Agencies",
        data: [...agencyComplaintCountInPercent],
        backgroundColor: [...colors],
      },
    ],
  };

  //polar chart data
  const complaintsStatusInPercent = complaintStatusAsPercentage(
    totalComplaints,
    [
      pendingComplaints,
      seenComplaints,
      (workedUponComplaints = 1),
      (forwardedComplaints = 0.8),
    ]
  );
  //polar chart data
  const polarColors = getRandomColor(4);

  const dataForPolar = {
    type: "polarArea",
    labels: ["pending", "seen", "workedUpon", "forwarded", "Closed"],
    datasets: [
      {
        label: `Complaint Status`,
        data: [...complaintsStatusInPercent],
        backgroundColor: [...polarColors],
      },
    ],
  };

  //for agencyNames aganist complaints  e.g a/c * 100%
  if (_doughnut) return <Doughnut datasetIdKey="id" data={data} />;

  //for agency aganist complaints === its a bar graph
  if (_bar) return <Bar data={data} />;

  //agency aganist complaints in (%) expressed as a Pie chart
  if (_pie) return <Pie data={dataForPie} />;

  if (_polar) return <PolarArea data={dataForPolar} />;
}

const complaintStatusAsPercentage = (totalNumber, data) => {
  if (data.constructor !== Array) return; //check whether data is of typeof array
  if (typeof totalNumber !== "number") return;

  const ifDataConsistsOfItemNotNumber = data.some(
    (dataItem) => typeof dataItem !== "number"
  ); //check if any array item is not a number.
  if (ifDataConsistsOfItemNotNumber) return;

  const oneHunPercent = 100;

  return data.map((dataItem) => (dataItem / totalNumber) * oneHunPercent); // return [ ]
};
