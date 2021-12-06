import Enrollements from "../models/enrollments.model";
import Projects from "../models/projects.model";
import Users from "../models/users.model";
import Advances from "../models/advances.models";

const allAdvances = async () => {
    const advances = await Advances.find();
    return advances;
}

const advance = async (parent, args) => {
    const advance = await Advances.findById(args._id);
    return advance;
}

const project = async (parent, args) => {
    const project = await Advances.find(parent.projectID);
    return project;
}

const user = async (parent, args) => {
    const user = await Advances.find(parent.userID);
    return user;
}

const newAdvance = async (parent, args) => {
    const newAdvance = new Advances({
        ...args.input,
    });
    return newAdvance.save();
}

export default {
    advanceQueries: {
        allAdvances,
        advance,
        project,
        user,
    },
    advanceMutations: {
        newAdvance,
    }
}