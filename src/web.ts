import { WebPlugin } from '@capacitor/core';
import { AppAuthPlugin } from './definitions';

export class AppAuthWeb extends WebPlugin implements AppAuthPlugin {
  constructor() {
    super({
      name: 'AppAuth',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const AppAuth = new AppAuthWeb();

export { AppAuth };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(AppAuth);
