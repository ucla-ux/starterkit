'use strict'

/*
* Require the path module
*/
const path = require('path')

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create()

const mandelbrot = require('@frctl/mandelbrot') // require the Mandelbrot theme module

// create a new instance with custom config options
const myCustomisedTheme = mandelbrot({
  skin: 'blue'
  // any other theme configuration values here
})

fractal.web.theme(myCustomisedTheme) // tell Fractal to use the configured theme by default

/*
 * Give your project a title.
 */
fractal.set('project.title', 'UCLA Design System')

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'components'))

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'))

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'))

fractal.web.set('server.syncOptions', {
  open: true,
  browser: ['google chrome', 'firefox'],
  notify: true
})
