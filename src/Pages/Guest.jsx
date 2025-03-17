import React from "react";
import { Typography, AppBar, Toolbar, Button } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import MenuContent from "../MenuContent/MenuContent";
import MyFooter from "../Components/MyFooter";

const LogoCamera = styled(PhotoCamera)(({ theme }) => ({
    marginRight: "10px",
}));

const GuestPage = (props) => {
    const up = () => {
        console.log("haha");
        props.setPageType("admin");
    };

    return (
        <>
            <AppBar position="relative">
                <Toolbar>
                    <LogoCamera />
                    <Typography variant="h6">MyPOS</Typography>
                    <Button onClick={up} color="inherit">
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
            <main>
                <MenuContent />
            </main>
            <MyFooter />
        </>
    );
};

export default GuestPage;
