if(!self.define){let e,a={};const i=(i,f)=>(i=new URL(i+".js",f).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(f,c)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(a[s])return;let d={};const t=e=>i(e,s),n={module:{uri:s},exports:d,require:t};a[s]=Promise.all(f.map((e=>n[e]||t(e)))).then((e=>(c(...e),d)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"599b0d08b58e750ec150c51c1d42d043"},{url:"/_next/static/chunks/463-5c36436a90042600.js",revision:"z9XUavXQNJAqjorV4hLCe"},{url:"/_next/static/chunks/4bd1b696-6f750c1c863008b5.js",revision:"z9XUavXQNJAqjorV4hLCe"},{url:"/_next/static/chunks/517-bf239045fac067b4.js",revision:"z9XUavXQNJAqjorV4hLCe"},{url:"/_next/static/chunks/843-98350d92663e46f4.js",revision:"z9XUavXQNJAqjorV4hLCe"},{url:"/_next/static/chunks/app/_not-found/page-f82233c14763122d.js",revision:"z9XUavXQNJAqjorV4hLCe"},{url:"/_next/static/chunks/app/api/questions/route-5f30efe4a6a2ff3f.js",revision:"z9XUavXQNJAqjorV4hLCe"},{url:"/_next/static/chunks/app/assessment/page-a59b485e5045ea41.js",revision:"z9XUavXQNJAqjorV4hLCe"},{url:"/_next/static/chunks/app/assessment/result/%5Bid%5D/page-05c9dbbcc7e63e22.js",revision:"z9XUavXQNJAqjorV4hLCe"},{url:"/_next/static/chunks/app/layout-c620469decb8712d.js",revision:"z9XUavXQNJAqjorV4hLCe"},{url:"/_next/static/chunks/app/not-found-4f66886c9f3e41fc.js",revision:"z9XUavXQNJAqjorV4hLCe"},{url:"/_next/static/chunks/app/page-94d0a64e5f6b0e16.js",revision:"z9XUavXQNJAqjorV4hLCe"},{url:"/_next/static/chunks/app/zh-CN/assessment/result/%5Bid%5D/page-cf48cc5a7b76bbd1.js",revision:"z9XUavXQNJAqjorV4hLCe"},{url:"/_next/static/chunks/app/zh-CN/page-1974ccfb854f4471.js",revision:"z9XUavXQNJAqjorV4hLCe"},{url:"/_next/static/chunks/framework-6b27c2b7aa38af2d.js",revision:"z9XUavXQNJAqjorV4hLCe"},{url:"/_next/static/chunks/main-aa3cc00e792d3d19.js",revision:"z9XUavXQNJAqjorV4hLCe"},{url:"/_next/static/chunks/main-app-5fdb5ad362831a62.js",revision:"z9XUavXQNJAqjorV4hLCe"},{url:"/_next/static/chunks/pages/_app-d23763e3e6c904ff.js",revision:"z9XUavXQNJAqjorV4hLCe"},{url:"/_next/static/chunks/pages/_error-9b7125ad1a1e68fa.js",revision:"z9XUavXQNJAqjorV4hLCe"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-f2025fc385edae3f.js",revision:"z9XUavXQNJAqjorV4hLCe"},{url:"/_next/static/css/358288f6523d3667.css",revision:"358288f6523d3667"},{url:"/_next/static/css/5edc114221e38018.css",revision:"5edc114221e38018"},{url:"/_next/static/css/eecb5c96aca6bd9e.css",revision:"eecb5c96aca6bd9e"},{url:"/_next/static/media/00fb5cda79d81b7c-s.woff2",revision:"fbeb4dc5804d1c5f963f49a00807840a"},{url:"/_next/static/media/082b1934e8e23eca-s.woff2",revision:"fb39e93655b659aaca7d5ab840b01292"},{url:"/_next/static/media/0f36e50cfe173fbd-s.woff2",revision:"0078793339163305ec6960b9a364608b"},{url:"/_next/static/media/0f8f66669affdda6-s.woff2",revision:"1f60642875724350ea034ce4997065c9"},{url:"/_next/static/media/13499583bfbc5464-s.woff2",revision:"37f650afb858cfd5ef52e20c68f6588d"},{url:"/_next/static/media/139cadd6007659f1-s.woff2",revision:"f2e37144a93ef6884a896d0414eed478"},{url:"/_next/static/media/1c19194c0743392a-s.woff2",revision:"effaa7bdc67c9772ef55f0ee4d0b29af"},{url:"/_next/static/media/1cb24b342df1f25b-s.woff2",revision:"86d5bfbc43dc1728222490a0812459e0"},{url:"/_next/static/media/1d3acdd9467331a8-s.woff2",revision:"37edcb9d1837a83feac0ca2d7bac7fb0"},{url:"/_next/static/media/1eb6bb2da9b8ad87-s.woff2",revision:"94b18660225df84544d24ba38f46633d"},{url:"/_next/static/media/1eeab4221f640e0b-s.woff2",revision:"a078e4c390293f657bca785e5fa52121"},{url:"/_next/static/media/1fd2c02d509ee8a9-s.woff2",revision:"68fe0fc4a012ad95ca5f775907125a35"},{url:"/_next/static/media/2105cad50c3e7584-s.woff2",revision:"f4fab1bac0322f8d3d5aa94a97872332"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/2f44907c5b5e3de0-s.woff2",revision:"3429743e6847996d4d13fc70f4c6aeb8"},{url:"/_next/static/media/2fe5ea1b6bc78a83-s.woff2",revision:"d2fac73c84494483762922fc06dbf60f"},{url:"/_next/static/media/333bd766be3cdda8-s.woff2",revision:"abd37c6a298bdcee9ec8acfc61c56cf5"},{url:"/_next/static/media/349acdf0ed7a948b-s.woff2",revision:"50b8429b7f368123968d76763b3b02ff"},{url:"/_next/static/media/3515dcdf3e489890-s.woff2",revision:"dfcf9653b89cdeec5bcf7d857898b41d"},{url:"/_next/static/media/3571dc36787e1fb7-s.woff2",revision:"d1c8f4a4a24418d4dc5bb5a950660184"},{url:"/_next/static/media/387838e4fdeac597-s.woff2",revision:"90e609d6e40cdb3e42677f923b10a6bd"},{url:"/_next/static/media/39d41506c7b5104c-s.woff2",revision:"3b96c1745d80e815c6624f6b258187bf"},{url:"/_next/static/media/3b1f0b066af8473f-s.woff2",revision:"7a85bf43fa9c4328eb9f8d0a85ab5bb7"},{url:"/_next/static/media/3bedc221a6bbc73b-s.woff2",revision:"e5b44c508821d761d8b801bd569f9cfb"},{url:"/_next/static/media/3c42c52de313c4d5-s.woff2",revision:"2df769b502c5fcf640996119eb8ff176"},{url:"/_next/static/media/3fa88fe210d9e23b-s.woff2",revision:"2cc4e0409f2f245e5778d1fd341a0706"},{url:"/_next/static/media/429a09c9a2b2d5d6-s.woff2",revision:"e7a521116d6639ed29d93e5e6528eb1e"},{url:"/_next/static/media/429e24214f40f3d1-s.woff2",revision:"1cb02988b6b2432826810ae2cd19f713"},{url:"/_next/static/media/4605abb6e474bb84-s.woff2",revision:"fca2270aa09c6d03c704f273378cce80"},{url:"/_next/static/media/467d807d15ac05d0-s.woff2",revision:"6a9f86d0a7f0991f3129f7051159fee0"},{url:"/_next/static/media/468dbbc2c32f6178-s.woff2",revision:"7dfb23448052c3537def514d8ea5517e"},{url:"/_next/static/media/4a93799898ea0289-s.woff2",revision:"5657a68e8697f7d0ebef1d8687e87940"},{url:"/_next/static/media/50cfc336e1ad6076-s.woff2",revision:"70fcf80b6374c0a35a13ea7ddce52d91"},{url:"/_next/static/media/530f38d552a49ded-s.woff2",revision:"b0a1f21a4da2413274342d44c00464b2"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/55fa3fd3c72cf491-s.woff2",revision:"e8a236cbde623f71ff10df5b1be3247b"},{url:"/_next/static/media/56aef3458b01c6eb-s.woff2",revision:"832bbb4115049d83d0e0144e60b1993b"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/5987cedf78a299a4-s.woff2",revision:"a78e47b6e2f55596a63beeb091874cb6"},{url:"/_next/static/media/5ab0e9477c20afc1-s.woff2",revision:"4e6610669e04545913d17e330a7f6948"},{url:"/_next/static/media/5afc68065eab8737-s.woff2",revision:"6fac4ca84b42bb38340e38b9977baa8b"},{url:"/_next/static/media/5e05adceb587195f-s.woff2",revision:"2600730b6342a165455ac7a0a1084068"},{url:"/_next/static/media/60f8b92a5755190b-s.woff2",revision:"308679670c5e506bf3ab17827c610cb2"},{url:"/_next/static/media/614032f9d0d19f17-s.woff2",revision:"f0a28fda8144b818782b7073641dfa80"},{url:"/_next/static/media/6398d2750e3160a8-s.woff2",revision:"072c5554ab12b5aaf559303be0747e9d"},{url:"/_next/static/media/65dc75d47e04f839-s.woff2",revision:"233fb5e6844507f231d0ed5fa7ff757c"},{url:"/_next/static/media/6a36db0311a9e290-s.woff2",revision:"ed0cd24cac08700df87a14af3667e2f0"},{url:"/_next/static/media/6afd320d6bbbe3b3-s.woff2",revision:"cc43b4e5dd8032ec8d862e0a810b6e5e"},{url:"/_next/static/media/6b9edf717a7bfdad-s.woff2",revision:"4600987396d5a58346f69c53fd283506"},{url:"/_next/static/media/6c28c5e4363997ab-s.woff2",revision:"26e8f30a1f2c07d78b0ec808bfb26a14"},{url:"/_next/static/media/6c56d6b9961a8f22-s.woff2",revision:"cdd01d6a372fb1395aea64a372b99e50"},{url:"/_next/static/media/6c63cafb99771657-s.woff2",revision:"371a48f15e3a9c72b3497db467684d7c"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/6da16a25cd948f3b-s.woff2",revision:"d670edf69b97c22efb5be2d19ef02015"},{url:"/_next/static/media/72e65dfca68f885a-s.woff2",revision:"5ee4657dd9f42c5c6616239b5e25c8f8"},{url:"/_next/static/media/74cf3782d74f7798-s.woff2",revision:"57235fd988ff009b9f6b24e8d085b687"},{url:"/_next/static/media/7b245b333152f9c5-s.woff2",revision:"6a7c2f2d11dbe09c9ab2304480c8a411"},{url:"/_next/static/media/7e1b26adf0a9612b-s.woff2",revision:"563d4a5dfc0a48c687faeea3b54e693d"},{url:"/_next/static/media/83703df5507afec0-s.woff2",revision:"25d645c26cd5cff1ba2e5f05a9af0a83"},{url:"/_next/static/media/84e1a9fbe9853704-s.woff2",revision:"17248bab186037be73cd9b61d8df2e44"},{url:"/_next/static/media/8704d7ab2885d649-s.woff2",revision:"a0109c3c08307ab01f9332229602a91b"},{url:"/_next/static/media/8caed38ee1484b26-s.woff2",revision:"6aced29b250b0b8720ad95e1186174b8"},{url:"/_next/static/media/8e272604d9a1a0fc-s.woff2",revision:"df9dca630fa12ba71e259d179f59e0f0"},{url:"/_next/static/media/8e3d7a069c3758cc-s.woff2",revision:"a78b36f1b7d712f84b89c7cd1f1af95c"},{url:"/_next/static/media/8f715cec785b56a0-s.woff2",revision:"870a3b57680043beb823d2bbc22bc313"},{url:"/_next/static/media/9188e242ef08da77-s.woff2",revision:"7aa475a95b75893b9502ff41f6151823"},{url:"/_next/static/media/91afe8735e66cfe1-s.woff2",revision:"8ceda6dffa7a0d08c2ee27738223ab49"},{url:"/_next/static/media/97a5d9037dfc2964-s.woff2",revision:"e6850eb8e6d77f735e62c5f5d82b7d9a"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/980fb219a927b3ec-s.p.woff2",revision:"c683c4fc6562af61f4b1620e40635793"},{url:"/_next/static/media/992a0396e2b4f5b1-s.woff2",revision:"06229c7804613938554aae77076d7d66"},{url:"/_next/static/media/9c23e59a0c4625c9-s.woff2",revision:"3872fc5bafa867c0d1379df9fb766fee"},{url:"/_next/static/media/a125f4066530dadd-s.woff2",revision:"4de18313b50eab0e4937a4875ae8461e"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/a7f73f9ae91daea3-s.woff2",revision:"d1e064dfe6278eee632546c5ea03b4f1"},{url:"/_next/static/media/a86f5e65bb27087b-s.woff2",revision:"53f3794005ecaab698c60718212deefd"},{url:"/_next/static/media/b28d7f96009b98c8-s.woff2",revision:"455e79886505544d68aebd8beb16b55a"},{url:"/_next/static/media/b5866022a24c850d-s.woff2",revision:"fdae219d61ca1805645976dddb88c490"},{url:"/_next/static/media/b5b0c2bb15d1a531-s.woff2",revision:"62025f72e7d99b8bc4359782ca37e247"},{url:"/_next/static/media/b720e08fc0489e8d-s.woff2",revision:"9afaa0c2a3004bdd0332c39764216e77"},{url:"/_next/static/media/b7c043fc111ea04c-s.woff2",revision:"3459d9613a75fcca560e7f0189599a57"},{url:"/_next/static/media/b8605ffda2c293dd-s.woff2",revision:"bd860fe387de5f7fa78921714e42e080"},{url:"/_next/static/media/b8cc49c4b9251b5f-s.woff2",revision:"36badda528929fd7721063709821a0b9"},{url:"/_next/static/media/b8eb208df1b2f25e-s.woff2",revision:"b13407e7b0eee21af3482ba920af1ab8"},{url:"/_next/static/media/b9549fcb84f94c79-s.woff2",revision:"2a138d14dbcf5cae5d6fda44c7ca5ceb"},{url:"/_next/static/media/b99e8bb3a430f36c-s.woff2",revision:"fc77cc2f4828cf4847d7f01dec3a7bee"},{url:"/_next/static/media/c608e0c437d2a6fc-s.woff2",revision:"f819f2a99ef2c7b9d63420ecfe090172"},{url:"/_next/static/media/c6fa766eb717dccb-s.woff2",revision:"5737333696e0e3823c2eae7d88c6d647"},{url:"/_next/static/media/ca8dffbea5cc2a5d-s.woff2",revision:"54d354228fe66f360e69369409b59d49"},{url:"/_next/static/media/cc04a266478524d9-s.woff2",revision:"b77e417a592b0187d2eb69a8860d1758"},{url:"/_next/static/media/d261ed789f0f4e6d-s.woff2",revision:"88b46115c969a8b3c5c51e6f3e082c27"},{url:"/_next/static/media/d84af7a8329983d7-s.woff2",revision:"d95a39954a7b90a9c0b4dd7bc6be019c"},{url:"/_next/static/media/d8546a333dba48b4-s.woff2",revision:"4129bbaa328fa780c623d364077f86f4"},{url:"/_next/static/media/db0cc798630856fa-s.woff2",revision:"aa4cfe7085d82bb065ab14cbafe77d7f"},{url:"/_next/static/media/dcac8ea1d61718b5-s.woff2",revision:"fbaf1ad46505e1764c78d8a60dbff4ef"},{url:"/_next/static/media/ddbadeeaa42c648c-s.woff2",revision:"2eeb6bf73a6aadc8dd488e3e21571735"},{url:"/_next/static/media/dedecf1453f3c20b-s.woff2",revision:"cd08a2fa2c2354ba82cafd4fd9971390"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/_next/static/media/e22f2bc1cf553548-s.woff2",revision:"8eee3e813cb9f09cc5c0691d2dc830f9"},{url:"/_next/static/media/e2c75a92fd39afbd-s.woff2",revision:"a629e4dfc82b0262f5f7ccaab51408ca"},{url:"/_next/static/media/e616f68d80e02a5a-s.woff2",revision:"a967ce7febc5db7edf85eea66e747169"},{url:"/_next/static/media/ee364219295e16df-s.woff2",revision:"081a453c3d5510e1bbfedeee7b7d1d28"},{url:"/_next/static/media/efb74ea5725bacea-s.woff2",revision:"5aa9125dcdaf1b1c5acd1e9aae9b9cb7"},{url:"/_next/static/media/f3885cd6b7855f19-s.woff2",revision:"29d937b6639419e2e3e7d1a60b1582a1"},{url:"/_next/static/media/f3c9d8f9326a1ed6-s.woff2",revision:"7c5c321e44d212febe5cc19925c354b8"},{url:"/_next/static/media/f646136737446507-s.woff2",revision:"769a3c52f7aff9a9b02b74b0f5a02efa"},{url:"/_next/static/media/f7d61b71fd946a20-s.woff2",revision:"063a1cc01c393267f20dd3be911ca528"},{url:"/_next/static/media/ffc8a382283737b7-s.woff2",revision:"9a3863e8a7c2898f3ca384e1490f0c19"},{url:"/_next/static/z9XUavXQNJAqjorV4hLCe/_buildManifest.js",revision:"551fbe1687d0905b0f6057b7d7f60f95"},{url:"/_next/static/z9XUavXQNJAqjorV4hLCe/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/file.svg",revision:"d09f95206c3fa0bb9bd9fefabfd0ea71"},{url:"/globe.svg",revision:"2aaafa6a49b6563925fe440891e32717"},{url:"/icons/icon-128x128.png",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/icons/icon-144x144.png",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/icons/icon-152x152.png",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/icons/icon-192x192.png",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/icons/icon-384x384.png",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/icons/icon-512x512.png",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/icons/icon-72x72.png",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/icons/icon-96x96.png",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/logo.svg",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/manifest.json",revision:"90bad08c2ae1d2666fe623059e0f17ce"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"c0af2f507b369b085b35ef4bbe3bcf1e"},{url:"/window.svg",revision:"a2760511c65806022ad20adf74370ff3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:f})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
