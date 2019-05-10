import GridContainer from "../../MUI-Components/admin-components/Grid/GridContainer";
import GridItem from "../../MUI-Components/admin-components/Grid/GridItem";
import Card from "../../MUI-Components/admin-components/Card/Card";
import CardHeader from "../../MUI-Components/admin-components/Card/CardHeader";
import CardBody from "../../MUI-Components/admin-components/Card/CardBody";
import CustomInput from "../../MUI-Components/admin-components/CustomInput/CustomInput";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "../../static/admin-styles/jss/material-dashboard-pro-react/views/loginPageStyle";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";

function Home({classes}) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.fullPage}>
        <div className={classes.container}>
          <GridContainer justify='center'>
            <GridItem xs={12} sm={6} md={4}>
              <form>
                <Card login>
                  <CardHeader
                    className={`${classes.cardHeader} ${classes.textCenter}`}
                    color='rose'
                  >
                    <h4 className={classes.cardTitle}>Log in</h4>
                  </CardHeader>
                  <CardBody>
                    <CustomInput
                      labelText='First Name..'
                      id='firstname'
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        endAdornment: (
                          <InputAdornment position='end'>
                            <Face className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText='Email...'
                      id='email'
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        endAdornment: (
                          <InputAdornment position='end'>
                            <Email className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText='Password'
                      id='password'
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        endAdornment: (
                          <InputAdornment position='end'>
                            <Icon className={classes.inputAdornmentIcon}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </CardBody>
                </Card>
              </form>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Home);
