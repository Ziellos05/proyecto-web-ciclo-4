// models

import Projects from "../models/projects.model.js";
import Users from "../models/users.model.js";
import Enrollements from "../models/enrollments.model.js";

// vendors
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { AuthenticationError } from 'apollo-server'

// constants
import { USER_STATUS, ROLES } from '../constants/user.constants.js';

const allProjects = async (parent, args, { user, errorMessage }) => {
  if(!user) {
    throw new Error(errorMessage);
  }
  const projects = await Projects.find();
  return projects;
};

const updateProjectStatus = async (parent, args, {user, errorMessage} ) => {
  if(!user) {
    throw new AuthenticationError(errorMessage);
  }
  if(user.role !== ROLES.ADMIN) {
    throw new Error('Access denied');
  }
  return await Projects.findOneAndUpdate({name: args.input.name}, {
    status: args.input.status,
  });;
}

const updateProjectPhase = async (parent, args, {user, errorMessage} ) => {
  if(!user) {
    throw new AuthenticationError(errorMessage);
  }
  if(user.role !== ROLES.ADMIN) {
    throw new Error('Access denied');
  }
  return await Projects.findOneAndUpdate({name: args.input.name}, {
    phase: args.input.phase,
  });;
}

const project = async (parent, args) => {
  const user = await Projects.findById(args._id);
  return user;
};

const leader = async (parent) => {
  const user = await Users.findById(parent.leader_id);
  return user;
};

const enrollments = async (parent) => {
  const enrollments = await Enrollements.find({ project_id: parent._id.toString() });
  return enrollments;
}

export default {
  projectQueries: {
    allProjects,
    project,
  },
  projectMutations: {
    updateProjectStatus,
    updateProjectPhase,
  },
  Project: {
    leader,
    enrollments,
  }
};
