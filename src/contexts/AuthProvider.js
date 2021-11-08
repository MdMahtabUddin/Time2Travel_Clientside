import React, { createContext, useState } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allContext = useFirebase();

    const [allBooking, setAllBooking] = useState([])
    const [myBooking, setMyBooking] = useState([])


    const value = { ...allContext, allBooking, setAllBooking, myBooking, setMyBooking };

    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;