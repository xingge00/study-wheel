import { installDirectives as installCustom } from './custom/index.js'

export const setupDirectives = function (app) {
  installCustom(app)
}

export default setupDirectives
