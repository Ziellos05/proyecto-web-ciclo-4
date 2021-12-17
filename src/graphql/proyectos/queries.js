import { gql } from '@apollo/client';

const GET_PROYECTOS = gql `
query Projects {
    allProjects {
      _id
      name
      generalObjective
      specificObjectives
      budget
      startDate
      endDate
      leader_id
      status
      phase
    }
  }
`;

export { GET_PROYECTOS };