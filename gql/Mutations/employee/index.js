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

export const CREATE_CLASS = gql`
	mutation CREATE_CLASS($classInfo: CreateClassInput!) {
		createClass(classInfo: $classInfo) {
			id
			description
			ageGroup
			level
			capacity
			price
			day
			instructor
			duration
			time
		}
	}
`;

export const CREATE_AGE_GROUP = gql`
	mutation CREATE_AGE_GROUP($groupDetails: AgeGroupCreateInput!) {
		createAgeGroup(groupDetails: $groupDetails) {
			id
			name
			minAge
		}
	}
`;
