import React, { useState } from "react";
import { CssBaseline } from "@mui/material";

import GuestPage from "./Guest";
import LoginPage from "./Login";
import AdminPage from "./Admin";

const MainPage = () => {
    const [pageType, setPageType] = useState("guest");

    const renderCurrentPage = () => {
        switch (pageType) {
            case "login":
                return <LoginPage setPageType={setPageType} />;
            case "admin":
                return <AdminPage setPageType={setPageType} />;
            case "guest":
            default:
                return <GuestPage setPageType={setPageType} />;
        }
    };

    return (
        <>
            <CssBaseline />
            {renderCurrentPage()}
        </>
    );
};

export default MainPage;
