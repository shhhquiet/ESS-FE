import withStyles from '@material-ui/core/styles/withStyles';
import styles from '../../static/admin-styles/jss/material-dashboard-pro-react/views/loginPageStyle';
import InputAdornment from '@material-ui/core/InputAdornment';
//import Button from '../../MUI-Components/admin-components/CustomButtons/Button';
import Icon from '@material-ui/core';
import { DialogActions, ButtonBase, Grid, Card, CardHeader, CardContent, Input, Button } from '@material-ui/core';
import Router from 'next/router'

// @material-ui/icons
import Face from '@material-ui/icons/Face';
import Email from '@material-ui/icons/Email';
import Lock from '@material-ui/icons/Lock'

import React, { useState } from 'react';
// import Router from 'next/router';
import { Mutation } from 'react-apollo';

import { SIGNIN_EMPLOYEE } from '../../gql/Mutations/employee';

function Home({ classes }) {
	const [user, setUser] = useState({ email: '', password: '' });
	// const [serverError, setServerError] = useState(undefined);
	const [err, setError] = useState({
		email: undefined,
		password: undefined
	});

	const handleError = error => {
		if (error.message.replace('GraphQL error: ', '') === 'Invalid Password!') {
			setError({ password: error.message.replace('GraphQL error: ', '') });
		} else if (error.message.includes('normal')) {
			setError({ ...err, password: 'Password does not match.' });
		}
		// else {
		//   setServerError(error);
		// }
	};

	return (
		<div className={classes.wrapper}>
			<div className={classes.fullPage}>
				<div className={classes.container}>
					<Grid container justify="center">
						<Grid item xs={12} sm={6} md={4}>
							<Mutation
								mutation={SIGNIN_EMPLOYEE}
								variables={{ email: user.email, password: user.password }}
								onError={handleError}
								onCompleted={() => Router.push('/admin/schedule')}
							>
								{signin => (
									<form
										onSubmit={async e => {
											e.preventDefault();
											await signin({
												variables: {
													email: user.email,
													password: user.password
												}
											});
										}}
									>
										<Card login>
											<CardHeader
												className={`${classes.cardHeader} ${classes.textCenter}`}
												color="rose"
											>
												<h4 className={classes.cardTitle}>Log in</h4>
											</CardHeader>
											<CardContent>
												{/* <CustomInput
													labelText="First Name.."
													id="firstname"
													formControlProps={{
														fullWidth: true
													}}
													inputProps={{
														endAdornment: (
															<InputAdornment position="end">
																<Face className={classes.inputAdornmentIcon} />
															</InputAdornment>
														)
													}}
												/> */}
												<Input
													labelText="Email..."
													id="email"
													formControlProps={{
														fullWidth: true
													}}
													inputProps={{
														endAdornment: (
															<InputAdornment position="end">
																<Email className={classes.inputAdornmentIcon} />
															</InputAdornment>
														),
														// placeholder: 'Email...',
														value: user.email,
														type: 'text',
														onChange: e => {
															// console.log(e.target.value, user);
															setUser({
																...user,
																email: e.target.value
															});
														}
													}}
												/>
												<Input
													error={err.password}
													labelText="Password"
													id="password"
													formControlProps={{
														fullWidth: true
													}}
													inputProps={{
														endAdornment: (
															<InputAdornment position="end">
																<Lock className={classes.inputAdornmentIcon}/>
															</InputAdornment>
														),
														type: 'password',
														value: user.password,
														onChange: e => {
															// console.log(e.target.value, user);
															setUser({
																...user,
																password: e.target.value
															});
														}
													}}
												/>
											</CardContent>
											<DialogActions
												className={`${classes.modalFooter} ${classes.justifyContentCenter}`}
											>
												<ButtonBase type="submit">
													<Button
														className={classes.loginButton}
														color="primary"
														simple={true}
														disabled={!user.email || !user.password}
														size="lg"
														component="div"
													>
														Login
													</Button>
												</ButtonBase>
											</DialogActions>
										</Card>
									</form>
								)}
							</Mutation>
						</Grid>
					</Grid>
				</div>
			</div>
		</div>
	);
}

export default withStyles(styles)(Home);
