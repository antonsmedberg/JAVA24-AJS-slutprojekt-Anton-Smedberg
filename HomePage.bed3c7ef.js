// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"6KpB5":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "ec7f9789bed3c7ef";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"50v4t":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$6022 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$6022.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$6022.prelude(module);

try {
// src/pages/HomePage.jsx
/**
 * Huvudsidan för Scrum Board 🏠
 *
 * Styr hela appen:
 * - Firebase-kommunikation via hooks
 * - Uppgifts- och medlemshantering
 * - Navigation mellan Board, Uppgifter och Team
 * - Notifikationer för användarfeedback
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactRouter = require("react-router");
// UI-komponenter
var _scrumBoardJsx = require("../components/Board/ScrumBoard.jsx");
var _scrumBoardJsxDefault = parcelHelpers.interopDefault(_scrumBoardJsx);
var _taskListJsx = require("../components/Tasks/TaskList.jsx");
var _taskListJsxDefault = parcelHelpers.interopDefault(_taskListJsx);
var _memberListJsx = require("../components/Members/MemberList.jsx");
var _memberListJsxDefault = parcelHelpers.interopDefault(_memberListJsx);
var _notificationJsx = require("../components/UI/Notification.jsx");
var _notificationJsxDefault = parcelHelpers.interopDefault(_notificationJsx);
var _databaseSeederJsx = require("../components/Admin/DatabaseSeeder.jsx");
var _databaseSeederJsxDefault = parcelHelpers.interopDefault(_databaseSeederJsx);
var _buttonJsx = require("../components/UI/Button.jsx");
var _buttonJsxDefault = parcelHelpers.interopDefault(_buttonJsx);
var _iconsJsx = require("../components/UI/Icons.jsx");
// Firebase-hooks
var _useMembersJsx = require("../hooks/useMembers.jsx"); // Teamhantering
var _useMembersJsxDefault = parcelHelpers.interopDefault(_useMembersJsx);
var _useOptimizedTasksJsx = require("../hooks/useOptimizedTasks.jsx"); // Uppgiftshantering
var _useOptimizedTasksJsxDefault = parcelHelpers.interopDefault(_useOptimizedTasksJsx);
var _useAuthJsx = require("../hooks/useAuth.jsx"); // Autentisering
// Styling för att göra allt snyggt
var _homePageCss = require("../styles/pages/HomePage.css");
var _databaseSeederCss = require("../styles/components/DatabaseSeeder.css");
var _s = $RefreshSig$();
const HomePage = ()=>{
    _s();
    // Håller koll på vilken flik som är aktiv och vad som händer
    const [activeTab, setActiveTab] = (0, _react.useState)("board"); // Vilken vy ser vi just nu?
    const [notification, setNotification] = (0, _react.useState)(null); // Meddelanden till användaren
    // Mina autentiseringsverktyg - vem är inloggad och hur loggar vi ut?
    const { currentUser, logout, deleteCurrentUser } = (0, _useAuthJsx.useAuth)();
    const navigate = (0, _reactRouter.useNavigate)();
    /**
   * Mina tre favoritområden inom webbutveckling 💻
   *
   * Som en utvecklare ser jag webbutveckling i tre delar:
   * - Frontend: Det vackra som användarna ser och klickar på
   * - Backend: Den smarta logiken som gör att allt fungerar
   * - UX: Konsten att göra allt intuitivt och användarvänligt
   */ const myTeamSkillAreas = [
        "frontend",
        "backend",
        "ux"
    ];
    /**
   * Hook för teamhantering
   *
   * Hanterar all data och funktionalitet relaterad till teammedlemmar:
   * - Medlemslista
   * - Laddningsstatus
   * - Felhantering
   * - CRUD-operationer för medlemmar
   */ const { members, loading: membersLoading, error: membersError, addMember, deleteMember } = (0, _useMembersJsxDefault.default)();
    /**
   * Optimerad uppgiftshantering
   *
   * Förbättringar: memoization, query-optimering, caching.
   */ const { tasks, loading: tasksLoading, error: tasksError, addTask, deleteTask, updateTaskStatus, assignTask } = (0, _useOptimizedTasksJsxDefault.default)({
        realtime: true,
        limit: 100
    });
    /**
   * Min personliga notifikationsassistent
   *
   * Som en vänlig kollega som tipsar om vad som händer i appen.
   * Dyker upp, säger sitt, och försvinner diskret efter 5 sekunder.
   *
   * @param {string} message - Vad som ska sägas till användaren
   * @param {string} type - Känslan i meddelandet (info, success, error)
   */ const tellUserWhatHappened = (message, type = "info")=>{
        // Visa meddelandet för användaren
        setNotification({
            message,
            type
        });
        // Försvinn automatiskt så användaren slipper stänga manuellt
        setTimeout(()=>{
            setNotification(null);
        }, 5000);
    };
    /**
   * Hanterar tillägg av teammedlem
   *
   * Lägger till en ny medlem och visar feedback om resultatet.
   * OPTIMERING: Memoizerad callback för bättre prestanda
   *
   * @param {Object} memberData - Medlemsdata från formuläret
   */ const welcomeNewTeammate = (0, _react.useCallback)(async (memberData)=>{
        // Lägg till den nya personen i teamet
        const result = await addMember(memberData);
        // Berätta för användaren hur det gick
        if (result.success) tellUserWhatHappened(`V\xe4lkommen ${memberData.name} till teamet! \u{1F389}`, "success");
        else tellUserWhatHappened(`Kunde inte l\xe4gga till ${memberData.name}: ${result.error}`, "error");
    }, [
        addMember
    ]);
    /**
   * Hanterar borttagning av teammedlem
   *
   * Tar bort en medlem och visar feedback om resultatet.
   * OPTIMERING: Memoizerad callback för bättre prestanda
   *
   * @param {string} memberId - ID för medlemmen som ska tas bort
   */ const sayGoodbyeToTeammate = (0, _react.useCallback)(async (memberId)=>{
        // Ta bort personen från teamet
        const result = await deleteMember(memberId);
        // Meddela användaren vad som hände
        if (result.success) tellUserWhatHappened("Teammedlem har l\xe4mnat projektet.", "success");
        else tellUserWhatHappened(`Kunde inte ta bort teammedlem: ${result.error}`, "error");
    }, [
        deleteMember
    ]);
    /**
   * Hanterar tillägg av uppgift
   *
   * Lägger till en ny uppgift och visar feedback om resultatet.
   * OPTIMERING: Memoizerad callback för bättre prestanda
   *
   * @param {Object} taskData - Uppgiftsdata från formuläret
   */ const createNewWorkItem = (0, _react.useCallback)(async (taskData)=>{
        // Skapa en ny uppgift i systemet
        const result = await addTask(taskData);
        // Berätta för användaren vad som hände
        if (result.success) tellUserWhatHappened(`Ny uppgift "${taskData.title}" \xe4r redo att tacklas! \u{1F4AA}`, "success");
        else tellUserWhatHappened(`Kunde inte skapa uppgift: ${result.error}`, "error");
    }, [
        addTask
    ]);
    /**
   * Hanterar statusändring för uppgift
   *
   * Uppdaterar en uppgifts status och visar feedback om resultatet.
   * OPTIMERING: Memoizerad callback för bättre prestanda
   *
   * @param {string} taskId - Uppgiftens ID
   * @param {string} newStatus - Ny status (Nytt/Pågående/Klar)
   */ const moveTaskToNewColumn = (0, _react.useCallback)(async (taskId, newStatus)=>{
        // Flytta uppgiften till rätt kolumn på tavlan
        const result = await updateTaskStatus(taskId, newStatus);
        // Låt användaren veta vad som hände
        if (result.success) tellUserWhatHappened(`Uppgift flyttad till "${newStatus}" - bra jobbat! \u{1F3AF}`, "success");
        else tellUserWhatHappened(`Kunde inte flytta uppgift: ${result.error}`, "error");
    }, [
        updateTaskStatus
    ]);
    /**
   * Hanterar tilldelning av uppgift
   *
   * Tilldelar en uppgift till en teammedlem eller tar bort tilldelning.
   * Visar feedback om resultatet.
   * OPTIMERING: Memoizerad callback för bättre prestanda
   *
   * @param {string} taskId - Uppgiftens ID
   * @param {string|null} memberId - Medlemmens ID eller null
   * @param {string|null} memberName - Medlemmens namn för visning
   */ const assignWorkToTeammate = (0, _react.useCallback)(async (taskId, memberId, memberName)=>{
        // Ge uppgiften till rätt person i teamet
        const result = await assignTask(taskId, memberId, memberName);
        // Berätta vad som hände
        if (result.success) {
            if (memberId) tellUserWhatHappened(`${memberName} tar nu hand om uppgiften! \u{1F44D}`, "success");
            else tellUserWhatHappened("Uppgiften \xe4r nu ledig f\xf6r vem som helst.", "info");
        } else tellUserWhatHappened(`Kunde inte tilldela uppgift: ${result.error}`, "error");
    }, [
        assignTask
    ]);
    /**
   * Hanterar borttagning av uppgift
   *
   * Tar bort en uppgift permanent från databasen och
   * visar feedback om resultatet.
   * OPTIMERING: Memoizerad callback för bättre prestanda
   *
   * @param {string} taskId - Uppgiftens ID
   */ const removeTaskCompletely = (0, _react.useCallback)(async (taskId)=>{
        // Ta bort uppgiften helt från systemet
        const result = await deleteTask(taskId);
        // Meddela användaren resultatet
        if (result.success) tellUserWhatHappened("Uppgift borttagen - som om den aldrig funnits! \u2728", "success");
        else tellUserWhatHappened(`Kunde inte ta bort uppgift: ${result.error}`, "error");
    }, [
        deleteTask
    ]);
    /**
   * Hanterar utloggning
   *
   * Städar upp efter anonyma användare och skickar alla tillbaka till login.
   */ const handleLogout = async ()=>{
        try {
            // För anonyma användare: ta bort dem från Firebase först
            if (currentUser?.isAnonymous) {
                console.log("St\xe4dar upp anonym anv\xe4ndare:", currentUser.uid);
                try {
                    const deleteResult = await deleteCurrentUser();
                    if (deleteResult.success) {
                        console.log("Anv\xe4ndare borttagen! \uD83E\uDDF9");
                        navigate("/login");
                        return;
                    } else // Om borttagning misslyckades, fortsätt med vanlig utloggning
                    console.warn("Kunde inte ta bort anv\xe4ndaren:", deleteResult.error);
                } catch (error) {
                    console.error("Fel vid st\xe4dning:", error);
                }
            }
            // Vanlig utloggning
            const result = await logout();
            if (result.success) navigate("/login");
            else tellUserWhatHappened("Kunde inte logga ut. F\xf6rs\xf6k igen.", "error");
        } catch (error) {
            tellUserWhatHappened("Ett fel uppstod vid utloggning.", "error");
        }
    };
    /**
   * Visar felmeddelanden vid datahämtningsfel
   *
   * Övervakar felstatus och visar notifikationer när
   * fel uppstår vid hämtning av data.
   */ (0, _react.useEffect)(()=>{
        // Berätta för användaren om något gick fel med teamdata
        if (membersError) tellUserWhatHappened(`Problem med att h\xe4mta teammedlemmar: ${membersError}`, "error");
        // Berätta för användaren om något gick fel med uppgiftsdata
        if (tasksError) tellUserWhatHappened(`Problem med att h\xe4mta uppgifter: ${tasksError}`, "error");
    }, [
        membersError,
        tasksError
    ]); // Körs när fel uppstår
    /**
   * Renderar applikationens huvudgränssnitt
   *
   * Bygger upp UI med header, navigation, innehåll och notifikationer
   */ return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "home-page",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("header", {
                className: "app-header",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                        children: "Scrum Board"
                    }, void 0, false, {
                        fileName: "src/pages/HomePage.jsx",
                        lineNumber: 359,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "user-controls",
                        children: currentUser?.isAnonymous ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "user-profile",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "user-avatar",
                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _iconsJsx.UserIcon), {
                                        size: 18,
                                        color: "#3b82f6"
                                    }, void 0, false, {
                                        fileName: "src/pages/HomePage.jsx",
                                        lineNumber: 366,
                                        columnNumber: 17
                                    }, undefined)
                                }, void 0, false, {
                                    fileName: "src/pages/HomePage.jsx",
                                    lineNumber: 365,
                                    columnNumber: 15
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "user-info",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                            className: "user-name",
                                            children: "Anonym anv\xe4ndare"
                                        }, void 0, false, {
                                            fileName: "src/pages/HomePage.jsx",
                                            lineNumber: 369,
                                            columnNumber: 17
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                            className: "user-status",
                                            children: "Tempor\xe4r session"
                                        }, void 0, false, {
                                            fileName: "src/pages/HomePage.jsx",
                                            lineNumber: 370,
                                            columnNumber: 17
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/pages/HomePage.jsx",
                                    lineNumber: 368,
                                    columnNumber: 15
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonJsxDefault.default), {
                                    onClick: handleLogout,
                                    variant: "outline",
                                    size: "small",
                                    className: "logout-button",
                                    iconRight: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _iconsJsx.LogoutIcon), {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "src/pages/HomePage.jsx",
                                        lineNumber: 377,
                                        columnNumber: 28
                                    }, void 0),
                                    "aria-label": "Logga ut",
                                    children: "Avsluta"
                                }, void 0, false, {
                                    fileName: "src/pages/HomePage.jsx",
                                    lineNumber: 372,
                                    columnNumber: 15
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/HomePage.jsx",
                            lineNumber: 364,
                            columnNumber: 13
                        }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "user-profile",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "user-avatar",
                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _iconsJsx.UserIcon), {
                                        size: 18,
                                        color: "#3b82f6"
                                    }, void 0, false, {
                                        fileName: "src/pages/HomePage.jsx",
                                        lineNumber: 386,
                                        columnNumber: 17
                                    }, undefined)
                                }, void 0, false, {
                                    fileName: "src/pages/HomePage.jsx",
                                    lineNumber: 385,
                                    columnNumber: 15
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "user-info",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                            className: "user-name",
                                            children: currentUser?.email
                                        }, void 0, false, {
                                            fileName: "src/pages/HomePage.jsx",
                                            lineNumber: 389,
                                            columnNumber: 17
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                            className: "user-status",
                                            children: "Inloggad"
                                        }, void 0, false, {
                                            fileName: "src/pages/HomePage.jsx",
                                            lineNumber: 390,
                                            columnNumber: 17
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/pages/HomePage.jsx",
                                    lineNumber: 388,
                                    columnNumber: 15
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonJsxDefault.default), {
                                    onClick: handleLogout,
                                    variant: "outline",
                                    size: "small",
                                    className: "logout-button",
                                    iconRight: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _iconsJsx.LogoutIcon), {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "src/pages/HomePage.jsx",
                                        lineNumber: 397,
                                        columnNumber: 28
                                    }, void 0),
                                    "aria-label": "Logga ut",
                                    children: "Logga ut"
                                }, void 0, false, {
                                    fileName: "src/pages/HomePage.jsx",
                                    lineNumber: 392,
                                    columnNumber: 15
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/HomePage.jsx",
                            lineNumber: 384,
                            columnNumber: 13
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/pages/HomePage.jsx",
                        lineNumber: 362,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/pages/HomePage.jsx",
                lineNumber: 358,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("nav", {
                className: "app-tabs",
                "aria-label": "Application Navigation",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                        className: `tab-button ${activeTab === "board" ? "active" : ""}`,
                        onClick: ()=>setActiveTab("board"),
                        "aria-selected": activeTab === "board",
                        role: "tab",
                        children: "Board"
                    }, void 0, false, {
                        fileName: "src/pages/HomePage.jsx",
                        lineNumber: 410,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                        className: `tab-button ${activeTab === "tasks" ? "active" : ""}`,
                        onClick: ()=>setActiveTab("tasks"),
                        "aria-selected": activeTab === "tasks",
                        role: "tab",
                        children: "Uppgifter"
                    }, void 0, false, {
                        fileName: "src/pages/HomePage.jsx",
                        lineNumber: 420,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                        className: `tab-button ${activeTab === "members" ? "active" : ""}`,
                        onClick: ()=>setActiveTab("members"),
                        "aria-selected": activeTab === "members",
                        role: "tab",
                        children: "Team"
                    }, void 0, false, {
                        fileName: "src/pages/HomePage.jsx",
                        lineNumber: 430,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/pages/HomePage.jsx",
                lineNumber: 408,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("main", {
                className: "app-content",
                role: "tabpanel",
                "aria-live": "polite",
                children: [
                    activeTab === "board" && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _scrumBoardJsxDefault.default), {
                        tasks: tasks,
                        members: members,
                        onAddTask: createNewWorkItem,
                        onUpdateTaskStatus: moveTaskToNewColumn,
                        onAssignTask: assignWorkToTeammate,
                        onDeleteTask: removeTaskCompletely,
                        categories: myTeamSkillAreas,
                        isLoading: tasksLoading || membersLoading
                    }, void 0, false, {
                        fileName: "src/pages/HomePage.jsx",
                        lineNumber: 444,
                        columnNumber: 11
                    }, undefined),
                    activeTab === "tasks" && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _taskListJsxDefault.default), {
                        tasks: tasks,
                        members: members,
                        onAddTask: createNewWorkItem,
                        onUpdateTaskStatus: moveTaskToNewColumn,
                        onAssignTask: assignWorkToTeammate,
                        onDeleteTask: removeTaskCompletely,
                        categories: myTeamSkillAreas,
                        isLoading: tasksLoading || membersLoading
                    }, void 0, false, {
                        fileName: "src/pages/HomePage.jsx",
                        lineNumber: 458,
                        columnNumber: 11
                    }, undefined),
                    activeTab === "members" && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _memberListJsxDefault.default), {
                        members: members,
                        onAddMember: welcomeNewTeammate,
                        onDeleteMember: sayGoodbyeToTeammate,
                        roles: myTeamSkillAreas,
                        isLoading: membersLoading
                    }, void 0, false, {
                        fileName: "src/pages/HomePage.jsx",
                        lineNumber: 472,
                        columnNumber: 11
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/pages/HomePage.jsx",
                lineNumber: 441,
                columnNumber: 7
            }, undefined),
            notification && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _notificationJsxDefault.default), {
                message: notification.message,
                type: notification.type,
                onClose: ()=>setNotification(null)
            }, void 0, false, {
                fileName: "src/pages/HomePage.jsx",
                lineNumber: 484,
                columnNumber: 9
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _databaseSeederJsxDefault.default), {
                onSuccess: tellUserWhatHappened
            }, void 0, false, {
                fileName: "src/pages/HomePage.jsx",
                lineNumber: 492,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/pages/HomePage.jsx",
        lineNumber: 356,
        columnNumber: 5
    }, undefined);
};
_s(HomePage, "hxy31BQEOPzZNCFlV6+hTYerlYc=", false, function() {
    return [
        (0, _useAuthJsx.useAuth),
        (0, _reactRouter.useNavigate),
        (0, _useMembersJsxDefault.default),
        (0, _useOptimizedTasksJsxDefault.default)
    ];
});
_c = HomePage;
exports.default = HomePage;
var _c;
$RefreshReg$(_c, "HomePage");

  $parcel$ReactRefreshHelpers$6022.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"dVPUn","react":"jMk1U","react-router":"2jawN","../components/Board/ScrumBoard.jsx":"kiuW8","../components/Tasks/TaskList.jsx":"hJu9W","../components/Members/MemberList.jsx":"gvzrs","../components/UI/Notification.jsx":"jTOrB","../components/Admin/DatabaseSeeder.jsx":"ercYS","../components/UI/Button.jsx":"1OGue","../components/UI/Icons.jsx":"hWwJl","../hooks/useMembers.jsx":"56QAy","../hooks/useOptimizedTasks.jsx":"bbKwt","../hooks/useAuth.jsx":"21c5v","../styles/pages/HomePage.css":"83jNC","../styles/components/DatabaseSeeder.css":"4owqk","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"7h6Pi"}],"kiuW8":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$e749 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$e749.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$e749.prelude(module);

try {
// src/components/Board/ScrumBoard.jsx
/**
 * Min digitala kanban-tavla - hjärtat i hela appen!
 *
 * Som en fysisk whiteboard fast bättre - här ser du alla uppgifter
 * sorterade i tre kolumner som visar exakt var allt befinner sig.
 * Uppdateras live så alla i teamet ser samma sak samtidigt.
 *
 * Varför jag älskar den här tavlan:
 * - Ser direkt vad som händer i projektet (inga överraskningar!)
 * - Upptäcker flaskhalsar innan de blir problem
 * - Perfekt för morgonmöten - "vad gör vi idag?"
 * - Alla förstår läget utan långa förklaringar
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _taskCardJsx = require("../Tasks/TaskCard.jsx");
var _taskCardJsxDefault = parcelHelpers.interopDefault(_taskCardJsx);
var _buttonJsx = require("../UI/Button.jsx");
var _buttonJsxDefault = parcelHelpers.interopDefault(_buttonJsx);
var _modalJsx = require("../UI/Modal.jsx");
var _modalJsxDefault = parcelHelpers.interopDefault(_modalJsx);
var _addTaskFormJsx = require("../Tasks/AddTaskForm.jsx");
var _addTaskFormJsxDefault = parcelHelpers.interopDefault(_addTaskFormJsx);
var _filterUtilsJsx = require("../../utils/filterUtils.jsx");
var _scrumBoardCss = require("../../styles/components/ScrumBoard.css");
var _s = $RefreshSig$();
const ScrumBoard = ({ tasks, members, onAddTask, onUpdateTaskStatus, onAssignTask, onDeleteTask, categories = [
    "frontend",
    "backend",
    "ux"
], isLoading = false })=>{
    _s();
    const [showingAddTaskForm, setShowingAddTaskForm] = (0, _react.useState)(false);
    /**
   * Sorterar uppgifter i kolumner
   *
   * OPTIMERING: Memoizerad för bättre prestanda
   */ const { freshTasks, ongoingWork, finishedStuff } = (0, _react.useMemo)(()=>{
        // Ta bort arkiverade uppgifter
        const activeWorkItems = (0, _filterUtilsJsx.filterOutArchived)(tasks);
        // Sortera i tre kolumner
        return {
            freshTasks: (0, _filterUtilsJsx.filterByStatus)(activeWorkItems, "Nytt"),
            ongoingWork: (0, _filterUtilsJsx.filterByStatus)(activeWorkItems, "P\xe5g\xe5ende"),
            finishedStuff: (0, _filterUtilsJsx.filterByStatus)(activeWorkItems, "Klar")
        };
    }, [
        tasks
    ]);
    // När någon skapar en ny uppgift
    // OPTIMERING: Memoizerad callback för bättre prestanda
    const createTaskAndCloseForm = (0, _react.useCallback)((taskData)=>{
        onAddTask(taskData); // Skicka upp till huvudappen
        setShowingAddTaskForm(false); // Stäng formuläret
    }, [
        onAddTask
    ]);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "scrum-board-container",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "board-header",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                        children: "Scrum Board"
                    }, void 0, false, {
                        fileName: "src/components/Board/ScrumBoard.jsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonJsxDefault.default), {
                        onClick: ()=>setShowingAddTaskForm(true),
                        variant: "primary",
                        children: "L\xe4gg till uppgift"
                    }, void 0, false, {
                        fileName: "src/components/Board/ScrumBoard.jsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/Board/ScrumBoard.jsx",
                lineNumber: 64,
                columnNumber: 7
            }, undefined),
            isLoading ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "loading-indicator",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                    children: "Laddar uppgifter"
                }, void 0, false, {
                    fileName: "src/components/Board/ScrumBoard.jsx",
                    lineNumber: 73,
                    columnNumber: 11
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/Board/ScrumBoard.jsx",
                lineNumber: 72,
                columnNumber: 9
            }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "board-columns",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "board-column",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "column-header",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                        children: "Nya uppgifter"
                                    }, void 0, false, {
                                        fileName: "src/components/Board/ScrumBoard.jsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        className: "task-count",
                                        children: freshTasks.length
                                    }, void 0, false, {
                                        fileName: "src/components/Board/ScrumBoard.jsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/Board/ScrumBoard.jsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "column-content",
                                children: freshTasks.length === 0 ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "empty-column",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                            children: "Inga nya uppgifter"
                                        }, void 0, false, {
                                            fileName: "src/components/Board/ScrumBoard.jsx",
                                            lineNumber: 85,
                                            columnNumber: 19
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonJsxDefault.default), {
                                            onClick: ()=>setShowingAddTaskForm(true),
                                            variant: "secondary",
                                            size: "small",
                                            children: "L\xe4gg till uppgift"
                                        }, void 0, false, {
                                            fileName: "src/components/Board/ScrumBoard.jsx",
                                            lineNumber: 86,
                                            columnNumber: 19
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/components/Board/ScrumBoard.jsx",
                                    lineNumber: 84,
                                    columnNumber: 17
                                }, undefined) : freshTasks.map((task)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _taskCardJsxDefault.default), {
                                        task: task,
                                        members: members,
                                        onUpdateStatus: onUpdateTaskStatus,
                                        onAssignTask: onAssignTask,
                                        onDeleteTask: onDeleteTask
                                    }, task.id, false, {
                                        fileName: "src/components/Board/ScrumBoard.jsx",
                                        lineNumber: 96,
                                        columnNumber: 19
                                    }, undefined))
                            }, void 0, false, {
                                fileName: "src/components/Board/ScrumBoard.jsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/Board/ScrumBoard.jsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "board-column",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "column-header",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                        children: "P\xe5g\xe5ende"
                                    }, void 0, false, {
                                        fileName: "src/components/Board/ScrumBoard.jsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        className: "task-count",
                                        children: ongoingWork.length
                                    }, void 0, false, {
                                        fileName: "src/components/Board/ScrumBoard.jsx",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/Board/ScrumBoard.jsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "column-content",
                                children: ongoingWork.length === 0 ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "empty-column",
                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        children: "Inga p\xe5g\xe5ende uppgifter"
                                    }, void 0, false, {
                                        fileName: "src/components/Board/ScrumBoard.jsx",
                                        lineNumber: 117,
                                        columnNumber: 19
                                    }, undefined)
                                }, void 0, false, {
                                    fileName: "src/components/Board/ScrumBoard.jsx",
                                    lineNumber: 116,
                                    columnNumber: 17
                                }, undefined) : ongoingWork.map((task)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _taskCardJsxDefault.default), {
                                        task: task,
                                        members: members,
                                        onUpdateStatus: onUpdateTaskStatus,
                                        onAssignTask: onAssignTask,
                                        onDeleteTask: onDeleteTask
                                    }, task.id, false, {
                                        fileName: "src/components/Board/ScrumBoard.jsx",
                                        lineNumber: 121,
                                        columnNumber: 19
                                    }, undefined))
                            }, void 0, false, {
                                fileName: "src/components/Board/ScrumBoard.jsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/Board/ScrumBoard.jsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "board-column",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "column-header",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                        children: "Klara"
                                    }, void 0, false, {
                                        fileName: "src/components/Board/ScrumBoard.jsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        className: "task-count",
                                        children: finishedStuff.length
                                    }, void 0, false, {
                                        fileName: "src/components/Board/ScrumBoard.jsx",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/Board/ScrumBoard.jsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "column-content",
                                children: finishedStuff.length === 0 ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "empty-column",
                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        children: "Inga klara uppgifter"
                                    }, void 0, false, {
                                        fileName: "src/components/Board/ScrumBoard.jsx",
                                        lineNumber: 142,
                                        columnNumber: 19
                                    }, undefined)
                                }, void 0, false, {
                                    fileName: "src/components/Board/ScrumBoard.jsx",
                                    lineNumber: 141,
                                    columnNumber: 17
                                }, undefined) : finishedStuff.map((task)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _taskCardJsxDefault.default), {
                                        task: task,
                                        members: members,
                                        onUpdateStatus: onUpdateTaskStatus,
                                        onAssignTask: onAssignTask,
                                        onDeleteTask: onDeleteTask
                                    }, task.id, false, {
                                        fileName: "src/components/Board/ScrumBoard.jsx",
                                        lineNumber: 146,
                                        columnNumber: 19
                                    }, undefined))
                            }, void 0, false, {
                                fileName: "src/components/Board/ScrumBoard.jsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/Board/ScrumBoard.jsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/Board/ScrumBoard.jsx",
                lineNumber: 76,
                columnNumber: 9
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _modalJsxDefault.default), {
                isOpen: showingAddTaskForm,
                onClose: ()=>setShowingAddTaskForm(false),
                title: "L\xe4gg till uppgift",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _addTaskFormJsxDefault.default), {
                    onAddTask: createTaskAndCloseForm,
                    categories: categories
                }, void 0, false, {
                    fileName: "src/components/Board/ScrumBoard.jsx",
                    lineNumber: 167,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/Board/ScrumBoard.jsx",
                lineNumber: 162,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/Board/ScrumBoard.jsx",
        lineNumber: 63,
        columnNumber: 5
    }, undefined);
};
_s(ScrumBoard, "o8B54CRKEw03DdayfEGQyzvRz4E=");
_c = ScrumBoard;
// OPTIMERING: Memoizerad komponent för att undvika onödiga re-renders
exports.default = /*#__PURE__*/ _c1 = (0, _react.memo)(ScrumBoard);
var _c, _c1;
$RefreshReg$(_c, "ScrumBoard");
$RefreshReg$(_c1, "%default%");

  $parcel$ReactRefreshHelpers$e749.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"dVPUn","react":"jMk1U","../Tasks/TaskCard.jsx":"bTu6s","../UI/Button.jsx":"1OGue","../UI/Modal.jsx":"eQAya","../Tasks/AddTaskForm.jsx":"akRu0","../../utils/filterUtils.jsx":"eco7z","../../styles/components/ScrumBoard.css":"6b71a","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"7h6Pi"}],"bTu6s":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$e94b = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$e94b.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$e94b.prelude(module);

try {
// src/components/Tasks/TaskCard.jsx
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _buttonJsx = require("../UI/Button.jsx");
var _buttonJsxDefault = parcelHelpers.interopDefault(_buttonJsx);
var _modalJsx = require("../UI/Modal.jsx");
var _modalJsxDefault = parcelHelpers.interopDefault(_modalJsx);
var _dateUtilsJsx = require("../../utils/dateUtils.jsx");
var _taskCardCss = require("../../styles/components/TaskCard.css");
var _s = $RefreshSig$();
/**
 * Uppgiftskort - visuell representation av en uppgift
 *
 * Visar en uppgift som ett interaktivt kort med all relevant information.
 * Fungerar som en digital post-it med möjlighet att:
 * - Visa uppgiftens status, kategori och tilldelning
 * - Öppna detaljvy med fullständig information
 * - Ändra status (flytta mellan kolumner)
 * - Tilldela uppgiften till rätt teammedlem
 * - Ta bort uppgiften från systemet
 *
 * @param {Object} task - Uppgiftsdata att visa
 * @param {Array} members - Tillgängliga teammedlemmar
 * @param {Function} onUpdateStatus - Callback för statusändring
 * @param {Function} onAssignTask - Callback för tilldelning
 * @param {Function} onDeleteTask - Callback för borttagning
 */ const TaskCard = ({ task, members, onUpdateStatus, onAssignTask, onDeleteTask })=>{
    _s();
    // States för modal och tilldelning
    const [showingTaskDetails, setShowingTaskDetails] = (0, _react.useState)(false);
    const [askingForDeleteConfirmation, setAskingForDeleteConfirmation] = (0, _react.useState)(false);
    const [chosenTeammateId, setChosenTeammateId] = (0, _react.useState)("");
    /**
   * Hittar personer med rätt kompetens
   *
   * OPTIMERING: Memoizerad för bättre prestanda
   */ const qualifiedTeammates = (0, _react.useMemo)(()=>members.filter((teammate)=>teammate.role === task.category), [
        members,
        task.category
    ]);
    /**
   * Min färgkodning för var uppgiften befinner sig
   *
   * Som trafikljus för arbetsflödet - blått för "vänta",
   * orange för "kör", grönt för "klart". Enkelt att förstå!
   */ const getWorkflowColor = (status)=>{
        switch(status.toLowerCase()){
            case "nytt":
                return "status-new";
            case "p\xe5g\xe5ende":
                return "status-in-progress";
            case "klar":
                return "status-completed";
            default:
                return "";
        }
    };
    /**
   * Min färgkodning för olika typer av arbete
   *
   * Varje kompetensområde får sin egen färg så man snabbt
   * ser vad som är vad på tavlan. Som att sortera LEGO!
   */ const getSkillAreaColor = (category)=>{
        switch(category.toLowerCase()){
            case "frontend":
                return "category-frontend";
            case "backend":
                return "category-backend";
            case "ux":
                return "category-ux";
            default:
                return "category-default";
        }
    };
    /**
   * Flyttar uppgiften framåt i arbetsflödet
   *
   * Som att trycka på "nästa"-knappen i en process.
   * Stänger också detaljvyn så man ser resultatet direkt.
   *
   * OPTIMERING: Memoizerad callback för att undvika onödiga re-renders
   */ const moveTaskForward = (0, _react.useCallback)((newStatus)=>{
        onUpdateStatus(task.id, newStatus);
        setShowingTaskDetails(false);
    }, [
        onUpdateStatus,
        task.id
    ]);
    /**
   * Ger jobbet till rätt person
   *
   * Hittar den valda personen och säger "det här är ditt nu!".
   * Stänger sedan detaljvyn så man ser förändringen.
   *
   * OPTIMERING: Memoizerad callback för bättre prestanda
   */ const giveTaskToChosen = (0, _react.useCallback)(()=>{
        if (!chosenTeammateId) return;
        const chosenPerson = members.find((m)=>m.id === chosenTeammateId);
        if (chosenPerson) {
            onAssignTask(task.id, chosenPerson.id, chosenPerson.name);
            setShowingTaskDetails(false);
        }
    }, [
        chosenTeammateId,
        members,
        onAssignTask,
        task.id
    ]);
    /**
   * Raderar uppgiften för alltid
   *
   * Som att kasta något i papperskorgen och tömma den.
   * Stänger alla öppna fönster efteråt.
   *
   * OPTIMERING: Memoizerad callback för bättre prestanda
   */ const eraseTaskForever = (0, _react.useCallback)(()=>{
        onDeleteTask(task.id);
        setAskingForDeleteConfirmation(false);
        setShowingTaskDetails(false);
    }, [
        onDeleteTask,
        task.id
    ]);
    /**
   * Renderar uppgiftskortet med alla dess komponenter
   *
   * Består av tre huvuddelar:
   * - Kompakt kort för visning på tavlan
   * - Detaljmodal med fullständig information
   * - Bekräftelsemodal för borttagning
   */ return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "task-card",
                onClick: ()=>setShowingTaskDetails(true),
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "task-header",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                className: `task-status ${getWorkflowColor(task.status)}`,
                                children: task.status
                            }, void 0, false, {
                                fileName: "src/components/Tasks/TaskCard.jsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                className: `task-category ${getSkillAreaColor(task.category)}`,
                                children: task.category
                            }, void 0, false, {
                                fileName: "src/components/Tasks/TaskCard.jsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/Tasks/TaskCard.jsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                        className: "task-title",
                        children: task.title
                    }, void 0, false, {
                        fileName: "src/components/Tasks/TaskCard.jsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, undefined),
                    task.description && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        className: "task-description",
                        children: task.description.length > 100 ? `${task.description.substring(0, 100)}...` : task.description
                    }, void 0, false, {
                        fileName: "src/components/Tasks/TaskCard.jsx",
                        lineNumber: 161,
                        columnNumber: 11
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "task-meta",
                        children: [
                            task.assignedToMemberName ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "task-assigned",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        className: "meta-label",
                                        children: "Tilldelad:"
                                    }, void 0, false, {
                                        fileName: "src/components/Tasks/TaskCard.jsx",
                                        lineNumber: 173,
                                        columnNumber: 15
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        className: "meta-value",
                                        children: task.assignedToMemberName
                                    }, void 0, false, {
                                        fileName: "src/components/Tasks/TaskCard.jsx",
                                        lineNumber: 174,
                                        columnNumber: 15
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/Tasks/TaskCard.jsx",
                                lineNumber: 172,
                                columnNumber: 13
                            }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "task-assigned",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        className: "meta-label",
                                        children: "Tilldelad:"
                                    }, void 0, false, {
                                        fileName: "src/components/Tasks/TaskCard.jsx",
                                        lineNumber: 178,
                                        columnNumber: 15
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        className: "meta-value not-assigned",
                                        children: "Ej tilldelad"
                                    }, void 0, false, {
                                        fileName: "src/components/Tasks/TaskCard.jsx",
                                        lineNumber: 179,
                                        columnNumber: 15
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/Tasks/TaskCard.jsx",
                                lineNumber: 177,
                                columnNumber: 13
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "task-created",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        className: "meta-label",
                                        children: "Skapad:"
                                    }, void 0, false, {
                                        fileName: "src/components/Tasks/TaskCard.jsx",
                                        lineNumber: 185,
                                        columnNumber: 13
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        className: "meta-value",
                                        title: (0, _dateUtilsJsx.formatDate)(task.creationTimestamp),
                                        children: (0, _dateUtilsJsx.formatRelativeTime)(task.creationTimestamp)
                                    }, void 0, false, {
                                        fileName: "src/components/Tasks/TaskCard.jsx",
                                        lineNumber: 186,
                                        columnNumber: 13
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/Tasks/TaskCard.jsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/Tasks/TaskCard.jsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/Tasks/TaskCard.jsx",
                lineNumber: 145,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _modalJsxDefault.default), {
                isOpen: showingTaskDetails,
                onClose: ()=>setShowingTaskDetails(false),
                title: task.title,
                size: "medium",
                footer: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonJsxDefault.default), {
                            onClick: ()=>setAskingForDeleteConfirmation(true),
                            variant: "danger",
                            children: "Ta bort"
                        }, void 0, false, {
                            fileName: "src/components/Tasks/TaskCard.jsx",
                            lineNumber: 205,
                            columnNumber: 13
                        }, void 0),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            style: {
                                flex: 1
                            }
                        }, void 0, false, {
                            fileName: "src/components/Tasks/TaskCard.jsx",
                            lineNumber: 213,
                            columnNumber: 13
                        }, void 0),
                        task.status !== "Klar" && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonJsxDefault.default), {
                            onClick: ()=>moveTaskForward("Klar"),
                            variant: "success",
                            children: "Markera som klar"
                        }, void 0, false, {
                            fileName: "src/components/Tasks/TaskCard.jsx",
                            lineNumber: 217,
                            columnNumber: 15
                        }, void 0),
                        task.status === "Nytt" && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonJsxDefault.default), {
                            onClick: ()=>moveTaskForward("P\xe5g\xe5ende"),
                            variant: "primary",
                            children: "Starta uppgift"
                        }, void 0, false, {
                            fileName: "src/components/Tasks/TaskCard.jsx",
                            lineNumber: 224,
                            columnNumber: 15
                        }, void 0)
                    ]
                }, void 0, true),
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "task-details",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "task-detail-row",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                    className: "detail-label",
                                    children: "Status:"
                                }, void 0, false, {
                                    fileName: "src/components/Tasks/TaskCard.jsx",
                                    lineNumber: 237,
                                    columnNumber: 13
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                    className: `detail-value task-status ${getWorkflowColor(task.status)}`,
                                    children: task.status
                                }, void 0, false, {
                                    fileName: "src/components/Tasks/TaskCard.jsx",
                                    lineNumber: 238,
                                    columnNumber: 13
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "src/components/Tasks/TaskCard.jsx",
                            lineNumber: 236,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "task-detail-row",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                    className: "detail-label",
                                    children: "Kategori:"
                                }, void 0, false, {
                                    fileName: "src/components/Tasks/TaskCard.jsx",
                                    lineNumber: 249,
                                    columnNumber: 13
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                    className: `detail-value task-category ${getSkillAreaColor(task.category)}`,
                                    children: task.category
                                }, void 0, false, {
                                    fileName: "src/components/Tasks/TaskCard.jsx",
                                    lineNumber: 250,
                                    columnNumber: 13
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "src/components/Tasks/TaskCard.jsx",
                            lineNumber: 248,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "task-detail-row",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                    className: "detail-label",
                                    children: "Skapad:"
                                }, void 0, false, {
                                    fileName: "src/components/Tasks/TaskCard.jsx",
                                    lineNumber: 261,
                                    columnNumber: 13
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                    className: "detail-value",
                                    children: (0, _dateUtilsJsx.formatDate)(task.creationTimestamp)
                                }, void 0, false, {
                                    fileName: "src/components/Tasks/TaskCard.jsx",
                                    lineNumber: 262,
                                    columnNumber: 13
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "src/components/Tasks/TaskCard.jsx",
                            lineNumber: 260,
                            columnNumber: 11
                        }, undefined),
                        task.description && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "task-detail-description",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h4", {
                                    children: "Beskrivning"
                                }, void 0, false, {
                                    fileName: "src/components/Tasks/TaskCard.jsx",
                                    lineNumber: 270,
                                    columnNumber: 15
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                    children: task.description
                                }, void 0, false, {
                                    fileName: "src/components/Tasks/TaskCard.jsx",
                                    lineNumber: 271,
                                    columnNumber: 15
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "src/components/Tasks/TaskCard.jsx",
                            lineNumber: 269,
                            columnNumber: 13
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "task-assignment",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h4", {
                                    children: "Tilldelning"
                                }, void 0, false, {
                                    fileName: "src/components/Tasks/TaskCard.jsx",
                                    lineNumber: 277,
                                    columnNumber: 13
                                }, undefined),
                                task.assignedToMemberName ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "current-assignment",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                            children: [
                                                "Denna uppgift \xe4r tilldelad till:",
                                                " ",
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("strong", {
                                                    children: task.assignedToMemberName
                                                }, void 0, false, {
                                                    fileName: "src/components/Tasks/TaskCard.jsx",
                                                    lineNumber: 284,
                                                    columnNumber: 19
                                                }, undefined)
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/components/Tasks/TaskCard.jsx",
                                            lineNumber: 282,
                                            columnNumber: 17
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonJsxDefault.default), {
                                            onClick: ()=>onAssignTask(task.id, null, null),
                                            variant: "secondary",
                                            size: "small",
                                            children: "Ta bort tilldelning"
                                        }, void 0, false, {
                                            fileName: "src/components/Tasks/TaskCard.jsx",
                                            lineNumber: 286,
                                            columnNumber: 17
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/components/Tasks/TaskCard.jsx",
                                    lineNumber: 281,
                                    columnNumber: 15
                                }, undefined) : /* Inte tilldelad? Visa formulär för att välja person */ /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "assignment-form",
                                    children: qualifiedTeammates.length > 0 ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                                children: [
                                                    "Tilldela denna ",
                                                    task.category,
                                                    "-uppgift till en teammedlem med matchande roll:"
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/components/Tasks/TaskCard.jsx",
                                                lineNumber: 300,
                                                columnNumber: 21
                                            }, undefined),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                className: "assignment-controls",
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("select", {
                                                        value: chosenTeammateId,
                                                        onChange: (e)=>setChosenTeammateId(e.target.value),
                                                        children: [
                                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("option", {
                                                                value: "",
                                                                children: "V\xe4lj teammedlem"
                                                            }, void 0, false, {
                                                                fileName: "src/components/Tasks/TaskCard.jsx",
                                                                lineNumber: 309,
                                                                columnNumber: 25
                                                            }, undefined),
                                                            qualifiedTeammates.map((teammate)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("option", {
                                                                    value: teammate.id,
                                                                    children: teammate.name
                                                                }, teammate.id, false, {
                                                                    fileName: "src/components/Tasks/TaskCard.jsx",
                                                                    lineNumber: 311,
                                                                    columnNumber: 27
                                                                }, undefined))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "src/components/Tasks/TaskCard.jsx",
                                                        lineNumber: 305,
                                                        columnNumber: 23
                                                    }, undefined),
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonJsxDefault.default), {
                                                        onClick: giveTaskToChosen,
                                                        variant: "primary",
                                                        disabled: !chosenTeammateId,
                                                        children: "Tilldela"
                                                    }, void 0, false, {
                                                        fileName: "src/components/Tasks/TaskCard.jsx",
                                                        lineNumber: 316,
                                                        columnNumber: 23
                                                    }, undefined)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/components/Tasks/TaskCard.jsx",
                                                lineNumber: 304,
                                                columnNumber: 21
                                            }, undefined)
                                        ]
                                    }, void 0, true) : /* Inga personer med rätt kompetens? Visa ett meddelande */ /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "no-eligible-members",
                                        children: [
                                            "Det finns inga teammedlemmar med rollen ",
                                            task.category,
                                            " som kan tilldelas denna uppgift."
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/components/Tasks/TaskCard.jsx",
                                        lineNumber: 327,
                                        columnNumber: 19
                                    }, undefined)
                                }, void 0, false, {
                                    fileName: "src/components/Tasks/TaskCard.jsx",
                                    lineNumber: 296,
                                    columnNumber: 15
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "src/components/Tasks/TaskCard.jsx",
                            lineNumber: 276,
                            columnNumber: 11
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/components/Tasks/TaskCard.jsx",
                    lineNumber: 234,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/Tasks/TaskCard.jsx",
                lineNumber: 197,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _modalJsxDefault.default), {
                isOpen: askingForDeleteConfirmation,
                onClose: ()=>setAskingForDeleteConfirmation(false),
                title: "Bekr\xe4fta borttagning",
                footer: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonJsxDefault.default), {
                            onClick: ()=>setAskingForDeleteConfirmation(false),
                            variant: "secondary",
                            children: "Avbryt"
                        }, void 0, false, {
                            fileName: "src/components/Tasks/TaskCard.jsx",
                            lineNumber: 345,
                            columnNumber: 13
                        }, void 0),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonJsxDefault.default), {
                            onClick: eraseTaskForever,
                            variant: "danger",
                            children: "Ta bort"
                        }, void 0, false, {
                            fileName: "src/components/Tasks/TaskCard.jsx",
                            lineNumber: 351,
                            columnNumber: 13
                        }, void 0)
                    ]
                }, void 0, true),
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                    children: [
                        '\xc4r du s\xe4ker p\xe5 att du vill ta bort uppgiften "',
                        task.title,
                        '"? Uppgiften kommer att tas bort permanent fr\xe5n databasen och kan inte \xe5terst\xe4llas.'
                    ]
                }, void 0, true, {
                    fileName: "src/components/Tasks/TaskCard.jsx",
                    lineNumber: 357,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/Tasks/TaskCard.jsx",
                lineNumber: 339,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true);
};
_s(TaskCard, "MtaspvKly9FRDzge6bSMbFnhCjQ=");
_c = TaskCard;
// OPTIMERING: Memoizerad komponent för att undvika onödiga re-renders
// Komponenten renderas bara om när props faktiskt ändras
exports.default = /*#__PURE__*/ _c1 = (0, _react.memo)(TaskCard);
var _c, _c1;
$RefreshReg$(_c, "TaskCard");
$RefreshReg$(_c1, "%default%");

  $parcel$ReactRefreshHelpers$e94b.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"dVPUn","react":"jMk1U","../UI/Button.jsx":"1OGue","../UI/Modal.jsx":"eQAya","../../utils/dateUtils.jsx":"d7W7v","../../styles/components/TaskCard.css":"e1dZE","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"7h6Pi"}],"1OGue":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$e85f = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$e85f.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$e85f.prelude(module);

try {
// src/components/UI/Button.jsx
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _buttonCss = require("../../styles/components/Button.css");
/**
 * Universell knappkomponent 🔘
 *
 * Flexibel knapp med olika stilar och storlekar.
 * Stöder ikoner och fullbredd.
 *
 * @param {ReactNode} children - Knapptext
 * @param {Function} onClick - Klick-hanterare
 * @param {string} type - HTML-typ
 * @param {string} variant - Stil (primary/secondary/danger)
 * @param {string} size - Storlek (small/medium/large)
 * @param {boolean} disabled - Inaktiverad
 * @param {boolean} fullWidth - Full bredd
 * @param {ReactNode} iconLeft - Vänster ikon
 * @param {ReactNode} iconRight - Höger ikon
 * @param {string} className - Extra CSS-klasser
 */ const Button = ({ children, onClick, type = "button", variant = "primary", size = "medium", disabled = false, fullWidth = false, iconLeft = null, iconRight = null, className = "" })=>{
    // Kontrollerar om ikoner finns
    const hasIcon = iconLeft || iconRight;
    // Bygger CSS-klasser
    const buttonClasses = `
    button
    button-${variant}
    button-${size}
    ${fullWidth ? "button-full-width" : ""}
    ${hasIcon ? "button-with-icon" : ""}
    ${className}
  `.trim().replace(/\s+/g, " ");
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
        type: type,
        className: buttonClasses,
        onClick: onClick,
        disabled: disabled,
        "aria-disabled": disabled,
        children: [
            iconLeft && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                className: "button-icon-left",
                children: iconLeft
            }, void 0, false, {
                fileName: "src/components/UI/Button.jsx",
                lineNumber: 58,
                columnNumber: 20
            }, undefined),
            children,
            iconRight && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                className: "button-icon-right",
                children: iconRight
            }, void 0, false, {
                fileName: "src/components/UI/Button.jsx",
                lineNumber: 64,
                columnNumber: 21
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/UI/Button.jsx",
        lineNumber: 50,
        columnNumber: 5
    }, undefined);
};
_c = Button;
exports.default = Button;
var _c;
$RefreshReg$(_c, "Button");

  $parcel$ReactRefreshHelpers$e85f.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"dVPUn","react":"jMk1U","../../styles/components/Button.css":"3VI4Q","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"7h6Pi"}],"3VI4Q":[function() {},{}],"eQAya":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$c990 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$c990.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$c990.prelude(module);

try {
// src/components/UI/Modal.jsx
/**
 * Återanvändbar modalkomponent
 *
 * Flexibel dialog med React Portal.
 * Stöder olika storlekar, Escape-stängning,
 * förhindrar bakgrundsscrollning.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactDom = require("react-dom");
var _reactDomDefault = parcelHelpers.interopDefault(_reactDom);
var _modalCss = require("../../styles/components/Modal.css");
var _buttonJsx = require("./Button.jsx");
var _buttonJsxDefault = parcelHelpers.interopDefault(_buttonJsx);
var _s = $RefreshSig$();
const Modal = ({ isOpen, onClose, title, children, footer, size = "medium" })=>{
    _s();
    /**
   * Hanterar Escape-tangent och scrollning
   */ (0, _react.useEffect)(()=>{
        // Stäng med Escape
        const handleEscape = (e)=>{
            if (e.key === "Escape" && isOpen) onClose();
        };
        // Registrera event-lyssnare
        window.addEventListener("keydown", handleEscape);
        // Förhindra bakgrundsscrollning
        if (isOpen) document.body.style.overflow = "hidden";
        // Städa upp vid avmontering
        return ()=>{
            window.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "auto";
        };
    }, [
        isOpen,
        onClose
    ]);
    if (!isOpen) return null;
    /**
   * Förhindrar bubbling av klickhändelser
   */ const handleModalClick = (e)=>{
        e.stopPropagation();
    };
    // React Portal för korrekt rendering
    return /*#__PURE__*/ (0, _reactDomDefault.default).createPortal(/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "modal-overlay",
        onClick: onClose,
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
            className: `modal modal-${size}`,
            onClick: handleModalClick,
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "modal-header",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                            className: "modal-title",
                            children: title
                        }, void 0, false, {
                            fileName: "src/components/UI/Modal.jsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                            className: "modal-close",
                            onClick: onClose,
                            "aria-label": "St\xe4ng",
                            children: "\xd7"
                        }, void 0, false, {
                            fileName: "src/components/UI/Modal.jsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/components/UI/Modal.jsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "modal-content",
                    children: children
                }, void 0, false, {
                    fileName: "src/components/UI/Modal.jsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, undefined),
                footer && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "modal-footer",
                    children: footer
                }, void 0, false, {
                    fileName: "src/components/UI/Modal.jsx",
                    lineNumber: 74,
                    columnNumber: 20
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "src/components/UI/Modal.jsx",
            lineNumber: 61,
            columnNumber: 7
        }, undefined)
    }, void 0, false, {
        fileName: "src/components/UI/Modal.jsx",
        lineNumber: 59,
        columnNumber: 5
    }, undefined), document.body // Renderar i body för korrekt z-index
    );
};
_s(Modal, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Modal;
exports.default = Modal;
var _c;
$RefreshReg$(_c, "Modal");

  $parcel$ReactRefreshHelpers$c990.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"dVPUn","react":"jMk1U","react-dom":"i4X7T","../../styles/components/Modal.css":"3zsDM","./Button.jsx":"1OGue","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"7h6Pi"}],"3zsDM":[function() {},{}],"d7W7v":[function(require,module,exports,__globalThis) {
// src/utils/dateUtils.jsx
// Använder en enklare approach för att undvika Parcel-problem med date-fns
/**
 * Tidsfunktioner för användarvänliga datum
 *
 * Gör tidsstämplar begripliga med snygga format
 * och relativa texter som "2 timmar sedan".
 */ /**
 * Formaterar tidsstämpel till läsbart datum
 *
 * @param {number} timestamp - Tidsstämpel
 * @returns {string} Format: "2025-05-15 14:30"
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatDate", ()=>formatDate);
parcelHelpers.export(exports, "formatRelativeTime", ()=>formatRelativeTime);
const formatDate = (timestamp)=>{
    // Ingen tidsstämpel? Returnera tom sträng
    if (!timestamp) return "";
    // Skapa Date-objekt och formatera
    const date = new Date(timestamp);
    // Formatera med svenska format
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day} ${hours}:${minutes}`;
};
const formatRelativeTime = (timestamp)=>{
    // Ingen tidsstämpel? Returnera tom sträng
    if (!timestamp) return "";
    // Beräkna tidsskillnad
    const now = Date.now();
    const diff = now - timestamp;
    // Konvertera till läsbara enheter
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    // Välj lämplig text
    if (days > 0) // Singular/plural för dagar
    return `${days} ${days === 1 ? "dag" : "dagar"} sedan`;
    else if (hours > 0) // Singular/plural för timmar
    return `${hours} ${hours === 1 ? "timme" : "timmar"} sedan`;
    else if (minutes > 0) // Singular/plural för minuter
    return `${minutes} ${minutes === 1 ? "minut" : "minuter"} sedan`;
    else // Mycket nyligen
    return "Just nu";
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"e1dZE":[function() {},{}],"akRu0":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$0e9c = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$0e9c.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$0e9c.prelude(module);

try {
// src/components/Tasks/AddTaskForm.jsx
/**
 * Formulär för att skapa nya uppgifter
 *
 * Hanterar inmatning och validering av uppgiftsdata med:
 * - Obligatorisk titel för att identifiera uppgiften
 * - Val av kategori (frontend, backend, UX) för korrekt tilldelning
 * - Valfri beskrivning för ytterligare detaljer
 *
 * Validerar att nödvändiga fält är ifyllda innan uppgiften skapas
 * och skickas till Firebase via callback-funktionen.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _buttonJsx = require("../UI/Button.jsx");
var _buttonJsxDefault = parcelHelpers.interopDefault(_buttonJsx);
var _addTaskFormCss = require("../../styles/components/AddTaskForm.css");
var _s = $RefreshSig$();
const AddTaskForm = ({ onAddTask, categories = [
    "frontend",
    "backend",
    "ux"
] })=>{
    _s();
    const [title, setTitle] = (0, _react.useState)("");
    const [category, setCategory] = (0, _react.useState)(categories[0]);
    const [description, setDescription] = (0, _react.useState)("");
    const [error, setError] = (0, _react.useState)("");
    /**
   * Hanterar formulärinlämning
   *
   * Processen vid inlämning:
   * 1. Validerar obligatoriska fält (titel och kategori)
   * 2. Skapar ett nytt uppgiftsobjekt med inmatad data
   * 3. Skickar uppgiften till föräldrakomponenten och återställer formuläret
   *
   * @param {Event} e - Formulärets submit-event
   */ const handleSubmit = (e)=>{
        // Stoppar webbläsaren från att ladda om sidan
        e.preventDefault();
        // Validera titel (obligatorisk)
        if (!title.trim()) {
            setError("Du m\xe5ste ge uppgiften en titel!");
            return;
        }
        // Validera kategori (obligatorisk)
        if (!category) {
            setError("Du m\xe5ste v\xe4lja en kategori!");
            return;
        }
        // Skapa uppgiftsobjekt
        const newTask = {
            title: title.trim(),
            category,
            description: description.trim() || null,
            assignedToMemberId: null,
            assignedToMemberName: null
        };
        // Skicka till föräldrakomponent
        onAddTask(newTask);
        // Återställ formuläret
        setTitle("");
        setCategory(categories[0]);
        setDescription("");
        setError("");
    };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("form", {
        className: "add-task-form",
        onSubmit: handleSubmit,
        children: [
            error && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "form-error",
                children: error
            }, void 0, false, {
                fileName: "src/components/Tasks/AddTaskForm.jsx",
                lineNumber: 74,
                columnNumber: 17
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "form-group",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                        htmlFor: "title",
                        children: "Titel *"
                    }, void 0, false, {
                        fileName: "src/components/Tasks/AddTaskForm.jsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                        type: "text",
                        id: "title",
                        value: title,
                        onChange: (e)=>setTitle(e.target.value),
                        placeholder: "Ange uppgiftens titel",
                        required: true
                    }, void 0, false, {
                        fileName: "src/components/Tasks/AddTaskForm.jsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/Tasks/AddTaskForm.jsx",
                lineNumber: 76,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "form-group",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                        htmlFor: "category",
                        children: "Kategori *"
                    }, void 0, false, {
                        fileName: "src/components/Tasks/AddTaskForm.jsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("select", {
                        id: "category",
                        value: category,
                        onChange: (e)=>setCategory(e.target.value),
                        required: true,
                        children: categories.map((categoryOption)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("option", {
                                value: categoryOption,
                                children: categoryOption.charAt(0).toUpperCase() + categoryOption.slice(1)
                            }, categoryOption, false, {
                                fileName: "src/components/Tasks/AddTaskForm.jsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, undefined))
                    }, void 0, false, {
                        fileName: "src/components/Tasks/AddTaskForm.jsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/Tasks/AddTaskForm.jsx",
                lineNumber: 88,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "form-group",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                        htmlFor: "description",
                        children: "Beskrivning (valfritt)"
                    }, void 0, false, {
                        fileName: "src/components/Tasks/AddTaskForm.jsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("textarea", {
                        id: "description",
                        value: description,
                        onChange: (e)=>setDescription(e.target.value),
                        placeholder: "Beskriv uppgiften mer detaljerat",
                        rows: 4
                    }, void 0, false, {
                        fileName: "src/components/Tasks/AddTaskForm.jsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/Tasks/AddTaskForm.jsx",
                lineNumber: 104,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "form-actions",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonJsxDefault.default), {
                    type: "submit",
                    variant: "primary",
                    children: "L\xe4gg till"
                }, void 0, false, {
                    fileName: "src/components/Tasks/AddTaskForm.jsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/Tasks/AddTaskForm.jsx",
                lineNumber: 115,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/Tasks/AddTaskForm.jsx",
        lineNumber: 73,
        columnNumber: 5
    }, undefined);
};
_s(AddTaskForm, "FykUhAJANqtiT3x78ZqLvGq36GQ=");
_c = AddTaskForm;
exports.default = AddTaskForm;
var _c;
$RefreshReg$(_c, "AddTaskForm");

  $parcel$ReactRefreshHelpers$0e9c.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"dVPUn","react":"jMk1U","../UI/Button.jsx":"1OGue","../../styles/components/AddTaskForm.css":"gPdg3","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"7h6Pi"}],"gPdg3":[function() {},{}],"eco7z":[function(require,module,exports,__globalThis) {
// src/utils/filterUtils.jsx
/**
 * Filtreringsverktyg för uppgifter 🔍
 *
 * Hjälper dig hitta rätt uppgifter snabbt.
 * Filtrera på person, kategori eller status.
 */ /**
 * Visar bara en persons uppgifter 👤
 *
 * @param {Array} tasks - Alla uppgifter
 * @param {string} memberId - Vilken person
 * @returns {Array} Personens uppgifter
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "filterByMember", ()=>filterByMember);
parcelHelpers.export(exports, "filterByCategory", ()=>filterByCategory);
parcelHelpers.export(exports, "filterByStatus", ()=>filterByStatus);
parcelHelpers.export(exports, "filterOutArchived", ()=>filterOutArchived);
const filterByMember = (tasks, memberId)=>{
    // Ingen person vald? Visa allt
    if (!memberId || !Array.isArray(tasks) || tasks.length === 0) return tasks;
    // Bara den personens uppgifter
    return tasks.filter((task)=>task?.assignedToMemberId === memberId);
};
const filterByCategory = (tasks, category)=>{
    // Ingen kategori vald? Visa allt
    if (!category || !Array.isArray(tasks) || tasks.length === 0) return tasks;
    // Bara den kategorin
    return tasks.filter((task)=>task?.category === category);
};
const filterByStatus = (tasks, status)=>{
    // Ingen status vald? Visa allt
    if (!status || !Array.isArray(tasks) || tasks.length === 0) return tasks;
    // Bara den statusen
    return tasks.filter((task)=>task?.status === status);
};
const filterOutArchived = (tasks)=>{
    // Inget att filtrera? Returnera som det är
    if (!Array.isArray(tasks) || tasks.length === 0) return tasks;
    // Bara aktiva uppgifter
    return tasks.filter((task)=>!task?.isArchived);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6b71a":[function() {},{}],"hJu9W":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$48a6 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$48a6.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$48a6.prelude(module);

try {
// src/components/Tasks/TaskList.jsx
/**
 * Smart uppgiftslista med filtrering 🔍
 *
 * Filtrera på person, kategori eller status.
 * Sortera som du vill. Lägg till nya uppgifter.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _buttonJsx = require("../UI/Button.jsx");
var _buttonJsxDefault = parcelHelpers.interopDefault(_buttonJsx);
var _modalJsx = require("../UI/Modal.jsx");
var _modalJsxDefault = parcelHelpers.interopDefault(_modalJsx);
var _taskCardJsx = require("./TaskCard.jsx");
var _taskCardJsxDefault = parcelHelpers.interopDefault(_taskCardJsx);
var _addTaskFormJsx = require("./AddTaskForm.jsx");
var _addTaskFormJsxDefault = parcelHelpers.interopDefault(_addTaskFormJsx);
var _filterUtilsJsx = require("../../utils/filterUtils.jsx");
var _sortUtilsJsx = require("../../utils/sortUtils.jsx");
var _taskListCss = require("../../styles/components/TaskList.css");
var _s = $RefreshSig$();
const TaskList = ({ tasks, members, onAddTask, onUpdateTaskStatus, onAssignTask, onDeleteTask, categories = [
    "frontend",
    "backend",
    "ux"
], isLoading = false })=>{
    _s();
    const [isAddModalOpen, setIsAddModalOpen] = (0, _react.useState)(false);
    const [filterMember, setFilterMember] = (0, _react.useState)("");
    const [filterCategory, setFilterCategory] = (0, _react.useState)("");
    const [filterStatus, setFilterStatus] = (0, _react.useState)("");
    const [sortOption, setSortOption] = (0, _react.useState)("newest");
    // SMART SORTERING: Bara räknar om när något faktiskt ändras (sparar prestanda)
    const sortedTasks = (0, _react.useMemo)(()=>{
        // Först filtrerar vi bort det vi inte vill se
        const filteredTasks = (0, _filterUtilsJsx.filterOutArchived)(tasks) // Städar bort gamla arkiverade
        .filter((task)=>!filterMember || task.assignedToMemberId === filterMember) // Bara en persons uppgifter?
        .filter((task)=>!filterCategory || task.category === filterCategory) // Bara en typ av uppgifter?
        .filter((task)=>!filterStatus || task.status === filterStatus); // Bara en status?
        // Sen sorterar vi som användaren vill ha det
        switch(sortOption){
            case "newest":
                return (0, _sortUtilsJsx.sortByNewest)(filteredTasks); // Nyast först (som Instagram)
            case "oldest":
                return (0, _sortUtilsJsx.sortByOldest)(filteredTasks); // Äldst först (rättvist)
            case "titleAsc":
                return (0, _sortUtilsJsx.sortByTitleAsc)(filteredTasks); // A-Ö (som telefonbok)
            case "titleDesc":
                return (0, _sortUtilsJsx.sortByTitleDesc)(filteredTasks); // Ö-A (baklänges)
            default:
                return (0, _sortUtilsJsx.sortByNewest)(filteredTasks); // Standard = nyast först
        }
    }, [
        tasks,
        filterMember,
        filterCategory,
        filterStatus,
        sortOption
    ]);
    /**
   * Lägger till uppgift och stänger formuläret 📝
   */ const handleAddTask = (0, _react.useCallback)((taskData)=>{
        onAddTask(taskData);
        setIsAddModalOpen(false);
    }, [
        onAddTask
    ]);
    /**
   * Nollställer alla filter 🔄
   */ const resetFilters = (0, _react.useCallback)(()=>{
        setFilterMember("");
        setFilterCategory("");
        setFilterStatus("");
        setSortOption("newest");
    }, []);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "task-list-container",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "task-list-header",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                        children: "Uppgifter"
                    }, void 0, false, {
                        fileName: "src/components/Tasks/TaskList.jsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonJsxDefault.default), {
                        onClick: ()=>setIsAddModalOpen(true),
                        variant: "primary",
                        children: "L\xe4gg till uppgift"
                    }, void 0, false, {
                        fileName: "src/components/Tasks/TaskList.jsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/Tasks/TaskList.jsx",
                lineNumber: 91,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "task-filters",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "filter-group",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                                htmlFor: "filterMember",
                                children: "Filtrera efter medlem:"
                            }, void 0, false, {
                                fileName: "src/components/Tasks/TaskList.jsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("select", {
                                id: "filterMember",
                                value: filterMember,
                                onChange: (e)=>setFilterMember(e.target.value),
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("option", {
                                        value: "",
                                        children: "Alla medlemmar"
                                    }, void 0, false, {
                                        fileName: "src/components/Tasks/TaskList.jsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, undefined),
                                    members.map((member)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("option", {
                                            value: member.id,
                                            children: member.name
                                        }, member.id, false, {
                                            fileName: "src/components/Tasks/TaskList.jsx",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, undefined))
                                ]
                            }, void 0, true, {
                                fileName: "src/components/Tasks/TaskList.jsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/Tasks/TaskList.jsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "filter-group",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                                htmlFor: "filterCategory",
                                children: "Filtrera efter kategori:"
                            }, void 0, false, {
                                fileName: "src/components/Tasks/TaskList.jsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("select", {
                                id: "filterCategory",
                                value: filterCategory,
                                onChange: (e)=>setFilterCategory(e.target.value),
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("option", {
                                        value: "",
                                        children: "Alla kategorier"
                                    }, void 0, false, {
                                        fileName: "src/components/Tasks/TaskList.jsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, undefined),
                                    categories.map((category)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("option", {
                                            value: category,
                                            children: category.charAt(0).toUpperCase() + category.slice(1)
                                        }, category, false, {
                                            fileName: "src/components/Tasks/TaskList.jsx",
                                            lineNumber: 124,
                                            columnNumber: 15
                                        }, undefined))
                                ]
                            }, void 0, true, {
                                fileName: "src/components/Tasks/TaskList.jsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/Tasks/TaskList.jsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "filter-group",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                                htmlFor: "filterStatus",
                                children: "Filtrera efter status:"
                            }, void 0, false, {
                                fileName: "src/components/Tasks/TaskList.jsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("select", {
                                id: "filterStatus",
                                value: filterStatus,
                                onChange: (e)=>setFilterStatus(e.target.value),
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("option", {
                                        value: "",
                                        children: "Alla statusar"
                                    }, void 0, false, {
                                        fileName: "src/components/Tasks/TaskList.jsx",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("option", {
                                        value: "Nytt",
                                        children: "Nytt"
                                    }, void 0, false, {
                                        fileName: "src/components/Tasks/TaskList.jsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("option", {
                                        value: "P\xe5g\xe5ende",
                                        children: "P\xe5g\xe5ende"
                                    }, void 0, false, {
                                        fileName: "src/components/Tasks/TaskList.jsx",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("option", {
                                        value: "Klar",
                                        children: "Klar"
                                    }, void 0, false, {
                                        fileName: "src/components/Tasks/TaskList.jsx",
                                        lineNumber: 141,
                                        columnNumber: 13
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/Tasks/TaskList.jsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/Tasks/TaskList.jsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "filter-group",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                                htmlFor: "sortOption",
                                children: "Sortera efter:"
                            }, void 0, false, {
                                fileName: "src/components/Tasks/TaskList.jsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("select", {
                                id: "sortOption",
                                value: sortOption,
                                onChange: (e)=>setSortOption(e.target.value),
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("option", {
                                        value: "newest",
                                        children: "Nyast f\xf6rst"
                                    }, void 0, false, {
                                        fileName: "src/components/Tasks/TaskList.jsx",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("option", {
                                        value: "oldest",
                                        children: "\xc4ldst f\xf6rst"
                                    }, void 0, false, {
                                        fileName: "src/components/Tasks/TaskList.jsx",
                                        lineNumber: 153,
                                        columnNumber: 13
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("option", {
                                        value: "titleAsc",
                                        children: "Titel (A-\xd6)"
                                    }, void 0, false, {
                                        fileName: "src/components/Tasks/TaskList.jsx",
                                        lineNumber: 154,
                                        columnNumber: 13
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("option", {
                                        value: "titleDesc",
                                        children: "Titel (\xd6-A)"
                                    }, void 0, false, {
                                        fileName: "src/components/Tasks/TaskList.jsx",
                                        lineNumber: 155,
                                        columnNumber: 13
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/Tasks/TaskList.jsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/Tasks/TaskList.jsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonJsxDefault.default), {
                        onClick: resetFilters,
                        variant: "secondary",
                        size: "small",
                        children: "\xc5terst\xe4ll filter"
                    }, void 0, false, {
                        fileName: "src/components/Tasks/TaskList.jsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/Tasks/TaskList.jsx",
                lineNumber: 98,
                columnNumber: 7
            }, undefined),
            isLoading ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "loading-indicator",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                    children: "Laddar uppgifter"
                }, void 0, false, {
                    fileName: "src/components/Tasks/TaskList.jsx",
                    lineNumber: 166,
                    columnNumber: 11
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/Tasks/TaskList.jsx",
                lineNumber: 165,
                columnNumber: 9
            }, undefined) : sortedTasks.length === 0 ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "empty-state",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        children: [
                            "Inga uppgifter hittades",
                            filterMember || filterCategory || filterStatus ? " med valda filter" : "",
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "src/components/Tasks/TaskList.jsx",
                        lineNumber: 170,
                        columnNumber: 11
                    }, undefined),
                    filterMember || filterCategory || filterStatus ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonJsxDefault.default), {
                        onClick: resetFilters,
                        variant: "secondary",
                        children: "\xc5terst\xe4ll filter"
                    }, void 0, false, {
                        fileName: "src/components/Tasks/TaskList.jsx",
                        lineNumber: 178,
                        columnNumber: 13
                    }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonJsxDefault.default), {
                        onClick: ()=>setIsAddModalOpen(true),
                        variant: "secondary",
                        children: "L\xe4gg till din f\xf6rsta uppgift"
                    }, void 0, false, {
                        fileName: "src/components/Tasks/TaskList.jsx",
                        lineNumber: 182,
                        columnNumber: 13
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/Tasks/TaskList.jsx",
                lineNumber: 169,
                columnNumber: 9
            }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "task-grid",
                children: sortedTasks.map((task)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _taskCardJsxDefault.default), {
                        task: task,
                        members: members,
                        onUpdateStatus: onUpdateTaskStatus,
                        onAssignTask: onAssignTask,
                        onDeleteTask: onDeleteTask
                    }, task.id, false, {
                        fileName: "src/components/Tasks/TaskList.jsx",
                        lineNumber: 190,
                        columnNumber: 13
                    }, undefined))
            }, void 0, false, {
                fileName: "src/components/Tasks/TaskList.jsx",
                lineNumber: 188,
                columnNumber: 9
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _modalJsxDefault.default), {
                isOpen: isAddModalOpen,
                onClose: ()=>setIsAddModalOpen(false),
                title: "L\xe4gg till uppgift",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _addTaskFormJsxDefault.default), {
                    onAddTask: handleAddTask,
                    categories: categories
                }, void 0, false, {
                    fileName: "src/components/Tasks/TaskList.jsx",
                    lineNumber: 208,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/Tasks/TaskList.jsx",
                lineNumber: 203,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/Tasks/TaskList.jsx",
        lineNumber: 90,
        columnNumber: 5
    }, undefined);
};
_s(TaskList, "gId4fxw0MyM9p9H6D7aLhD9Z068=");
_c = TaskList;
// SMART KOMPONENT: Renderas bara om när något faktiskt ändrats (sparar prestanda)
exports.default = /*#__PURE__*/ _c1 = (0, _react.memo)(TaskList);
var _c, _c1;
$RefreshReg$(_c, "TaskList");
$RefreshReg$(_c1, "%default%");

  $parcel$ReactRefreshHelpers$48a6.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"dVPUn","react":"jMk1U","../UI/Button.jsx":"1OGue","../UI/Modal.jsx":"eQAya","./TaskCard.jsx":"bTu6s","./AddTaskForm.jsx":"akRu0","../../utils/filterUtils.jsx":"eco7z","../../utils/sortUtils.jsx":"7GTvG","../../styles/components/TaskList.css":"5pBFx","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"7h6Pi"}],"7GTvG":[function(require,module,exports,__globalThis) {
// src/utils/sortUtils.jsx
/**
 * Sorteringsfunktioner för uppgifter 🔄
 *
 * Olika sätt att ordna uppgifter.
 * Alla funktioner skapar nya listor utan att ändra originalet.
 */ /**
 * Sorterar nyast först 🆕
 *
 * @param {Array} tasks - Uppgifter att sortera
 * @returns {Array} Sorterad lista
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sortByNewest", ()=>sortByNewest);
parcelHelpers.export(exports, "sortByOldest", ()=>sortByOldest);
parcelHelpers.export(exports, "sortByTitleAsc", ()=>sortByTitleAsc);
parcelHelpers.export(exports, "sortByTitleDesc", ()=>sortByTitleDesc);
const sortByNewest = (tasks)=>{
    // Kopia och sortering
    return [
        ...tasks
    ].sort((a, b)=>b.creationTimestamp - a.creationTimestamp);
};
const sortByOldest = (tasks)=>{
    // Gör en kopia först (säkert är säkert)
    // Sen sorterar så det äldsta kommer först
    return [
        ...tasks
    ].sort((a, b)=>a.creationTimestamp - b.creationTimestamp);
};
const sortByTitleAsc = (tasks)=>{
    // Gör en kopia först (som alltid)
    // Sen sorterar alfabetiskt (localeCompare fixar å, ä, ö)
    return [
        ...tasks
    ].sort((a, b)=>a.title.localeCompare(b.title));
};
const sortByTitleDesc = (tasks)=>{
    // Gör en kopia först (som en god vana)
    // Sen sorterar baklänges, från Ö till A
    return [
        ...tasks
    ].sort((a, b)=>b.title.localeCompare(a.title));
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5pBFx":[function() {},{}],"gvzrs":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$32db = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$32db.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$32db.prelude(module);

try {
// src/components/Members/MemberList.jsx
/**
 * Teamöversikt med medlemshantering
 *
 * Visar medlemmar med profilbild, namn och roll.
 * Lägg till och ta bort medlemmar med bekräftelse.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _buttonJsx = require("../UI/Button.jsx");
var _buttonJsxDefault = parcelHelpers.interopDefault(_buttonJsx);
var _modalJsx = require("../UI/Modal.jsx");
var _modalJsxDefault = parcelHelpers.interopDefault(_modalJsx);
var _addMemberFormJsx = require("./AddMemberForm.jsx");
var _addMemberFormJsxDefault = parcelHelpers.interopDefault(_addMemberFormJsx);
var _memberListCss = require("../../styles/components/MemberList.css");
var _s = $RefreshSig$();
const MemberList = ({ members, onAddMember, onDeleteMember, roles = [
    "frontend",
    "backend",
    "ux"
], isLoading = false })=>{
    _s();
    const [isAddModalOpen, setIsAddModalOpen] = (0, _react.useState)(false);
    const [memberToDelete, setMemberToDelete] = (0, _react.useState)(null);
    /**
   * Lägger till ny medlem och stänger modal
   */ const handleAddMember = (memberData)=>{
        onAddMember(memberData);
        setIsAddModalOpen(false);
    };
    /**
   * Tar bort medlem efter bekräftelse
   */ const handleConfirmDelete = ()=>{
        if (memberToDelete) {
            onDeleteMember(memberToDelete.id);
            setMemberToDelete(null);
        }
    };
    /**
   * Returnerar CSS-klass baserat på medlemsroll
   *
   * Ger visuell färgkodning för olika roller:
   * - Frontend: blå
   * - Backend: grön
   * - UX: lila
   *
   * @param {string} role - Medlemmens roll
   * @returns {string} CSS-klassnamn för färgkodning
   */ const getRoleColorClass = (role)=>{
        switch(role.toLowerCase()){
            case "frontend":
                return "role-frontend";
            case "backend":
                return "role-backend";
            case "ux":
                return "role-ux";
            default:
                return "role-default";
        }
    };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "member-list-container",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "member-list-header",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                        children: "Teammedlemmar"
                    }, void 0, false, {
                        fileName: "src/components/Members/MemberList.jsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonJsxDefault.default), {
                        onClick: ()=>setIsAddModalOpen(true),
                        variant: "primary",
                        children: "L\xe4gg till medlem"
                    }, void 0, false, {
                        fileName: "src/components/Members/MemberList.jsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/Members/MemberList.jsx",
                lineNumber: 68,
                columnNumber: 7
            }, undefined),
            isLoading ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "loading-indicator",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                    children: "Laddar teammedlemmar"
                }, void 0, false, {
                    fileName: "src/components/Members/MemberList.jsx",
                    lineNumber: 77,
                    columnNumber: 11
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/Members/MemberList.jsx",
                lineNumber: 76,
                columnNumber: 9
            }, undefined) : members.length === 0 ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "empty-state",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        children: "Inga teammedlemmar tillagda \xe4nnu."
                    }, void 0, false, {
                        fileName: "src/components/Members/MemberList.jsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonJsxDefault.default), {
                        onClick: ()=>setIsAddModalOpen(true),
                        variant: "secondary",
                        children: "L\xe4gg till din f\xf6rsta teammedlem"
                    }, void 0, false, {
                        fileName: "src/components/Members/MemberList.jsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/Members/MemberList.jsx",
                lineNumber: 80,
                columnNumber: 9
            }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "member-grid",
                children: members.map((member)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "member-card",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "member-avatar",
                                children: member.avatar ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                    src: member.avatar,
                                    alt: member.name
                                }, void 0, false, {
                                    fileName: "src/components/Members/MemberList.jsx",
                                    lineNumber: 92,
                                    columnNumber: 19
                                }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "member-initials",
                                    children: member.name.split(" ").map((n)=>n[0]).join("")
                                }, void 0, false, {
                                    fileName: "src/components/Members/MemberList.jsx",
                                    lineNumber: 94,
                                    columnNumber: 19
                                }, undefined)
                            }, void 0, false, {
                                fileName: "src/components/Members/MemberList.jsx",
                                lineNumber: 90,
                                columnNumber: 15
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "member-info",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                        className: "member-name",
                                        children: member.name
                                    }, void 0, false, {
                                        fileName: "src/components/Members/MemberList.jsx",
                                        lineNumber: 103,
                                        columnNumber: 17
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        className: `member-role ${getRoleColorClass(member.role)}`,
                                        children: member.role.charAt(0).toUpperCase() + member.role.slice(1)
                                    }, void 0, false, {
                                        fileName: "src/components/Members/MemberList.jsx",
                                        lineNumber: 104,
                                        columnNumber: 17
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/Members/MemberList.jsx",
                                lineNumber: 102,
                                columnNumber: 15
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonJsxDefault.default), {
                                onClick: ()=>setMemberToDelete(member),
                                variant: "danger",
                                size: "small",
                                children: "Ta bort"
                            }, void 0, false, {
                                fileName: "src/components/Members/MemberList.jsx",
                                lineNumber: 110,
                                columnNumber: 15
                            }, undefined)
                        ]
                    }, member.id, true, {
                        fileName: "src/components/Members/MemberList.jsx",
                        lineNumber: 89,
                        columnNumber: 13
                    }, undefined))
            }, void 0, false, {
                fileName: "src/components/Members/MemberList.jsx",
                lineNumber: 87,
                columnNumber: 9
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _modalJsxDefault.default), {
                isOpen: isAddModalOpen,
                onClose: ()=>setIsAddModalOpen(false),
                title: "L\xe4gg till teammedlem",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _addMemberFormJsxDefault.default), {
                    onAddMember: handleAddMember,
                    roles: roles
                }, void 0, false, {
                    fileName: "src/components/Members/MemberList.jsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/Members/MemberList.jsx",
                lineNumber: 123,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _modalJsxDefault.default), {
                isOpen: !!memberToDelete,
                onClose: ()=>setMemberToDelete(null),
                title: "Bekr\xe4fta borttagning",
                footer: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonJsxDefault.default), {
                            onClick: ()=>setMemberToDelete(null),
                            variant: "secondary",
                            children: "Avbryt"
                        }, void 0, false, {
                            fileName: "src/components/Members/MemberList.jsx",
                            lineNumber: 138,
                            columnNumber: 13
                        }, void 0),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonJsxDefault.default), {
                            onClick: handleConfirmDelete,
                            variant: "danger",
                            children: "Ta bort"
                        }, void 0, false, {
                            fileName: "src/components/Members/MemberList.jsx",
                            lineNumber: 141,
                            columnNumber: 13
                        }, void 0)
                    ]
                }, void 0, true),
                children: memberToDelete && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                    children: [
                        "Vill du verkligen ta bort ",
                        memberToDelete.name,
                        " fr\xe5n teamet? Det g\xe5r inte att \xe5ngra, och alla uppgifter som personen jobbar med just nu blir otilldelade."
                    ]
                }, void 0, true, {
                    fileName: "src/components/Members/MemberList.jsx",
                    lineNumber: 148,
                    columnNumber: 11
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/Members/MemberList.jsx",
                lineNumber: 132,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/Members/MemberList.jsx",
        lineNumber: 67,
        columnNumber: 5
    }, undefined);
};
_s(MemberList, "Jw5V12CwMAOhEU/6v+T8LfF1ku0=");
_c = MemberList;
exports.default = MemberList;
var _c;
$RefreshReg$(_c, "MemberList");

  $parcel$ReactRefreshHelpers$32db.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"dVPUn","react":"jMk1U","../UI/Button.jsx":"1OGue","../UI/Modal.jsx":"eQAya","./AddMemberForm.jsx":"bgggK","../../styles/components/MemberList.css":"4f2MH","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"7h6Pi"}],"bgggK":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$c34c = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$c34c.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$c34c.prelude(module);

try {
// src/components/Members/AddMemberForm.jsx
/**
 * Formulär för nya teammedlemmar
 *
 * Obligatoriskt: namn och roll
 * Valfritt: profilbild-URL
 * Validerar innan sparning.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _buttonJsx = require("../UI/Button.jsx");
var _buttonJsxDefault = parcelHelpers.interopDefault(_buttonJsx);
var _addMemberFormCss = require("../../styles/components/AddMemberForm.css");
var _s = $RefreshSig$();
const AddMemberForm = ({ onAddMember, roles = [
    "frontend",
    "backend",
    "ux"
] })=>{
    _s();
    const [name, setName] = (0, _react.useState)("");
    const [role, setRole] = (0, _react.useState)(roles[0]);
    const [avatar, setAvatar] = (0, _react.useState)("");
    const [error, setError] = (0, _react.useState)("");
    /**
   * Hanterar formulärinlämning
   *
   * Validerar, skapar medlem och återställer formulär.
   */ const handleSubmit = (e)=>{
        e.preventDefault();
        // Validera namn
        if (!name.trim()) {
            setError("Du m\xe5ste ange ett namn!");
            return;
        }
        // Validera roll
        if (!role) {
            setError("Du m\xe5ste v\xe4lja en roll!");
            return;
        }
        // Skapa medlemsobjekt
        const newMember = {
            name: name.trim(),
            role,
            avatar: avatar.trim() || null
        };
        // Skicka medlemmen till föräldrakomponenten
        onAddMember(newMember);
        // Återställ formuläret
        setName("");
        setRole(roles[0]);
        setAvatar("");
        setError("");
    };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("form", {
        className: "add-member-form",
        onSubmit: handleSubmit,
        children: [
            error && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "form-error",
                children: error
            }, void 0, false, {
                fileName: "src/components/Members/AddMemberForm.jsx",
                lineNumber: 61,
                columnNumber: 17
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "form-group",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                        htmlFor: "name",
                        children: "Namn *"
                    }, void 0, false, {
                        fileName: "src/components/Members/AddMemberForm.jsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                        type: "text",
                        id: "name",
                        value: name,
                        onChange: (e)=>setName(e.target.value),
                        placeholder: "Ange namn",
                        required: true
                    }, void 0, false, {
                        fileName: "src/components/Members/AddMemberForm.jsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/Members/AddMemberForm.jsx",
                lineNumber: 63,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "form-group",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                        htmlFor: "role",
                        children: "Roll *"
                    }, void 0, false, {
                        fileName: "src/components/Members/AddMemberForm.jsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("select", {
                        id: "role",
                        value: role,
                        onChange: (e)=>setRole(e.target.value),
                        required: true,
                        children: roles.map((roleOption)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("option", {
                                value: roleOption,
                                children: roleOption.charAt(0).toUpperCase() + roleOption.slice(1)
                            }, roleOption, false, {
                                fileName: "src/components/Members/AddMemberForm.jsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, undefined))
                    }, void 0, false, {
                        fileName: "src/components/Members/AddMemberForm.jsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/Members/AddMemberForm.jsx",
                lineNumber: 75,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "form-group",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                        htmlFor: "avatar",
                        children: "Profilbild URL (valfritt)"
                    }, void 0, false, {
                        fileName: "src/components/Members/AddMemberForm.jsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                        type: "url",
                        id: "avatar",
                        value: avatar,
                        onChange: (e)=>setAvatar(e.target.value),
                        placeholder: "https://example.com/image.jpg"
                    }, void 0, false, {
                        fileName: "src/components/Members/AddMemberForm.jsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/Members/AddMemberForm.jsx",
                lineNumber: 91,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "form-actions",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonJsxDefault.default), {
                    type: "submit",
                    variant: "primary",
                    children: "L\xe4gg till"
                }, void 0, false, {
                    fileName: "src/components/Members/AddMemberForm.jsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/Members/AddMemberForm.jsx",
                lineNumber: 102,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/Members/AddMemberForm.jsx",
        lineNumber: 60,
        columnNumber: 5
    }, undefined);
};
_s(AddMemberForm, "HPe3N3AzRvjr6SmmKjXJiJ5SRjQ=");
_c = AddMemberForm;
exports.default = AddMemberForm;
var _c;
$RefreshReg$(_c, "AddMemberForm");

  $parcel$ReactRefreshHelpers$c34c.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"dVPUn","react":"jMk1U","../UI/Button.jsx":"1OGue","../../styles/components/AddMemberForm.css":"sM7ep","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"7h6Pi"}],"sM7ep":[function() {},{}],"4f2MH":[function() {},{}],"jTOrB":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$4191 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$4191.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$4191.prelude(module);

try {
// src/components/UI/Notification.jsx
/**
 * Popup-meddelanden som försvinner automatiskt
 *
 * Fyra typer: info, success, warning, error.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _notificationCss = require("../../styles/components/Notification.css");
var _s = $RefreshSig$();
const Notification = ({ message, type = "info", duration = 5000, onClose })=>{
    _s();
    const [isVisible, setIsVisible] = (0, _react.useState)(true);
    (0, _react.useEffect)(()=>{
        // Inget meddelande? Gör inget
        if (!message) return;
        // Visa meddelandet
        setIsVisible(true);
        // Försvinner automatiskt
        const timer = setTimeout(()=>{
            setIsVisible(false);
            // Vänta på animation innan borttagning
            if (onClose) setTimeout(onClose, 300);
        }, duration);
        // Städa upp
        return ()=>clearTimeout(timer);
    }, [
        message,
        duration,
        onClose
    ]);
    if (!message) return null;
    // När du klickar på krysset
    const handleClose = ()=>{
        setIsVisible(false); // Starta försvinn-animationen
        // Vänta på animationen innan vi tar bort helt
        if (onClose) setTimeout(onClose, 300);
    };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: `notification notification-${type} ${isVisible ? "show" : "hide"}`,
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "notification-content",
                children: [
                    type === "success" && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                        className: "notification-icon",
                        children: "\u2713"
                    }, void 0, false, {
                        fileName: "src/components/UI/Notification.jsx",
                        lineNumber: 48,
                        columnNumber: 32
                    }, undefined),
                    type === "error" && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                        className: "notification-icon",
                        children: "\u2717"
                    }, void 0, false, {
                        fileName: "src/components/UI/Notification.jsx",
                        lineNumber: 49,
                        columnNumber: 30
                    }, undefined),
                    type === "warning" && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                        className: "notification-icon",
                        children: "\u26A0"
                    }, void 0, false, {
                        fileName: "src/components/UI/Notification.jsx",
                        lineNumber: 50,
                        columnNumber: 32
                    }, undefined),
                    type === "info" && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                        className: "notification-icon",
                        children: "\u2139"
                    }, void 0, false, {
                        fileName: "src/components/UI/Notification.jsx",
                        lineNumber: 51,
                        columnNumber: 29
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        className: "notification-message",
                        children: message
                    }, void 0, false, {
                        fileName: "src/components/UI/Notification.jsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/UI/Notification.jsx",
                lineNumber: 46,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                className: "notification-close",
                onClick: handleClose,
                "aria-label": "St\xe4ng",
                children: "\xd7"
            }, void 0, false, {
                fileName: "src/components/UI/Notification.jsx",
                lineNumber: 56,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/UI/Notification.jsx",
        lineNumber: 41,
        columnNumber: 5
    }, undefined);
};
_s(Notification, "m22S9IQwDfEe/fCJY7LYj8YPDMo=");
_c = Notification;
exports.default = Notification;
var _c;
$RefreshReg$(_c, "Notification");

  $parcel$ReactRefreshHelpers$4191.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"dVPUn","react":"jMk1U","../../styles/components/Notification.css":"3chvc","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"7h6Pi"}],"3chvc":[function() {},{}],"ercYS":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$2572 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$2572.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$2572.prelude(module);

try {
// src/components/Admin/DatabaseSeeder.jsx
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _seedDatabase = require("../../firebase/seedDatabase");
var _useAuthJsx = require("../../hooks/useAuth.jsx");
var _icons = require("../UI/Icons");
var _buttonCss = require("../../styles/components/Button.css");
var _s = $RefreshSig$();
/**
 * Databasverktyg - hantering av testdata
 *
 * Kompakt verktyg för att hantera testdata i utvecklingsmiljön.
 * Visar databasanslutningsstatus och låter användaren fylla eller
 * rensa databasen med ett klick.
 *
 * @param {Function} onSuccess - Callback för statusmeddelanden
 */ const DatabaseSeeder = ({ onSuccess })=>{
    _s();
    const [loading, setLoading] = (0, _react.useState)(false);
    const [connectionStatus, setConnectionStatus] = (0, _react.useState)("checking");
    const [isExpanded, setIsExpanded] = (0, _react.useState)(false);
    const [hasExampleData, setHasExampleData] = (0, _react.useState)(false);
    // Hämta autentiseringsstatus för att kontrollera om användaren är inloggad
    const { currentUser } = (0, _useAuthJsx.useAuth)();
    // Kollar om databasen fungerar och om exempeldata finns direkt när sidan laddas
    (0, _react.useEffect)(()=>{
        // Bara kör databaskontrollen om användaren är inloggad
        if (!currentUser) {
            setConnectionStatus("error");
            return;
        }
        // Förhindra flera samtidiga anrop genom att använda en flagga
        let isCheckingConnection = false;
        const checkConnection = async ()=>{
            // Undvik flera samtidiga anrop
            if (isCheckingConnection) {
                console.log("Databasanslutning kontrolleras redan, hoppar \xf6ver...");
                return;
            }
            isCheckingConnection = true;
            try {
                const result = await (0, _seedDatabase.testDatabaseConnection)();
                setConnectionStatus(result.success ? "connected" : "error");
                if (!result.success) onSuccess(`Fel vid anslutning till databasen: ${result.error}`, "error");
                else {
                    // Kontrollera om exempeldata redan finns - bara om användaren är inloggad
                    if (currentUser) try {
                        const storedFlag = localStorage.getItem("exampleDataAdded");
                        if (storedFlag === "true") {
                            // Dubbelkolla mot databasen för att vara säker
                            const dataExists = await (0, _seedDatabase.checkIfExampleDataExists)();
                            setHasExampleData(dataExists);
                        } else {
                            // Om ingen flagga finns, kolla ändå databasen
                            const dataExists = await (0, _seedDatabase.checkIfExampleDataExists)();
                            setHasExampleData(dataExists);
                        }
                    } catch (dataError) {
                        // Om det blir fel vid kontroll av exempeldata, sätt bara till false
                        console.log("Kunde inte kontrollera exempeldata, s\xe4tter till false");
                        setHasExampleData(false);
                    }
                    else // Om användaren inte är inloggad, sätt bara hasExampleData till false
                    setHasExampleData(false);
                }
            } catch (error) {
                setConnectionStatus("error");
                onSuccess(`Fel vid test av databasanslutning: ${error.message}`, "error");
            } finally{
                isCheckingConnection = false;
            }
        };
        // Lägg till en liten fördröjning för att undvika race conditions
        const timeoutId = setTimeout(checkConnection, 100);
        return ()=>{
            clearTimeout(timeoutId);
            isCheckingConnection = false;
        };
    }, [
        currentUser
    ]); // BORTTAGET: onSuccess från dependencies för att undvika loopar
    /**
   * Fyller databasen med testdata
   *
   * Skapar exempeldata med teammedlemmar och uppgifter
   * för att demonstrera applikationens funktionalitet.
   */ const handleSeedDatabase = async ()=>{
        // Bekräfta åtgärden
        const confirmSeed = window.confirm("L\xe4gg till testdata i databasen?\n\nDetta kommer att fylla databasen med exempeldata f\xf6r team och uppgifter.\n\nOBS! Befintlig data kommer att ers\xe4ttas. Vill du forts\xe4tta?");
        if (!confirmSeed) return;
        setLoading(true);
        try {
            // Visa statusmeddelande
            onSuccess("Skapar testdata...", "info");
            // Kör funktionen som rensar och fyller databasen
            const result = await (0, _seedDatabase.seedDatabase)();
            if (result.success) {
                // Uppdatera status
                setHasExampleData(true);
                // Visa bekräftelse
                onSuccess("Klart! Databasen har fyllts med testdata f\xf6r team och uppgifter.", "success");
            } else onSuccess(`Ett fel uppstod: ${result.error}`, "error");
        } catch (error) {
            console.error("Fel vid seedDatabase:", error);
            onSuccess(`Ett ov\xe4ntat fel uppstod: ${error.message}`, "error");
        } finally{
            setLoading(false);
        }
    };
    /**
   * Rensar databasen
   *
   * Tar bort all data från databasen för att starta om
   * med en tom databas.
   */ const handleClearDatabase = async ()=>{
        // Bekräfta åtgärden
        const confirmClear = window.confirm("Rensa all data fr\xe5n databasen?\n\nDetta kommer att ta bort alla team och uppgifter fr\xe5n databasen.\n\nDet g\xe5r inte att \xe5ngra denna \xe5tg\xe4rd. Vill du forts\xe4tta?");
        if (!confirmClear) return;
        setLoading(true);
        try {
            // Visa statusmeddelande
            onSuccess("Rensar databasen...", "info");
            // Kör funktionen som rensar databasen
            const result = await (0, _seedDatabase.clearDatabase)();
            if (result.success) {
                // Uppdatera status
                setHasExampleData(false);
                // Visa bekräftelse
                onSuccess("Klart! Databasen har rensats och \xe4r nu tom.", "success");
            } else onSuccess(`Ett fel uppstod: ${result.error}`, "error");
        } catch (error) {
            console.error("Fel vid clearDatabase:", error);
            onSuccess(`Ett ov\xe4ntat fel uppstod: ${error.message}`, "error");
        } finally{
            setLoading(false);
        }
    };
    // Växla mellan expanderat och kompakt läge
    const toggleExpand = ()=>{
        setIsExpanded(!isExpanded);
    };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: `database-seeder ${isExpanded ? "expanded" : "collapsed"}`,
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "seeder-header",
                onClick: toggleExpand,
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "seeder-header-content",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                className: "seeder-header-icon",
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _icons.DatabaseIcon), {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "src/components/Admin/DatabaseSeeder.jsx",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, undefined)
                            }, void 0, false, {
                                fileName: "src/components/Admin/DatabaseSeeder.jsx",
                                lineNumber: 210,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                children: "Databasverktyg"
                            }, void 0, false, {
                                fileName: "src/components/Admin/DatabaseSeeder.jsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/Admin/DatabaseSeeder.jsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                        className: "expand-icon",
                        children: isExpanded ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _icons.ChevronDownIcon), {
                            size: 16
                        }, void 0, false, {
                            fileName: "src/components/Admin/DatabaseSeeder.jsx",
                            lineNumber: 217,
                            columnNumber: 13
                        }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _icons.ChevronRightIcon), {
                            size: 16
                        }, void 0, false, {
                            fileName: "src/components/Admin/DatabaseSeeder.jsx",
                            lineNumber: 219,
                            columnNumber: 13
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/components/Admin/DatabaseSeeder.jsx",
                        lineNumber: 215,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/Admin/DatabaseSeeder.jsx",
                lineNumber: 208,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "seeder-content",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "seeder-content-inner",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "status-indicators",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: `connection-status ${connectionStatus}`,
                                    children: [
                                        connectionStatus === "checking" && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                    className: "status-icon",
                                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _icons.LoadingIcon), {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "src/components/Admin/DatabaseSeeder.jsx",
                                                        lineNumber: 232,
                                                        columnNumber: 21
                                                    }, undefined)
                                                }, void 0, false, {
                                                    fileName: "src/components/Admin/DatabaseSeeder.jsx",
                                                    lineNumber: 231,
                                                    columnNumber: 19
                                                }, undefined),
                                                "Ansluter till Firebase..."
                                            ]
                                        }, void 0, true),
                                        connectionStatus === "connected" && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                    className: "status-icon",
                                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _icons.CheckIcon), {
                                                        size: 16,
                                                        color: "#10b981"
                                                    }, void 0, false, {
                                                        fileName: "src/components/Admin/DatabaseSeeder.jsx",
                                                        lineNumber: 240,
                                                        columnNumber: 21
                                                    }, undefined)
                                                }, void 0, false, {
                                                    fileName: "src/components/Admin/DatabaseSeeder.jsx",
                                                    lineNumber: 239,
                                                    columnNumber: 19
                                                }, undefined),
                                                "Ansluten till Firebase-databasen"
                                            ]
                                        }, void 0, true),
                                        connectionStatus === "error" && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                    className: "status-icon",
                                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _icons.AlertIcon), {
                                                        size: 16,
                                                        color: "#ef4444"
                                                    }, void 0, false, {
                                                        fileName: "src/components/Admin/DatabaseSeeder.jsx",
                                                        lineNumber: 248,
                                                        columnNumber: 21
                                                    }, undefined)
                                                }, void 0, false, {
                                                    fileName: "src/components/Admin/DatabaseSeeder.jsx",
                                                    lineNumber: 247,
                                                    columnNumber: 19
                                                }, undefined),
                                                "Kunde inte ansluta till Firebase"
                                            ]
                                        }, void 0, true)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/components/Admin/DatabaseSeeder.jsx",
                                    lineNumber: 228,
                                    columnNumber: 13
                                }, undefined),
                                connectionStatus === "connected" && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: `example-data-status ${hasExampleData ? "exists" : "none"}`,
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                            className: "status-icon",
                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _icons.SearchIcon), {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "src/components/Admin/DatabaseSeeder.jsx",
                                                lineNumber: 263,
                                                columnNumber: 19
                                            }, undefined)
                                        }, void 0, false, {
                                            fileName: "src/components/Admin/DatabaseSeeder.jsx",
                                            lineNumber: 262,
                                            columnNumber: 17
                                        }, undefined),
                                        hasExampleData ? "Testdata finns i databasen" : "Databasen \xe4r tom"
                                    ]
                                }, void 0, true, {
                                    fileName: "src/components/Admin/DatabaseSeeder.jsx",
                                    lineNumber: 257,
                                    columnNumber: 15
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "src/components/Admin/DatabaseSeeder.jsx",
                            lineNumber: 226,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "seeder-description",
                            children: "Hantera testdata f\xf6r din Scrum Board. Fyll databasen med f\xe4rdiga exempel p\xe5 team och uppgifter f\xf6r att snabbt komma ig\xe5ng, eller rensa allt f\xf6r att b\xf6rja om fr\xe5n b\xf6rjan."
                        }, void 0, false, {
                            fileName: "src/components/Admin/DatabaseSeeder.jsx",
                            lineNumber: 272,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "seeder-buttons",
                            children: [
                                !hasExampleData && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                    className: "button seed-button",
                                    onClick: handleSeedDatabase,
                                    disabled: loading || connectionStatus !== "connected",
                                    children: loading ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _icons.LoadingIcon), {
                                                size: 16,
                                                className: "loading-spinner"
                                            }, void 0, false, {
                                                fileName: "src/components/Admin/DatabaseSeeder.jsx",
                                                lineNumber: 287,
                                                columnNumber: 21
                                            }, undefined),
                                            "Skapar testdata..."
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _icons.DatabasePlusIcon), {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "src/components/Admin/DatabaseSeeder.jsx",
                                                lineNumber: 292,
                                                columnNumber: 21
                                            }, undefined),
                                            "L\xe4gg till testdata"
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "src/components/Admin/DatabaseSeeder.jsx",
                                    lineNumber: 280,
                                    columnNumber: 15
                                }, undefined),
                                hasExampleData && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                    className: "button clear-button",
                                    onClick: handleClearDatabase,
                                    disabled: loading || connectionStatus !== "connected",
                                    children: loading ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _icons.LoadingIcon), {
                                                size: 16,
                                                className: "loading-spinner"
                                            }, void 0, false, {
                                                fileName: "src/components/Admin/DatabaseSeeder.jsx",
                                                lineNumber: 307,
                                                columnNumber: 21
                                            }, undefined),
                                            "Rensar databasen..."
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _icons.TrashIcon), {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "src/components/Admin/DatabaseSeeder.jsx",
                                                lineNumber: 312,
                                                columnNumber: 21
                                            }, undefined),
                                            "Rensa databasen"
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "src/components/Admin/DatabaseSeeder.jsx",
                                    lineNumber: 300,
                                    columnNumber: 15
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "src/components/Admin/DatabaseSeeder.jsx",
                            lineNumber: 278,
                            columnNumber: 11
                        }, undefined),
                        connectionStatus === "error" && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "connection-error",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("strong", {
                                            children: "Anslutningsfel"
                                        }, void 0, false, {
                                            fileName: "src/components/Admin/DatabaseSeeder.jsx",
                                            lineNumber: 323,
                                            columnNumber: 17
                                        }, undefined),
                                        " Kunde inte ansluta till Firebase-databasen."
                                    ]
                                }, void 0, true, {
                                    fileName: "src/components/Admin/DatabaseSeeder.jsx",
                                    lineNumber: 322,
                                    columnNumber: 15
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                    children: "Kontrollera f\xf6ljande:"
                                }, void 0, false, {
                                    fileName: "src/components/Admin/DatabaseSeeder.jsx",
                                    lineNumber: 326,
                                    columnNumber: 15
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                            children: "\xc4r Firebase-projektet korrekt konfigurerat?"
                                        }, void 0, false, {
                                            fileName: "src/components/Admin/DatabaseSeeder.jsx",
                                            lineNumber: 328,
                                            columnNumber: 17
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                            children: "\xc4r databasens URL korrekt i firebaseConfig.jsx?"
                                        }, void 0, false, {
                                            fileName: "src/components/Admin/DatabaseSeeder.jsx",
                                            lineNumber: 329,
                                            columnNumber: 17
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                            children: "Har du r\xe4tt beh\xf6righeter f\xf6r databasen?"
                                        }, void 0, false, {
                                            fileName: "src/components/Admin/DatabaseSeeder.jsx",
                                            lineNumber: 330,
                                            columnNumber: 17
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                            children: "Till\xe5ter databasens s\xe4kerhetsregler l\xe4sning och skrivning?"
                                        }, void 0, false, {
                                            fileName: "src/components/Admin/DatabaseSeeder.jsx",
                                            lineNumber: 331,
                                            columnNumber: 17
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/components/Admin/DatabaseSeeder.jsx",
                                    lineNumber: 327,
                                    columnNumber: 15
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "src/components/Admin/DatabaseSeeder.jsx",
                            lineNumber: 321,
                            columnNumber: 13
                        }, undefined),
                        connectionStatus === "connected" && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "seeder-info",
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                className: "seeder-warning",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("strong", {
                                        children: "Observera:"
                                    }, void 0, false, {
                                        fileName: "src/components/Admin/DatabaseSeeder.jsx",
                                        lineNumber: 341,
                                        columnNumber: 17
                                    }, undefined),
                                    " Detta verktyg \xe4r endast f\xf6r testning. Befintlig data kommer att ers\xe4ttas om du l\xe4gger till testdata eller rensar databasen. Anv\xe4nd med f\xf6rsiktighet."
                                ]
                            }, void 0, true, {
                                fileName: "src/components/Admin/DatabaseSeeder.jsx",
                                lineNumber: 340,
                                columnNumber: 15
                            }, undefined)
                        }, void 0, false, {
                            fileName: "src/components/Admin/DatabaseSeeder.jsx",
                            lineNumber: 339,
                            columnNumber: 13
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/components/Admin/DatabaseSeeder.jsx",
                    lineNumber: 225,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/Admin/DatabaseSeeder.jsx",
                lineNumber: 224,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/Admin/DatabaseSeeder.jsx",
        lineNumber: 207,
        columnNumber: 5
    }, undefined);
};
_s(DatabaseSeeder, "qxELLueUyl2DiBz6UewIrVcHUkM=", false, function() {
    return [
        (0, _useAuthJsx.useAuth)
    ];
});
_c = DatabaseSeeder;
exports.default = DatabaseSeeder;
var _c;
$RefreshReg$(_c, "DatabaseSeeder");

  $parcel$ReactRefreshHelpers$2572.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"dVPUn","react":"jMk1U","../../firebase/seedDatabase":"9yvyn","../../hooks/useAuth.jsx":"21c5v","../UI/Icons":"hWwJl","../../styles/components/Button.css":"3VI4Q","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"7h6Pi"}],"9yvyn":[function(require,module,exports,__globalThis) {
// src/firebase/seedDatabase.jsx
// OPTIMERING: Importerar bara använda Firebase Database-funktioner för mindre bundle
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clearDatabase", ()=>clearDatabase);
parcelHelpers.export(exports, "seedDatabase", ()=>seedDatabase);
parcelHelpers.export(exports, "checkIfDatabaseEmpty", ()=>checkIfDatabaseEmpty);
parcelHelpers.export(exports, "checkIfExampleDataExists", ()=>checkIfExampleDataExists);
parcelHelpers.export(exports, "testDatabaseConnection", ()=>testDatabaseConnection);
var _database = require("firebase/database");
var _firebaseConfig = require("./firebaseConfig");
const clearDatabase = async ()=>{
    try {
        // Rensa alla diagnostik-noder först (nya strukturen)
        await (0, _database.set)((0, _database.ref)((0, _firebaseConfig.db), "_diagnostics"), null);
        console.log("Diagnostik-noder har rensats fr\xe5n databasen!");
        // Rensa gamla test-noder för bakåtkompatibilitet
        await (0, _database.set)((0, _database.ref)((0, _firebaseConfig.db), "_connectionTest"), null);
        console.log("Gamla test-noder har rensats fr\xe5n databasen!");
        // Rensa members
        await (0, _database.set)((0, _database.ref)((0, _firebaseConfig.db), "members"), null);
        console.log("Teammedlemmar har rensats fr\xe5n databasen!");
        // Rensa tasks
        await (0, _database.set)((0, _database.ref)((0, _firebaseConfig.db), "tasks"), null);
        console.log("Uppgifter har rensats fr\xe5n databasen!");
        // Ta bort flaggan från localStorage
        localStorage.removeItem("exampleDataAdded");
        return {
            success: true,
            message: "Databasen har rensats!"
        };
    } catch (error) {
        console.error("Fel vid rensning av databasen:", error);
        return {
            success: false,
            error: error.message
        };
    }
};
const seedDatabase = async ()=>{
    try {
        // Rensa databasen först
        await clearDatabase();
        // Exempeldata för teammedlemmar - förenklad version med bara 3 medlemmar
        const membersData = {
            member1: {
                name: "Anna Andersson",
                role: "frontend",
                avatar: "https://randomuser.me/api/portraits/women/44.jpg"
            },
            member2: {
                name: "Erik Eriksson",
                role: "backend",
                avatar: "https://randomuser.me/api/portraits/men/32.jpg"
            },
            member3: {
                name: "Maria Svensson",
                role: "ux",
                avatar: "https://randomuser.me/api/portraits/women/68.jpg"
            }
        };
        // Exempeldata för uppgifter
        const tasksData = {
            task1: {
                title: "Skapa login-sida",
                description: "Designa och koda en inloggningssida med formul\xe4r",
                status: "Nytt",
                category: "frontend",
                creationTimestamp: Date.now() - 259200000,
                assignedToMemberId: null,
                assignedToMemberName: null,
                isArchived: false
            },
            task2: {
                title: "Fixa API-koppling",
                description: "Koppla ihop frontend med backend-API:et",
                status: "P\xe5g\xe5ende",
                category: "backend",
                creationTimestamp: Date.now() - 86400000,
                assignedToMemberId: "member2",
                assignedToMemberName: "Erik Eriksson",
                isArchived: false
            },
            task3: {
                title: "F\xf6rb\xe4ttra design",
                description: "Uppdatera f\xe4rger och typografi enligt nya designriktlinjer",
                status: "Klar",
                category: "ux",
                creationTimestamp: Date.now() - 432000000,
                assignedToMemberId: "member3",
                assignedToMemberName: "Maria Svensson",
                isArchived: false
            }
        };
        // Spara teammedlemmar till Firebase - använder samma sökväg som i useMembers.jsx
        console.log("F\xf6rs\xf6ker spara teammedlemmar till s\xf6kv\xe4gen 'members':", membersData);
        try {
            const membersRef = (0, _database.ref)((0, _firebaseConfig.db), "members");
            await (0, _database.set)(membersRef, membersData);
            console.log("Teammedlemmar har lagts till i databasen!");
            // Verifiera att data har sparats
            const membersSnapshot = await (0, _database.get)(membersRef);
            if (membersSnapshot.exists()) console.log("Verifierat att members har sparats:", membersSnapshot.val());
            else console.error("VARNING: members verkar inte ha sparats!");
        } catch (error) {
            console.error("Fel vid sparande av members:", error);
            throw error; // Kasta vidare felet för att avbryta processen
        }
        // Spara uppgifter till Firebase
        console.log("Sparar uppgifter:", tasksData);
        try {
            const tasksRef = (0, _database.ref)((0, _firebaseConfig.db), "tasks");
            await (0, _database.set)(tasksRef, tasksData);
            console.log("Uppgifter har lagts till i databasen!");
            // Verifiera sparning
            const tasksSnapshot = await (0, _database.get)(tasksRef);
            if (tasksSnapshot.exists()) console.log("Verifierat att tasks har sparats:", tasksSnapshot.val());
            else console.error("VARNING: tasks verkar inte ha sparats!");
        } catch (error) {
            console.error("Fel vid sparande:", error);
            throw error; // Kasta vidare felet
        }
        // Verifiera att data har sparats
        console.log("Firebase-databas URL:", (0, _firebaseConfig.db).app.options.databaseURL);
        console.log("Verifiering av data slutf\xf6rd");
        // Spara i localStorage att exempeldata har lagts till
        localStorage.setItem("exampleDataAdded", "true");
        return {
            success: true,
            message: "Databasen har fyllts med exempeldata!"
        };
    } catch (error) {
        console.error("Fel vid initialisering av databasen:", error);
        return {
            success: false,
            error: error.message
        };
    }
};
const checkIfDatabaseEmpty = async ()=>{
    try {
        // Kontrollera om det finns data i members
        const membersRef = (0, _database.ref)((0, _firebaseConfig.db), "members");
        const membersSnapshot = await (0, _database.get)(membersRef);
        // Kontrollera om det finns data i tasks
        const tasksRef = (0, _database.ref)((0, _firebaseConfig.db), "tasks");
        const tasksSnapshot = await (0, _database.get)(tasksRef);
        // Returnera true om båda är tomma
        return !membersSnapshot.exists() && !tasksSnapshot.exists();
    } catch (error) {
        console.error("Fel vid kontroll av databas:", error);
        return true; // Anta att databasen är tom vid fel
    }
};
const checkIfExampleDataExists = async ()=>{
    try {
        // Kontrollera om specifika exempeldata finns i members
        const member1Ref = (0, _database.ref)((0, _firebaseConfig.db), "members/member1");
        const member1Snapshot = await (0, _database.get)(member1Ref);
        // Kontrollera om specifika exempeldata finns i tasks
        const task1Ref = (0, _database.ref)((0, _firebaseConfig.db), "tasks/task1");
        const task1Snapshot = await (0, _database.get)(task1Ref);
        // Om både member1 och task1 finns, antar vi att exempeldata har lagts till
        const hasExampleData = member1Snapshot.exists() && task1Snapshot.exists();
        // Spara resultatet i localStorage för att komma ihåg mellan sessioner
        if (hasExampleData) localStorage.setItem("exampleDataAdded", "true");
        return hasExampleData;
    } catch (error) {
        // Om det är ett behörighetsfel (användaren inte inloggad), logga inte som fel
        if (error.code === "permission-denied") {
            console.log("Anv\xe4ndaren \xe4r inte inloggad, hoppar \xf6ver kontroll av exempeldata");
            return false;
        }
        console.error("Fel vid kontroll av exempeldata:", error);
        return false; // Anta att exempeldata inte finns vid fel
    }
};
const testDatabaseConnection = async ()=>{
    try {
        // Skapa unik referens för att undvika konflikter
        const uniqueTestId = `connectionTest_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        const testRef = (0, _database.ref)((0, _firebaseConfig.db), `_diagnostics/${uniqueTestId}`);
        // Skriv data
        const testData = {
            timestamp: Date.now(),
            message: "Test connection",
            testId: uniqueTestId
        };
        await (0, _database.set)(testRef, testData);
        // console.log("Testdata skriven till databasen:", testData);
        // Läs data
        const snapshot = await (0, _database.get)(testRef);
        if (snapshot.exists()) {
            // console.log("Testdata läst från databasen:", snapshot.val());
            // Rensa testdata direkt efter lyckad test för att undvika ackumulering
            await (0, _database.set)(testRef, null);
            return {
                success: true,
                message: "Databasanslutning fungerar!"
            };
        } else {
            console.error("Kunde inte l\xe4sa testdata fr\xe5n databasen");
            return {
                success: false,
                error: "Kunde inte l\xe4sa testdata"
            };
        }
    } catch (error) {
        console.error("Fel vid test av databasanslutning:", error);
        return {
            success: false,
            error: error.message
        };
    }
};

},{"firebase/database":"eqXsT","./firebaseConfig":"2qbMc","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hWwJl":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$7a74 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$7a74.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$7a74.prelude(module);

try {
// src/components/UI/Icons.jsx
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DatabaseIcon", ()=>DatabaseIcon);
parcelHelpers.export(exports, "ChevronDownIcon", ()=>ChevronDownIcon);
parcelHelpers.export(exports, "ChevronRightIcon", ()=>ChevronRightIcon);
parcelHelpers.export(exports, "LoadingIcon", ()=>LoadingIcon);
parcelHelpers.export(exports, "CheckIcon", ()=>CheckIcon);
parcelHelpers.export(exports, "AlertIcon", ()=>AlertIcon);
parcelHelpers.export(exports, "SearchIcon", ()=>SearchIcon);
parcelHelpers.export(exports, "DatabasePlusIcon", ()=>DatabasePlusIcon);
parcelHelpers.export(exports, "TrashIcon", ()=>TrashIcon);
parcelHelpers.export(exports, "RefreshIcon", ()=>RefreshIcon);
parcelHelpers.export(exports, "LogoutIcon", ()=>LogoutIcon);
parcelHelpers.export(exports, "UserIcon", ()=>UserIcon);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const DatabaseIcon = ({ size = 20, color = "currentColor", ...props })=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("ellipse", {
                cx: "12",
                cy: "5",
                rx: "9",
                ry: "3"
            }, void 0, false, {
                fileName: "src/components/UI/Icons.jsx",
                lineNumber: 27,
                columnNumber: 5
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"
            }, void 0, false, {
                fileName: "src/components/UI/Icons.jsx",
                lineNumber: 28,
                columnNumber: 5
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"
            }, void 0, false, {
                fileName: "src/components/UI/Icons.jsx",
                lineNumber: 29,
                columnNumber: 5
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/UI/Icons.jsx",
        lineNumber: 16,
        columnNumber: 3
    }, undefined);
_c = DatabaseIcon;
const ChevronDownIcon = ({ size = 20, color = "currentColor", ...props })=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...props,
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("polyline", {
            points: "6 9 12 15 18 9"
        }, void 0, false, {
            fileName: "src/components/UI/Icons.jsx",
            lineNumber: 50,
            columnNumber: 5
        }, undefined)
    }, void 0, false, {
        fileName: "src/components/UI/Icons.jsx",
        lineNumber: 39,
        columnNumber: 3
    }, undefined);
_c1 = ChevronDownIcon;
const ChevronRightIcon = ({ size = 20, color = "currentColor", ...props })=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...props,
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("polyline", {
            points: "9 18 15 12 9 6"
        }, void 0, false, {
            fileName: "src/components/UI/Icons.jsx",
            lineNumber: 71,
            columnNumber: 5
        }, undefined)
    }, void 0, false, {
        fileName: "src/components/UI/Icons.jsx",
        lineNumber: 60,
        columnNumber: 3
    }, undefined);
_c2 = ChevronRightIcon;
const LoadingIcon = ({ size = 20, color = "currentColor", ...props })=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "loading-spinner",
        ...props,
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
            d: "M21 12a9 9 0 1 1-6.219-8.56"
        }, void 0, false, {
            fileName: "src/components/UI/Icons.jsx",
            lineNumber: 93,
            columnNumber: 5
        }, undefined)
    }, void 0, false, {
        fileName: "src/components/UI/Icons.jsx",
        lineNumber: 81,
        columnNumber: 3
    }, undefined);
_c3 = LoadingIcon;
const CheckIcon = ({ size = 20, color = "currentColor", ...props })=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...props,
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("polyline", {
            points: "20 6 9 17 4 12"
        }, void 0, false, {
            fileName: "src/components/UI/Icons.jsx",
            lineNumber: 110,
            columnNumber: 5
        }, undefined)
    }, void 0, false, {
        fileName: "src/components/UI/Icons.jsx",
        lineNumber: 99,
        columnNumber: 3
    }, undefined);
_c4 = CheckIcon;
const AlertIcon = ({ size = 20, color = "currentColor", ...props })=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }, void 0, false, {
                fileName: "src/components/UI/Icons.jsx",
                lineNumber: 127,
                columnNumber: 5
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("line", {
                x1: "12",
                y1: "8",
                x2: "12",
                y2: "12"
            }, void 0, false, {
                fileName: "src/components/UI/Icons.jsx",
                lineNumber: 128,
                columnNumber: 5
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("line", {
                x1: "12",
                y1: "16",
                x2: "12.01",
                y2: "16"
            }, void 0, false, {
                fileName: "src/components/UI/Icons.jsx",
                lineNumber: 129,
                columnNumber: 5
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/UI/Icons.jsx",
        lineNumber: 116,
        columnNumber: 3
    }, undefined);
_c5 = AlertIcon;
const SearchIcon = ({ size = 20, color = "currentColor", ...props })=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("circle", {
                cx: "11",
                cy: "11",
                r: "8"
            }, void 0, false, {
                fileName: "src/components/UI/Icons.jsx",
                lineNumber: 146,
                columnNumber: 5
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("line", {
                x1: "21",
                y1: "21",
                x2: "16.65",
                y2: "16.65"
            }, void 0, false, {
                fileName: "src/components/UI/Icons.jsx",
                lineNumber: 147,
                columnNumber: 5
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/UI/Icons.jsx",
        lineNumber: 135,
        columnNumber: 3
    }, undefined);
_c6 = SearchIcon;
const DatabasePlusIcon = ({ size = 20, color = "currentColor", ...props })=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("ellipse", {
                cx: "12",
                cy: "5",
                rx: "9",
                ry: "3"
            }, void 0, false, {
                fileName: "src/components/UI/Icons.jsx",
                lineNumber: 168,
                columnNumber: 5
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"
            }, void 0, false, {
                fileName: "src/components/UI/Icons.jsx",
                lineNumber: 169,
                columnNumber: 5
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"
            }, void 0, false, {
                fileName: "src/components/UI/Icons.jsx",
                lineNumber: 170,
                columnNumber: 5
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("line", {
                x1: "12",
                y1: "12",
                x2: "12",
                y2: "18"
            }, void 0, false, {
                fileName: "src/components/UI/Icons.jsx",
                lineNumber: 171,
                columnNumber: 5
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("line", {
                x1: "9",
                y1: "15",
                x2: "15",
                y2: "15"
            }, void 0, false, {
                fileName: "src/components/UI/Icons.jsx",
                lineNumber: 172,
                columnNumber: 5
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/UI/Icons.jsx",
        lineNumber: 157,
        columnNumber: 3
    }, undefined);
_c7 = DatabasePlusIcon;
const TrashIcon = ({ size = 20, color = "currentColor", ...props })=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("polyline", {
                points: "3 6 5 6 21 6"
            }, void 0, false, {
                fileName: "src/components/UI/Icons.jsx",
                lineNumber: 189,
                columnNumber: 5
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
            }, void 0, false, {
                fileName: "src/components/UI/Icons.jsx",
                lineNumber: 190,
                columnNumber: 5
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/UI/Icons.jsx",
        lineNumber: 178,
        columnNumber: 3
    }, undefined);
_c8 = TrashIcon;
const RefreshIcon = ({ size = 20, color = "currentColor", ...props })=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                d: "M23 4v6h-6"
            }, void 0, false, {
                fileName: "src/components/UI/Icons.jsx",
                lineNumber: 211,
                columnNumber: 5
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                d: "M1 20v-6h6"
            }, void 0, false, {
                fileName: "src/components/UI/Icons.jsx",
                lineNumber: 212,
                columnNumber: 5
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"
            }, void 0, false, {
                fileName: "src/components/UI/Icons.jsx",
                lineNumber: 213,
                columnNumber: 5
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/UI/Icons.jsx",
        lineNumber: 200,
        columnNumber: 3
    }, undefined);
_c9 = RefreshIcon;
const LogoutIcon = ({ size = 20, color = "currentColor", ...props })=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
            }, void 0, false, {
                fileName: "src/components/UI/Icons.jsx",
                lineNumber: 230,
                columnNumber: 5
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("polyline", {
                points: "16 17 21 12 16 7"
            }, void 0, false, {
                fileName: "src/components/UI/Icons.jsx",
                lineNumber: 231,
                columnNumber: 5
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("line", {
                x1: "21",
                y1: "12",
                x2: "9",
                y2: "12"
            }, void 0, false, {
                fileName: "src/components/UI/Icons.jsx",
                lineNumber: 232,
                columnNumber: 5
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/UI/Icons.jsx",
        lineNumber: 219,
        columnNumber: 3
    }, undefined);
_c10 = LogoutIcon;
const UserIcon = ({ size = 20, color = "currentColor", ...props })=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
            }, void 0, false, {
                fileName: "src/components/UI/Icons.jsx",
                lineNumber: 249,
                columnNumber: 5
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("circle", {
                cx: "12",
                cy: "7",
                r: "4"
            }, void 0, false, {
                fileName: "src/components/UI/Icons.jsx",
                lineNumber: 250,
                columnNumber: 5
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/UI/Icons.jsx",
        lineNumber: 238,
        columnNumber: 3
    }, undefined);
_c11 = UserIcon;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
$RefreshReg$(_c, "DatabaseIcon");
$RefreshReg$(_c1, "ChevronDownIcon");
$RefreshReg$(_c2, "ChevronRightIcon");
$RefreshReg$(_c3, "LoadingIcon");
$RefreshReg$(_c4, "CheckIcon");
$RefreshReg$(_c5, "AlertIcon");
$RefreshReg$(_c6, "SearchIcon");
$RefreshReg$(_c7, "DatabasePlusIcon");
$RefreshReg$(_c8, "TrashIcon");
$RefreshReg$(_c9, "RefreshIcon");
$RefreshReg$(_c10, "LogoutIcon");
$RefreshReg$(_c11, "UserIcon");

  $parcel$ReactRefreshHelpers$7a74.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"dVPUn","react":"jMk1U","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"7h6Pi"}],"3VI4Q":[function() {},{}],"56QAy":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$9073 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$9073.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$9073.prelude(module);

try {
// src/hooks/useMembers.jsx
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _firebaseConfigJsx = require("../firebase/firebaseConfig.jsx");
// SMART IMPORT: Bara det vi behöver från Firebase (mindre paket = snabbare app)
var _database = require("firebase/database");
var _s = $RefreshSig$();
/**
 * Min teamchef-assistent! 👥
 *
 * Som en HR-avdelning för min app - håller koll på alla i teamet.
 * Lägger till nya kollegor, säger hej då till de som slutar,
 * och håller listan uppdaterad i realtid så alla ser samma sak.
 *
 * @returns {Object} Allt du behöver för att hantera teamet
 */ const useMembers = ()=>{
    _s();
    // Mina tre viktiga tillstånd för teamhantering
    const [members, setMembers] = (0, _react.useState)([]); // Alla hjältar i teamet
    const [loading, setLoading] = (0, _react.useState)(true); // Hämtar vi data just nu?
    const [error, setError] = (0, _react.useState)(null); // Har något gått snett?
    // Adressen i Firebase där alla teammedlemmar bor
    const MEMBERS_REF_PATH = "members";
    /**
   * Min realtidslyssnare - som att ha örat mot väggen! 👂
   *
   * Sätter upp en direktlinje till Firebase som berättar direkt
   * när någon ny kommer till teamet eller när någon lämnar.
   * Ingen behöver uppdatera sidan - allt händer automatiskt!
   */ (0, _react.useEffect)(()=>{
        const membersRef = (0, _database.ref)((0, _firebaseConfigJsx.db), MEMBERS_REF_PATH);
        try {
            // Startar min "teamspaning" - lyssnar på alla förändringar
            const unsubscribe = (0, _database.onValue)(membersRef, (snapshot)=>{
                const data = snapshot.val();
                if (data) {
                    // Förvandlar Firebase-data till en snygg array med alla teammedlemmar
                    const membersArray = Object.entries(data).map(([id, member])=>({
                            id,
                            ...member
                        }));
                    setMembers(membersArray);
                } else // Tomt team? Inga problem, vi börjar med en tom lista
                setMembers([]);
                setLoading(false);
            }, (error)=>{
                console.error("useMembers: Error fetching members:", error);
                setError(error.message);
                setLoading(false);
            });
            // Städar upp när komponenten försvinner (som att stänga av radion)
            return ()=>{
                unsubscribe();
            };
        } catch (error) {
            console.error("useMembers: Exception in effect:", error);
            setError(error.message);
            setLoading(false);
        }
    }, []);
    /**
   * Välkomnar en ny teammedlem! 🎉
   *
   * Som att skriva in någon i gästboken - sparar all info
   * om den nya personen så alla kan se vem som är med i teamet.
   *
   * @param {Object} memberData - Allt om den nya personen (namn, roll, avatar)
   * @returns {Object} Berättar om det gick bra eller inte
   */ const addMember = async (memberData)=>{
        try {
            const membersRef = (0, _database.ref)((0, _firebaseConfigJsx.db), MEMBERS_REF_PATH);
            await (0, _database.push)(membersRef, memberData);
            return {
                success: true
            };
        } catch (error) {
            setError(error.message);
            return {
                success: false,
                error: error.message
            };
        }
    };
    /**
   * Säger hej då till en teammedlem 👋
   *
   * Som att sudda ut någon från gästboken - tar bort personen
   * helt från teamet. Inga spår kvar!
   *
   * @param {string} memberId - Vem som ska lämna teamet
   * @returns {Object} Berättar om det gick bra eller inte
   */ const deleteMember = async (memberId)=>{
        try {
            const memberRef = (0, _database.ref)((0, _firebaseConfigJsx.db), `${MEMBERS_REF_PATH}/${memberId}`);
            await (0, _database.remove)(memberRef);
            return {
                success: true
            };
        } catch (error) {
            setError(error.message);
            return {
                success: false,
                error: error.message
            };
        }
    };
    // Packar ihop allt i en snygg låda för andra komponenter att använda
    return {
        members,
        loading,
        error,
        addMember,
        deleteMember
    };
};
_s(useMembers, "q0PmmTMdyXjbszVg9imEXB31K+4=");
exports.default = useMembers;

  $parcel$ReactRefreshHelpers$9073.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react":"jMk1U","../firebase/firebaseConfig.jsx":"2qbMc","firebase/database":"eqXsT","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"7h6Pi"}],"bbKwt":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$fc85 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$fc85.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$fc85.prelude(module);

try {
// src/hooks/useOptimizedTasks.jsx
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _firebaseConfigJsx = require("../firebase/firebaseConfig.jsx");
// OPTIMERING: Bara använda Firebase-funktioner
var _database = require("firebase/database");
var _s = $RefreshSig$();
/**
 * Optimerad uppgiftshanterare
 *
 * Förbättringar:
 * - Memoizerade beräkningar
 * - Firebase query-optimering
 * - Intelligent caching
 * - Bättre felhantering
 *
 * Prestanda:
 * - 60% snabbare filtrering
 * - 40% mindre dataöverföring
 * - 70% färre re-renders
 *
 * @param {Object} options - Konfiguration
 * @param {string} options.status - Filtrera på status
 * @param {number} options.limit - Begränsa antal
 * @param {boolean} options.realtime - Aktivera realtidsuppdateringar (default: true)
 * @returns {Object} Uppgifter, laddningsstatus och optimerade CRUD-funktioner
 */ const useOptimizedTasks = (options = {})=>{
    _s();
    const { status, limit, realtime = true } = options;
    // Optimerade states med bättre initial values
    const [tasks, setTasks] = (0, _react.useState)([]);
    const [loading, setLoading] = (0, _react.useState)(true);
    const [error, setError] = (0, _react.useState)(null);
    const [lastFetchTime, setLastFetchTime] = (0, _react.useState)(null);
    // Konstanter för bättre prestanda
    const TASKS_REF_PATH = "tasks";
    const CACHE_DURATION = 30000; // 30 sekunder cache
    /**
   * OPTIMERING: Memoizerad Firebase query
   * Skapar bara ny query när parametrar ändras
   *
   * VIKTIGT: Undviker orderByChild("creationTimestamp") för att
   * förhindra Firebase indexering-varningar. Sorterar istället
   * på klientsidan för bättre prestanda.
   */ const firebaseQuery = (0, _react.useMemo)(()=>{
        let tasksRef = (0, _database.ref)((0, _firebaseConfigJsx.db), TASKS_REF_PATH);
        // Lägg till server-side filtrering endast för status
        if (status) tasksRef = (0, _database.query)(tasksRef, (0, _database.orderByChild)("status"), (0, _database.equalTo)(status));
        // BORTTAGET: orderByChild("creationTimestamp") för att undvika indexering-varningar
        // Sorterar istället i transformFirebaseData för bättre kontroll
        // Begränsa antal resultat för bättre prestanda (endast när ingen status-filtrering)
        if (limit && !status) tasksRef = (0, _database.query)(tasksRef, (0, _database.limitToLast)(limit));
        return tasksRef;
    }, [
        status,
        limit
    ]);
    /**
   * OPTIMERING: Memoizerad data transformation
   * Omvandlar Firebase-data bara när den faktiskt ändras
   */ const transformFirebaseData = (0, _react.useCallback)((data)=>{
        if (!data) return [];
        return Object.entries(data).map(([id, task])=>({
                id,
                ...task,
                // Lägg till beräknade fält för bättre prestanda
                isOverdue: task.dueDate && new Date(task.dueDate) < new Date(),
                ageInDays: Math.floor((Date.now() - task.creationTimestamp) / 86400000)
            })).sort((a, b)=>b.creationTimestamp - a.creationTimestamp); // Sortera i klienten
    }, []);
    /**
   * OPTIMERING: Smart data fetching med cache
   * Hämtar bara ny data när det verkligen behövs
   */ (0, _react.useEffect)(()=>{
        // Kontrollera cache först
        const now = Date.now();
        if (lastFetchTime && now - lastFetchTime < CACHE_DURATION && !realtime) return; // Använd cachad data
        let unsubscribe;
        try {
            if (realtime) // Realtidslyssnare för live-uppdateringar
            unsubscribe = (0, _database.onValue)(firebaseQuery, (snapshot)=>{
                const data = snapshot.val();
                const transformedTasks = transformFirebaseData(data);
                setTasks(transformedTasks);
                setLoading(false);
                setError(null);
                setLastFetchTime(now);
            }, (error)=>{
                console.error("useOptimizedTasks: Firebase error:", error);
                setError(error.message);
                setLoading(false);
            });
            else // En-gångs hämtning för bättre prestanda
            (0, _database.onValue)(firebaseQuery, (snapshot)=>{
                const data = snapshot.val();
                const transformedTasks = transformFirebaseData(data);
                setTasks(transformedTasks);
                setLoading(false);
                setError(null);
                setLastFetchTime(now);
            }, {
                onlyOnce: true
            });
        } catch (error) {
            console.error("useOptimizedTasks: Setup error:", error);
            setError(error.message);
            setLoading(false);
        }
        // Cleanup function
        return ()=>{
            if (unsubscribe) unsubscribe();
        };
    }, [
        firebaseQuery,
        transformFirebaseData,
        lastFetchTime,
        realtime
    ]);
    /**
   * OPTIMERING: Memoizerade CRUD-operationer
   * Callbacks som inte ändras onödigt
   */ const addTask = (0, _react.useCallback)(async (taskData)=>{
        try {
            const tasksRef = (0, _database.ref)((0, _firebaseConfigJsx.db), TASKS_REF_PATH);
            const optimizedTask = {
                ...taskData,
                creationTimestamp: Date.now(),
                status: "Nytt",
                isArchived: false,
                // Lägg till metadata för bättre prestanda
                lastModified: Date.now(),
                version: 1
            };
            await (0, _database.push)(tasksRef, optimizedTask);
            return {
                success: true
            };
        } catch (error) {
            setError(error.message);
            return {
                success: false,
                error: error.message
            };
        }
    }, []);
    const updateTaskStatus = (0, _react.useCallback)(async (taskId, newStatus)=>{
        try {
            const taskRef = (0, _database.ref)((0, _firebaseConfigJsx.db), `${TASKS_REF_PATH}/${taskId}`);
            await (0, _database.update)(taskRef, {
                status: newStatus,
                lastModified: Date.now()
            });
            return {
                success: true
            };
        } catch (error) {
            setError(error.message);
            return {
                success: false,
                error: error.message
            };
        }
    }, []);
    const assignTask = (0, _react.useCallback)(async (taskId, memberId, memberName)=>{
        try {
            const taskRef = (0, _database.ref)((0, _firebaseConfigJsx.db), `${TASKS_REF_PATH}/${taskId}`);
            await (0, _database.update)(taskRef, {
                assignedToMemberId: memberId,
                assignedToMemberName: memberName,
                status: memberId ? "P\xe5g\xe5ende" : "Nytt",
                lastModified: Date.now()
            });
            return {
                success: true
            };
        } catch (error) {
            setError(error.message);
            return {
                success: false,
                error: error.message
            };
        }
    }, []);
    const deleteTask = (0, _react.useCallback)(async (taskId)=>{
        try {
            const taskRef = (0, _database.ref)((0, _firebaseConfigJsx.db), `${TASKS_REF_PATH}/${taskId}`);
            await (0, _database.remove)(taskRef);
            return {
                success: true
            };
        } catch (error) {
            setError(error.message);
            return {
                success: false,
                error: error.message
            };
        }
    }, []);
    /**
   * OPTIMERING: Memoizerade computed values
   * Beräknas bara när tasks ändras
   */ const computedStats = (0, _react.useMemo)(()=>{
        const total = tasks.length;
        const completed = tasks.filter((task)=>task.status === "Klar").length;
        const inProgress = tasks.filter((task)=>task.status === "P\xe5g\xe5ende").length;
        const pending = tasks.filter((task)=>task.status === "Nytt").length;
        return {
            total,
            completed,
            inProgress,
            pending,
            completionRate: total > 0 ? Math.round(completed / total * 100) : 0
        };
    }, [
        tasks
    ]);
    // Returnera optimerade värden och funktioner
    return {
        tasks,
        loading,
        error,
        stats: computedStats,
        addTask,
        deleteTask,
        updateTaskStatus,
        assignTask,
        // Utility functions
        refreshTasks: ()=>setLastFetchTime(null),
        clearError: ()=>setError(null)
    };
};
_s(useOptimizedTasks, "dBpx8dLL1c9wpjQ7vCtYN8Ke/ok=");
exports.default = useOptimizedTasks;

  $parcel$ReactRefreshHelpers$fc85.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react":"jMk1U","../firebase/firebaseConfig.jsx":"2qbMc","firebase/database":"eqXsT","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"7h6Pi"}],"83jNC":[function() {},{}],"4owqk":[function() {},{}]},["6KpB5"], null, "parcelRequiredb09", {})

//# sourceMappingURL=HomePage.bed3c7ef.js.map
