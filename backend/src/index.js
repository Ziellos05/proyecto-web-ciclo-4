// vendors
import {ApolloServer} from 'apollo-server-express';
import {ApolloServerPluginDrainHttpServer} from 'apollo-server-core';
import express from 'express';
import http from 'http';
import dotenv from 'dotenv';

// middlewares
import ValidateAccess from './middlewares/access.middlewares.js';

// utilities
import connect from './database';

// typeDefs
import userSchema from './users/schema/index.js';
import projectSchema from './projects/schema/index.js';

// resolvers
import { allUsers } from './users/resolvers/index.js';

