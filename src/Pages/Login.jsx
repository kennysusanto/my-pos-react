import React from "react";
import { Typography, AppBar, Toolbar } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import MenuContent from "../MenuContent/MenuContent";
import MyFooter from "../Components/MyFooter";

const LogoCamera = styled(PhotoCamera)(({ theme }) => ({
    marginRight: "10px",
}));

const LoginPage = () => {
    return (
        <>
            <AppBar position="relative">
                <Toolbar>
                    <LogoCamera />
                    <Typography variant="h6">MyPOS</Typography>
                </Toolbar>
            </AppBar>
            <main>
                <MenuContent />
            </main>
            <MyFooter />
        </>
    );
};

export default LoginPage;
