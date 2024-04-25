import React from "react";
import { render } from "react-dom";
import {
  makeData,
  Tips,
  datetimeTinyFormatterUTC,
  sortDatetimes,
} from "./Utils";
import './index.css';

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
              Header: "Date",
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
              //here I might get the origin and destination strings as 'UNKNOWN', which would make all strings the same in all rows
              accessor: flight => flight.origin + ' > ' + flight.destination,
              Cell: props => <div>{props.value}</div>,
              minWidth: 100,
              maxWidth: 200,
            },
            {
                id: "savings",
                Header: "Savings",
                accessor: trip => {
                    const saved = trip.test.reduce((total, b) => {
                        if(b.succeeded && b.saved > 0) {total += b.saved}
                        return total;
                    }, 0);
                    return saved;
                },
                minWidth: 100,
                maxWidth: 200,
                Cell: props => <div>{props.value} dollars</div>
              },
              
              {
                Header: "success",
                id: "success",
                accessor: item => {
                    const succeeded = item.succeededCount;
                      const total = item.overall;
                      return { succeeded, total };
                },
                minWidth: 100,
                maxWidth: 200,
                Cell: item => <div>{item.value.succeeded + ' / ' + item.value.total}</div>,
                sortMethod: (a, b) => a.succeeded > b.succeeded ? 1 : -1
              },
              {
                id: "projected-savings",
                Header: "Max Savings",
                accessor: () => {
                    // here I have more logic here which might lead me to get a 0 in all rows
                    const saved = 0;
                    return saved;
                },
                minWidth: 100,
                maxWidth: 200,
                Cell: props => <div>{props.value} dollars</div>
              },
          ]}
          defaultSorted={[
            {
              id: 'arrivalDatetime',
              desc: false
            }
          ]}
          sortable={true}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
        <Tips />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

