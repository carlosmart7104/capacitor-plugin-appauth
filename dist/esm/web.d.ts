import { WebPlugin } from '@capacitor/core';
import { AppAuthPlugin } from './definitions';
export declare class AppAuthWeb extends WebPlugin implements AppAuthPlugin {
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
declare const AppAuth: AppAuthWeb;
export { AppAuth };
