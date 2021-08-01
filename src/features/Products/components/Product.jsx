import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from '../../../constants/index';


function Product({
    product
}) {
    const thumnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER
    return (
        <div>
            <Box padding={1} minHeight="215px">
                <Box padding={1}>
                    <img src={thumnailUrl} 
                    alt={product.name} width="100%"/>
                </Box>

                <Typography variant="body2">
                    {product.name}
                </Typography>
                <Typography variant="body2">
                    <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)}
                    </Box>
                    
                    {product.promotionPercent > 0 ? ` - ${product.promotionPercent}%`: ''}
                </Typography>
            </Box>
        </div>
    );
}

export default Product;