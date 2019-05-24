import { makeStyles } from '@material-ui/styles';
import {withTheme} from '@material-ui/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles({
  root: {
	flexGrow: 1,
	// backgroundColor: '#2a35e2'

  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});


function Home(props) {
	const classes = useStyles(props);
	const {theme} = props;
	return (
		<div className={classes.root}>
		  <AppBar classes={{root: classes.root}} color="primary" position="static">
			<Toolbar>
			  <Typography variant="h6" color="inherit" className={classes.grow}>
				East Side Swim School
			  </Typography>
			  <Button color="inherit">Login</Button>
			</Toolbar>
		  </AppBar>
		</div>
	  );
}

export default withTheme()(Home);
