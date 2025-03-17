import React from "react";
import { Typography, Drawer, List, ListItem, ListItemButton, ListItemIcon, Divider, ListItemText, Toolbar, Box } from "@mui/material";
import { PhotoCamera, Inbox, Mail, Person } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import MenuContent from "../MenuContent/MenuContent";
import MyFooter from "../Components/MyFooter";

const MailIcon = styled(Mail)(({ theme }) => ({}));
const InboxIcon = styled(Inbox)(({ theme }) => ({}));

const LogoCamera = styled(PhotoCamera)(({ theme }) => ({
    marginRight: "10px",
}));

const AdminPage = (props) => {
    const drawerWidth = 240;

    const up = () => {
        console.log("hehe");
        props.setPageType("guest");
    };

    return (
        <>
            <Box sx={{ display: "flex" }}>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        "& .MuiDrawer-paper": {
                            width: drawerWidth,
                            boxSizing: "border-box",
                        },
                    }}
                    variant="permanent"
                    anchor="left"
                >
                    <Toolbar>
                        <LogoCamera />
                        <Typography variant="h6">MyPOS</Typography>
                    </Toolbar>
                    <Divider />
                    <List>
                        <ListItem key={"Guest"} disablePadding>
                            <ListItemButton onClick={up}>
                                <ListItemIcon>
                                    <Person />
                                </ListItemIcon>
                                <ListItemText primary={"Guest"} />
                            </ListItemButton>
                        </ListItem>
                        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {["All mail", "Trash", "Spam"].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>

                <Box>
                    <MenuContent />
                    <MyFooter />
                </Box>
            </Box>
        </>
    );
};

export default AdminPage;
