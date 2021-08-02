import { Box } from '@material-ui/core';
import React from 'react';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from '../../../constants';

function ProductThumnail({
    product
}) {
    const thumnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER
    return (
        <Box>
            <img src={thumnailUrl} alt={product.name} width="100%" />
        </Box>
    );
}

export default ProductThumnail;