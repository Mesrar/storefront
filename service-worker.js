importScripts("/precache-manifest.dabad0a11e397aa275e1e4d6c5450159.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

/* eslint-disable no-undef,no-restricted-globals */

workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.core.setCacheNameDetails({
  prefix: "saleor-store-front"
});

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

workbox.routing.registerRoute(
  new RegExp("^http.*(?:png|gif|jpg|jpeg|webp|svg)"),
  new workbox.strategies.NetworkFirst()
);

workbox.routing.registerNavigationRoute(
  workbox.precaching.getCacheKeyForURL("/index.html"),
  {
    blacklist: [new RegExp("/graphql"), new RegExp("/dashboard")]
  }
);

