declare module "@capacitor/core" {
    interface PluginRegistry {
        AppAuth: AppAuthPlugin;
    }
}
export interface AppAuthPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
