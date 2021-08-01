import { Box, Checkbox, FormControlLabel, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        borderTop: `1px solid ${theme.palette.grey[300]}`
    },
    header: {
        fontWeight: 'bold'
    }
}))

function FilterbyService({
    onChange,
    filters={}
}) {
    const classes = useStyles();

    const listCheckBox = [
        {name: 'isPromotion',title: 'Có khuyến mãi'},
        {name: 'isFreeShip',title: 'Giao hàng miễn phí'}
    ]

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.checked;
        
        if (!onChange) return;

        onChange({
            [key]: value
        })
    }



    return (
        <Box className={classes.root}>
             <Typography variant="subtitle2" className={classes.header}>DỊCH VỤ</Typography>
            {listCheckBox.map(elm => {
                return (
                    <FormControlLabel key={elm.name}
                    control={
                    <Checkbox
                        checked={filters[elm.name]}
                        onChange={handleChange}
                        name={elm.name}
                        color="primary"
                    />
                    }
                    label={elm.title}
            />
            )})}
        </Box>
    );
}

export default FilterbyService;