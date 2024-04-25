import React from "react";
import { render } from "react-dom";
import {
  makeData,
  Logo,
  Tips,
  datetimeTinyFormatterUTC,
  sortDatetimes,
} from "./Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData(),
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Departure",
              id: "arrivalDatetime",
              accessor: (item) => (
                <span>{datetimeTinyFormatterUTC(item.arrivalDatetime)}</span>
              ),
              minWidth: 100,
              maxWidth: 200,
              sorting: (a, b) => sortDatetimes(a, b),
            },
            {
              Header: "Destination",
              id: "destination",
              accessor: "destination",
              minWidth: 100,
              maxWidth: 200,
            },
            {
              Header: "Duration",
              accessor: "durationInMinutes",
              minWidth: 100,
              maxWidth: 200,
            },
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
        <Tips />
        <Logo />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

