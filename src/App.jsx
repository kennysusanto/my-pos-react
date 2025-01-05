import React from "react";
import { Typography, AppBar, Button, CssBaseline, Card, CardContent, CardActions, CardMedia, Grid2, Toolbar, Container } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const MyContainer = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
}));

const CardGrid = styled(Container)(({ theme }) => ({
    padding: "20px 0",
}));

const MyCard = styled(Card)(({ theme }) => ({
    height: "100%",
    display: "flex",
    flexDirection: "column",
}));

const MyCardMedia = styled(CardMedia)(({ theme }) => ({
    paddingTop: "56.25%", // 16:9
}));

const MyCardContent = styled(CardContent)(({ theme }) => ({
    flexGrow: "1",
}));

const MyFooter = styled("footer")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: "50px 0",
}));

const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const App = () => {
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera sx={{ marginRight: "10px" }} />
                    <Typography variant="h6">MyPOS</Typography>
                </Toolbar>
            </AppBar>
            <main>
                <MyContainer>
                    <Container maxwidth="sm" style={{ marginTop: "100px" }}>
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            MyPOS
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            This is a long text to show how it will appear in the web page of this POS web app created by Kenny. I am trying to make
                            this text as long as possible to give estimation on how the framework will handle this responsively
                        </Typography>
                        <div>
                            <Grid2 container spacing={2} justifyContent="center">
                                <Grid2 item>
                                    <Button variant="contained" color="primary">
                                        See my menu
                                    </Button>
                                </Grid2>
                                <Grid2 item>
                                    <Button variant="outlined" color="primary">
                                        Secondary button
                                    </Button>
                                </Grid2>
                            </Grid2>
                        </div>
                    </Container>
                </MyContainer>
                <CardGrid maxWidth="xl">
                    <Grid2 container spacing={4}>
                        {cards.map((card) => (
                            <Grid2 item key={card} size={{ xs: 12, sm: 6, md: 4 }}>
                                <MyCard>
                                    <MyCardMedia image="https://picsum.photos/seed/picsum/300/200" title="image title here" />
                                    <MyCardContent>
                                        <Typography variant="h5" gutterBottom>
                                            Heading
                                        </Typography>
                                        <Typography>This is a media card. You can use this section to describe the contents.</Typography>
                                    </MyCardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Edit
                                        </Button>
                                    </CardActions>
                                </MyCard>
                            </Grid2>
                        ))}
                    </Grid2>
                </CardGrid>
            </main>
            <MyFooter>
                <Typography variant="h6" align="center" gutterBottom>
                    Kenny Susanto
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary">
                    Something to give footer a purpose!
                </Typography>
            </MyFooter>
        </>
    );
};

export default App;
