import { gql } from 'apollo-server';

const projectType = gql`
  # Project
  type Project {
    _id: ID!,
    name: String!
    generalObjective: String!
    specificObjectives: [String]!
    budget: Float!
    startDate: String!
    endDate: String!
    leader_id: ID!
    status: ProjectStatus!
    phase: Phase
    leader: User!
    enrollments: [Enrollment]
  }
`;

const enums = gql`
  # Enum for status values
  enum ProjectStatus {
    ACTIVE
    INACTIVE
  }

  # Enum for phase values
  enum Phase {
    CREATED
    IN_PROGRESS
    ENDED
  }
`;

const queries = gql`
  # Query all projects
  type Query {
    allProjects: [Project]
  }

  type Query {
    project(_id: ID): Project
  }
`;

const mutations = gql`
  type Mutation {
    updateProjectStatus(input: UpdateProjectStatusInput!): Project!
    updateProjectPhase(input: UpdateProjectPhaseInput!): Project!
  }
`;

const inputs = gql`
  input UpdateProjectStatusInput {
    name: String!
    status: ProjectStatus!
  }

  input UpdateProjectPhaseInput {
    name: String!
    phase: Phase!
  }
`;

export default [
  projectType,
  enums,
  queries,
  mutations,
  inputs
];