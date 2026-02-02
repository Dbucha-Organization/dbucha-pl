
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills-legacy.B4Juc3Bz.js","/cdn/shopifycloud/checkout-web/assets/c1/app-legacy.DqyLKcSi.js","/cdn/shopifycloud/checkout-web/assets/c1/vendor-legacy.DomfbwXo.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-pl-legacy.B-9HUyy6.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage-legacy.C-7lGTTL.js","/cdn/shopifycloud/checkout-web/assets/c1/AddDiscountButton-legacy.CQLaak3h.js","/cdn/shopifycloud/checkout-web/assets/c1/NumberField-legacy.CfH7SIE8.js","/cdn/shopifycloud/checkout-web/assets/c1/useShowShopPayOptin-legacy.DfpMDv2H.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer-legacy.BRZij0D4.js","/cdn/shopifycloud/checkout-web/assets/c1/RememberMeDescriptionText-legacy.Cd7P2xfz.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentButtons-legacy.CmncqEun.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblemsLineItemList-legacy.BnOL88kj.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalPickup-legacy.gNtkb2zU.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayButtonClassName-legacy.vr36r3J0.js","/cdn/shopifycloud/checkout-web/assets/c1/VaultedPayment-legacy.TFIOBeAn.js","/cdn/shopifycloud/checkout-web/assets/c1/MarketsProDisclaimer-legacy._SyBz7by.js","/cdn/shopifycloud/checkout-web/assets/c1/SeparatePaymentsNotice-legacy.DbjVbSL1.js","/cdn/shopifycloud/checkout-web/assets/c1/useAddressManager-legacy.IbhpPKwj.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayPaymentRequiredMethod-legacy.LuTmHR8O.js","/cdn/shopifycloud/checkout-web/assets/c1/PayButtonSection-legacy.Bq61CLQ6.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown-legacy.nNr-0Pxi.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal-legacy.DDkCoXQK.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview-legacy.BiETd0uh.js","/cdn/shopifycloud/checkout-web/assets/c1/component-ShopPayVerificationSwitch-legacy.Bx4fnsyv.js","/cdn/shopifycloud/checkout-web/assets/c1/useSubscribeMessenger-legacy.BAgaphpH.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-js-index-legacy.DIw07JZ-.js","/cdn/shopifycloud/checkout-web/assets/c1/v4-legacy.On_frbc2.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0903/6300/3261/files/Gemini_Generated_Image_oqgxspoqgxspoqgx_x320.png?v=1759683468","https://cdn.shopify.com/s/files/1/0903/6300/3261/files/very_light_vape_smoke_rising_from_both_sides_toward_the_center_wispy_and_delicate_semi-transparent__nmjo9s8didguqcj8mibc_0_2000x.png?v=1759682139"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
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
  