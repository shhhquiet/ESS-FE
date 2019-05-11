import gql from 'graphql-tag';

export const BOOK_LESSON = gql`
	mutation BOOK_LESSON($lessonId: ID!) {
		bookLesson(lessonId: $lessonId) {
			id
			name
			description
			day
			time
			duration
			open
			client {
				id
				firstName
			}
		}
	}
`;

export const BOOK_CLASS = gql`
	mutation BOOK_CLASS($classId: ID!, $studentId: ID!) {
		bookClass(classId: $classId, studentId: $studentId) {
			id
			name
			description
			day
			time
			duration
			open
			students {
				id
				firstName
			}
		}
	}
`;

export const CREATE_STUDENT = gql`
	mutation CREATE_STUDENT($studentInfo: StudentCreateInput!) {
		createStudent(studentInfo: $studentInfo) {
			id
			skill
			ageGroup
			medical
		}
	}
`;

export const ADD_MEDICAL = gql`
	mutation ADD_MEDICAL($medicalInfo: MedicalConditionCreateInput!) {
		addMedical(medicalInfo: $medicalInfo) {
			id
			description
			student
		}
	}
`;
