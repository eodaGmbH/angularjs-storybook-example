import { IOnChanges } from 'angular';

class EmojiComponentController implements IOnChanges {
  emoji?: string;

  $onChanges() {
    if (!this.emoji) {
      this.emoji = '🏠';
    }
  }
}

export const EmojiComponent = {
  controller: EmojiComponentController,
  template: `<span ng-bind="$ctrl.emoji"></span>`,
  bindings: {
    emoji: '@',
  },
};

export const EmojiComponentName = 'emoji';
