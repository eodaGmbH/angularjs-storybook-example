import * as angular from 'angular';

import { globalComponentsModule } from '../src/components/global-components.module';

const rootElement = angular.element(document);

// Mock $rootElementProvider
globalComponentsModule.provider({
  $rootElement: function() {
    // @ts-ignore
    this.$get = function() {
      return rootElement;
    };
  }
});

angular.bootstrap(document.body, [globalComponentsModule.name]);
