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

const newRow = () => {

  return {
    arrivalDatetime: getRamdomDateInBetween("2023-01-01", "2023-02-28"),
    test: [{
        succeeded: true,
        saved: Math.floor(Math.random() * 1500),
    }, {
        succeeded: true,
        saved: Math.floor(Math.random() * 100),
    }, {
        succeeded: true,
        saved: Math.floor(Math.random() * 300),
    }, {
        succeeded: false,
        saved: Math.floor(Math.random() * 1000),
    }
    ],
    origin: "XXX",
    destination: "YYY",
    durationInMinutes: Math.floor(Math.random() * 100),
    id: "822e7a0f-10f7-4de1-bdc4",
    savings: 1798,
    succeededCount: Math.floor(Math.random() * 4),
    overall: 4,
  };
};

export function makeData(len = 12) {
  return range(len).map((d) => {
    return {
      ...newRow(),
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


export const Tips = () => (
  <div style={{ textAlign: "center" }}>
    <em>Tip: Hold shift when sorting to multi-sort!</em>
  </div>
);