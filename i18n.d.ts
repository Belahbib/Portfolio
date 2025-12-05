import commonEn from './src/locales/common/en.json';

type Messages = typeof commonEn;

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}
}
