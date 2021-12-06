import userResolver from "./user.resolver.js";
import projectResolver from "./project.resolver.js";
import enrollmentResolver from "./enrollment.resolver.js";
import advanceResolver from "./advances.resolver.js";
import miscResolver from "./misc.resolver.js";

const { userQueries, userMutations, ...userRest } = userResolver;
const { projectQueries, projectMutations, ...projectRest } = projectResolver;
const { enrollmentQueries, enrollmentMutations, ...enrollmentRest} = enrollmentResolver;
const { advanceQueries, advanceMutations, ...advanceRest} = advanceResolver;
const { miscQueries, miscMutations, ...miscRest} = miscResolver;

export default {
  Query: {
    ...userQueries,
    ...projectQueries,
    ...enrollmentQueries,
    ...advanceQueries,
    ...miscQueries,
  },
  Mutation: {
    ...userMutations,
    ...projectMutations,
    ...enrollmentMutations,
    ...advanceMutations,
    ...miscMutations,
  },
  ...userRest,
  ...projectRest,
  ...enrollmentRest,
  ...advanceRest,
  ...miscRest,
};
