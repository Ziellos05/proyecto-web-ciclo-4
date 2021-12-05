import * as InitialState from './initialState';

/** handle authentication state of a user */
export const AuthUser = (state, action) => {
    const logInUser = () => {
        return { ...state, isLoading: false, isLoggedIn: action.payload };
    };
    const logOutUser = () => {
        return { ...state, isLoading: false, isLoggedIn: action.payload };
    };
    const offlineMode = () => {
        return { ...state, isLoading: false, isOffline: true, isLoggedIn: action.payload };
    };
    switch (action.type) {
        case 'LOG_IN':
            return logInUser();
        case 'LOG_OUT':
            return logOutUser();
        case 'OFFLINE':
            return offlineMode();			
        default:
            return state;
    }
};

export const userInfo = (state, action) => {
    
    const setUserInfo = () => {
        const { name, email, password } = action.payload;
        return { ...state, name: name, email: email, password: password  };
    };

    const cleanUserInfo = () => {
        return { ...state, ...InitialState.userInfo};
    }

    switch (action.type) {
        case 'LOG_IN':
            return setUserInfo();
        case 'LOG_OUT':
            return cleanUserInfo();       		
        default:
            return state;
    }
};