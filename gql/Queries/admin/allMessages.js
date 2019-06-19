import gql from 'graphql-tag';

export const ALL_MESSAGES = gql`
  query {
    messages {
      id 
      title 
      text 
      author {
        id 
        firstName
      }
    }
  }
`