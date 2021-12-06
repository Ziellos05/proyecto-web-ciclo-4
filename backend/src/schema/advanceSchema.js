import { gql } from 'apollo-server';

const advanceType = gql`
    #Advance
    type Advance {
        _id: ID!
        projectID: ObjectId!
        userID: ObjectId!
        advance: String!
        date: Date!
    }
`;

const queries = gql`
    #Query all advances
    type Query {
        allAdvances: [Advance]
    }

    type Query {
        advanceById(_id: ID!): Advance
    }

    type Query {
        advanceByUser(userID: ObjectId!): Advance
    }

    type Query {
        advanceByProject(projectID: ObjectId!): Advance
    }

    type Query {
        advance: Advance!
    }
`;

const mutations = gql`
    type Mutation {
        addAdvance(input: AddAdvanceInput!): Advance
    }
`;

const inputs = gql`
    input AddAdvanceInput {
        projectID: ObjectId!
        userID: ObjectId!
        advance: String!
        date: Date!
    }
`;

export default [
    advanceType,
    queries,
    mutations,
    inputs
];