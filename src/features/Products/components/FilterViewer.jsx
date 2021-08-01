import { Box, Chip, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',

        margin: theme.spacing(2, 0),
        listStyleType: 'none',

        '& > li': {
            margin: 0,
            padding: theme.spacing(1),
        },
    }
}))

const FILTER_LIST = [
   {
       id: 1,
       getLabel: () => 'Giao hàng miễn phí',
       isActive: (filters) => filters.isFreeShip,
       isVisible: () => true,
       isRemovable: false,
       onRemove: () => {},
       onToggle: (filters) => {
           const newFilters = {...filters};
           if (newFilters.isFreeShip) {
            newFilters.isFreeShip = false;
           } else {
            newFilters.isFreeShip = true;
           }
           return newFilters;
       }
   },
   {
    id: 2,
    getLabel: (filters) => 'Có khuyến mãi',
    isActive: () => true,
    isVisible: (filters) => filters.isPromotion === true,
    isRemovable: true,
    onRemove: (filters) => {
        const newFilters = {...filters}

        newFilters.isPromotion = false;
        
        return newFilters
    },
    onToggle: null
},
{
    id: 3,
    getLabel: (filters) => 'Khoảng giá',
    isActive: () => true,
    isVisible: (filters) => 
    Number(filters.salePrice_gte) > 0 && Number(filters.salePrice_lte) > 0,
    isRemovable: true,
    onRemove: (filters) => {
        const newFilters = {...filters}

        newFilters.salePrice_gte = 0;
        newFilters.salePrice_gte = 0;

        return newFilters;
    },
    onToggle: null
},
// {
//     id: 4,
//     getLabel: (filters) => 'Danh mục',
//     isActive: () => true,
//     isVisible: (filters) => true,
//     isRemovable: true,
//     onRemove: (filters) => {},
//     onToggle: null
// }
]

function FilterViewer({
    filters,
    onChange
}) {

    const classes = useStyles();
    return (
        <Box component="ul" className={classes.root}>
        {FILTER_LIST.filter((x) => x.isVisible(filters)).map((x) => {
            return (
                <li key={x.id}>
                    <Chip 
                        label={x.getLabel(filters)}
                        color={x.isActive(filters) ? 'primary' : 'default'}
                        clickable={!x.isRemovable}
                        onClick={x.isRemovable ? null : () => {
                            if(!onChange) return ;

                            const newFilters = x.onToggle(filters)
                            onChange(newFilters);
                        }}
                        onDelete={
                            x.isRemovable 
                                ? () => {
                                    if(!onChange) return;

                                    const newFilters = x.onRemove(filters)
                                    onChange(newFilters)
                                } 
                                : null
                            }
                    />
                </li>
            )})}
        </Box>
    );
}

export default FilterViewer;