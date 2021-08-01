import { Box, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import categoryApi from '../../../../api/categoryApi';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2)
    },

    menu: {
        padding: 0,
        margin: 0,
        listStyle: 'none',

        '& > li': {
            marginTop: theme.spacing(1),
            '&:hover': {
                cursor: 'pointer',
                color: theme.palette.primary.main
            }
        }
    },
    header: {
        fontWeight: 'bold'
    }
}))

function FilterByCategory({
    onChange
}) {
    const [categoryList,setCategoryList] = useState([]);
    const classes = useStyles();
    useEffect(() => {
        (async () => {
            try {
                const list = await categoryApi.getAll();
                setCategoryList(list.map(x => ({
                    id: x.id,
                    name: x.name,
                })))
            } catch (error) {
                console.log('Failed to fetch category',error);
            }
        })()
    },[])

    const handleCategoryClick = (category) => {
        if(onChange) {
            onChange(category.id)
        }
    }
    return (
        <Box className={classes.root}>
            <Typography variant="subtitle2" className={classes.header}>DANH MỤC SẢN PHẨM</Typography>

            <ul className={classes.menu}>
                {categoryList.map((category) => (
                    <li key={category.id} onClick={() => {handleCategoryClick(category)}}>
                        <Typography>{category.name}</Typography>
                    </li>
                ))}
            </ul>
        </Box>
    );
}

export default FilterByCategory;