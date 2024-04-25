import React from "react";
import moment from "moment";
import "./index.css";

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const getRamdomDateInBetween = (start, end) => {
  start = Date.parse(start);
  end = Date.parse(end);

  return new Date(Math.floor(Math.random() * (end - start + 1) + start));
};

const newPerson = () => {
  const statusChance = Math.random();
  return {
    arrivalDatetime: getRamdomDateInBetween("2023-01-01", "2023-02-28"), //1713809820000,
    averageDuration: null,
    behaviours: 4,
    companyEventId:
      "VlMjOTk6OjpHLVZESUEtMDE2NzE4Ojo6TEFYOjo6MjAyNC0wNC0yMjo6Ojhocw==",
    createdAt: 1714022712606,
    destination: "LHR",
    durationInMinutes: Math.floor(Math.random() * 100),
    eventType: "FLIGHT",
    failedReasons: 1,
    flagged: false,
    id: "822e7a0f-10f7-4de1-bdc4-4f16e0d2b0ed",
    identifier: "99",
    qualified: false,
    savings: 1798,
    succedeedCount: 3,
    totalFuelSaved: 1798,
  };
};

export function makeData(len = 23) {
  return range(len).map((d) => {
    return {
      ...newPerson(),
    };
  });
}

export const datetimeTinyFormatterUTC = (dateTimeUnix) => {
  return moment.utc(dateTimeUnix).format("MMM DD, HH:mm");
};

export const sortDatetimes = (a, b) => {
  if (moment(a, "MMM DD, hh:mm a").isBefore(moment(b, "MMM DD, hh:mm a"))) {
    return 1;
  }
  return -1;
};

export const Logo = () => (
  <div
    style={{
      margin: "1rem auto",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    For more examples, visit {""}
    <br />
    <a href="https://github.com/react-tools/react-table" target="_blank">
      <img
        src="https://github.com/react-tools/media/raw/master/logo-react-table.png"
        style={{ width: `150px`, margin: ".5em auto .3em" }}
      />
    </a>
  </div>
);

export const Tips = () => (
  <div style={{ textAlign: "center" }}>
    <em>Tip: Hold shift when sorting to multi-sort!</em>
  </div>
);