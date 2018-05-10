/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            categoryForm:        'Magento_Catalog/catalog/category/form',
            newCategoryDialog:   'Magento_Catalog/js/new-category-dialog',
            categoryTree:        'Magento_Catalog/js/category-tree',
            productGallery:      'Magento_Catalog/js/product-gallery',
            baseImage:           'Magento_Catalog/catalog/base-image-uploader',
            productAttributes:   'Magento_Catalog/catalog/product-attributes',
            categoryCheckboxTree:'Magento_Catalog/js/category-checkbox-tree'
        }
    },
    deps: [
        'Magento_Catalog/catalog/product'
    ]
};
