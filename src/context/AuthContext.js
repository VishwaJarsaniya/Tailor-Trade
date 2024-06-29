import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        isAuthenticated: false,
        accessToken: null,
        email:null
    });

    const setAuthInfo = ({ accessToken },email) => {
        sessionStorage.setItem('accessToken', accessToken);
        setAuthState({
            isAuthenticated: !!accessToken,
            accessToken,
            email
        });
    };

    const logout = () => {
        sessionStorage.removeItem('accessToken');
        setAuthState({
            isAuthenticated: false,
            accessToken: null,
            email:null
        });
    };

    return (
        <AuthContext.Provider value={{ authState, setAuthInfo,logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
