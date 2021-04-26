import React from "react";
import { render } from "react-dom";
import { makeData} from "./Utils";


import ReactTable from "react-table";
import "react-table/react-table.css";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
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
              Header: "Name",
              columns: [
                {
                  id: "fullName",
                  Header: "Full Name",
                  accessor: row => `${row.firstName} ${row.lastName}`,
                  filterMethod: (filter, row) =>
                    row._original.firstName.startsWith(filter.value) ||
                    row._original.lastName.startsWith(filter.value)
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Age",
                  accessor: "age"
                },
                {
                  Header: "Status",
                  accessor: "status"
                }
              ]
            },
            {
              Header: "Stats",
              columns: [
                {
                  Header: "Visits",
                  accessor: "visits"
                }
              ]
            }
          ]}
          defaultSorted={[
            {
              id: "fullName",
              desc: false
            }
          ]}
          filterable={true}
          defaultFiltered={[
            {
              "id": "fullName",
              "value": ""
            }]}
          onFilteredChange={filtered => this.setState({ filtered })}
          defaultPageSize={20}
          className="-striped -highlight"
        />
        <br />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
