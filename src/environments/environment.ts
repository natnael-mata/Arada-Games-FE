// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appApiUrl: '/api',
  //baseUrl: "http://197.156.126.110/api/"
  baseUrl: 'https://crm.onevas.et/api/',
  //baseUrl: "https://" + location.host+"/api/",
  smsBaseUrl: 'https://alet.io/api/sms/',
  assetUrl: 'https://onevas.alet.io/api/auth/asset/',
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
