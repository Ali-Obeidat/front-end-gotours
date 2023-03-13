import React from 'react'

import {
    Navigate, Outlet, useNavigate,
} from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
export default function ProtectedRoute({ children }) {
    const { user } = useAuthContext()
    const navigate = useNavigate();

    if (!user) {

        return <Navigate to="/login" replace />;
    }

    return children;

}
