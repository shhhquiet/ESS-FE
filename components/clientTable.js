import ReactTable from "react-table";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import {Grid, Card, CardHeader, CardContent} from '@material-ui/core'
// import GridContainer from '../MUI-Components/admin-components/Grid/GridContainer';
// import GridItem from '../MUI-Components/admin-components/Grid/GridItem';
// import Card from '../MUI-Components/admin-components/Card/Card';
// import CardHeader from '../MUI-Components/admin-components/Card/CardHeader';
// import CardBody from '../MUI-Components/admin-components/Card/CardBody';
const ClientTables = () => {
  return (
    <Grid container>
    <Grid item xs={12}>
      <Card>
        <CardHeader color="primary">
        <h4>Students</h4>
        </CardHeader>
        <CardContent>
        <ReactTable
            
                filterable
                columns={[
                  {
                    Header: "Client Name",
                    accessor: "clientname"
                  },
                  {
                    Header: "Student Name",
                    accessor: "name"
                  },
                  {
                    Header: "Age",
                    accessor: "age"
                  },
                  {
                    Header: "Birthday",
                    accessor: "birthday"
                  },
                  {
                    Header: "Gender",
                    accessor: "gender"
                  },
                  {
                    Header: "Actions",
                    accessor: "actions",
                    sortable: false,
                    filterable: false
                  }
                ]}
                defaultPageSize={10}
                showPaginationTop
                showPaginationBottom={false}
                className="-striped -highlight"
              />
        </CardContent>
        </Card>
        </Grid>
        </Grid>
  )
}

export default ClientTables;