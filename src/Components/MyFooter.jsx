import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const CompFooter = styled("footer")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: "50px 0",
}));

const MyFooter = () => {
    return (
        <>
            <CompFooter>
                <Typography variant="h6" align="center" gutterBottom>
                    Kenny Susanto
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary">
                    Something to give footer a purpose!
                </Typography>
            </CompFooter>
        </>
    );
};

export default MyFooter;
