
import template from './list-view.html';
import './list-view.less';

const component = {
  template,
  transclude: {
    listHeader: 'h2',
    list: 'ul'
  }
}

export default component;