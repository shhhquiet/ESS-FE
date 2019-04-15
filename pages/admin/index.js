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
		//icon: DashboardIcon,
		// component: Dashboard,
		layout: '/admin',
	},
	{
		path: '/schedule',
		name: 'Schedule',
		layout: '/admin',
	},
	{
		path: '/clients',
		name: 'Clients',
		layout: '/admin',
	},
	{
		path: '/instructors',
		name: 'Instructors',
		layout: '/admin',
	},
	{
		path: '/reports',
		name: 'Reports',
		layout: '/admin',
	},
	{
		path: '/reviews',
		name: 'Reviews',
		layout: '/admin',
	},
	{
		path: '/mail',
		name: 'Mail',
		layout: '/admin',
	},
];
