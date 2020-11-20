import Router from './router/index.js';
import tooltip from './components/tooltip/index.js';

tooltip.initialize();

const router = Router.instance();

document.addEventListener("pointerdown", onSideBarClick);

function onSideBarClick(event) {
      // !Logic for show/hide sidebar
      const btn = event.target.closest('.sidebar__toggler');
      if (btn) {
        document.body.classList.toggle('is-collapsed-sidebar');
      }


      // !Logic for add/remove 'active' class for sidebar menu list item
      const link = event.target.closest('a');
      if(!link) return;

      const href = link.getAttribute('href');
      if (href && href.startsWith('/')) {

        const pageName = href.split('/')[1] === '' ? 'dashboard' : href.split('/')[1];

        const sideBarLists = document.querySelectorAll('[data-list]');
        [...sideBarLists].forEach(item => {
          item.classList.remove('active');
          if (item.dataset.list === pageName) {
            item.classList.add('active');
          }
        });
      }
}

router
  .addRoute(/^$/, 'dashboard')
  .addRoute(/^products$/, 'products/list')
  .addRoute(/^products\/add$/, 'products/edit')
  .addRoute(/^products\/([\w()-]+)$/, 'products/edit')
  .addRoute(/^sales$/, 'sales')
  .addRoute(/^categories$/, 'categories')
  .addRoute(/^404\/?$/, 'error404')
  .setNotFoundPagePath('error404')
  .listen();
