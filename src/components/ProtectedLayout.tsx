import React, { Children } from "react";
import { useAuth } from "../context/AuthContext/useAuth"

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
    const auth = useAuth()

        if (!auth.email){
            return <h1>Você não tem acesso</h1>;
        }

        return children;
};