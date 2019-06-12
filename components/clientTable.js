import ReactTable from "react-table";

// @material-ui/core components
import MaterialTable from "material-table";
import withStyles from "@material-ui/core/styles/withStyles";
import {Grid, Card, CardHeader, CardContent} from "@material-ui/core";
// import GridContainer from '../MUI-Components/admin-components/Grid/GridContainer';
// import GridItem from '../MUI-Components/admin-components/Grid/GridItem';
// import Card from '../MUI-Components/admin-components/Card/Card';
// import CardHeader from '../MUI-Components/admin-components/Card/CardHeader';
// import CardBody from '../MUI-Components/admin-components/Card/CardBody';

const data = [
  {
    clientname: "Susan Apple",
    name: "Sara",
    age: 12,
    birthday: "05/06/03",
    gender: "F",
  },
  {
    clientname: "Susan Apple",
    name: "Henry",
    age: 8,
    birthday: "05/06/07",
    gender: "M",
  },
];
const ClientTables = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <MaterialTable
          columns={[
            {title: "Client Name", field: "clientname"},
            {title: "Student Name", field: "name"},
            {title: "Age", field: "age", type: "numeric"},
            {title: "Gender", field: "gender"},
          ]}
          data={data}
          title='Clients'
        />
      </Grid>
    </Grid>
  );
};

export default ClientTables;
