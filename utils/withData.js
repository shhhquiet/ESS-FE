import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-client';
import getConfig from 'next/config';
const {
	publicRuntimeConfig: { endpoint }
} = getConfig();

export default withApollo(
	({ headers }) => {
		const ssrMode = !process.browser;

		const httpLink = createHttpLink({
			uri: 'http://localhost:4000'
		});

		const contextLink = setContext(() => ({
			fetchOptions: {
				credentials: 'include'
			},
			headers: {
				...headers,
				host: process.env.NODE_ENV === 'development' ? 'localhost' : 'CHANGE TO DEPLOYED URL',
				cookie: headers && headers.cookie
			}
		}));

		const errorLink = onError(({ graphQLErrors, networkError }) => {
			if (graphQLErrors) {
				graphQLErrors.map(err => console.log(`[GraphQL error]: Message: ${err.message}`));
			}
			if (networkError) console.log(`[Network error]: ${networkError}`);
		});

		const link = ApolloLink.from([errorLink, contextLink, httpLink]);

		const cache = new InMemoryCache({
			dataIdFromObject: data =>
				data && data.id && data.__typename ? data.__typename + data.id : null
		});

		return new ApolloClient({
			link,
			ssrMode,
			cache
		});
	},
	{ getDataFromTree: 'always' }
);
