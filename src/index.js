import React from "react";
import { render } from "react-dom";
import {
  makeData,
  Tips,
  datetimeTinyFormatterUTC,
  sortDatetimes,
} from "./Utils";
import './index.css';
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import { ReactTableV8 } from "./v8Table";

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
                datetimeTinyFormatterUTC(item.arrivalDatetime)
              ),
              minWidth: 100,
              maxWidth: 200,
              Cell: props => <div>{props.value}</div>,
              sortMethod: (a, b) => sortDatetimes(a, b)
            },
            {
              Header: "Destination",
              id: "destination",
              accessor: flight => flight.origin + ' > ' + flight.destination,
              Cell: props => <div>{props.value}</div>,
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
          sortable={true}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
        <Tips />
        <ReactTableV8 />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

