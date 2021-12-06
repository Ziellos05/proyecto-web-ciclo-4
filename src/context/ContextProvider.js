import React, { createContext, useReducer } from 'react';
import * as Reducer from './reducers';
import * as InitialState from './initialState';


const AppContext = createContext();


const ContextProvider = ({ children }) => {

    /** handle authentication state of a user */
	const [authState, setAuthState] = useReducer(Reducer.AuthUser, InitialState.authUser);
	/** handle user data  */
	const [user, setUser] = useReducer(Reducer.userInfo, InitialState.userInfo);

	return (
		<AppContext.Provider
			value={{
				authState,
				setAuthState,
				user,	
				setUser			
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default ContextProvider;

export { AppContext };