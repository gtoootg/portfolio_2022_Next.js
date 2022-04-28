// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  i18n: {
    locales: ['ja', 'en'],
    defaultLocale: 'ja',
    localePath: path.resolve('public/locales'),
  },
}
