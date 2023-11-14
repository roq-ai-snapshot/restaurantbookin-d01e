interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner'],
  tenantName: 'Organization',
  applicationName: 'Restaurantbookingengine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage user information', 'Manage organization information'],
  getQuoteUrl: 'https://app.roq.ai/proposal/5d5712ae-f48d-4556-a6fc-49a6329a07c6',
};
