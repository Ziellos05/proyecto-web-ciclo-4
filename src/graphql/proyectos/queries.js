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


const GET_PROYECTO = gql `
query Project($_id: ID!) {
  project(_id: $_id) {
    name
    generalObjective
    specificObjectives
    budget
    _id
  }
}
`;

const GET_USUARIOS = gql `
query AllUsers($filtro: FiltroUsuarios) {
  allUsers(filtro: $filtro) {
    _id
    name
    email
    status
    documentId
    role
  }
}
`;



/* const NEW_PROYECTO = gql `
mutation Mutation {
  newProject(input: {
    name
    generalObjective
    specificObjectives
    budget
    startDate
    endDate
  })
}
`; */

export { GET_PROYECTOS, GET_PROYECTO, GET_USUARIOS };