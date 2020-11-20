import ProductForm from '../../../components/product-form/index.js';

export default class Page {
  element;
  productId = null;
  subElements = {};
  components = {};

  render() {
    this.getProductId();
    const element = document.createElement('div');

    element.innerHTML = this.template;

    this.element = element.firstElementChild;
    this.subElements = this.getSubElements(this.element);
    this.initComponents();
    this.renderComponents();
    this.initEventListeners();

    return this.element;
  }

  async renderComponents() {
    const { productForm } = this.components;
    const { productFormWrapper } = this.subElements;

    productForm.renderForm();
    await productForm.render();
    productFormWrapper.append(productForm.element);
  }

  get template() {
    return `
      <div class="products-edit">
      <div class="content__top-panel">
        <h1 class="page-title">
        <a href="/products" class="link">Products</a> / ${this.productId ? 'Edit' : 'Add'}
        </h1>
      </div>
        <div data-element="productFormWrapper" class="content-box">
        <!-- //!ProductFormComponent -->
        </div>
      </div>
    </div>`;
  }

  initComponents() {
    this.components.productForm = new ProductForm(this.productId);
  }

  getProductId() {
    // TODO: нужно в роутере передать `math` в конструктор Page
    // тогда не будет необходимости в этом методе
    const { pathname } = window.location;
    const pathnameArr = pathname.split('/');
    let productId = pathnameArr[pathnameArr.length - 1];
    productId = productId === 'add' ? null : productId
    this.productId = productId;
  }

  getSubElements($element) {
    const elements = $element.querySelectorAll('[data-element]');

    return [...elements].reduce((accum, subElement) => {
      accum[subElement.dataset.element] = subElement;

      return accum;
    }, {});
  }
}
