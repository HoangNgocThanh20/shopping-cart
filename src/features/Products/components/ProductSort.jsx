import { Tab, Tabs } from '@material-ui/core';
import React from 'react';

function ProductSort({
    currentSort,
    onChange
}) {
    const handleSortChange = (e,newValue) => {
        if(onChange) onChange(newValue)
    }
    return (
        <Tabs
            value={currentSort}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleSortChange}
        >
            <Tab label="Gía thấp tới cao" value="salePrice:ASC"></Tab>
            <Tab label="Gía cao xuống thấp" value="salePrice:DESC"></Tab>
        </Tabs>
    );
}

export default ProductSort;