import { Box } from '@material-ui/core';
import React from 'react';
import FilterByCategory from './Filters/FilterByCategory';
import FilterByPrice from './Filters/FilterByPrice';
import FilterbyService from './Filters/FilterbyService';

function ProductFilter({
    onChange,
    filters={}
}) {
    const handleCategoryChange = (newCategoryId) => {
        if(!onChange) return;
        const newFilters = {
            'category.id': newCategoryId
        }

        onChange(newFilters)
    }
    const handleChange = (values) => {
        if(onChange) {
            onChange(values);
        }
    }

    return (
       <Box>
           <FilterByCategory onChange={handleCategoryChange} />
           <FilterByPrice onChange={handleChange} />
           <FilterbyService filters={filters} onChange={handleChange} />
       </Box>
    );
}

export default ProductFilter;