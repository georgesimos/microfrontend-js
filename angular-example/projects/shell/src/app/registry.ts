const newLocal = 'app1/web-components';
export const registry: { [key: string]: any } = {
  app1: () => import(newLocal),
};
