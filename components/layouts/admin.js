import React, {useState} from "react";
import {useQuery} from "react-apollo-hooks";
import {withRouter} from "next/router";
import Link from "next/link";
import clsx from "clsx";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import NewClient from "../newClient";

import {
  CalendarToday,
  Dashboard,
  Stars,
  Receipt,
  SupervisorAccount,
  Face,
  Menu,
  ChevronLeft,
  ChevronRight,
  Inbox,
  Mail,
} from "@material-ui/icons";

import {CURRENT_USER_QUERY} from "../../gql/Queries/User";

const drawerWidth = 220;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbarInfo: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: "5px",
  },
}));

const Layout = ({children, router}) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const {data} = useQuery(CURRENT_USER_QUERY);
console.log(open)
  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='Open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <Menu />
          </IconButton>
          <Typography variant='h6' noWrap>
            Eastside Swim School
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar src={data.currentUser.imageURL} />
            </ListItemAvatar>
            <ListItemText primary={data.currentUser.firstName} />
          </ListItem>
        </List>
        
        <Divider />
        <List>
          {dashRoutes.map((route, index) => (
            <Link href={`/admin${route.path}`}>
              <ListItem button key={route.name} selected={router.pathname === `/admin${route.path}`}>
                <ListItemIcon>
                  <route.icon />
                </ListItemIcon>
                <ListItemText primary={route.name} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
      {/* <Sidebar
				routes={dashRoutes}
				bgColor='blue'
				color='white'
				userFirst={data.currentUser.firstName}
				userLast={data.currentUser.lastName}
				userImg={data.currentUser.imageURL}
				logo='/static/admin-styles/img/logo.png'
				logoText='Eastside Swim School'
				miniActive={miniActive}
			/>
			<div className={mainPanel}>
				<NavBar miniActive={miniActive} handleAdd={() => setNewClientOpen(true)} sidebarMinimize={() => setMiniActive(!miniActive)} route={route}/>
				<div className={classes.content}>
					<div className={classes.container}>{children}</div>
				</div>
			</div>
			<NewClient open={newClientOpen} handleClose={() => setNewClientOpen(false)}/> */}
    </div>
  );
};

export default withRouter(Layout);

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    // component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/schedule",
    name: "Schedule",
    icon: CalendarToday,
    layout: "/admin",
  },
  {
    path: "/clients",
    name: "Clients",
    icon: Face,
    layout: "/admin",
  },
  {
    path: "/instructors",
    name: "Instructors",
    icon: SupervisorAccount,
    layout: "/admin",
  },
  {
    path: "/reports",
    name: "Reports",
    icon: Receipt,
    layout: "/admin",
  },
  {
    path: "/reviews",
    name: "Reviews",
    icon: Stars,
    layout: "/admin",
  },
];
