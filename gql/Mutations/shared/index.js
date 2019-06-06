import gql from 'graphql-tag';

export const REQUEST_RESET = gql`
	mutation REQUEST_RESET($email: String!, $role: String!) {
		requestReset(email: $email, role: $role) {
			message
		}
	}
`;

export const RESET_PASSWORD = gql`
	mutation RESET_PASSWORD(
		$resetToken: String!
		$password: String!
		$confirmPassword: String!
		$role: String!
	) {
		resetPassword(
			resetToken: $resetToken
			password: $password
			confirmPassword: $confirmPassword
			role: $role
		) {
			id
			firstName
			lastName
			imageURL
			role
		}
	}
`;
