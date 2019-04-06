import NavBar from '../../MUI-Components/admin-components/Navbars/AdminNavbar';
import Sidebar from '../../MUI-Components/admin-components/Sidebar/Sidebar';
import withStyles from '@material-ui/core/styles/withStyles';
import style from '../../static/admin-styles/jss/material-dashboard-pro-react/layouts/adminStyle';

function Home({ classes }) {
	return (
		<div className={classes.wrapper}>
			<Sidebar
				routes={dashRoutes}
				bgColor='blue'
				user='Lisa Worthington'
				logo='/static/admin-styles/img/logo.png'
				logoText='Eastside Swim School'
			/>
			<div className={classes.mainPanel}>
				<NavBar />
			</div>
		</div>
	);
}

export default withStyles(style)(Home);

var dashRoutes = [
	{
		path: '/dashboard',
		name: 'Dashboard',
		rtlName: 'لوحة القيادة',
		// icon: DashboardIcon,
		// component: Dashboard,
		// layout: "/admin"
	},
];
