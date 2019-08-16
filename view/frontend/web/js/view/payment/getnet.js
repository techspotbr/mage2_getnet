define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (Component,
              rendererList) {
        'use strict';
        rendererList.push(
            {
                type: 'getnet',
                component: 'Techspot_Getnet/js/view/payment/method-renderer/getnet-method'
            }
        );
        return Component.extend({});
    }
);