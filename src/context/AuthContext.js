import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        isAuthenticated: false,
        accessToken: null,
    });

    const setAuthInfo = ({ accessToken }) => {
        sessionStorage.setItem('accessToken', accessToken);
        setAuthState({
            isAuthenticated: !!accessToken,
            accessToken,
        });
    };

    // const logout = () => {
    //     sessionStorage.removeItem('accessToken');
    //     setAuthState({
    //         isAuthenticated: false,
    //         accessToken: null,
    //     });
    // };

    return (
        <AuthContext.Provider value={{ authState, setAuthInfo}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
