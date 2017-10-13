SystemJS.config({transpiler:"plugin-babel",map:{"plugin-babel":"https://cdn.rawgit.com/systemjs/plugin-babel/master/plugin-babel.js","systemjs-babel-build":"https://cdn.rawgit.com/systemjs/plugin-babel/master/systemjs-babel-browser.js",main:"./scripts/main.js",router:"./configs/router-config.js",mobileMenu:"./scripts/modules/mobile-menu.js",modal:"./scripts/modules/modal.js",htmlHandler:"./scripts/helpers/html-handler.js",requester:"./scripts/helpers/requester.js",templateHandler:"./scripts/helpers/template-handler.js",dataService:"./scripts/data/data-service.js",newsController:"./scripts/controllers/news-controller.js",flickrController:"./scripts/controllers/flickr-controller.js",$:"https://code.jquery.com/jquery-3.2.1.min.js"}});