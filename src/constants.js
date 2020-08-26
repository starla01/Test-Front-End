// ** Strings ** //

// States
export const ACTIVE = "active";

// Breakpoints
export const PHONE = "phone";
export const TABLET = "tablet";
export const DESKTOP = "desktop";
export const LARGEDESKTOP = "largedesktop";

// OS
export const ANDROID = "Android";

// Gender
export const MALE = "MALE";
export const FEMALE = "FEMALE";

// Eventos
export const BLUR = "blur";
export const CHANGE = "change";

// Headers y peticiones
export const OMIT = "omit";
export const CORS = "cors";
export const POST = "POST";
export const ACCEPT_APPLICATION_JSON =
  "application/json, text/javascript, */*; q=0.01";
export const CONTENT_TYPE_FORM_URLENCODED =
  "application/x-www-form-urlencoded; charset=UTF-8";

// ** Arrays ** //
export const BREAKPOINTS = [
  { name: PHONE, min: 0, max: 766 },
  { name: TABLET, min: 767, max: 1079 },
  { name: DESKTOP, min: 1079, max: Infinity },
];
