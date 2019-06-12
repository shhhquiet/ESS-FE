import gql from 'graphql-tag';

export const FULL_SCHEDULE = gql`
  query {
    fullSchedule {
      lessons {
        id
      }
      classes {
        id 
        name
      }
    }
  }
`