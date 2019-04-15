import React from 'react';
import PropTypes from 'prop-types';
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from 'perfect-scrollbar';
import NavLink from 'next/Link';
import cx from 'classnames';
import { withRouter } from 'next/router';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Hidden from '@material-ui/core/Hidden';
import Collapse from '@material-ui/core/Collapse';
import Icon from '@material-ui/core/Icon';

// core components
import AdminNavbarLinks from '../Navbars/AdminNavbarLinks.jsx';

import sidebarStyle from '../../../static/admin-styles/jss/material-dashboard-pro-react/components/sidebarStyle.jsx';

import avatar from '../../../static/admin-styles/img/faces/lisa1.jpg';

var ps;

// We've created this component so we can have a ref to the wrapper of the links that appears in our sidebar.
// This was necessary so that we could initialize PerfectScrollbar on the links.
// There might be something with the Hidden component from material-ui, and we didn't have access to
// the links, and couldn't initialize the plugin.
class SidebarWrapper extends React.Component {
	componentDidMount() {
		if (navigator.platform.indexOf('Win') > -1) {
			ps = new PerfectScrollbar(this.refs.sidebarWrapper, {
				suppressScrollX: true,
				suppressScrollY: false,
			});
		}
	}
	componentWillUnmount() {
		if (navigator.platform.indexOf('Win') > -1) {
			ps.destroy();
		}
	}
	render() {
		const { className, user, headerLinks, links } = this.props;
		return (
			<div className={className} ref='sidebarWrapper'>
				{user}
				{headerLinks}
				{links}
			</div>
		);
	}
}

class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			openAvatar: false,
			miniActive: true,
			...this.getCollapseStates(props.routes),
		};
	}
	// this creates the intial state of this component based on the collapse routes
	// that it gets through this.props.routes
	getCollapseStates = routes => {
		let initialState = {};
		routes.map((prop, key) => {
			if (prop.collapse) {
				initialState = {
					[prop.state]: this.getCollapseInitialState(prop.views),
					...this.getCollapseStates(prop.views),
					...initialState,
				};
			}
			return null;
		});
		return initialState;
	};
	// this verifies if any of the collapses should be default opened on a rerender of this component
	// for example, on the refresh of the page,
	// while on the src/views/forms/RegularForms.jsx - route /admin/regular-forms
	getCollapseInitialState(routes) {
		for (let i = 0; i < routes.length; i++) {
			if (routes[i].collapse && this.getCollapseInitialState(routes[i].views)) {
				return true;
			} else if (window.location.href.indexOf(routes[i].path) !== -1) {
				return true;
			}
		}
		return false;
	}
	// verifies if routeName is the one active (in browser input)
	activeRoute = routeName => {
		return this.props.router.pathname.indexOf(routeName) > -1 ? 'active' : '';
	};
	openCollapse(collapse) {
		var st = {};
		st[collapse] = !this.state[collapse];
		this.setState(st);
	}
	// this function creates the links and collapses that appear in the sidebar (left menu)
	createLinks = routes => {
		const { classes, color } = this.props;
		return routes.map((prop, key) => {
			if (prop.redirect) {
				return null;
			}
			if (prop.collapse) {
				var st = {};
				st[prop['state']] = !this.state[prop.state];
				const navLinkClasses =
					classes.itemLink +
					' ' +
					cx({
						[' ' + classes.collapseActive]: this.getCollapseInitialState(prop.views),
					});
				const itemText =
					classes.itemText +
					' ' +
					cx({
						[classes.itemTextMini]: this.props.miniActive && this.state.miniActive,
					});
				const collapseItemText =
					classes.collapseItemText +
					' ' +
					cx({
						[classes.collapseItemTextMini]: this.props.miniActive && this.state.miniActive,
					});
				return (
					<ListItem
						key={key}
						className={cx(
							{ [classes.item]: prop.icon !== undefined },
							{ [classes.collapseItem]: prop.icon === undefined }
						)}
					>
						<NavLink
							href={'#'}
							onClick={e => {
								e.preventDefault();
								this.setState(st);
							}}
						>
							<div className={navLinkClasses}>
								{prop.icon !== undefined ? typeof prop.icon === 'string' ? (
									<Icon className={classes.itemIcon}>{prop.icon}</Icon>
								) : (
									<prop.icon className={classes.itemIcon} />
								) : (
									<span className={classes.collapseItemMini}>{prop.mini}</span>
								)}
								<ListItemText
									primary={prop.name}
									secondary={
										<b
											className={
												classes.caret + ' ' + (this.state[prop.state] ? classes.caretActive : '')
											}
										/>
									}
									disableTypography={true}
									className={cx(
										{ [itemText]: prop.icon !== undefined },
										{ [collapseItemText]: prop.icon === undefined }
									)}
								/>
							</div>
						</NavLink>
						<Collapse in={this.state[prop.state]} unmountOnExit>
							<List className={classes.list + ' ' + classes.collapseList}>
								{this.createLinks(prop.views)}
							</List>
						</Collapse>
					</ListItem>
				);
			}
			const innerNavLinkClasses =
				classes.collapseItemLink +
				' ' +
				cx({
					[' ' + classes[color]]: this.activeRoute(prop.path),
				});
			const collapseItemMini = classes.collapseItemMini;
			const navLinkClasses =
				classes.itemLink +
				' ' +
				cx({
					[' ' + classes[color]]: this.activeRoute(prop.path),
				});
			const itemText =
				classes.itemText +
				' ' +
				cx({
					[classes.itemTextMini]: this.props.miniActive && this.state.miniActive,
				});
			const collapseItemText =
				classes.collapseItemText +
				' ' +
				cx({
					[classes.collapseItemTextMini]: this.props.miniActive && this.state.miniActive,
				});

			return (
				<ListItem
					key={key}
					className={cx(
						{ [classes.item]: prop.icon !== undefined },
						{ [classes.collapseItem]: prop.icon === undefined }
					)}
				>
					<NavLink href={prop.layout + prop.path}>
						<div
							className={cx(
								{ [navLinkClasses]: prop.icon !== undefined },
								{ [innerNavLinkClasses]: prop.icon === undefined }
							)}
						>
							{prop.icon !== undefined ? typeof prop.icon === 'string' ? (
								<Icon className={classes.itemIcon}>{prop.icon}</Icon>
							) : (
								<prop.icon className={classes.itemIcon} />
							) : (
								<span className={collapseItemMini}>{prop.mini}</span>
							)}
							<ListItemText
								primary={prop.name}
								disableTypography={true}
								className={cx(
									{ [itemText]: prop.icon !== undefined },
									{ [collapseItemText]: prop.icon === undefined }
								)}
							/>
						</div>
					</NavLink>
				</ListItem>
			);
		});
	};
	render() {
		const { classes, logo, image, logoText, routes, bgColor } = this.props;
		const itemText =
			classes.itemText +
			' ' +
			cx({
				[classes.itemTextMini]: this.props.miniActive && this.state.miniActive,
			});
		const collapseItemText =
			classes.collapseItemText +
			' ' +
			cx({
				[classes.collapseItemTextMini]: this.props.miniActive && this.state.miniActive,
			});
		const userWrapperClass =
			classes.user +
			' ' +
			cx({
				[classes.whiteAfter]: bgColor === 'white',
			});
		var user = (
			<div className={userWrapperClass}>
				<div className={classes.photo}>
					<img src={avatar} className={classes.avatarImg} alt='...' />
				</div>
				<List className={classes.list}>
					<ListItem className={classes.item + ' ' + classes.userItem}>
						<NavLink
							to={'#'}
							className={classes.itemLink + ' ' + classes.userCollapseButton}
							onClick={() => this.openCollapse('openAvatar')}
						>
							<ListItemText
								primary={this.props.user}
								secondary={
									<b
										className={
											classes.caret +
											' ' +
											classes.userCaret +
											' ' +
											(this.state.openAvatar ? classes.caretActive : '')
										}
									/>
								}
								disableTypography={true}
								className={itemText + ' ' + classes.userItemText}
							/>
						</NavLink>
						<Collapse in={this.state.openAvatar} unmountOnExit>
							<List className={classes.list + ' ' + classes.collapseList}>
								<ListItem className={classes.collapseItem}>
									<NavLink to='#' className={classes.itemLink + ' ' + classes.userCollapseLinks}>
										<span className={classes.collapseItemMini}>MP</span>
										<ListItemText
											primary={'My Profile'}
											disableTypography={true}
											className={collapseItemText}
										/>
									</NavLink>
								</ListItem>
								<ListItem className={classes.collapseItem}>
									<NavLink to='#' className={classes.itemLink + ' ' + classes.userCollapseLinks}>
										<span className={classes.collapseItemMini}>EP</span>
										<ListItemText
											primary={'Edit Profile'}
											disableTypography={true}
											className={collapseItemText}
										/>
									</NavLink>
								</ListItem>
								<ListItem className={classes.collapseItem}>
									<NavLink to='#' className={classes.itemLink + ' ' + classes.userCollapseLinks}>
										<span className={classes.collapseItemMini}>S</span>
										<ListItemText
											primary={'Settings'}
											disableTypography={true}
											className={collapseItemText}
										/>
									</NavLink>
								</ListItem>
							</List>
						</Collapse>
					</ListItem>
				</List>
			</div>
		);
		var links = <List className={classes.list}>{this.createLinks(routes)}</List>;

		const logoNormal =
			classes.logoNormal +
			' ' +
			cx({
				[classes.logoNormalSidebarMini]: this.props.miniActive && this.state.miniActive,
			});

		const logoClasses =
			classes.logo +
			' ' +
			cx({
				[classes.whiteAfter]: bgColor === 'white',
			});
		var brand = (
			<div className={logoClasses}>
				<a href='#' className={classes.logoMini}>
					<img src={logo} alt='logo' className={classes.img} />
				</a>
				<div className={logoNormal}>{logoText}</div>
			</div>
		);
		const drawerPaper =
			classes.drawerPaper +
			' ' +
			cx({
				[classes.drawerPaperMini]: this.props.miniActive && this.state.miniActive,
			});
		const sidebarWrapper =
			classes.sidebarWrapper +
			' ' +
			cx({
				[classes.drawerPaperMini]: this.props.miniActive && this.state.miniActive,
				[classes.sidebarWrapperWithPerfectScrollbar]:
					process.browser && navigator.platform.indexOf('Win') > -1,
			});
		return (
			<div ref='mainPanel'>
				<Hidden mdUp implementation='css'>
					<Drawer
						variant='temporary'
						anchor={'right'}
						open={this.props.open}
						classes={{
							paper: drawerPaper + ' ' + classes[bgColor + 'Background'],
						}}
						onClose={this.props.handleDrawerToggle}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
					>
						{brand}
						<SidebarWrapper
							className={sidebarWrapper}
							user={user}
							headerLinks={<AdminNavbarLinks />}
							links={links}
						/>
						{image !== undefined ? (
							<div
								className={classes.background}
								style={{ backgroundImage: 'url(' + image + ')' }}
							/>
						) : null}
					</Drawer>
				</Hidden>
				<Hidden smDown implementation='css'>
					<Drawer
						onMouseOver={() => this.setState({ miniActive: false })}
						onMouseOut={() => this.setState({ miniActive: true })}
						anchor={'left'}
						variant='permanent'
						open
						classes={{
							paper: drawerPaper + ' ' + classes[bgColor + 'Background'],
						}}
					>
						{brand}
						<SidebarWrapper className={sidebarWrapper} user={user} links={links} />
						{image !== undefined ? (
							<div
								className={classes.background}
								style={{ backgroundImage: 'url(' + image + ')' }}
							/>
						) : null}
					</Drawer>
				</Hidden>
			</div>
		);
	}
}

Sidebar.defaultProps = {
	bgColor: 'blue',
};

Sidebar.propTypes = {
	classes: PropTypes.object.isRequired,
	bgColor: PropTypes.oneOf([ 'white', 'black', 'blue' ]),

	color: PropTypes.oneOf([ 'white', 'red', 'orange', 'green', 'blue', 'purple', 'rose' ]),
	logo: PropTypes.string,
	logoText: PropTypes.string,
	image: PropTypes.string,
	routes: PropTypes.arrayOf(PropTypes.object),
	user: PropTypes.string,
};

export default withRouter(withStyles(sidebarStyle)(Sidebar));
