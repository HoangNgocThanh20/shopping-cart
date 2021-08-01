import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import productApi from '../../../api/productApi';
import FilterViewer from '../components/FilterViewer';
import ProductFilter from '../components/ProductFilter';
import ProductList from '../components/ProductList';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductSort from '../components/ProductSort';
import queryString from 'query-string';

const useStyles = makeStyles(theme => ({
    root: {},

    left: {
        width: "250px"
    },
    right: { 
        flex: '1'
    },
    pagination: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
        paddingBottom: '15px'
    }
}))
function ListPage() {
    const classes = useStyles();
    const [productList,setProductList] = useState([]);
    const history = useHistory();

    const [pagination,setPagination] = useState({
        limit: 10,
        total: 10,
        page: 1,
        isPromotion: false,
        isFreeShip: false
    });
    const [loading,setLoading] = useState(true);
    const [filters,setFilters] = useState({
         _page: 1,
         _limit: 10,
         _sort: 'salePrice:ASC',
         isPromotion: false,
         isFreeShip: false
    })


    useEffect(() => {
        (async () => {
            try {
                const { data, pagination } = await productApi.getAll(filters);
                setProductList(data);
                setPagination(pagination);
            } catch (error) {
                console.log('Failed to fetch productList',error);
            }
            setLoading(false);
        })();
    },[filters])

    useEffect(() => {
        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(filters)
        })
    },[history, filters])
    
    const handlePageChange = (e, page) => {
        
        setFilters({
            ...filters,
            _page: page,
        })
    
    }
    const handleSortChange = (newSortValue) => {
        setFilters({
            ...filters,
           _sort: newSortValue
        })
    
    }

    const handleFileterChange = (newFilters) => {
        setFilters({
            ...filters,
            ...newFilters 
        })
    }

    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    <Grid item className={classes.left}>
                    <Paper elevation={0}>
                        <ProductFilter filters={filters} onChange={handleFileterChange}/>
                    </Paper>
                    </Grid>
                    <Grid item className={classes.right}>
                    <Paper elevation={0}>
                        <FilterViewer filters={filters} onChange={handleFileterChange}/>
                        
                        <ProductSort currentSort={filters._sort} onChange={handleSortChange} />

                        {loading ? <ProductSkeletonList length={12} /> : <ProductList data={productList}/>}
                        <Box className={classes.pagination}>
                            <Pagination 
                                color="primary"
                                count={Math.ceil(pagination.total / pagination.limit)} 
                                page={pagination.page} 
                                onChange={handlePageChange}
                            />
                         </Box>
                    </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ListPage;