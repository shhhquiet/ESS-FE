import gql from 'graphql-tag';

export const SIGNIN_EMPLOYEE = gql`
	mutation SIGNIN_EMPLOYEE($email: String!, $password: String!) {
		signinEmployee(email: $email, password: $password) {
			id
			firstName
			lastName
			email
		}
	}
`;

export const SIGNUP_EMPLOYEE = gql`
	mutation SIGNUP_EMPLOYEE($data: AddEmployeeInput!) {
		signupEmployee(data: $data) {
			id
			firstName
			lastName
			email
		}
	}
`;

export const CREATE_LESSON = gql`
	mutation CREATE_LESSON($data: LessonCreateInput!) {
		createLesson(data: $data) {
			id
			name
			description
			day
			time
			duration
			open
		}
	}
`;
