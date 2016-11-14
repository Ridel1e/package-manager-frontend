/**
 * Created by ridel1e on 13/11/2016.
 */

import controller from './app.controller';
import './styles/importer.less';

const component = {
  template:
    `<spm-header class="spm-app__header spm-app__card"></spm-header>
     <spm-nav class="spm-app__nav spm-app__card" 
              routes="vm.routes">
     </spm-nav>
     <ui-view class="spm-app__content spm-app__card"></ui-view>`,

  controller,
  controllerAs: 'vm'
};


export default component;
