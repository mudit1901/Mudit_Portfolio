'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "85150739b9b6b9d4d3df7c1915b5275e",
"assets/AssetManifest.bin.json": "2181a141f30252f2df86b99f55220e86",
"assets/AssetManifest.json": "839d7af6cdec0e3e5622c371338a84c2",
"assets/assets/animations/bg_laptop.json": "908e53b483cd68d074669c9f29847114",
"assets/assets/animations/hi.json": "390c5efd4704e5205d25947e205bfa33",
"assets/assets/images/icons/contact-mail.png": "2cb1267bfb2dc6f2dcd2d9a510a01727",
"assets/assets/images/icons/creative-thinking.png": "131768135537f6d6e5b02081d86c5f4f",
"assets/assets/images/icons/info.png": "3c8cccd85b9dc7292a3de5becc0319f8",
"assets/assets/images/icons/project.png": "af437340ed0558ff418d4cfc4fa0639c",
"assets/assets/images/projects/circlify1.jpeg": "9f23a6fa8cc676ede0a2bd7b00b336bf",
"assets/assets/images/projects/circlify2.jpeg": "a26e97b19d573d6e8da75302a0d1821f",
"assets/assets/images/projects/covid191.png": "aa13ed5414a5b0337463874df510f479",
"assets/assets/images/projects/covid192.png": "f1c3ed1de47344ef03d069bf4c22f1d9",
"assets/assets/images/projects/gemini1.jpeg": "746fdfb5768b1025d604bb13cc1098cc",
"assets/assets/images/projects/gemini2.jpeg": "dec2461566f2ad8f06c6174af2118d29",
"assets/assets/images/projects/jwt.jpeg": "baa0e12de3ea4a567d941cba404e815e",
"assets/assets/images/projects/todoplus.jpeg": "a50add95a9945a76de99eea9471eb355",
"assets/assets/images/socials/github_icon.png": "89c2c0674bdba3d61daf6b1b1e5e82b5",
"assets/assets/images/socials/instagram.png": "fd4f97ea5e6136822886474bbf4d79c5",
"assets/assets/images/socials/leetcode_icon.png": "3cc8ef02a7a0362b19ac5d2af3ef3601",
"assets/assets/images/socials/linked_in.png": "36a8f3a386e0777a7eacf8f6c3d7ebe6",
"assets/assets/images/socials/profile_photo.png": "ab0f0576a4461e8e9d2598fb1286def0",
"assets/assets/images/tech_stack/android_studio.png": "b13dee92cd947f03f066271be5e2298e",
"assets/assets/images/tech_stack/bloc_icon.png": "977fbfba561065f9a68c4b47f9774531",
"assets/assets/images/tech_stack/cpp_icon.png": "e4f46516b8d0d4b45f958b7e404f2d55",
"assets/assets/images/tech_stack/dart_icon.png": "5aef4d57692fdd6b2aa2937bae76f5a6",
"assets/assets/images/tech_stack/firebase_icon.png": "3602dbeac7b595e78e75ceda8f0e9002",
"assets/assets/images/tech_stack/flutter_icon.png": "3c2c6c115979778e16d1c02b6ffb9176",
"assets/assets/images/tech_stack/javascript.png": "eec93e16afc8c886b042110a8eb696a3",
"assets/assets/images/tech_stack/java_icon.png": "1e1ba20cfa4a4c86d66437632e35df2f",
"assets/assets/images/tech_stack/mongodb.png": "fd66d1759030ec5810b0199ad5199f22",
"assets/assets/images/tech_stack/mysql.png": "730fe89999134379dc40aac280ac4180",
"assets/assets/images/tech_stack/node_js.png": "270f55fffea36219b66a63fbe03ff497",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a76158ae1170a2738857fa3092ba9d3f",
"assets/NOTICES": "09ad05bab98d7390967af811cb491d9e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e9643f45bbdc83ae1b02de734f3b0d2c",
"/": "e9643f45bbdc83ae1b02de734f3b0d2c",
"main.dart.js": "8e0876110749d22ac1b281b04a62ea2e",
"manifest.json": "de3771bc6a64031496b1ae02b67cc5b8",
"version.json": "752383ad7249ebdfa935f43a0eca758c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
