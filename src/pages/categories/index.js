import fetchJson from '../../utils/fetch-json.js';

import NotificationMessage from '../../components/notification/index.js';
import SortableList from '../../components/sortable-list/index.js';

export default class Page {
  element;
  components = {};
  subElements = {};
  listContainers = {};

  initEventListeners() {
    this.subElements.categoriesContainer.addEventListener('pointerdown', this.onPointerDown);
    document.addEventListener('sortable-list-reorder', this.reorderingEvent);
  }

  reorderingEvent = async event => {
    const targetChildNodes = event.target.childNodes;
    const { from, to } = event.detail; //TODO: Как это применить?

    const requestData = [...targetChildNodes].map(item => {
      const id = item.dataset.id;
      const weight = [...targetChildNodes].indexOf(item) + 1;
      return { id, weight };
    });

    try {
      const result = await fetchJson(`${process.env.BACKEND_URL}api/rest/subcategories`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });
      console.log(result);
      this.showNotificationMessage("Category order saved", "success");


    } catch (error) {
      this.showNotificationMessage("Category order NOT saved", "error");
      console.error('something went wrong', error);
    }

  };

  showNotificationMessage(messageText, messageType) {
    const notificationMessage = new NotificationMessage(messageText, {type: messageType});
    notificationMessage.element.style.position = "fixed";
    notificationMessage.element.style.bottom = `10px`;
    notificationMessage.element.style.right = "10px";

    notificationMessage.show()
  }

  onPointerDown = event => {
    if (event.target.closest('.category')) {
      if (!event.target.closest('.categories__sortable-list-item')) {
        const currentElement = event.target.closest('.category');
        currentElement.classList.toggle('category_open');
      }
    }
  };

  async render() {
    const [response] = await Promise.all([this.getCategoriesData()]);

    const element = document.createElement('div');
    element.innerHTML = this.template;
    this.element = element.firstElementChild;

    this.subElements = this.getSubElements(this.element);

    this.createCategorieWrap(response);

    this.listContainers = this.getAllListsContainers(this.element);

    this.getCategoriestList(response);
    this.initEventListeners();

    return this.element;
  }

  get template() {
    return `  
        <div class="categories">
        <div class="content__top-panel">
          <h1 class="page-title">Categories</h1>
        </div>
        <div data-element="categoriesContainer">
            <!-- Render categories menue here -->
        </div>
        </div>
      `;
  }

  async getCategoriesData() {
    const url = this.getRequestLink('/api/rest/categories');
    const request = await fetchJson(url);
    return request;
  }

  getRequestLink(requestString) {
    const newUrl = new URL(requestString, `${process.env.BACKEND_URL}`);
    newUrl.searchParams.set('_sort', 'weight');
    newUrl.searchParams.set('_refs', 'subcategory');

    return newUrl.href;
  }

  createCategorieWrap(data = []) {
    const { categoriesContainer } = this.subElements;
    const categoriesMarkup = data
      .map(dataItem => {
        return `
            <div class="category category_open" data-id="${dataItem.id}">
            <header class="category__header">
                ${dataItem.title}
            </header>
            <div class="category__body">
                <div class="subcategory-list">
                    <div class="sortable-list" data-element="listContainer" data-index="${dataItem.id}">

                    </div>
                    </div>
                    </div>
                    </div>`;
      })
      .join('');

    categoriesContainer.innerHTML = categoriesMarkup;
  }

  getCategoriestList(data) {
    data.forEach(dataItem => {
      const items = this.getCategoriesListItem(dataItem);
      const sortableList = new SortableList({ items });
      this.listContainers[dataItem.id].append(sortableList.element);
    });
  }

  getCategoriesListItem(data) {
    const { subcategories } = data;
    return subcategories.map(subcategory => {
      const wrapper = document.createElement('div');
      wrapper.innerHTML = `
            <li class="categories__sortable-list-item sortable-list__item" data-grab-handle="" data-id="${subcategory.id}">
                <strong>${subcategory.title}</strong>
                <span><b>${subcategory.count}</b> products</span>
            </li>`;

      return wrapper.firstElementChild;
    });
  }

  getSubElements(element) {
    const elements = element.querySelectorAll('[data-element]');
    return [...elements].reduce((acc, item) => {
      acc[item.dataset.element] = item;
      return acc;
    }, {});
  }

  getAllListsContainers(element) {
    const elements = element.querySelectorAll('[data-index]');
    return [...elements].reduce((acc, item) => {
      acc[item.dataset.index] = item;
      return acc;
    }, {});
  }

  destroy() {
    this.subElements.categoriesContainer.removeEventListener('pointerdown', this.onPointerDown);
    for (const component of Object.values(this.components)) {
      component.destroy();
    }
  }
}
