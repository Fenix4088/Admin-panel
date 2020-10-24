(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sales-index-js"],{

/***/ "./src/pages/sales/index.js":
/*!**********************************!*\
  !*** ./src/pages/sales/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Page; });\n/* harmony import */ var _components_sortable_table_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/sortable-table/index.js */ \"./src/components/sortable-table/index.js\");\n/* harmony import */ var _components_range_picker_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/range-picker/index.js */ \"./src/components/range-picker/index.js\");\n/* harmony import */ var _sales_headers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sales-headers.js */ \"./src/pages/sales/sales-headers.js\");\n/* harmony import */ var _utils_fetch_json_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/fetch-json.js */ \"./src/utils/fetch-json.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nclass Page {\n  constructor() {\n    _defineProperty(this, \"element\", void 0);\n\n    _defineProperty(this, \"subElements\", {});\n\n    _defineProperty(this, \"components\", {});\n  }\n\n  render() {\n    const element = document.createElement('div');\n    element.innerHTML = this.template;\n    this.element = element.firstElementChild;\n    this.subElements = this.getSubElements(this.element);\n    this.initComponents();\n    this.renderComponents();\n    this.initEventListeners();\n    return this.element;\n  }\n\n  get template() {\n    return \"\\n            <div class=\\\"sales full-height flex-column\\\">\\n            <div class=\\\"content__top-panel\\\">\\n            <h1 class=\\\"page-title\\\">Sales</h1>\\n            <div data-element=\\\"rangePicker\\\" class=\\\"rangepicker\\\">\\n                <!-- Rangepicker component -->\\n            </div>\\n            </div>\\n            <div data-elem=\\\"ordersContainer\\\" class=\\\"full-height flex-column\\\">\\n            <div data-element=\\\"sortableTable\\\" class=\\\"sortable-table\\\">\\n                <!-- Sortable table component -->\\n            </div>\\n            </div>\\n            </div>\\n        \";\n  }\n\n  getSubElements(element) {\n    const elements = element.querySelectorAll('[data-element]');\n    return [...elements].reduce((accum, subElement) => {\n      accum[subElement.dataset.element] = subElement;\n      return accum;\n    }, {});\n  }\n\n  initComponents() {\n    const to = new Date();\n    const from = new Date(to.getTime() - 30 * 24 * 60 * 60 * 1000);\n    const rangePicker = new _components_range_picker_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      from,\n      to\n    });\n    const sortableTable = new _components_sortable_table_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_sales_headers_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      url: \"api/rest/orders?createdAt_gte=\".concat(from.toISOString(), \"&createdAt_lte=\").concat(to.toISOString(), \"&_sort=createdAt&_order=desc&_start=0&_end=20\")\n    });\n    this.saveComponents({\n      rangePicker,\n      sortableTable\n    });\n  }\n\n  saveComponents(items = {}) {\n    Object.keys(items).forEach(item => {\n      this.components[item] = items[item];\n    });\n  }\n\n  renderComponents() {\n    Object.keys(this.components).forEach(component => {\n      const root = this.subElements[component];\n      const {\n        element\n      } = this.components[component];\n      root.append(element);\n    });\n  }\n\n  initEventListeners() {\n    this.components.rangePicker.element.addEventListener('date-select', event => {\n      const {\n        from,\n        to\n      } = event.detail;\n      this.updateTableComponent(from, to);\n    });\n  }\n\n  async updateTableComponent(from, to) {\n    const data = await Object(_utils_fetch_json_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"\".concat(\"https://course-js.javascript.ru/\", \"api/rest/orders?createdAt_gte=\").concat(from.toISOString(), \"&createdAt_lte=\").concat(to.toISOString(), \"&_sort=totalCost&_order=asc&_start=1&_end=20\"));\n    this.components.sortableTable.addRows(data);\n  }\n\n  destroy() {\n    for (const component of Object.values(this.components)) {\n      component.destroy();\n    }\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc2FsZXMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc2FsZXMvaW5kZXguanM/ZGQzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU29ydGFibGVUYWJsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3NvcnRhYmxlLXRhYmxlL2luZGV4LmpzJztcclxuaW1wb3J0IFJhbmdlUGlja2VyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcmFuZ2UtcGlja2VyL2luZGV4LmpzJztcclxuaW1wb3J0IGhlYWRlciBmcm9tICcuL3NhbGVzLWhlYWRlcnMuanMnO1xyXG5cclxuaW1wb3J0IGZldGNoSnNvbiBmcm9tICcuLi8uLi91dGlscy9mZXRjaC1qc29uLmpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSB7XHJcbiAgZWxlbWVudDtcclxuICBzdWJFbGVtZW50cyA9IHt9O1xyXG4gIGNvbXBvbmVudHMgPSB7fTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLnRlbXBsYXRlO1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcclxuXHJcbiAgICB0aGlzLnN1YkVsZW1lbnRzID0gdGhpcy5nZXRTdWJFbGVtZW50cyh0aGlzLmVsZW1lbnQpO1xyXG4gICAgdGhpcy5pbml0Q29tcG9uZW50cygpO1xyXG4gICAgdGhpcy5yZW5kZXJDb21wb25lbnRzKCk7XHJcbiAgICB0aGlzLmluaXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBnZXQgdGVtcGxhdGUoKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2FsZXMgZnVsbC1oZWlnaHQgZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfX3RvcC1wYW5lbFwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3M9XCJwYWdlLXRpdGxlXCI+U2FsZXM8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtZWxlbWVudD1cInJhbmdlUGlja2VyXCIgY2xhc3M9XCJyYW5nZXBpY2tlclwiPlxyXG4gICAgICAgICAgICAgICAgPCEtLSBSYW5nZXBpY2tlciBjb21wb25lbnQgLS0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBkYXRhLWVsZW09XCJvcmRlcnNDb250YWluZXJcIiBjbGFzcz1cImZ1bGwtaGVpZ2h0IGZsZXgtY29sdW1uXCI+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1lbGVtZW50PVwic29ydGFibGVUYWJsZVwiIGNsYXNzPVwic29ydGFibGUtdGFibGVcIj5cclxuICAgICAgICAgICAgICAgIDwhLS0gU29ydGFibGUgdGFibGUgY29tcG9uZW50IC0tPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgfVxyXG5cclxuICBnZXRTdWJFbGVtZW50cyhlbGVtZW50KSB7XHJcbiAgICBjb25zdCBlbGVtZW50cyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZWxlbWVudF0nKTtcclxuXHJcbiAgICByZXR1cm4gWy4uLmVsZW1lbnRzXS5yZWR1Y2UoKGFjY3VtLCBzdWJFbGVtZW50KSA9PiB7XHJcbiAgICAgIGFjY3VtW3N1YkVsZW1lbnQuZGF0YXNldC5lbGVtZW50XSA9IHN1YkVsZW1lbnQ7XHJcblxyXG4gICAgICByZXR1cm4gYWNjdW07XHJcbiAgICB9LCB7fSk7XHJcbiAgfVxyXG5cclxuICBpbml0Q29tcG9uZW50cygpIHtcclxuICAgIGNvbnN0IHRvID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IGZyb20gPSBuZXcgRGF0ZSh0by5nZXRUaW1lKCkgLSAzMCAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xyXG5cclxuICAgIGNvbnN0IHJhbmdlUGlja2VyID0gbmV3IFJhbmdlUGlja2VyKHsgZnJvbSwgdG8gfSk7XHJcbiAgICBjb25zdCBzb3J0YWJsZVRhYmxlID0gbmV3IFNvcnRhYmxlVGFibGUoaGVhZGVyLCB7XHJcbiAgICAgIHVybDogYGFwaS9yZXN0L29yZGVycz9jcmVhdGVkQXRfZ3RlPSR7ZnJvbS50b0lTT1N0cmluZygpfSZjcmVhdGVkQXRfbHRlPSR7dG8udG9JU09TdHJpbmcoKX0mX3NvcnQ9Y3JlYXRlZEF0Jl9vcmRlcj1kZXNjJl9zdGFydD0wJl9lbmQ9MjBgXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnNhdmVDb21wb25lbnRzKHtyYW5nZVBpY2tlciwgc29ydGFibGVUYWJsZX0pO1xyXG4gIH1cclxuXHJcbiAgc2F2ZUNvbXBvbmVudHMoaXRlbXMgPSB7fSkge1xyXG4gICAgT2JqZWN0LmtleXMoaXRlbXMpLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzW2l0ZW1dID0gaXRlbXNbaXRlbV07XHJcbiAgICB9KVxyXG59XHJcblxyXG4gIHJlbmRlckNvbXBvbmVudHMoKSB7XHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLmNvbXBvbmVudHMpLmZvckVhY2goY29tcG9uZW50ID0+IHtcclxuICAgICAgY29uc3Qgcm9vdCA9IHRoaXMuc3ViRWxlbWVudHNbY29tcG9uZW50XTtcclxuICAgICAgY29uc3QgeyBlbGVtZW50IH0gPSB0aGlzLmNvbXBvbmVudHNbY29tcG9uZW50XTtcclxuXHJcbiAgICAgIHJvb3QuYXBwZW5kKGVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbml0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLmNvbXBvbmVudHMucmFuZ2VQaWNrZXIuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkYXRlLXNlbGVjdCcsIGV2ZW50ID0+IHtcclxuICAgICAgY29uc3QgeyBmcm9tLCB0byB9ID0gZXZlbnQuZGV0YWlsO1xyXG4gICAgICB0aGlzLnVwZGF0ZVRhYmxlQ29tcG9uZW50KGZyb20sIHRvKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgdXBkYXRlVGFibGVDb21wb25lbnQoZnJvbSwgdG8pIHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaEpzb24oYCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9YXBpL3Jlc3Qvb3JkZXJzP2NyZWF0ZWRBdF9ndGU9JHtmcm9tLnRvSVNPU3RyaW5nKCl9JmNyZWF0ZWRBdF9sdGU9JHt0by50b0lTT1N0cmluZygpfSZfc29ydD10b3RhbENvc3QmX29yZGVyPWFzYyZfc3RhcnQ9MSZfZW5kPTIwYCk7XHJcbiAgICBcclxuICAgIHRoaXMuY29tcG9uZW50cy5zb3J0YWJsZVRhYmxlLmFkZFJvd3MoZGF0YSk7XHJcblxyXG4gIH1cclxuXHJcbiAgZGVzdHJveSgpIHtcclxuICAgICAgZm9yKGNvbnN0IGNvbXBvbmVudCBvZiBPYmplY3QudmFsdWVzKHRoaXMuY29tcG9uZW50cykpIHtcclxuICAgICAgICBjb21wb25lbnQuZGVzdHJveSgpO1xyXG4gICAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBNUZBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/sales/index.js\n");

/***/ }),

/***/ "./src/pages/sales/sales-headers.js":
/*!******************************************!*\
  !*** ./src/pages/sales/sales-headers.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst header = [{\n  id: 'id',\n  title: 'ID',\n  sortable: true,\n  sortType: 'number'\n}, {\n  id: 'user',\n  title: 'Client',\n  sortable: true,\n  sortType: 'string'\n}, {\n  id: 'createdAt',\n  title: 'Date',\n  sortable: true,\n  sortType: 'number',\n  template: data => {\n    const date = new Date(data);\n    let options = {\n      year: 'numeric',\n      month: 'long',\n      day: 'numeric'\n    };\n    return \"<div class=\\\"sortable-table__cell\\\"> \".concat(date.toLocaleDateString('en', options), \"</div>\");\n  }\n}, {\n  id: 'totalCost',\n  title: 'Cost',\n  sortable: true,\n  sortType: 'number',\n  template: data => '<div class=\"sortable-table__cell\">$' + data + '</div>'\n}, {\n  id: 'delivery',\n  title: 'Status',\n  sortable: true,\n  sortType: 'string'\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc2FsZXMvc2FsZXMtaGVhZGVycy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdlcy9zYWxlcy9zYWxlcy1oZWFkZXJzLmpzPzAwOWEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaGVhZGVyID0gW1xyXG4gIHtcclxuICAgIGlkOiAnaWQnLFxyXG4gICAgdGl0bGU6ICdJRCcsXHJcbiAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgIHNvcnRUeXBlOiAnbnVtYmVyJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICd1c2VyJyxcclxuICAgIHRpdGxlOiAnQ2xpZW50JyxcclxuICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgc29ydFR5cGU6ICdzdHJpbmcnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ2NyZWF0ZWRBdCcsXHJcbiAgICB0aXRsZTogJ0RhdGUnLFxyXG4gICAgc29ydGFibGU6IHRydWUsXHJcbiAgICBzb3J0VHlwZTogJ251bWJlcicsXHJcbiAgICB0ZW1wbGF0ZTogZGF0YSA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRhKTtcclxuICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgeWVhcjogJ251bWVyaWMnLFxyXG4gICAgICAgIG1vbnRoOiAnbG9uZycsXHJcbiAgICAgICAgZGF5OiAnbnVtZXJpYydcclxuICAgICAgfTtcclxuICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwic29ydGFibGUtdGFibGVfX2NlbGxcIj4gJHtkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4nLCBvcHRpb25zKX08L2Rpdj5gO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICd0b3RhbENvc3QnLFxyXG4gICAgdGl0bGU6ICdDb3N0JyxcclxuICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgc29ydFR5cGU6ICdudW1iZXInLFxyXG4gICAgdGVtcGxhdGU6IGRhdGEgPT4gJzxkaXYgY2xhc3M9XCJzb3J0YWJsZS10YWJsZV9fY2VsbFwiPiQnICsgZGF0YSArICc8L2Rpdj4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ2RlbGl2ZXJ5JyxcclxuICAgIHRpdGxlOiAnU3RhdHVzJyxcclxuICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgc29ydFR5cGU6ICdzdHJpbmcnXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyO1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBYkE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/sales/sales-headers.js\n");

/***/ })

}]);