import React, {useState} from 'react';
import {useQuery} from 'react-apollo-hooks';
import NavBar from '../../MUI-Components/admin-components/Navbars/AdminNavbar';
import Sidebar from '../../MUI-Components/admin-components/Sidebar/Sidebar';
import withStyles from '@material-ui/core/styles/withStyles';
import { CalendarToday, Dashboard, StarRate, Receipt } from '@material-ui/icons';
import cx from "classnames";
import {CURRENT_USER_QUERY} from '../../gql/Queries/User'
import style from '../../static/jss/layouts/adminStyle';


const Layout = ({ classes, children }) => {
	const {data} = useQuery(CURRENT_USER_QUERY)
	const [mobileOpen, setMobileOpen] = useState(false)
	const [miniActive, setMiniActive] = useState(false)
	console.log(data)
	const mainPanel =
      classes.mainPanel +
      " " +
      cx({
				[classes.mainPanelSidebarMini]: miniActive
			})
	return (
		
		<div className={classes.wrapper}>
			<Sidebar
				routes={dashRoutes}
				bgColor='blue'
				color='lightBlue'
				userFirst={data.currentUser.firstName}
				userLast={data.currentUser.lastName}
				userImg={data.currentUser.imageURL}
				logo='/static/admin-styles/img/logo.png'
				logoText='Eastside Swim School'
				miniActive={miniActive}
			/>
			<div className={mainPanel}>
				<NavBar miniActive={miniActive} sidebarMinimize={() => setMiniActive(!miniActive)}/>
				<div className={classes.content}>
					<div className={classes.container}>{children}</div>
				</div>
			</div>
		</div>
	
	);
};

export default withStyles(style)(Layout);

var dashRoutes = [
	{
		path: '/dashboard',
		name: 'Dashboard',
		icon: Dashboard,
		// component: Dashboard,
		layout: '/admin',
	},
	{
		path: '/schedule',
		name: 'Schedule',
		icon: CalendarToday,
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
		icon: Receipt,
		layout: '/admin',
	},
	{
		path: '/reviews',
		name: 'Reviews',
		icon: StarRate,
		layout: '/admin',
	},
];
