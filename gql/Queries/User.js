import gql from 'graphql-tag';

export const CURRENT_USER_QUERY = gql`
	query {
		currentUser {
			__typename
			...on Employee {
        id
				firstName
				lastName
				imageURL
				role
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