import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import { ApolloProvider } from 'react-apollo';
import App, { Container } from 'next/app';
//import { SnackbarProvider } from 'notistack';

import theme from '../utils/getPageContext';
//mport '../static/client-styles/scss/material-kit-pro-react.scss';
//import './static/admin-styles/scss/material-dashboard-pro-react.scss';
import withData from '../utils/withData';
import Page from '../components/Page';

class MyApp extends App {
	// constructor() {
	// 	super();
	// 	//this.pageContext = getPageContext();
	// }
	componentDidMount() {
		const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
		}
		
}

	render() {
		const { Component, apollo, pageProps } = this.props;

		return (
			<Container>
				{/* <JssProvider
					registry={this.pageContext.sheetsRegistry}
					generateClassName={this.pageContext.generateClassName}
				> */}
					<ThemeProvider
						theme={theme}
						// sheetsManager={this.pageContext.sheetsManager}
					>
						<CssBaseline />
						<ApolloProvider client={apollo}>
							<ApolloHooksProvider client={apollo}>
								{/* <SnackbarProvider maxSnack={3} hideIconVariant> */} 
						<Page>
							<Component pageContext={this.pageContext} {...pageProps} />
						</Page>
						{/* {/* </SnackbarProvider> */}
							</ApolloHooksProvider>
						</ApolloProvider> 
					</ThemeProvider>
				{/* </JssProvider> */}
			</Container>
		);
	}
}

export default withData(MyApp);
