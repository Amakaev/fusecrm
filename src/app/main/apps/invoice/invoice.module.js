(function ()
{
    'use strict';

    angular
        .module('app.pages.invoice', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.pages_invoice_modern', {
                url      : '/pages/invoice/modern',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/apps/invoice/views/modern/modern.html',
                        controller : 'InvoiceController as vm'
                    }
                },
                resolve  : {
                    Invoice: function (msApi)
                    {
                        return msApi.resolve('invoice@get');
                    }
                },
                bodyClass: 'invoice printable'
            })
            .state('app.pages_invoice_compact', {
                url      : '/pages/invoice/compact',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/apps/invoice/views/compact/compact.html',
                        controller : 'InvoiceController as vm'
                    }
                },
                resolve  : {
                    Invoice: function (msApi)
                    {
                        return msApi.resolve('invoice@get');
                    }
                },
                bodyClass: 'invoice printable'
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/apps/invoice');

        // Api
        msApiProvider.register('invoice', ['app/data/invoice/invoice.json']);

        // Navigation
        msNavigationServiceProvider.saveItem('apps.invoice', {
            title : 'Invoice',
            icon  : 'icon-receipt',
            weight: 11
        });

        msNavigationServiceProvider.saveItem('apps.invoice.modern', {
            title : 'Modern',
            state : 'app.pages_invoice_modern'
        });

        msNavigationServiceProvider.saveItem('apps.invoice.compact', {
            title : 'Compact',
            state : 'app.pages_invoice_compact'
        });
    }

})();
