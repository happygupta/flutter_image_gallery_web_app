'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "31815634fc2c63b2640bd845af538599",
"assets/NOTICES": "0d82868992eaf55e455a9cd71309a947",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "a8fb164227f29f52f6b51a2e331fbb75",
"flutter_image_gallery_web_app/.git/COMMIT_EDITMSG": "ff735a41b489e04eaaf08fcbc6829b17",
"flutter_image_gallery_web_app/.git/config": "27fa7947e8f32f468325f09c85d97739",
"flutter_image_gallery_web_app/.git/description": "b70693d879366b8f337c47acef02fbd1",
"flutter_image_gallery_web_app/.git/FETCH_HEAD": "e53cb82f1a5d02911bb72ca19d9ff402",
"flutter_image_gallery_web_app/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"flutter_image_gallery_web_app/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"flutter_image_gallery_web_app/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"flutter_image_gallery_web_app/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"flutter_image_gallery_web_app/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"flutter_image_gallery_web_app/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"flutter_image_gallery_web_app/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"flutter_image_gallery_web_app/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"flutter_image_gallery_web_app/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"flutter_image_gallery_web_app/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"flutter_image_gallery_web_app/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"flutter_image_gallery_web_app/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"flutter_image_gallery_web_app/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"flutter_image_gallery_web_app/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"flutter_image_gallery_web_app/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"flutter_image_gallery_web_app/.git/index": "60702532311fcbec02b47e5bfba1a69d",
"flutter_image_gallery_web_app/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"flutter_image_gallery_web_app/.git/logs/HEAD": "796d6a3676460a8a5505c19e2384e8e5",
"flutter_image_gallery_web_app/.git/logs/refs/heads/main": "796d6a3676460a8a5505c19e2384e8e5",
"flutter_image_gallery_web_app/.git/logs/refs/remotes/origin/HEAD": "1802297cdfa13829ee1fdaf8436c9d72",
"flutter_image_gallery_web_app/.git/logs/refs/remotes/origin/main": "6a46f4da9db3239e2ec7b5a39f68ad3c",
"flutter_image_gallery_web_app/.git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
"flutter_image_gallery_web_app/.git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
"flutter_image_gallery_web_app/.git/objects/16/508784777b24c2e6af5aea2135eac7a5fab3ba": "b36722020180f8416fbdbb71fa5ec82d",
"flutter_image_gallery_web_app/.git/objects/17/218c969e64a2a327524214ff5f52d893aba67a": "7f9ba2ba8f017db3d758a45204ef4123",
"flutter_image_gallery_web_app/.git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
"flutter_image_gallery_web_app/.git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
"flutter_image_gallery_web_app/.git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
"flutter_image_gallery_web_app/.git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
"flutter_image_gallery_web_app/.git/objects/23/7e2b033010e84a6ffd931c74010773f9e10adc": "6f44ab82a33723a85a8ca1327cbd03a6",
"flutter_image_gallery_web_app/.git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
"flutter_image_gallery_web_app/.git/objects/32/91a85170fe4d8d9e598e363f8c90c6a373b372": "d96c614d9d86bc7b352c82ac34713149",
"flutter_image_gallery_web_app/.git/objects/32/fdbfb244eee552933d63e4b846619bd767400b": "1d67eb4d946357e68086a7baa5c9d958",
"flutter_image_gallery_web_app/.git/objects/41/99489e755d1f72294a258eaa5d4cabd5496ad0": "bb968195630c2944d26e20b46af35fed",
"flutter_image_gallery_web_app/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
"flutter_image_gallery_web_app/.git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
"flutter_image_gallery_web_app/.git/objects/4b/d02e9f0303a7c3880f79efa6d0af5366d5db4a": "8b261f3e180be66ed16fd9f5588599ec",
"flutter_image_gallery_web_app/.git/objects/4c/80f83d2d8787fce15563422393122738491b68": "b810486c093e16e36931ab3c920bf27e",
"flutter_image_gallery_web_app/.git/objects/4f/5aace2ca7f38c3ba7cdbf7acc10034f0ccb9fd": "9d0e6b8250f2851b1bab366daca3d618",
"flutter_image_gallery_web_app/.git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
"flutter_image_gallery_web_app/.git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
"flutter_image_gallery_web_app/.git/objects/5c/b62901f0ef2b483d2a2fc30c8e1a11ad2f9d60": "e9300c95ebf3a8525f1cd61f6b20042e",
"flutter_image_gallery_web_app/.git/objects/5c/c8f44a57c66b551ecf7f339ecc9ca3ae6b7f8c": "7b376325bec322914ebde0202eb2813e",
"flutter_image_gallery_web_app/.git/objects/60/3c98cdba0226a1e6553d1e27eaedfee71135f4": "c26cfcc1d987c71f929d43be27bca12b",
"flutter_image_gallery_web_app/.git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
"flutter_image_gallery_web_app/.git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
"flutter_image_gallery_web_app/.git/objects/6d/a0e5a66a21da34739f81f7219bb8631fcf9070": "d13605a4ee5f7c3890da3e77a47cc519",
"flutter_image_gallery_web_app/.git/objects/6d/e00a4cb233e87d8ac5a6783c41287b6588e064": "ced384ebf988a6754f0e73967a10dd48",
"flutter_image_gallery_web_app/.git/objects/6f/9509c88bed7080d496fc5e1d87a9315e30549d": "c02716d7aaed30ce1c5697a2fb40d317",
"flutter_image_gallery_web_app/.git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
"flutter_image_gallery_web_app/.git/objects/7e/5d98d38aa2ff5d20c84758a417fc73b21ebc3e": "2877f90761706dee2da468a059fddfd5",
"flutter_image_gallery_web_app/.git/objects/83/88cf9672b1ad119c8ba5d864d32e5927101db3": "139b123d69120d6e490541a4572d4520",
"flutter_image_gallery_web_app/.git/objects/84/ad2857e3ba3c98409dd57a4c1cb925a3b6f940": "aa0d9d14b8883ab3f68030cabf257d94",
"flutter_image_gallery_web_app/.git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
"flutter_image_gallery_web_app/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"flutter_image_gallery_web_app/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"flutter_image_gallery_web_app/.git/objects/8d/3859336c1214eeb3c7f7b5e9a8482806841348": "aa6f0d04efc096368ebfc825f9cab77f",
"flutter_image_gallery_web_app/.git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
"flutter_image_gallery_web_app/.git/objects/90/5c5d2b4e62111b7bb6c87700aaf250af984756": "ba7a49f1b1a9b3d50e7bf48366e67d2e",
"flutter_image_gallery_web_app/.git/objects/91/35eb4cdd897fc4d11304e330a0c7a68b7a5169": "ec22b9371e59a3b1f43bf8e7a0756366",
"flutter_image_gallery_web_app/.git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
"flutter_image_gallery_web_app/.git/objects/95/008fa96662a875c4b7d0bff68a62b3f9574f29": "cd549d062934cf059d1dbc67684c3a35",
"flutter_image_gallery_web_app/.git/objects/95/ab3ef44b53d03b5868a7f8b46f4fe413be9fe5": "3f58c9a2242502f17dfb7b23fcffb1b3",
"flutter_image_gallery_web_app/.git/objects/97/ac98be12a8420973492aa81ae91eedd998b7b6": "6b56785e2ec0b0e09bf72e0d6d40fca9",
"flutter_image_gallery_web_app/.git/objects/99/c459d981d8447bd5dda1299fd6eed7ff03c0c7": "345d96d8434a92ee083fdb794c91dbe9",
"flutter_image_gallery_web_app/.git/objects/a1/40f08ac11475f06b5053080b9413fb0598ca60": "701c6e77d67b190aa3c2c19600be1801",
"flutter_image_gallery_web_app/.git/objects/ae/85dc3228310486cc8e8626c37dc3bdc0e5e368": "6e7d29894e01254579a6198b840e35bc",
"flutter_image_gallery_web_app/.git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
"flutter_image_gallery_web_app/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"flutter_image_gallery_web_app/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"flutter_image_gallery_web_app/.git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
"flutter_image_gallery_web_app/.git/objects/c5/04bf0afd04a1d529a217c36c3029054bb87130": "e06b447413e6dba7857d813a1e745283",
"flutter_image_gallery_web_app/.git/objects/c5/a2a0f9a5872db82e87badcab66a3aa9920b869": "f3ac447d55e610d2f4ac9ee676b9fd7c",
"flutter_image_gallery_web_app/.git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
"flutter_image_gallery_web_app/.git/objects/ca/a1a5642fc2cfdb1b7064a7a52f543ed699614f": "bacf9bf595873c1efc05a919195bc2b1",
"flutter_image_gallery_web_app/.git/objects/cd/d28075adb9dc04d73e5daceeb0d1da7d671242": "ad13b85f06b16cc7a73a2900cba369f9",
"flutter_image_gallery_web_app/.git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
"flutter_image_gallery_web_app/.git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
"flutter_image_gallery_web_app/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"flutter_image_gallery_web_app/.git/objects/d6/e03c59cd7289635a18b82af40adbbdbb75c302": "1ddb0ba04fb2de18726822d0b569beab",
"flutter_image_gallery_web_app/.git/objects/d7/9e197be87bc0fae54036b7536b035929bd90ee": "cfaf55c754d794dddbe41f40847c564d",
"flutter_image_gallery_web_app/.git/objects/df/45638c69d155505e1bff598882adefcc79d4d4": "5f73e06151803228e335669fda78e2aa",
"flutter_image_gallery_web_app/.git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
"flutter_image_gallery_web_app/.git/objects/e1/ba3988c4fd30abbe4e7ed952e0b972c4a5abaa": "6b8ab75d77852e259942fa6dd4bb5445",
"flutter_image_gallery_web_app/.git/objects/e3/418c8366f2ae0aeb5d3a64e3be623bb364dc58": "fc34a400117c9031c910ba1a382e655b",
"flutter_image_gallery_web_app/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"flutter_image_gallery_web_app/.git/objects/ef/7fa3ef026f1117df7c429b3cd3053b83efa2a4": "9e6b8e56286c5c4dd3a705835b7e1eb9",
"flutter_image_gallery_web_app/.git/objects/ef/8c2ca04b2b92bbe0d02e98d51b79c5e1fd263a": "1163158cfb55a0fc5f4115c9e0358c72",
"flutter_image_gallery_web_app/.git/objects/f1/154a8b4c2fcb898e40230a1b64dd57688f2d6a": "7e09d87fcf49bbd7f3caabe250ef81dc",
"flutter_image_gallery_web_app/.git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
"flutter_image_gallery_web_app/.git/objects/f4/23a1564c57c4a313af4bd83a11e4620fde965c": "bb305eb7c78748462eb96bcad7fa20b6",
"flutter_image_gallery_web_app/.git/objects/f6/8226ff2bad8b5018cc795bca3bd245997a6cc8": "bb8e196dcad79b6ce75df3456ead6a87",
"flutter_image_gallery_web_app/.git/objects/fb/2a099099208a53280976e6ce2c6b564a05c899": "72b71c7d458fe05f4a091d2e470f6e70",
"flutter_image_gallery_web_app/.git/objects/fc/1bccf9122b20031430157b7c2092c16fee108e": "466b8b1c73e631415db1fde979d611b2",
"flutter_image_gallery_web_app/.git/objects/fd/862279ba5fc5bf217a8d35c2db4759364dd765": "fc398aa29cb7ece5de913555e540dfe0",
"flutter_image_gallery_web_app/.git/refs/heads/main": "a087be909be8e99cf596658bf88417a9",
"flutter_image_gallery_web_app/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"flutter_image_gallery_web_app/.git/refs/remotes/origin/main": "a087be909be8e99cf596658bf88417a9",
"flutter_image_gallery_web_app/assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"flutter_image_gallery_web_app/assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"flutter_image_gallery_web_app/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"flutter_image_gallery_web_app/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"flutter_image_gallery_web_app/assets/fonts/MaterialIcons-Regular.otf": "31815634fc2c63b2640bd845af538599",
"flutter_image_gallery_web_app/assets/NOTICES": "0d82868992eaf55e455a9cd71309a947",
"flutter_image_gallery_web_app/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"flutter_image_gallery_web_app/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"flutter_image_gallery_web_app/canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"flutter_image_gallery_web_app/canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"flutter_image_gallery_web_app/canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"flutter_image_gallery_web_app/canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"flutter_image_gallery_web_app/canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"flutter_image_gallery_web_app/canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"flutter_image_gallery_web_app/canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"flutter_image_gallery_web_app/canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"flutter_image_gallery_web_app/canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"flutter_image_gallery_web_app/canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"flutter_image_gallery_web_app/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter_image_gallery_web_app/flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_image_gallery_web_app/flutter_bootstrap.js": "8be98582a5f7609718d761a5b9af212f",
"flutter_image_gallery_web_app/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"flutter_image_gallery_web_app/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"flutter_image_gallery_web_app/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"flutter_image_gallery_web_app/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"flutter_image_gallery_web_app/index.html": "ad0c4d7645f525e82ffb68c16086794b",
"flutter_image_gallery_web_app/main.dart.js": "57a061500109c0de1311bdf5484276fe",
"flutter_image_gallery_web_app/manifest.json": "c39928705033119fd133f41281b6c363",
"flutter_image_gallery_web_app/version.json": "fc0c315e98eff9c58d95b286f1067c04",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ad0c4d7645f525e82ffb68c16086794b",
"/": "ad0c4d7645f525e82ffb68c16086794b",
"main.dart.js": "322d4fa7fb4244d93cdeb686586ff898",
"manifest.json": "c39928705033119fd133f41281b6c363",
"version.json": "fc0c315e98eff9c58d95b286f1067c04"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
