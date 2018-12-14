/** 
 *  Expo still requires presence of App.js file,
 *  here it just exports the .tsx app
 */

import App from './src/App';

// Allows to inspect Network requests

global.XMLHttpRequest = global.originalXMLHttpRequest
  ? global.originalXMLHttpRequest
  : global.XMLHttpRequest
global.FormData = global.originalFormData
  ? global.originalFormData
  : global.FormData

fetch

if (window.__FETCH_SUPPORT__) {
  // it's RNDebugger only to have
  window.__FETCH_SUPPORT__.blob = false
} else {
  global.Blob = global.originalBlob ? global.originalBlob : global.Blob
  global.FileReader = global.originalFileReader
    ? global.originalFileReader
    : global.FileReader
}

export default App