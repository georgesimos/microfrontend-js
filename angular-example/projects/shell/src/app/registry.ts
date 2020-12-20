export const registry: { [key: string]: any } = {
  app1: () => import('app1/Component'),
};
