import React from 'react'
import {
    Navigate, useLocation, useNavigate,
} from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

export default function ProtectedLogin({ children }) {
    const { user } = useAuthContext()
    if (user) {
        
        return <Navigate to='/'  />;
    }

    return children;
}
