import { Box, Container, Grid, Paper, makeStyles } from '@material-ui/core';
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import ProductInfor from '../components/ProductInfor';
import ProductThumnail from '../components/ProductThumnail';
import useProductDetail from '../hooks/useProductDetail';
const useStyles = makeStyles(theme => ({
    root: {},

    left: {
        width: "400px",
        padding: theme.spacing(1.5),
        borderRight: `1px solid ${theme.palette.grey[300]}`,
    },
    right: { 
        flex: '1',
        padding: theme.spacing(1.5),
    },
}))
function DetailPage() {
    const classes = useStyles();
    const { params: { productId },} = useRouteMatch();
    const { product, loading } = useProductDetail(productId);

    return (
        <>
            {loading === true ? <Box>Loading...</Box> : <Box>
                <Container>
                    <Paper elevation={0}>
                        <Grid container>
                            <Grid item className={classes.left}>
                                <ProductThumnail product={product} />
                            </Grid>
                            <Grid item className={classes.right}>
                                <ProductInfor product={product}/>
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>
            </Box>}
        </>
    );
}

export default DetailPage;