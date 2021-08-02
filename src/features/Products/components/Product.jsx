import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from '../../../constants/index';
import { formatPrice } from '../../../utils';


function Product({
    product
}) {
    const thumnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER

    const history = useHistory();


    // navigate to detail page
    const handleClick = () => {
        history.push(`/products/${product.id}`)
    }

    return (
        <div>
            <Box padding={1} minHeight="215px" onClick={handleClick}>
                <Box padding={1}>
                    <img src={thumnailUrl} 
                    alt={product.name} width="100%"/>
                </Box>

                <Typography variant="body2">
                    {product.name}
                </Typography>
                <Typography variant="body2">
                    <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
                    {formatPrice(product.salePrice)}
                    </Box>
                    
                    {product.promotionPercent > 0 ? ` - ${product.promotionPercent}%`: ''}
                </Typography>
            </Box>
        </div>
    );
}

export default Product;