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
