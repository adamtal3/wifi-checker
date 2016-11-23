export const WIFI_DOWN = 'WIFI_DOWN';
export const WIFI_UP = 'WIFI_UP';
export const INTERNET_DOWN = 'INTERNET_DOWN';
export const INTERNET_UP = 'INTERNET_UP';

export const wifiDown = () => ({ type: WIFI_DOWN });
export const wifiUp = () => ({ type: WIFI_UP });
export const internetDown = () => ({ type: INTERNET_DOWN });
export const internetUp = () => ({ type: INTERNET_UP });