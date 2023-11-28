import { type App } from "vue";
import { useAuth } from "./auth";
export type Provider = Record<string, any>;
export type ProviderFunction = () => Provider;
type ProviderList = [
  string,
  Provider
][];

export const initGlobalProviders = (app: App<Element>) => {
  const providers: ProviderList = [
    ['auth', useAuth()]
  ];

  for (const [name, provider] of providers) {
    app.provide(name, provider);
  }
};
