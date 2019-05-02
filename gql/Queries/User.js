import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const CURRENT_USER_QUERY = gql`
	query {
		currentUser {
			...on Employee {
        id
			firstName
			lastName
      }
    }
  }
`
export const isLoggedIn = async client => {
	try {
		const response = await client.query({
			query: CURRENT_USER_QUERY,
		});
		if (response) {
			return { currentUser: response.data.currentUser };
		}
	} catch (e) {
		console.log('hello', e);
		return {};
	}
};