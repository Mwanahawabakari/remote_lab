'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "31d9e2ea16b9db2a5ef555036dfd4b8f",
"version.json": "5f40726c6b59664dcc0c037d1fd140be",
"assets/google_fonts/Smooch-Regular.ttf": "ebfeef43479067453a6cf08ed493979c",
"assets/google_fonts/OFL.txt": "1b4712267fd14323e7fc687265cc8629",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/AssetManifest.json": "b6d9dd27690be636e2bfa026d4cac0cc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "381b12cfc15edf5fddd49c3e205773fd",
"index.html": "df1725961f98d548aef47bd51ad8484e",
"/": "df1725961f98d548aef47bd51ad8484e",
"manifest.json": "c7f66336866c4bb4e1c0aa0de124a377",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/heads/main": "9bf75fb0b2ea2089de7009d35b114064",
".git/refs/remotes/origin/main": "9bf75fb0b2ea2089de7009d35b114064",
".git/objects/64/4276b71411961d8657db505bbc13cc87b99e5f": "cdcb427b637c1bdf82192143b572bc10",
".git/objects/44/040c385092ad63857e9f75f3ad3045da7da8db": "4a5c72de38b97abc847c7d67fbacd5a2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/819d2b9aa81ad146101302c8722ea83da2c055": "4c484f016f5ecb3528bf21612731e17b",
".git/objects/e7/ab0ec795e0c7bb4c6962c9838c92bb9dcccd7b": "c61247f2f552e6a8b7f398d7a992bd30",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/f5/4f410a5f3e0e90b711653e1bca4cf70bfed714": "220c94c0c3d461b3830797d142c11a67",
".git/objects/14/ded7334b38f3cc8c299b4b320b8c2cf8714801": "fe3178919365e4a489eec758563f7280",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/85/4ffe385ea911fcb6c0ac7e60b6090aab05ab9d": "83c2d4396d57f0dec478b2860d6f455c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/41a1e6d336c3d0b560cb190840e80a36d8b148": "a96f0846929a75da2abfb76eef658531",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/6a/45299bc0f4f8f6d6d6fb293cd357899186ceb6": "c7d485fa10c763cd5791732d4ce505a7",
".git/objects/6c/ca52ae784885bcbdf3d649bad1bfdbc0796cb4": "2f6a44d7659adf1cb861004585e90efc",
".git/objects/b9/c11823fd9e94206d4d4afdfdc325e8068c32ab": "c582e1d9c2478db2953cae010fb208bb",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/2e6e6579b0e3a0b4c7c3c8177b77a8968696dd": "436250657ace61ec0c92fce994d6e006",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c1/da43ecc38ac11ea2a40686ce54061da75873c4": "cbca32e6588bffefae88050817f23119",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/d0/c1d45973abfaddaffda28e0b64db0cf81c5c67": "faebbd8a38bb4dd41b828a98401836aa",
".git/objects/f6/059fb752bec761075d41f08c2ee1342b8394d5": "21b1a047675b7fd09f7a92198d851b24",
".git/objects/d2/c24dcbbb24280122184f1d7a5edd786ff7b469": "7afa643df5748fd2f617f80d61c45443",
".git/objects/dc/1ce7527c300c972303ebad9bf9951a2506ba87": "056d03d133155173edb5e887aaa407ab",
".git/objects/cd/3ad7faea93517d925df2f382a283fced19c9c6": "d94e39c6388678ec9ba945ed9a4bf073",
".git/objects/5d/cd31d8a0d965cc721cb2413d97ba3db78e77dc": "42000f958173f3b16926f6284865a312",
".git/objects/54/0ba4922b6c4afe7807a1f932cee0e6464e1d8c": "cb36609b97ed1cf3035f516e13f2bac7",
".git/objects/0c/8c12591bf9a10bda12b5038d09d528b80fc4ae": "b6e3362fd7f73321053af85b5c7898b0",
".git/objects/ed/8d6c1f5f015271fe1ab23e1dd9e7d61b240038": "de0eafc977c13e520b947af18f887a0b",
".git/objects/f4/92447cd1ed7b544696a57d3e72ec97977dec17": "e162007dc0cf18a50f6a5b93585d1d90",
".git/objects/c9/6c44906aeddf9d3b8acb2b05cb4258ba64f2c3": "22d7fa7653633a69bbae10ab9b9ed7c0",
".git/objects/28/699652d907f97f9cf750f2ce2ee6b41017c47c": "b60e305edc160158acf07ae37fb90859",
".git/objects/60/9b1080d2489eb003b93e4316c69c448480edba": "f593f7c5bc5162f40e81607934906a24",
".git/objects/42/d22b743a948078145875e852afebe2ef9e9c95": "8ac6e10c5f4bda2d08f997eecb57de8e",
".git/objects/e4/c01be7fa204930e7a2fe07b89d145238cfc5b1": "a1e7adb1e144dcfeb0ce69ae1d13845a",
".git/objects/cf/39c95cbd6e123a40a7f77998c46ef379a9a864": "65bb1bc3e67951ac2220fd028375265a",
".git/objects/e1/e4fa5af1872625fec2fb935cbd7c4527b34563": "3e38242913ce9d114835aaf6b3dc4e18",
".git/objects/a5/982b1f90e632a37ae805341a2f45ca4475b9a4": "0184bf91f1c03240fe5170fb8e95f380",
".git/objects/f9/a1df27c5a6e81c3b9acb0f1f595842181b15d6": "a313a0d82301e75d035911200c1e1d77",
".git/COMMIT_EDITMSG": "e4c6357b9c39949e5d8ff705bc9314f9",
".git/logs/HEAD": "6ad58e0b9b50ec2ad9267c6d95529b9d",
".git/logs/refs/heads/main": "49eb531381e49ba513f2748bfc4f05be",
".git/logs/refs/remotes/origin/main": "b0db2ed64c87923b9e3176462bfcd583",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/config": "b55de6b5e5b67b4d83f94cf874decbfd",
".git/index": "0dd9e108e6e5c8d6266e2e961b0fbcaf"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
