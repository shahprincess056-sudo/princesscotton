
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills-legacy.BrBVQSE2.js","/cdn/shopifycloud/checkout-web/assets/c1/app-legacy.D_Jujyr7.js","/cdn/shopifycloud/checkout-web/assets/c1/esnext-vendor-legacy.AmK4Vpv1.js","/cdn/shopifycloud/checkout-web/assets/c1/browser-legacy.CflU7Xri.js","/cdn/shopifycloud/checkout-web/assets/c1/shared-is-shop-pay-active-legacy.KWBBXAVu.js","/cdn/shopifycloud/checkout-web/assets/c1/Theme-utilities-legacy.ChehCQeU.js","/cdn/shopifycloud/checkout-web/assets/c1/images-payment-icon-legacy.BW3R3WiF.js","/cdn/shopifycloud/checkout-web/assets/c1/purchasing-company-isValidPurchasingCompanyBillingAddress-legacy.CldsCdUZ.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-object-legacy.B1CsNRVJ.js","/cdn/shopifycloud/checkout-web/assets/c1/shared-unactionable-errors-legacy.B-lRQzSf.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayCheckoutGqlVersion-legacy.CSTRTiXm.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-ShopPayCheckoutSessionQuery-legacy.D_ohBL4m.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-setAddressErrors-legacy.BA0f5c_f.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUnauthenticatedErrorModal-legacy.Dunn0MZs.js","/cdn/shopifycloud/checkout-web/assets/c1/images-flag-icon-legacy.Bfupgm8k.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en-legacy.IGbsyUHZ.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage-legacy.DG_itlwX.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsTimeout-legacy.B0FP8Mqf.js","/cdn/shopifycloud/checkout-web/assets/c1/remember-me-hooks-legacy.4qPGQdEf.js","/cdn/shopifycloud/checkout-web/assets/c1/OffsitePaymentFailed-legacy.D8LQr5CQ.js","/cdn/shopifycloud/checkout-web/assets/c1/NoAddressLocationFullDetour-legacy.CzFjSsU4.js","/cdn/shopifycloud/checkout-web/assets/c1/SplitDeliveryMerchandiseContainer-legacy.Ce1BgxFR.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayButtonClassName-legacy.7ujVYk3Y.js","/cdn/shopifycloud/checkout-web/assets/c1/ChangeCompanyLocationLink-legacy.DXIff-lw.js","/cdn/shopifycloud/checkout-web/assets/c1/WalletsSandbox-WalletSandbox-legacy.DAv1HpFq.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useForceShopPayUrl-legacy.DNvKE8PN.js","/cdn/shopifycloud/checkout-web/assets/c1/GooglePayButton-index-legacy.DNhLTMSx.js","/cdn/shopifycloud/checkout-web/assets/c1/MarketsProDisclaimer-legacy.D4LtgwwY.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingGroupsSummaryLine-legacy.eAHQQaEU.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview-legacy.B4wms9Cc.js","/cdn/shopifycloud/checkout-web/assets/c1/AutocompleteField-hooks-legacy.YskplCRc.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalizationExtensionField-legacy.Cj3HEDsA.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayPaymentRequiredMethod-legacy.f9hBnSfx.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUpdateCheckoutAddress-legacy.DL-HStYX.js","/cdn/shopifycloud/checkout-web/assets/c1/WalletLogo-legacy.BH5SX6LT.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useGeneralPaymentErrorMessage-legacy.3HKqpFCg.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShowShopPayOptin-legacy.CMNNEDAo.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShowCreateMoreAccountsGdprTreatment-legacy.DzAZeCm8.js","/cdn/shopifycloud/checkout-web/assets/c1/Section-legacy.BrdBS3Wy.js","/cdn/shopifycloud/checkout-web/assets/c1/MobileOrderSummary-legacy.BnUomspJ.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useOnePageFormSubmit-legacy.Pa2HKsyz.js","/cdn/shopifycloud/checkout-web/assets/c1/PayPalOverCaptureInfoBanner-legacy.D276ifXX.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-get-negotiation-input-legacy.sBCrDVDh.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-cash-constants-legacy.D8yvH3TH.js","/cdn/shopifycloud/checkout-web/assets/c1/redemption-constants-legacy.CxiN0GmP.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentErrorBanner-legacy.BX387I0Z.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList-legacy.CgtKF_k4.js","/cdn/shopifycloud/checkout-web/assets/c1/DutyOptions-legacy.DqWCOg_U.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown-legacy.C9UwQH3N.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal-legacy.BHijDRyR.js","/cdn/shopifycloud/checkout-web/assets/c1/extension-targets-shipping-options-legacy.CJGC5AZD.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector-legacy.DcuEX4AJ.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown-legacy.C0md7IDE.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useSubscribeMessenger-legacy.In7-WDeR.js"];
      var styles = [];
      var fontPreconnectUrls = ["https://fonts.shopifycdn.com"];
      var fontPrefetchUrls = ["https://fonts.shopifycdn.com/jost/jost_n4.d47a1b6347ce4a4c9f437608011273009d91f2b7.woff2?h1=dGhlY290dG9uY29tcGFueS5hZQ&hmac=d18ccf199061a91fdc78c486d43f2d598c640c3f05adf9bd1506ed6e52776807","https://fonts.shopifycdn.com/jost/jost_n7.921dc18c13fa0b0c94c5e2517ffe06139c3615a3.woff2?h1=dGhlY290dG9uY29tcGFueS5hZQ&hmac=64f626446e85cb086d7040a0b61b492ca918e4a2b11682b668bec63c012c125c"];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0611/3656/8484/files/Untitled-2-01_x320.png?v=1671629938"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  