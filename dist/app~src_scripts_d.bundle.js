"use strict";
(self["webpackChunkrestaurant_apps"] = self["webpackChunkrestaurant_apps"] || []).push([["app~src_scripts_d"],{

/***/ "./src/scripts/data/favorite-resto-idb.js":
/*!************************************************!*\
  !*** ./src/scripts/data/favorite-resto-idb.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! idb */ "./node_modules/idb/build/index.js");
/* harmony import */ var _globals_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals/config */ "./src/scripts/globals/config.js");



const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = _globals_config__WEBPACK_IMPORTED_MODULE_1__["default"];

const dbPromise = (0,idb__WEBPACK_IMPORTED_MODULE_0__.openDB)(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database){
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteRestaurantIdb = {
  async getRestaurant(id) {
    if (!id) {
      return;
    }
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },

  async getRestaurantList() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },

  async putRestaurant(restaurant) {
    // eslint-disable-next-line no-prototype-builtins
    if (!restaurant.hasOwnProperty('id')){
      return;
    }
    return (await dbPromise).put(OBJECT_STORE_NAME, restaurant);
  },

  async deleteRestaurant(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FavoriteRestaurantIdb);

/***/ }),

/***/ "./src/scripts/globals/config.js":
/*!***************************************!*\
  !*** ./src/scripts/globals/config.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const CONFIG = {
  KEY: '12345', // Ganti dengan API Key jika dibutuhkan
  BASE_URL: 'https://restaurant-api.dicoding.dev/',

  BASE_IMAGE_URL: 'https://raw.githubusercontent.com/TommyFlutter/berlianpicture/refs/heads/master/gambar-',
  DEFAULT_LANGUAGE: 'en-us',
  CACHE_NAME: new Date().toISOString(),
  DATABASE_NAME: 'bunda-resto-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurants',

};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CONFIG);



/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/responsive.css */ "./src/styles/responsive.css");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lazysizes/plugins/parent-fit/ls.parent-fit */ "./node_modules/lazysizes/plugins/parent-fit/ls.parent-fit.js");
/* harmony import */ var lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _views_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/app */ "./src/scripts/views/app.js");
/* harmony import */ var _scripts_utils_sw_register__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scripts/utils/sw-register */ "./src/scripts/utils/sw-register.js");
 /* for async await transpile */







const app = new _views_app__WEBPACK_IMPORTED_MODULE_5__["default"]({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  (0,_scripts_utils_sw_register__WEBPACK_IMPORTED_MODULE_6__["default"])();
});



/***/ }),

/***/ "./src/scripts/routes/routes.js":
/*!**************************************!*\
  !*** ./src/scripts/routes/routes.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _views_pages_daftar_resto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/pages/daftar-resto */ "./src/scripts/views/pages/daftar-resto.js");
/* harmony import */ var _views_pages_detail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/pages/detail */ "./src/scripts/views/pages/detail.js");
/* harmony import */ var _views_pages_like__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/pages/like */ "./src/scripts/views/pages/like.js");




const routes = {
  '/': _views_pages_daftar_resto__WEBPACK_IMPORTED_MODULE_0__["default"], // default page
  '/daftar-resto': _views_pages_daftar_resto__WEBPACK_IMPORTED_MODULE_0__["default"],
  '/detail/:id': _views_pages_detail__WEBPACK_IMPORTED_MODULE_1__["default"],
  '/like': _views_pages_like__WEBPACK_IMPORTED_MODULE_2__["default"],
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ }),

/***/ "./src/scripts/routes/url-parser.js":
/*!******************************************!*\
  !*** ./src/scripts/routes/url-parser.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const UrlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = this._urlSplitter(url);
    return this._urlCombiner(splitedUrl);
  },

  parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },

  _urlSplitter(url) {
    const urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
      verb: urlsSplits[3] || null,
    };
  },

  _urlCombiner(splitedUrl) {
    return (splitedUrl.resource ? `/${splitedUrl.resource}` : '/')
      + (splitedUrl.id ? '/:id' : '')
      + (splitedUrl.verb ? `/${splitedUrl.verb}` : '');
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UrlParser);

/***/ }),

/***/ "./src/scripts/utils/drawer-initiator.js":
/*!***********************************************!*\
  !*** ./src/scripts/utils/drawer-initiator.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DrawerInitiator);

/***/ }),

/***/ "./src/scripts/utils/sw-register.js":
/*!******************************************!*\
  !*** ./src/scripts/utils/sw-register.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var workbox_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-window */ "./node_modules/workbox-window/build/workbox-window.prod.es5.mjs");

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service Worker not supported in the browser');
    return;
  }
  const wb = new workbox_window__WEBPACK_IMPORTED_MODULE_0__.Workbox('./sw.bundle.js');
  try {
    await wb.register();
    console.log('Service worker registered');
  } catch (error) {
    console.log('Failed to register service worker', error);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (swRegister);


/***/ }),

/***/ "./src/scripts/views/app.js":
/*!**********************************!*\
  !*** ./src/scripts/views/app.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_drawer_initiator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/drawer-initiator */ "./src/scripts/utils/drawer-initiator.js");
/* harmony import */ var _routes_url_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes/url-parser */ "./src/scripts/routes/url-parser.js");
/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes/routes */ "./src/scripts/routes/routes.js");




class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    _utils_drawer_initiator__WEBPACK_IMPORTED_MODULE_0__["default"].init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }
  async renderPage() {
    const url = _routes_url_parser__WEBPACK_IMPORTED_MODULE_1__["default"].parseActiveUrlWithCombiner();
    const page = _routes_routes__WEBPACK_IMPORTED_MODULE_2__["default"][url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#mainContent').focus();
    });

  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/scripts/views/pages/daftar-resto.js":
/*!*************************************************!*\
  !*** ./src/scripts/views/pages/daftar-resto.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _templates_template_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/template-creator */ "./src/scripts/views/templates/template-creator.js");
/* harmony import */ var _data_DATA_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/DATA.json */ "./src/scripts/data/DATA.json");
//* eslint-disable linebreak-style */




const DaftarResto = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">PILIH PRODUK KAOS KAKI KAMI</h2>
        <div id="restaurant-list" class="restaurant-list">
        </div>
      </div>
    `;
  },

  async afterRender() {
    try {
      console.log('API Response:', _data_DATA_json__WEBPACK_IMPORTED_MODULE_1__); // Check the structure of `data`
      const restaurantListContainer = document.querySelector('#restaurant-list');
      for (let i=0; i<_data_DATA_json__WEBPACK_IMPORTED_MODULE_1__.books.length; i++){
        restaurantListContainer.innerHTML += (0,_templates_template_creator__WEBPACK_IMPORTED_MODULE_0__.createRestaurantItemTemplate)(_data_DATA_json__WEBPACK_IMPORTED_MODULE_1__.books[i]);  // panggil method dari template
      }
      const restaurants = _data_DATA_json__WEBPACK_IMPORTED_MODULE_1__.restaurants || []; // Adjust this based on the actual key
      if (Array.isArray(restaurants)) {
        restaurants.forEach((restaurant) => {
          restaurantListContainer.innerHTML += (0,_templates_template_creator__WEBPACK_IMPORTED_MODULE_0__.createRestaurantItemTemplate)(restaurant);
        });
      } else {
        throw new Error('Invalid data format: expected an array');
      }
    } catch (error) {
      console.error('Error in afterRender:', error);
      document.querySelector('#restaurant-list').innerHTML = '<p>Failed to load restaurants.</p>';
    }
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DaftarResto);


/***/ }),

/***/ "./src/scripts/views/pages/detail.js":
/*!*******************************************!*\
  !*** ./src/scripts/views/pages/detail.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _routes_url_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../routes/url-parser */ "./src/scripts/routes/url-parser.js");
/* harmony import */ var _data_DATA_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/DATA.json */ "./src/scripts/data/DATA.json");
/* harmony import */ var _templates_template_creator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates/template-creator */ "./src/scripts/views/templates/template-creator.js");
/* harmony import */ var _like_button_presenter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./like-button-presenter */ "./src/scripts/views/pages/like-button-presenter.js");





const Detail = {
  async render() {
    return `
      <div id="book-list" class="book"></div>
      <div id="likeButtonContainer"></div>
      

      
      </div>
    `;
  },

  async afterRender() {
    try {
      let book = null;
      const url = _routes_url_parser__WEBPACK_IMPORTED_MODULE_0__["default"].parseActiveUrlWithoutCombiner();
	      const restaurantListContainer = document.querySelector('#book-list');
	      for (let i=0; i<_data_DATA_json__WEBPACK_IMPORTED_MODULE_1__.books.length; i++){
	        if (_data_DATA_json__WEBPACK_IMPORTED_MODULE_1__.books[i].id == url.id){
	          book = _data_DATA_json__WEBPACK_IMPORTED_MODULE_1__.books[i];
	          restaurantListContainer.innerHTML = (0,_templates_template_creator__WEBPACK_IMPORTED_MODULE_2__.createRestaurantDetailTemplate)(book);
	        }
	      }
      const restaurantForLike = this._createRestaurantForLike(book);
	      const likeButtonContainer = document.querySelector('#likeButtonContainer');
	      await _like_button_presenter__WEBPACK_IMPORTED_MODULE_3__["default"].init({
	        likeButtonContainer,
        restaurant: restaurantForLike,
	      });

      // Render existing reviews


      // Handle review submission

    } catch (error) {
      console.error(error);
      const restaurantListContainer = document.querySelector('#book-list');
      restaurantListContainer.innerHTML = '<p>Gagal memuat detail buku.</p>';
    }
  },
  _createRestaurantForLike(book) {
    return {
      id: book.id,
      name: book.name,
      description: book.description,
      pictureId: book.pictureId,
      kurikulum: book.kurikulum,
      jawab: book.jawab,
      jawab1: book.jawab1,
      jawab2: book.jawab2,
      jawab3: book.jawab3,
      jawab4: book.jawab4
    };
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Detail);


/***/ }),

/***/ "./src/scripts/views/pages/like-button-presenter.js":
/*!**********************************************************!*\
  !*** ./src/scripts/views/pages/like-button-presenter.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_favorite_resto_idb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/favorite-resto-idb */ "./src/scripts/data/favorite-resto-idb.js");
/* harmony import */ var _templates_template_creator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/template-creator */ "./src/scripts/views/templates/template-creator.js");



const LikeButtonPresenter = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;
    this._favoriteRestaurant = _data_favorite_resto_idb__WEBPACK_IMPORTED_MODULE_0__["default"];
    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)){
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurant.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = (0,_templates_template_creator__WEBPACK_IMPORTED_MODULE_1__.createLikeButtonTemplate)();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurant.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = (0,_templates_template_creator__WEBPACK_IMPORTED_MODULE_1__.createLikedButtonTemplate)();

    const unlikeButton = document.querySelector('#likeButton');
    unlikeButton.addEventListener('click', async () => {
      await this._favoriteRestaurant.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LikeButtonPresenter);

/***/ }),

/***/ "./src/scripts/views/pages/like.js":
/*!*****************************************!*\
  !*** ./src/scripts/views/pages/like.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_favorite_resto_idb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/favorite-resto-idb */ "./src/scripts/data/favorite-resto-idb.js");
/* harmony import */ var _templates_template_creator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/template-creator */ "./src/scripts/views/templates/template-creator.js");



const Like = {
  async render() {
    return `
        <div class="content">
          <h2 class="content__heading">Your Favorite socks</h2>
          <div id="restaurant-list" class="restaurant-list">
          </div>
        </div>
      `;
  },

  async afterRender() {
    const restaurant = await _data_favorite_resto_idb__WEBPACK_IMPORTED_MODULE_0__["default"].getRestaurantList();
    const restaurantListContainer = document.querySelector('#restaurant-list');
    restaurant.forEach((restaurant) => {
      restaurantListContainer.innerHTML += (0,_templates_template_creator__WEBPACK_IMPORTED_MODULE_1__.createRestaurantItemTemplate)(restaurant);
    });
  },

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Like);

/***/ }),

/***/ "./src/scripts/views/templates/template-creator.js":
/*!*********************************************************!*\
  !*** ./src/scripts/views/templates/template-creator.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createLikeButtonTemplate: () => (/* binding */ createLikeButtonTemplate),
/* harmony export */   createLikedButtonTemplate: () => (/* binding */ createLikedButtonTemplate),
/* harmony export */   createRestaurantDetailTemplate: () => (/* binding */ createRestaurantDetailTemplate),
/* harmony export */   createRestaurantItemTemplate: () => (/* binding */ createRestaurantItemTemplate)
/* harmony export */ });
/* harmony import */ var _globals_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../globals/config */ "./src/scripts/globals/config.js");


const createRestaurantDetailTemplate = (book) => {

  return `
    <h2 class="restaurant__title">${book.name}</h2>
    <img class="restaurant__poster" src="${_globals_config__WEBPACK_IMPORTED_MODULE_0__["default"].BASE_IMAGE_URL + book.pictureId}">
    
    <div class="restaurant__info">
      <h3>Information</h3>
      
      <h4>Kaos Kaki</h4>
      <p>${book.kurikulum || 'kaos kaki anak sekolah'}, ${book.kurikulum || 'Umum juga ada'}</p>
      
      <h4>Categories</h4>
      <p>${book.name}</p>
    </div>


    <div class="restaurant__overview">
      <h3>Description</h3>
      <p>${book.description || 'No description available'}</p>
    </div>


    <div class="restaurant__menu">
      <h3>HARGA KAOS KAKI</h3>

      <div class="menu__food">
        <h4>Harga sewaktu-waktu dapat berubah</h4>
        <ul>${book.jawab}</ul>

      </div>


      <div class="menu__drink">
        <h4>lainnya</h4>
        <ul>${book.jawab1}</ul>
      </div>
      
      
      <div class="menu__food">
        <h4>lainnya</h4>
        <ul>${book.jawab2}</ul>

      </div>


      <div class="menu__drink">
        <h4>lainnya</h4>
        <ul>${book.jawab3}</ul>
      </div>
      <div class="menu__food">
        <h4>lainnya</h4>
        <ul>${book.jawab4}</ul>

      </div>




      </div>
  `;
};


const createRestaurantItemTemplate = (book) => `
  
    <div class="restaurant-item">
    
    <div class ="restaurant-item__header">
      <img class="lazyload restaurant-item__header__poster" alt="${book.name}"
           data-src="${_globals_config__WEBPACK_IMPORTED_MODULE_0__["default"].BASE_IMAGE_URL + book.pictureId  }">
          </div>


    <div class="restaurant-item__content">
      <h3><a href="/#/detail/${book.id}">${book.name}</a></h3>
      <p>${book.description}</p>
    </div>

  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;




/***/ }),

/***/ "./src/scripts/data/DATA.json":
/*!************************************!*\
  !*** ./src/scripts/data/DATA.json ***!
  \************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"books":[{"id":"6c7bqjgi84kcowlqdz","name":"TAMPAK B&W 1 SD","description":"Kaos Kaki SD-SMP dan SMA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"01.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"ljx8i0qu2uckcowlqdz","name":"TAMPAK B&W 2 SD","description":"Kaos Kaki SD-SMP dan SMA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan ","pictureId":"02.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"fe8bbxoazddkcowlqdz","name":"TAMPAK SD 1","description":"Kaos Kaki SD-SMP dan SMA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan ","pictureId":"03.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"ik1zljmlf68kcowlqdz","name":"TAMPAK SD 2","description":"Kaos Kaki SD-SMP dan SMA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"04.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"9jpuzkm6n6jkcowlqdz","name":"TAMPAK SD 3","description":"Kaos Kaki SD-SMP dan SMA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"05.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"cpl5jpsnuqkkcowlqdz","name":"TAMPAK SD 4","description":"Kaos Kaki SD-SMP dan SMA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"06.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"iqtf9hmdzvbkcowlqdz","name":"TAMPAK  SD 5","description":"Kaos Kaki SD-SMP dan SMA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"07.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o19xhxxkcowlqdz","name":"TAMPAK SD 6","description":"Kaos Kaki SD-SMP dan SMA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"08.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o20xhxxkcowlqdz","name":"TAMPAK SD 7","description":"Kaos Kaki SD-SMP dan SMA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"09.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o21xhxxkcowlqdz","name":"TAMPAK SD 8","description":"Kaos Kaki SD-SMP dan SMA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"10.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o22xhxxkcowlqdz","name":"TAMPAK SD SMP SMA","description":"Kaos Kaki SD-SMP dan SMA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"11.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o23xhxxkcowlqdz","name":"TAMPAK B&W 1 SMP","description":"Kaos Kaki SD-SMP dan SMA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"12.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o24xhxxkcowlqdz","name":"TAMPAK B&W 2 SMP","description":"Kaos Kaki SD-SMP dan SMA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"13.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o25xhxxkcowlqdz","name":"TAMPAK SMP 1","description":"Kaos Kaki SD-SMP dan SMA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"14.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o26xhxxkcowlqdz","name":"TAMPAK SMP 2","description":"Kaos Kaki SD-SMP dan SMA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan ","pictureId":"15.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o27xhxxkcowlqdz","name":"TAMPAK SMP 3","description":"Kaos Kaki SD-SMP dan SMA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan ","pictureId":"16.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o28xhxxkcowlqdz","name":"TAMPAK SMP 4","description":"Kaos Kaki SD-SMP dan SMA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"17.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o30xhxxkcowlqdz","name":"TAMPAK B & W 1 SMA","description":"Kaos Kaki SD-SMP dan SMA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"18.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o31xhxxkcowlqdz","name":"TAMPAK B&W 2 SMA","description":"Kaos Kaki SD-SMP dan SMA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"19.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o32xhxxkcowlqdz","name":"TAMPAK SMA 1","description":"Kaos Kaki SD-SMP dan SMA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"20.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o33xhxxkcowlqdz","name":"TAMPAK SMA 2","description":"Kaos Kaki SD-SMP dan SMA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"21.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o34xhxxkcowlqdz","name":"TAMPAK SMA 3","description":"Kaos Kaki SD-SMP dan SMA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"22.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o35xhxxkcowlqdz","name":"TAMPAK SMA 4","description":"Kaos Kaki SD-SMP dan SMA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"23.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o36xhxxkcowlqdz","name":"TAMPAK SMA 5","description":"Kaos Kaki SD-SMP dan SMA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"24.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o37xhxxkcowlqdz","name":"TAMPAK SMA 6","description":"Kaos Kaki SD-SMP dan SMA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"25.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o38xhxxkcowlqdz","name":"TAMPAK BIRU 1","description":"Kaos Kaki untuk olah raga SEPAK BOLA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"26.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o39xhxxkcowlqdz","name":"TAMPAK BIRU 2","description":"Kaos Kaki untuk olah raga SEPAK BOLA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"27.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o40xhxxkcowlqdz","name":"TAMPAK BIRU 3","description":"Kaos Kaki untuk olah raga SEPAK BOLA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"28.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o28xhxxkcowlqdz","name":"TAMPAK BIRU 4","description":"Kaos Kaki untuk olah raga SEPAK BOLA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"29.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o42xhxxkcowlqdz","name":"TAMPAK BIRU 5","description":"Kaos Kaki untuk olah raga SEPAK BOLA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"30.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o43xhxxkcowlqdz","name":"TAMPAK BIRU 6","description":"Kaos Kaki untuk olah raga SEPAK BOLA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"31.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o44xhxxkcowlqdz","name":"TAMPAK BIRU 7","description":"Kaos Kaki untuk olah raga SEPAK BOLA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"32.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o45xhxxkcowlqdz","name":"TAMPAK BIRU 8","description":"Kaos Kaki untuk olah raga SEPAK BOLA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"33.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o46xhxxkcowlqdz","name":"TAMPAK BIRU 9","description":"Kaos Kaki untuk olah raga SEPAK BOLA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"34.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o47xhxxkcowlqdz","name":"TAMPAK HIJAU 1","description":"Kaos Kaki untuk olah raga SEPAK BOLA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"35.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o48xhxxkcowlqdz","name":"TAMPAK HIJAU 2","description":"Kaos Kaki untuk olah raga SEPAK BOLA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"36.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o49xhxxkcowlqdz","name":"TAMPAK HIJAU 3","description":"Kaos Kaki untuk olah raga SEPAK BOLA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"37.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o50xhxxkcowlqdz","name":"TAMPAK HIJAU 4","description":"Kaos Kaki untuk olah raga SEPAK BOLA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"38.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o51xhxxkcowlqdz","name":"TAMPAK HIJAU 5","description":"Kaos Kaki untuk olah raga SEPAK BOLA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"39.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o52xhxxkcowlqdz","name":"TAMPAK HIJAU 6","description":"Kaos Kaki untuk olah raga SEPAK BOLA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"40.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o53xhxxkcowlqdz","name":"TAMPAK HITAM 1","description":"Kaos Kaki untuk olah raga SEPAK BOLA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"41.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o54xhxxkcowlqdz","name":"TAMPAK HITAM 2","description":"Kaos Kaki untuk olah raga SEPAK BOLA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"42.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o55xhxxkcowlqdz","name":"TAMPAK HITAM 3","description":"Kaos Kaki untuk olah raga SEPAK BOLA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan ","pictureId":"43.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o56xhxxkcowlqdz","name":"TAMPAK HITAM 4","description":"Kaos Kaki untuk olah raga SEPAK BOLA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"44.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o57xhxxkcowlqdz","name":"TAMPAK HITAM 5","description":"Kaos Kaki untuk olah raga SEPAK BOLA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"45.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o58xhxxkcowlqdz","name":"TAMPAK HITAM 6","description":"Kaos Kaki untuk olah raga SEPAK BOLA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"46.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o59xhxxkcowlqdz","name":"TAMPAK HITAM 7","description":"Kaos Kaki untuk olah raga SEPAK BOLA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"47.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o60xhxxkcowlqdz","name":"TAMPAK HITAM 7","description":"Kaos Kaki untuk olah raga SEPAK BOLA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"48.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o61xhxxkcowlqdz","name":"TAMPAK KUNING 1","description":"Kaos Kaki untuk olah raga SEPAK BOLA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"49.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o62xhxxkcowlqdz","name":"TAMPAK KUNING 2","description":"Kaos Kaki untuk olah raga SEPAK BOLA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"50.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o63xhxxkcowlqdz","name":"TAMPAK KUNING 3","description":"Kaos Kaki untuk olah raga SEPAK BOLA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"51.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o64xhxxkcowlqdz","name":"TAMPAK KUNING 4","description":"Kaos Kaki untuk olah raga SEPAK BOLA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"52.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o65xhxxkcowlqdz","name":"TAMPAK KUNING 5","description":"Kaos Kaki untuk olah raga SEPAK BOLA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"53.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o66xhxxkcowlqdz","name":"TAMPAK KUNING 6","description":"Kaos Kaki untuk olah raga SEPAK BOLA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"54.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o67xhxxkcowlqdz","name":"TAMPAK MERAH 1","description":"Kaos Kaki untuk olah raga SEPAK BOLA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"55.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o68xhxxkcowlqdz","name":"TAMPAK MERAH 2","description":"Kaos Kaki untuk olah raga SEPAK BOLA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"56.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o69xhxxkcowlqdz","name":"TAMPAK MERAH 3","description":"Kaos Kaki untuk olah raga SEPAK BOLA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"57.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o70xhxxkcowlqdz","name":"TAMPAK MERAH 4","description":"Kaos Kaki untuk olah raga SEPAK BOLA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"58.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o71xhxxkcowlqdz","name":"TAMPAK MERAH 5","description":"Kaos Kaki untuk olah raga SEPAK BOLA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"59.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o72xhxxkcowlqdz","name":"TAMPAK OREN 1","description":"Kaos Kaki untuk olah raga SEPAK BOLA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"60.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o73xhxxkcowlqdz","name":"TAMPAK OREN 2","description":"Kaos Kaki untuk olah raga SEPAK BOLA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"61.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o74xhxxkcowlqdz","name":"TAMPAK OREN 3","description":"Kaos Kaki untuk olah raga SEPAK BOLA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"62.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o75xhxxkcowlqdz","name":" TAMPAK OREN 4","description":"Kaos Kaki untuk olah raga SEPAK BOLA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"63.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"},{"id":"wf5o76xhxxkcowlqdz","name":"TAMPAK OREN 5","description":"Kaos Kaki untuk olah raga SEPAK BOLA Merk Berlian Socks sudah terbukti harga murah kwalitas bagus, dengan warna putih bersih dan hitam pekat, Best Quality dengan bahan 80% Spandex dan 20% Cotton membuat nyaman digunakan","pictureId":"64.jpg","Kurikulum":"Jualan Kaos Kaki","jawab":"Bagaimana Cara pemesanan ?","jawab1":"Klik simbol WA warna hijau","jawab2":"Bagaimana Cara Pembayarannya ?","jawab3":"Transfer atau Tunai ","jawab4":"Barang dikirim setelah ada pembayaran efektif"}]}');

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBNkIsZ0VBQXFCO0FBQ2xEO0FBQ0E7QUFDQSwyQ0FBMkMseUZBQTRCO0FBQ3ZFLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJ1Qjs7QUFFMUM7O0FBRUE7QUFDQSxvQ0FBb0MsVUFBVTtBQUM5QywyQ0FBMkMsdURBQU0saUNBQWlDO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDJDQUEyQyxJQUFJLGtDQUFrQztBQUM1RjtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCOzs7QUFHQTtBQUNBO0FBQ0EsV0FBVywrQ0FBK0M7QUFDMUQ7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsV0FBVzs7QUFFekI7OztBQUdBO0FBQ0E7QUFDQSxjQUFjLFlBQVk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsWUFBWTs7QUFFMUI7OztBQUdBO0FBQ0E7QUFDQSxjQUFjLFlBQVk7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsY0FBYyxZQUFZOztBQUUxQjs7Ozs7QUFLQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsVUFBVTtBQUM3RSx1QkFBdUIsdURBQU0sbUNBQW1DO0FBQ2hFOzs7QUFHQTtBQUNBLCtCQUErQixRQUFRLElBQUksVUFBVTtBQUNyRCxXQUFXLGlCQUFpQjtBQUM1Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFPRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL3NyYy9zY3JpcHRzL2RhdGEvZmF2b3JpdGUtcmVzdG8taWRiLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL3NyYy9zY3JpcHRzL2dsb2JhbHMvY29uZmlnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL3NyYy9zY3JpcHRzL3JvdXRlcy9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vc3JjL3NjcmlwdHMvcm91dGVzL3VybC1wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vc3JjL3NjcmlwdHMvdXRpbHMvZHJhd2VyLWluaXRpYXRvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9zcmMvc2NyaXB0cy91dGlscy9zdy1yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9zcmMvc2NyaXB0cy92aWV3cy9hcHAuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vc3JjL3NjcmlwdHMvdmlld3MvcGFnZXMvZGFmdGFyLXJlc3RvLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL3NyYy9zY3JpcHRzL3ZpZXdzL3BhZ2VzL2RldGFpbC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9zcmMvc2NyaXB0cy92aWV3cy9wYWdlcy9saWtlLWJ1dHRvbi1wcmVzZW50ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vc3JjL3NjcmlwdHMvdmlld3MvcGFnZXMvbGlrZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9zcmMvc2NyaXB0cy92aWV3cy90ZW1wbGF0ZXMvdGVtcGxhdGUtY3JlYXRvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvcGVuREIgfSBmcm9tICdpZGInO1xuaW1wb3J0IENPTkZJRyBmcm9tICcuLi9nbG9iYWxzL2NvbmZpZyc7XG5cbmNvbnN0IHsgREFUQUJBU0VfTkFNRSwgREFUQUJBU0VfVkVSU0lPTiwgT0JKRUNUX1NUT1JFX05BTUUgfSA9IENPTkZJRztcblxuY29uc3QgZGJQcm9taXNlID0gb3BlbkRCKERBVEFCQVNFX05BTUUsIERBVEFCQVNFX1ZFUlNJT04sIHtcbiAgdXBncmFkZShkYXRhYmFzZSl7XG4gICAgZGF0YWJhc2UuY3JlYXRlT2JqZWN0U3RvcmUoT0JKRUNUX1NUT1JFX05BTUUsIHsga2V5UGF0aDogJ2lkJyB9KTtcbiAgfSxcbn0pO1xuXG5jb25zdCBGYXZvcml0ZVJlc3RhdXJhbnRJZGIgPSB7XG4gIGFzeW5jIGdldFJlc3RhdXJhbnQoaWQpIHtcbiAgICBpZiAoIWlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiAoYXdhaXQgZGJQcm9taXNlKS5nZXQoT0JKRUNUX1NUT1JFX05BTUUsIGlkKTtcbiAgfSxcblxuICBhc3luYyBnZXRSZXN0YXVyYW50TGlzdCgpIHtcbiAgICByZXR1cm4gKGF3YWl0IGRiUHJvbWlzZSkuZ2V0QWxsKE9CSkVDVF9TVE9SRV9OQU1FKTtcbiAgfSxcblxuICBhc3luYyBwdXRSZXN0YXVyYW50KHJlc3RhdXJhbnQpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gICAgaWYgKCFyZXN0YXVyYW50Lmhhc093blByb3BlcnR5KCdpZCcpKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIChhd2FpdCBkYlByb21pc2UpLnB1dChPQkpFQ1RfU1RPUkVfTkFNRSwgcmVzdGF1cmFudCk7XG4gIH0sXG5cbiAgYXN5bmMgZGVsZXRlUmVzdGF1cmFudChpZCkge1xuICAgIHJldHVybiAoYXdhaXQgZGJQcm9taXNlKS5kZWxldGUoT0JKRUNUX1NUT1JFX05BTUUsIGlkKTtcbiAgfSxcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgRmF2b3JpdGVSZXN0YXVyYW50SWRiOyIsImNvbnN0IENPTkZJRyA9IHtcbiAgS0VZOiAnMTIzNDUnLCAvLyBHYW50aSBkZW5nYW4gQVBJIEtleSBqaWthIGRpYnV0dWhrYW5cbiAgQkFTRV9VUkw6ICdodHRwczovL3Jlc3RhdXJhbnQtYXBpLmRpY29kaW5nLmRldi8nLFxuXG4gIEJBU0VfSU1BR0VfVVJMOiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1RvbW15Rmx1dHRlci9iZXJsaWFucGljdHVyZS9yZWZzL2hlYWRzL21hc3Rlci9nYW1iYXItJyxcbiAgREVGQVVMVF9MQU5HVUFHRTogJ2VuLXVzJyxcbiAgQ0FDSEVfTkFNRTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICBEQVRBQkFTRV9OQU1FOiAnYnVuZGEtcmVzdG8tZGF0YWJhc2UnLFxuICBEQVRBQkFTRV9WRVJTSU9OOiAxLFxuICBPQkpFQ1RfU1RPUkVfTkFNRTogJ3Jlc3RhdXJhbnRzJyxcblxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBDT05GSUc7XG5cbiIsImltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZSc7IC8qIGZvciBhc3luYyBhd2FpdCB0cmFuc3BpbGUgKi9cbmltcG9ydCAnLi4vc3R5bGVzL21haW4uY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL3Jlc3BvbnNpdmUuY3NzJztcbmltcG9ydCAnbGF6eXNpemVzJztcbmltcG9ydCAnbGF6eXNpemVzL3BsdWdpbnMvcGFyZW50LWZpdC9scy5wYXJlbnQtZml0JztcbmltcG9ydCBBcHAgZnJvbSAnLi92aWV3cy9hcHAnO1xuaW1wb3J0IHN3UmVnaXN0ZXIgZnJvbSAnLi4vc2NyaXB0cy91dGlscy9zdy1yZWdpc3Rlcic7XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoe1xuICBidXR0b246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoYW1idXJnZXJCdXR0b24nKSxcbiAgZHJhd2VyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2aWdhdGlvbkRyYXdlcicpLFxuICBjb250ZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbkNvbnRlbnQnKSxcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsICgpID0+IHtcbiAgYXBwLnJlbmRlclBhZ2UoKTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgYXBwLnJlbmRlclBhZ2UoKTtcbiAgc3dSZWdpc3RlcigpO1xufSk7XG5cbiIsImltcG9ydCBEYWZ0YXJSZXN0byBmcm9tICcuLi92aWV3cy9wYWdlcy9kYWZ0YXItcmVzdG8nO1xuaW1wb3J0IERldGFpbCBmcm9tICcuLi92aWV3cy9wYWdlcy9kZXRhaWwnO1xuaW1wb3J0IExpa2UgZnJvbSAnLi4vdmlld3MvcGFnZXMvbGlrZSc7XG5cbmNvbnN0IHJvdXRlcyA9IHtcbiAgJy8nOiBEYWZ0YXJSZXN0bywgLy8gZGVmYXVsdCBwYWdlXG4gICcvZGFmdGFyLXJlc3RvJzogRGFmdGFyUmVzdG8sXG4gICcvZGV0YWlsLzppZCc6IERldGFpbCxcbiAgJy9saWtlJzogTGlrZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlczsiLCJjb25zdCBVcmxQYXJzZXIgPSB7XG4gIHBhcnNlQWN0aXZlVXJsV2l0aENvbWJpbmVyKCkge1xuICAgIGNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3Qgc3BsaXRlZFVybCA9IHRoaXMuX3VybFNwbGl0dGVyKHVybCk7XG4gICAgcmV0dXJuIHRoaXMuX3VybENvbWJpbmVyKHNwbGl0ZWRVcmwpO1xuICB9LFxuXG4gIHBhcnNlQWN0aXZlVXJsV2l0aG91dENvbWJpbmVyKCkge1xuICAgIGNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIHRoaXMuX3VybFNwbGl0dGVyKHVybCk7XG4gIH0sXG5cbiAgX3VybFNwbGl0dGVyKHVybCkge1xuICAgIGNvbnN0IHVybHNTcGxpdHMgPSB1cmwuc3BsaXQoJy8nKTtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzb3VyY2U6IHVybHNTcGxpdHNbMV0gfHwgbnVsbCxcbiAgICAgIGlkOiB1cmxzU3BsaXRzWzJdIHx8IG51bGwsXG4gICAgICB2ZXJiOiB1cmxzU3BsaXRzWzNdIHx8IG51bGwsXG4gICAgfTtcbiAgfSxcblxuICBfdXJsQ29tYmluZXIoc3BsaXRlZFVybCkge1xuICAgIHJldHVybiAoc3BsaXRlZFVybC5yZXNvdXJjZSA/IGAvJHtzcGxpdGVkVXJsLnJlc291cmNlfWAgOiAnLycpXG4gICAgICArIChzcGxpdGVkVXJsLmlkID8gJy86aWQnIDogJycpXG4gICAgICArIChzcGxpdGVkVXJsLnZlcmIgPyBgLyR7c3BsaXRlZFVybC52ZXJifWAgOiAnJyk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBVcmxQYXJzZXI7IiwiY29uc3QgRHJhd2VySW5pdGlhdG9yID0ge1xuICBpbml0KHsgYnV0dG9uLCBkcmF3ZXIsIGNvbnRlbnQgfSkge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdG9nZ2xlRHJhd2VyKGV2ZW50LCBkcmF3ZXIpO1xuICAgIH0pO1xuXG4gICAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fY2xvc2VEcmF3ZXIoZXZlbnQsIGRyYXdlcik7XG4gICAgfSk7XG4gIH0sXG5cbiAgX3RvZ2dsZURyYXdlcihldmVudCwgZHJhd2VyKSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZHJhd2VyLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcbiAgfSxcblxuICBfY2xvc2VEcmF3ZXIoZXZlbnQsIGRyYXdlcikge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGRyYXdlci5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEcmF3ZXJJbml0aWF0b3I7IiwiaW1wb3J0IHsgV29ya2JveCB9IGZyb20gJ3dvcmtib3gtd2luZG93JztcbmNvbnN0IHN3UmVnaXN0ZXIgPSBhc3luYyAoKSA9PiB7XG4gIGlmICghKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpKSB7XG4gICAgY29uc29sZS5sb2coJ1NlcnZpY2UgV29ya2VyIG5vdCBzdXBwb3J0ZWQgaW4gdGhlIGJyb3dzZXInKTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3Qgd2IgPSBuZXcgV29ya2JveCgnLi9zdy5idW5kbGUuanMnKTtcbiAgdHJ5IHtcbiAgICBhd2FpdCB3Yi5yZWdpc3RlcigpO1xuICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlIHdvcmtlciByZWdpc3RlcmVkJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coJ0ZhaWxlZCB0byByZWdpc3RlciBzZXJ2aWNlIHdvcmtlcicsIGVycm9yKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgc3dSZWdpc3RlcjtcbiIsImltcG9ydCBEcmF3ZXJJbml0aWF0b3IgZnJvbSAnLi4vdXRpbHMvZHJhd2VyLWluaXRpYXRvcic7XG5pbXBvcnQgVXJsUGFyc2VyIGZyb20gJy4uL3JvdXRlcy91cmwtcGFyc2VyJztcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi4vcm91dGVzL3JvdXRlcyc7XG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKHsgYnV0dG9uLCBkcmF3ZXIsIGNvbnRlbnQgfSkge1xuICAgIHRoaXMuX2J1dHRvbiA9IGJ1dHRvbjtcbiAgICB0aGlzLl9kcmF3ZXIgPSBkcmF3ZXI7XG4gICAgdGhpcy5fY29udGVudCA9IGNvbnRlbnQ7XG5cbiAgICB0aGlzLl9pbml0aWFsQXBwU2hlbGwoKTtcbiAgfVxuXG4gIF9pbml0aWFsQXBwU2hlbGwoKSB7XG4gICAgRHJhd2VySW5pdGlhdG9yLmluaXQoe1xuICAgICAgYnV0dG9uOiB0aGlzLl9idXR0b24sXG4gICAgICBkcmF3ZXI6IHRoaXMuX2RyYXdlcixcbiAgICAgIGNvbnRlbnQ6IHRoaXMuX2NvbnRlbnQsXG4gICAgfSk7XG4gIH1cbiAgYXN5bmMgcmVuZGVyUGFnZSgpIHtcbiAgICBjb25zdCB1cmwgPSBVcmxQYXJzZXIucGFyc2VBY3RpdmVVcmxXaXRoQ29tYmluZXIoKTtcbiAgICBjb25zdCBwYWdlID0gcm91dGVzW3VybF07XG4gICAgdGhpcy5fY29udGVudC5pbm5lckhUTUwgPSBhd2FpdCBwYWdlLnJlbmRlcigpO1xuICAgIGF3YWl0IHBhZ2UuYWZ0ZXJSZW5kZXIoKTtcbiAgICBjb25zdCBza2lwTGlua0VsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2tpcC1saW5rJyk7XG4gICAgc2tpcExpbmtFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW5Db250ZW50JykuZm9jdXMoKTtcbiAgICB9KTtcblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCIvLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXG5cbmltcG9ydCB7IGNyZWF0ZVJlc3RhdXJhbnRJdGVtVGVtcGxhdGUgfSBmcm9tICcuLi90ZW1wbGF0ZXMvdGVtcGxhdGUtY3JlYXRvcic7XG5pbXBvcnQgZGF0YSBmcm9tICcuLi8uLi9kYXRhL0RBVEEuanNvbic7XG5cbmNvbnN0IERhZnRhclJlc3RvID0ge1xuICBhc3luYyByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgIDxoMiBjbGFzcz1cImNvbnRlbnRfX2hlYWRpbmdcIj5QSUxJSCBQUk9EVUsgS0FPUyBLQUtJIEtBTUk8L2gyPlxuICAgICAgICA8ZGl2IGlkPVwicmVzdGF1cmFudC1saXN0XCIgY2xhc3M9XCJyZXN0YXVyYW50LWxpc3RcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9LFxuXG4gIGFzeW5jIGFmdGVyUmVuZGVyKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zb2xlLmxvZygnQVBJIFJlc3BvbnNlOicsIGRhdGEpOyAvLyBDaGVjayB0aGUgc3RydWN0dXJlIG9mIGBkYXRhYFxuICAgICAgY29uc3QgcmVzdGF1cmFudExpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdGF1cmFudC1saXN0Jyk7XG4gICAgICBmb3IgKGxldCBpPTA7IGk8ZGF0YS5ib29rcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHJlc3RhdXJhbnRMaXN0Q29udGFpbmVyLmlubmVySFRNTCArPSBjcmVhdGVSZXN0YXVyYW50SXRlbVRlbXBsYXRlKGRhdGEuYm9va3NbaV0pOyAgLy8gcGFuZ2dpbCBtZXRob2QgZGFyaSB0ZW1wbGF0ZVxuICAgICAgfVxuICAgICAgY29uc3QgcmVzdGF1cmFudHMgPSBkYXRhLnJlc3RhdXJhbnRzIHx8IFtdOyAvLyBBZGp1c3QgdGhpcyBiYXNlZCBvbiB0aGUgYWN0dWFsIGtleVxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzdGF1cmFudHMpKSB7XG4gICAgICAgIHJlc3RhdXJhbnRzLmZvckVhY2goKHJlc3RhdXJhbnQpID0+IHtcbiAgICAgICAgICByZXN0YXVyYW50TGlzdENvbnRhaW5lci5pbm5lckhUTUwgKz0gY3JlYXRlUmVzdGF1cmFudEl0ZW1UZW1wbGF0ZShyZXN0YXVyYW50KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgZGF0YSBmb3JtYXQ6IGV4cGVjdGVkIGFuIGFycmF5Jyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGFmdGVyUmVuZGVyOicsIGVycm9yKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN0YXVyYW50LWxpc3QnKS5pbm5lckhUTUwgPSAnPHA+RmFpbGVkIHRvIGxvYWQgcmVzdGF1cmFudHMuPC9wPic7XG4gICAgfVxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGFmdGFyUmVzdG87XG4iLCJpbXBvcnQgVXJsUGFyc2VyIGZyb20gJy4uLy4uL3JvdXRlcy91cmwtcGFyc2VyJztcbmltcG9ydCBkYXRhIGZyb20gJy4uLy4uL2RhdGEvREFUQS5qc29uJztcbmltcG9ydCB7IGNyZWF0ZVJlc3RhdXJhbnREZXRhaWxUZW1wbGF0ZSB9IGZyb20gJy4uL3RlbXBsYXRlcy90ZW1wbGF0ZS1jcmVhdG9yJztcbmltcG9ydCBMaWtlQnV0dG9uUHJlc2VudGVyIGZyb20gJy4vbGlrZS1idXR0b24tcHJlc2VudGVyJztcblxuY29uc3QgRGV0YWlsID0ge1xuICBhc3luYyByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxkaXYgaWQ9XCJib29rLWxpc3RcIiBjbGFzcz1cImJvb2tcIj48L2Rpdj5cbiAgICAgIDxkaXYgaWQ9XCJsaWtlQnV0dG9uQ29udGFpbmVyXCI+PC9kaXY+XG4gICAgICBcblxuICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9LFxuXG4gIGFzeW5jIGFmdGVyUmVuZGVyKCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgYm9vayA9IG51bGw7XG4gICAgICBjb25zdCB1cmwgPSBVcmxQYXJzZXIucGFyc2VBY3RpdmVVcmxXaXRob3V0Q29tYmluZXIoKTtcblx0ICAgICAgY29uc3QgcmVzdGF1cmFudExpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9vay1saXN0Jyk7XG5cdCAgICAgIGZvciAobGV0IGk9MDsgaTxkYXRhLmJvb2tzLmxlbmd0aDsgaSsrKXtcblx0ICAgICAgICBpZiAoZGF0YS5ib29rc1tpXS5pZCA9PSB1cmwuaWQpe1xuXHQgICAgICAgICAgYm9vayA9IGRhdGEuYm9va3NbaV07XG5cdCAgICAgICAgICByZXN0YXVyYW50TGlzdENvbnRhaW5lci5pbm5lckhUTUwgPSBjcmVhdGVSZXN0YXVyYW50RGV0YWlsVGVtcGxhdGUoYm9vayk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG4gICAgICBjb25zdCByZXN0YXVyYW50Rm9yTGlrZSA9IHRoaXMuX2NyZWF0ZVJlc3RhdXJhbnRGb3JMaWtlKGJvb2spO1xuXHQgICAgICBjb25zdCBsaWtlQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpa2VCdXR0b25Db250YWluZXInKTtcblx0ICAgICAgYXdhaXQgTGlrZUJ1dHRvblByZXNlbnRlci5pbml0KHtcblx0ICAgICAgICBsaWtlQnV0dG9uQ29udGFpbmVyLFxuICAgICAgICByZXN0YXVyYW50OiByZXN0YXVyYW50Rm9yTGlrZSxcblx0ICAgICAgfSk7XG5cbiAgICAgIC8vIFJlbmRlciBleGlzdGluZyByZXZpZXdzXG5cblxuICAgICAgLy8gSGFuZGxlIHJldmlldyBzdWJtaXNzaW9uXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICBjb25zdCByZXN0YXVyYW50TGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib29rLWxpc3QnKTtcbiAgICAgIHJlc3RhdXJhbnRMaXN0Q29udGFpbmVyLmlubmVySFRNTCA9ICc8cD5HYWdhbCBtZW11YXQgZGV0YWlsIGJ1a3UuPC9wPic7XG4gICAgfVxuICB9LFxuICBfY3JlYXRlUmVzdGF1cmFudEZvckxpa2UoYm9vaykge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogYm9vay5pZCxcbiAgICAgIG5hbWU6IGJvb2submFtZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBib29rLmRlc2NyaXB0aW9uLFxuICAgICAgcGljdHVyZUlkOiBib29rLnBpY3R1cmVJZCxcbiAgICAgIGt1cmlrdWx1bTogYm9vay5rdXJpa3VsdW0sXG4gICAgICBqYXdhYjogYm9vay5qYXdhYixcbiAgICAgIGphd2FiMTogYm9vay5qYXdhYjEsXG4gICAgICBqYXdhYjI6IGJvb2suamF3YWIyLFxuICAgICAgamF3YWIzOiBib29rLmphd2FiMyxcbiAgICAgIGphd2FiNDogYm9vay5qYXdhYjRcbiAgICB9O1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsO1xuIiwiaW1wb3J0IEZhdm9yaXRlUmVzdGF1cmFudElkYiBmcm9tICcuLi8uLi9kYXRhL2Zhdm9yaXRlLXJlc3RvLWlkYic7XG5pbXBvcnQgeyBjcmVhdGVMaWtlQnV0dG9uVGVtcGxhdGUsIGNyZWF0ZUxpa2VkQnV0dG9uVGVtcGxhdGUgfSBmcm9tICcuLi90ZW1wbGF0ZXMvdGVtcGxhdGUtY3JlYXRvcic7XG5cbmNvbnN0IExpa2VCdXR0b25QcmVzZW50ZXIgPSB7XG4gIGFzeW5jIGluaXQoeyBsaWtlQnV0dG9uQ29udGFpbmVyLCByZXN0YXVyYW50IH0pIHtcbiAgICB0aGlzLl9saWtlQnV0dG9uQ29udGFpbmVyID0gbGlrZUJ1dHRvbkNvbnRhaW5lcjtcbiAgICB0aGlzLl9yZXN0YXVyYW50ID0gcmVzdGF1cmFudDtcbiAgICB0aGlzLl9mYXZvcml0ZVJlc3RhdXJhbnQgPSBGYXZvcml0ZVJlc3RhdXJhbnRJZGI7XG4gICAgYXdhaXQgdGhpcy5fcmVuZGVyQnV0dG9uKCk7XG4gIH0sXG5cbiAgYXN5bmMgX3JlbmRlckJ1dHRvbigpIHtcbiAgICBjb25zdCB7IGlkIH0gPSB0aGlzLl9yZXN0YXVyYW50O1xuXG4gICAgaWYgKGF3YWl0IHRoaXMuX2lzUmVzdGF1cmFudEV4aXN0KGlkKSl7XG4gICAgICB0aGlzLl9yZW5kZXJMaWtlZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJMaWtlKCk7XG4gICAgfVxuICB9LFxuXG4gIGFzeW5jIF9pc1Jlc3RhdXJhbnRFeGlzdChpZCkge1xuICAgIGNvbnN0IHJlc3RhdXJhbnQgPSBhd2FpdCB0aGlzLl9mYXZvcml0ZVJlc3RhdXJhbnQuZ2V0UmVzdGF1cmFudChpZCk7XG4gICAgcmV0dXJuICEhcmVzdGF1cmFudDtcbiAgfSxcblxuICBfcmVuZGVyTGlrZSgpIHtcbiAgICB0aGlzLl9saWtlQnV0dG9uQ29udGFpbmVyLmlubmVySFRNTCA9IGNyZWF0ZUxpa2VCdXR0b25UZW1wbGF0ZSgpO1xuXG4gICAgY29uc3QgbGlrZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaWtlQnV0dG9uJyk7XG4gICAgbGlrZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IHRoaXMuX2Zhdm9yaXRlUmVzdGF1cmFudC5wdXRSZXN0YXVyYW50KHRoaXMuX3Jlc3RhdXJhbnQpO1xuICAgICAgdGhpcy5fcmVuZGVyQnV0dG9uKCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgX3JlbmRlckxpa2VkKCkge1xuICAgIHRoaXMuX2xpa2VCdXR0b25Db250YWluZXIuaW5uZXJIVE1MID0gY3JlYXRlTGlrZWRCdXR0b25UZW1wbGF0ZSgpO1xuXG4gICAgY29uc3QgdW5saWtlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpa2VCdXR0b24nKTtcbiAgICB1bmxpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCB0aGlzLl9mYXZvcml0ZVJlc3RhdXJhbnQuZGVsZXRlUmVzdGF1cmFudCh0aGlzLl9yZXN0YXVyYW50LmlkKTtcbiAgICAgIHRoaXMuX3JlbmRlckJ1dHRvbigpO1xuICAgIH0pO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGlrZUJ1dHRvblByZXNlbnRlcjsiLCJpbXBvcnQgRmF2b3JpdGVSZXN0YXVyYW50SWRiIGZyb20gJy4uLy4uL2RhdGEvZmF2b3JpdGUtcmVzdG8taWRiJztcbmltcG9ydCB7IGNyZWF0ZVJlc3RhdXJhbnRJdGVtVGVtcGxhdGUgfSBmcm9tICcuLi90ZW1wbGF0ZXMvdGVtcGxhdGUtY3JlYXRvcic7XG5cbmNvbnN0IExpa2UgPSB7XG4gIGFzeW5jIHJlbmRlcigpIHtcbiAgICByZXR1cm4gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgIDxoMiBjbGFzcz1cImNvbnRlbnRfX2hlYWRpbmdcIj5Zb3VyIEZhdm9yaXRlIHNvY2tzPC9oMj5cbiAgICAgICAgICA8ZGl2IGlkPVwicmVzdGF1cmFudC1saXN0XCIgY2xhc3M9XCJyZXN0YXVyYW50LWxpc3RcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICBgO1xuICB9LFxuXG4gIGFzeW5jIGFmdGVyUmVuZGVyKCkge1xuICAgIGNvbnN0IHJlc3RhdXJhbnQgPSBhd2FpdCBGYXZvcml0ZVJlc3RhdXJhbnRJZGIuZ2V0UmVzdGF1cmFudExpc3QoKTtcbiAgICBjb25zdCByZXN0YXVyYW50TGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN0YXVyYW50LWxpc3QnKTtcbiAgICByZXN0YXVyYW50LmZvckVhY2goKHJlc3RhdXJhbnQpID0+IHtcbiAgICAgIHJlc3RhdXJhbnRMaXN0Q29udGFpbmVyLmlubmVySFRNTCArPSBjcmVhdGVSZXN0YXVyYW50SXRlbVRlbXBsYXRlKHJlc3RhdXJhbnQpO1xuICAgIH0pO1xuICB9LFxuXG59O1xuZXhwb3J0IGRlZmF1bHQgTGlrZTsiLCJpbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uL2dsb2JhbHMvY29uZmlnJztcblxuY29uc3QgY3JlYXRlUmVzdGF1cmFudERldGFpbFRlbXBsYXRlID0gKGJvb2spID0+IHtcblxuICByZXR1cm4gYFxuICAgIDxoMiBjbGFzcz1cInJlc3RhdXJhbnRfX3RpdGxlXCI+JHtib29rLm5hbWV9PC9oMj5cbiAgICA8aW1nIGNsYXNzPVwicmVzdGF1cmFudF9fcG9zdGVyXCIgc3JjPVwiJHtDT05GSUcuQkFTRV9JTUFHRV9VUkwgKyBib29rLnBpY3R1cmVJZH1cIj5cbiAgICBcbiAgICA8ZGl2IGNsYXNzPVwicmVzdGF1cmFudF9faW5mb1wiPlxuICAgICAgPGgzPkluZm9ybWF0aW9uPC9oMz5cbiAgICAgIFxuICAgICAgPGg0Pkthb3MgS2FraTwvaDQ+XG4gICAgICA8cD4ke2Jvb2sua3VyaWt1bHVtIHx8ICdrYW9zIGtha2kgYW5hayBzZWtvbGFoJ30sICR7Ym9vay5rdXJpa3VsdW0gfHwgJ1VtdW0ganVnYSBhZGEnfTwvcD5cbiAgICAgIFxuICAgICAgPGg0PkNhdGVnb3JpZXM8L2g0PlxuICAgICAgPHA+JHtib29rLm5hbWV9PC9wPlxuICAgIDwvZGl2PlxuXG5cbiAgICA8ZGl2IGNsYXNzPVwicmVzdGF1cmFudF9fb3ZlcnZpZXdcIj5cbiAgICAgIDxoMz5EZXNjcmlwdGlvbjwvaDM+XG4gICAgICA8cD4ke2Jvb2suZGVzY3JpcHRpb24gfHwgJ05vIGRlc2NyaXB0aW9uIGF2YWlsYWJsZSd9PC9wPlxuICAgIDwvZGl2PlxuXG5cbiAgICA8ZGl2IGNsYXNzPVwicmVzdGF1cmFudF9fbWVudVwiPlxuICAgICAgPGgzPkhBUkdBIEtBT1MgS0FLSTwvaDM+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJtZW51X19mb29kXCI+XG4gICAgICAgIDxoND5IYXJnYSBzZXdha3R1LXdha3R1IGRhcGF0IGJlcnViYWg8L2g0PlxuICAgICAgICA8dWw+JHtib29rLmphd2FifTwvdWw+XG5cbiAgICAgIDwvZGl2PlxuXG5cbiAgICAgIDxkaXYgY2xhc3M9XCJtZW51X19kcmlua1wiPlxuICAgICAgICA8aDQ+bGFpbm55YTwvaDQ+XG4gICAgICAgIDx1bD4ke2Jvb2suamF3YWIxfTwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzPVwibWVudV9fZm9vZFwiPlxuICAgICAgICA8aDQ+bGFpbm55YTwvaDQ+XG4gICAgICAgIDx1bD4ke2Jvb2suamF3YWIyfTwvdWw+XG5cbiAgICAgIDwvZGl2PlxuXG5cbiAgICAgIDxkaXYgY2xhc3M9XCJtZW51X19kcmlua1wiPlxuICAgICAgICA8aDQ+bGFpbm55YTwvaDQ+XG4gICAgICAgIDx1bD4ke2Jvb2suamF3YWIzfTwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtZW51X19mb29kXCI+XG4gICAgICAgIDxoND5sYWlubnlhPC9oND5cbiAgICAgICAgPHVsPiR7Ym9vay5qYXdhYjR9PC91bD5cblxuICAgICAgPC9kaXY+XG5cblxuXG5cbiAgICAgIDwvZGl2PlxuICBgO1xufTtcblxuXG5jb25zdCBjcmVhdGVSZXN0YXVyYW50SXRlbVRlbXBsYXRlID0gKGJvb2spID0+IGBcbiAgXG4gICAgPGRpdiBjbGFzcz1cInJlc3RhdXJhbnQtaXRlbVwiPlxuICAgIFxuICAgIDxkaXYgY2xhc3MgPVwicmVzdGF1cmFudC1pdGVtX19oZWFkZXJcIj5cbiAgICAgIDxpbWcgY2xhc3M9XCJsYXp5bG9hZCByZXN0YXVyYW50LWl0ZW1fX2hlYWRlcl9fcG9zdGVyXCIgYWx0PVwiJHtib29rLm5hbWV9XCJcbiAgICAgICAgICAgZGF0YS1zcmM9XCIke0NPTkZJRy5CQVNFX0lNQUdFX1VSTCArIGJvb2sucGljdHVyZUlkICB9XCI+XG4gICAgICAgICAgPC9kaXY+XG5cblxuICAgIDxkaXYgY2xhc3M9XCJyZXN0YXVyYW50LWl0ZW1fX2NvbnRlbnRcIj5cbiAgICAgIDxoMz48YSBocmVmPVwiLyMvZGV0YWlsLyR7Ym9vay5pZH1cIj4ke2Jvb2submFtZX08L2E+PC9oMz5cbiAgICAgIDxwPiR7Ym9vay5kZXNjcmlwdGlvbn08L3A+XG4gICAgPC9kaXY+XG5cbiAgPC9kaXY+XG5gO1xuXG5jb25zdCBjcmVhdGVMaWtlQnV0dG9uVGVtcGxhdGUgPSAoKSA9PiBgXG4gIDxidXR0b24gYXJpYS1sYWJlbD1cImxpa2UgdGhpcyByZXN0YXVyYW50XCIgaWQ9XCJsaWtlQnV0dG9uXCIgY2xhc3M9XCJsaWtlXCI+XG4gICAgPGkgY2xhc3M9XCJmYSBmYS1oZWFydC1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICA8L2J1dHRvbj5cbmA7XG5cbmNvbnN0IGNyZWF0ZUxpa2VkQnV0dG9uVGVtcGxhdGUgPSAoKSA9PiBgXG4gIDxidXR0b24gYXJpYS1sYWJlbD1cInVubGlrZSB0aGlzIHJlc3RhdXJhbnRcIiBpZD1cImxpa2VCdXR0b25cIiBjbGFzcz1cImxpa2VcIj5cbiAgICA8aSBjbGFzcz1cImZhIGZhLWhlYXJ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICA8L2J1dHRvbj5cbmA7XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZVJlc3RhdXJhbnRJdGVtVGVtcGxhdGUsXG4gIGNyZWF0ZVJlc3RhdXJhbnREZXRhaWxUZW1wbGF0ZSxcbiAgY3JlYXRlTGlrZUJ1dHRvblRlbXBsYXRlLFxuICBjcmVhdGVMaWtlZEJ1dHRvblRlbXBsYXRlLFxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==