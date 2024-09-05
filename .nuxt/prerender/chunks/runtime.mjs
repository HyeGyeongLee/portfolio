import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { defineEventHandler, handleCacheHeaders, splitCookiesString, isEvent, createEvent, fetchWithEvent, getRequestHeader, eventHandler, setHeaders, sendRedirect, proxyRequest, setResponseStatus, setResponseHeader, send, getRequestHeaders, removeResponseHeader, createError, getResponseHeader, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler } from 'file:///Users/hyegyeonglee/Desktop/dev/portfolio/node_modules/h3/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file:///Users/hyegyeonglee/Desktop/dev/portfolio/node_modules/ofetch/dist/node.mjs';
import destr from 'file:///Users/hyegyeonglee/Desktop/dev/portfolio/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file:///Users/hyegyeonglee/Desktop/dev/portfolio/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file:///Users/hyegyeonglee/Desktop/dev/portfolio/node_modules/hookable/dist/index.mjs';
import { klona } from 'file:///Users/hyegyeonglee/Desktop/dev/portfolio/node_modules/klona/dist/index.mjs';
import { snakeCase } from 'file:///Users/hyegyeonglee/Desktop/dev/portfolio/node_modules/scule/dist/index.mjs';
import defu, { defuFn } from 'file:///Users/hyegyeonglee/Desktop/dev/portfolio/node_modules/defu/dist/defu.mjs';
import { hash } from 'file:///Users/hyegyeonglee/Desktop/dev/portfolio/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, decodePath, withLeadingSlash, withoutTrailingSlash } from 'file:///Users/hyegyeonglee/Desktop/dev/portfolio/node_modules/ufo/dist/index.mjs';
import { createStorage, defineDriver, prefixStorage } from 'file:///Users/hyegyeonglee/Desktop/dev/portfolio/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Users/hyegyeonglee/Desktop/dev/portfolio/node_modules/unstorage/drivers/fs.mjs';
import fsDriver from 'file:///Users/hyegyeonglee/Desktop/dev/portfolio/node_modules/unstorage/drivers/fs-lite.mjs';
import lruCache from 'file:///Users/hyegyeonglee/Desktop/dev/portfolio/node_modules/unstorage/drivers/lru-cache.mjs';
import { toRouteMatcher, createRouter } from 'file:///Users/hyegyeonglee/Desktop/dev/portfolio/node_modules/radix3/dist/index.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'file:///Users/hyegyeonglee/Desktop/dev/portfolio/node_modules/pathe/dist/index.mjs';

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /{{(.*?)}}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const inlineAppConfig = {
  "nuxt": {}
};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "d1054ddf-b9f1-45db-b565-0b117003c745",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {}
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"/Users/hyegyeonglee/Desktop/dev/portfolio/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const normalizeFsKey = (item) => item.replaceAll(":", "_");
const _47Users_47hyegyeonglee_47Desktop_47dev_47portfolio_47node_modules_47nuxt_47dist_47core_47runtime_47nitro_47cache_45driver_46js = defineDriver((opts) => {
  const fs = fsDriver({ base: opts.base });
  const lru = lruCache({ max: 1e3 });
  return {
    ...fs,
    // fall back to file system - only the bottom three methods are used in renderer
    async setItem(key, value, opts2) {
      await Promise.all([
        fs.setItem(normalizeFsKey(key), value, opts2),
        lru.setItem(key, value, opts2)
      ]);
    },
    async hasItem(key, opts2) {
      return await lru.hasItem(key, opts2) || await fs.hasItem(normalizeFsKey(key), opts2);
    },
    async getItem(key, opts2) {
      return await lru.getItem(key, opts2) || await fs.getItem(normalizeFsKey(key), opts2);
    }
  };
});

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('internal:nuxt:prerender', _47Users_47hyegyeonglee_47Desktop_47dev_47portfolio_47node_modules_47nuxt_47dist_47core_47runtime_47nitro_47cache_45driver_46js({"driver":"/Users/hyegyeonglee/Desktop/dev/portfolio/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js","base":"/Users/hyegyeonglee/Desktop/dev/portfolio/.nuxt/cache/nitro/prerender"}));
storage.mount('data', fsDriver({"driver":"fsLite","base":"/Users/hyegyeonglee/Desktop/dev/portfolio/.data/kv"}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/hyegyeonglee/Desktop/dev/portfolio","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/hyegyeonglee/Desktop/dev/portfolio/server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/hyegyeonglee/Desktop/dev/portfolio/.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/hyegyeonglee/Desktop/dev/portfolio/.nuxt/cache","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[nitro] [cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: "",
    // TODO: check and validate error.data for serialisation into query
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send(event, JSON.stringify(errorObject));
  }
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (!res) {
    const { template } = await import('./_/error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send(event, html);
});

const assets = {
  "/artporio.png": {
    "type": "image/png",
    "etag": "\"4d0a98-GQqajmy6ZVJFk+aWI3J936RVRKs\"",
    "mtime": "2024-09-05T05:46:47.505Z",
    "size": 5048984,
    "path": "../../.output/public/artporio.png"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-n8egyE9tcb7sKGr/pYCaQ4uWqxI\"",
    "mtime": "2024-09-05T05:46:47.500Z",
    "size": 4286,
    "path": "../../.output/public/favicon.ico"
  },
  "/github.png": {
    "type": "image/png",
    "etag": "\"1f7c-HA93jOVusNqPDcH48KdtBKrtrkE\"",
    "mtime": "2024-09-05T05:46:47.500Z",
    "size": 8060,
    "path": "../../.output/public/github.png"
  },
  "/icebreaking.png": {
    "type": "image/png",
    "etag": "\"44a32-un+NBFhwoAebVAFVTv3VLjZcPbo\"",
    "mtime": "2024-09-05T05:46:47.502Z",
    "size": 281138,
    "path": "../../.output/public/icebreaking.png"
  },
  "/jupjup.png": {
    "type": "image/png",
    "etag": "\"ce908-dHKbjJ9kQcaj+5SXpWeWmO29O80\"",
    "mtime": "2024-09-05T05:46:47.504Z",
    "size": 846088,
    "path": "../../.output/public/jupjup.png"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"1-rcg7GeeTSRscbqD9i0bNnzLlkvw\"",
    "mtime": "2024-09-05T05:46:47.501Z",
    "size": 1,
    "path": "../../.output/public/robots.txt"
  },
  "/_nuxt/BOnOhO1W.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"45c-8vjDeieijIPazTT47SRBL0+XdaY\"",
    "mtime": "2024-09-05T05:46:47.484Z",
    "size": 1116,
    "path": "../../.output/public/_nuxt/BOnOhO1W.js"
  },
  "/_nuxt/BYFBPWRX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7488-luM5eJwUfuVA80Q3ijWGnzahhrw\"",
    "mtime": "2024-09-05T05:46:47.484Z",
    "size": 29832,
    "path": "../../.output/public/_nuxt/BYFBPWRX.js"
  },
  "/_nuxt/CNUkhgXu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"180-ZUWWof8+VmxX+Wz7BJv8Dd/8TDw\"",
    "mtime": "2024-09-05T05:46:47.484Z",
    "size": 384,
    "path": "../../.output/public/_nuxt/CNUkhgXu.js"
  },
  "/_nuxt/CSjGL-KY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"21cb-0nwvoHJU7cfoGKoxMO2zTQBIbk8\"",
    "mtime": "2024-09-05T05:46:47.484Z",
    "size": 8651,
    "path": "../../.output/public/_nuxt/CSjGL-KY.js"
  },
  "/_nuxt/CTsWZ-w7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"335-t/XK9unk1zR39zEe+9oZLdtbszY\"",
    "mtime": "2024-09-05T05:46:47.489Z",
    "size": 821,
    "path": "../../.output/public/_nuxt/CTsWZ-w7.js"
  },
  "/_nuxt/CjcvLJsH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"19be-6fAZEQKpyO2ot18LhdU45bJitRQ\"",
    "mtime": "2024-09-05T05:46:47.485Z",
    "size": 6590,
    "path": "../../.output/public/_nuxt/CjcvLJsH.js"
  },
  "/_nuxt/D5fTWazA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"aeb-AKrwkAQ4VBmGT5TdFYAotttWgu4\"",
    "mtime": "2024-09-05T05:46:47.485Z",
    "size": 2795,
    "path": "../../.output/public/_nuxt/D5fTWazA.js"
  },
  "/_nuxt/DAasRZ5p.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ace-M7P0Yd+GHqq4LJaRKPkIflE8AWw\"",
    "mtime": "2024-09-05T05:46:47.484Z",
    "size": 2766,
    "path": "../../.output/public/_nuxt/DAasRZ5p.js"
  },
  "/_nuxt/DR3_hQDl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d7a-hhKF7TggTn4d2/LKvwLYkoUE7V8\"",
    "mtime": "2024-09-05T05:46:47.485Z",
    "size": 3450,
    "path": "../../.output/public/_nuxt/DR3_hQDl.js"
  },
  "/_nuxt/D_ZkfqDZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1a95-un/ry2effClSkGHQmK+ykupsh/M\"",
    "mtime": "2024-09-05T05:46:47.489Z",
    "size": 6805,
    "path": "../../.output/public/_nuxt/D_ZkfqDZ.js"
  },
  "/_nuxt/Paperlogy-1Thin.Bt5E9V_I.ttf": {
    "type": "font/ttf",
    "etag": "\"a6dd4-Aosp+uIFzHkF2K+2w+c7NO3JMHI\"",
    "mtime": "2024-09-05T05:46:47.487Z",
    "size": 683476,
    "path": "../../.output/public/_nuxt/Paperlogy-1Thin.Bt5E9V_I.ttf"
  },
  "/_nuxt/Paperlogy-2ExtraLight.DvBcbnfM.ttf": {
    "type": "font/ttf",
    "etag": "\"a66a0-H+4hMXzYF6Sa68RwmhuX4rR6uhE\"",
    "mtime": "2024-09-05T05:46:47.489Z",
    "size": 681632,
    "path": "../../.output/public/_nuxt/Paperlogy-2ExtraLight.DvBcbnfM.ttf"
  },
  "/_nuxt/Paperlogy-3Light.CRlTOtVC.ttf": {
    "type": "font/ttf",
    "etag": "\"a62d0-8GbZFSzRGSert3/o+zR9/i82hjY\"",
    "mtime": "2024-09-05T05:46:47.486Z",
    "size": 680656,
    "path": "../../.output/public/_nuxt/Paperlogy-3Light.CRlTOtVC.ttf"
  },
  "/_nuxt/Paperlogy-4Regular.Bxwq9xuH.ttf": {
    "type": "font/ttf",
    "etag": "\"a5e38-fVikf0+WH9YACMgMfgH5riJidJk\"",
    "mtime": "2024-09-05T05:46:47.487Z",
    "size": 679480,
    "path": "../../.output/public/_nuxt/Paperlogy-4Regular.Bxwq9xuH.ttf"
  },
  "/_nuxt/Paperlogy-5Medium.D0pf9AtY.ttf": {
    "type": "font/ttf",
    "etag": "\"a5aa0-5I54Acxrg18CnN2BbAUE6UKMbdE\"",
    "mtime": "2024-09-05T05:46:47.490Z",
    "size": 678560,
    "path": "../../.output/public/_nuxt/Paperlogy-5Medium.D0pf9AtY.ttf"
  },
  "/_nuxt/Paperlogy-6SemiBold.Bgpe6yyI.ttf": {
    "type": "font/ttf",
    "etag": "\"a5750-CYaa/CCELcCW77nZ8ez7OmyBCn4\"",
    "mtime": "2024-09-05T05:46:47.488Z",
    "size": 677712,
    "path": "../../.output/public/_nuxt/Paperlogy-6SemiBold.Bgpe6yyI.ttf"
  },
  "/_nuxt/Paperlogy-7Bold.C_MikIAt.ttf": {
    "type": "font/ttf",
    "etag": "\"a536c-yg7lztxuLQcCESaFikI6035vQ9g\"",
    "mtime": "2024-09-05T05:46:47.487Z",
    "size": 676716,
    "path": "../../.output/public/_nuxt/Paperlogy-7Bold.C_MikIAt.ttf"
  },
  "/_nuxt/Paperlogy-8ExtraBold.DQM-XU9W.ttf": {
    "type": "font/ttf",
    "etag": "\"a4878-s1qN6+StCOptMP1NHQKY4DPK76w\"",
    "mtime": "2024-09-05T05:46:47.489Z",
    "size": 673912,
    "path": "../../.output/public/_nuxt/Paperlogy-8ExtraBold.DQM-XU9W.ttf"
  },
  "/_nuxt/Paperlogy-9Black.Bx4GWEsG.ttf": {
    "type": "font/ttf",
    "etag": "\"a4a98-vZgtC2eNUEg26S8OCmf+5SHq+pk\"",
    "mtime": "2024-09-05T05:46:47.490Z",
    "size": 674456,
    "path": "../../.output/public/_nuxt/Paperlogy-9Black.Bx4GWEsG.ttf"
  },
  "/_nuxt/error-404.DXySnQZL.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"de4-cv/yrt/1rcgdseZU74nJDkNz/D4\"",
    "mtime": "2024-09-05T05:46:47.489Z",
    "size": 3556,
    "path": "../../.output/public/_nuxt/error-404.DXySnQZL.css"
  },
  "/_nuxt/error-500.CIkJDsQj.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"75c-r1mfGkUqSoC3T/DKOvGxQ300OGQ\"",
    "mtime": "2024-09-05T05:46:47.489Z",
    "size": 1884,
    "path": "../../.output/public/_nuxt/error-500.CIkJDsQj.css"
  },
  "/_nuxt/index.B8vVWS4O.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"69b-0lTBtcwBQiePLfOJB1+PelY/5KE\"",
    "mtime": "2024-09-05T05:46:47.490Z",
    "size": 1691,
    "path": "../../.output/public/_nuxt/index.B8vVWS4O.css"
  },
  "/_nuxt/x_1N3NI4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"26cda-wrEBoY+wYAd4codPS4znqZyAvaA\"",
    "mtime": "2024-09-05T05:46:47.490Z",
    "size": 158938,
    "path": "../../.output/public/_nuxt/x_1N3NI4.js"
  },
  "/skills/react.png": {
    "type": "image/png",
    "etag": "\"32549-g1GUfSWceZyZSP8LuhFvizVnf2c\"",
    "mtime": "2024-09-05T05:46:47.498Z",
    "size": 206153,
    "path": "../../.output/public/skills/react.png"
  },
  "/skills/s1.png": {
    "type": "image/png",
    "etag": "\"20de-hsZbB1Tso6aqlyxtzyvtwAhXjK0\"",
    "mtime": "2024-09-05T05:46:47.493Z",
    "size": 8414,
    "path": "../../.output/public/skills/s1.png"
  },
  "/skills/s10.png": {
    "type": "image/png",
    "etag": "\"18f1-Q+AZm4IB5G1AH8BRMUNAgiElJwo\"",
    "mtime": "2024-09-05T05:46:47.494Z",
    "size": 6385,
    "path": "../../.output/public/skills/s10.png"
  },
  "/skills/s11.png": {
    "type": "image/png",
    "etag": "\"15e0-jWYq0/4t6qzpo5DqTDnvHbILKiU\"",
    "mtime": "2024-09-05T05:46:47.494Z",
    "size": 5600,
    "path": "../../.output/public/skills/s11.png"
  },
  "/skills/s2.png": {
    "type": "image/png",
    "etag": "\"14e7-XypcQpjWTtjgPYDPxX0o7B4CoKw\"",
    "mtime": "2024-09-05T05:46:47.497Z",
    "size": 5351,
    "path": "../../.output/public/skills/s2.png"
  },
  "/skills/s3.png": {
    "type": "image/png",
    "etag": "\"17c7-Y/EkMrNe7RjExCZtC4uy1B+Uwgw\"",
    "mtime": "2024-09-05T05:46:47.497Z",
    "size": 6087,
    "path": "../../.output/public/skills/s3.png"
  },
  "/skills/s4.png": {
    "type": "image/png",
    "etag": "\"14f5-92qy3dThrRBJ3teBGITf6PGa4IY\"",
    "mtime": "2024-09-05T05:46:47.497Z",
    "size": 5365,
    "path": "../../.output/public/skills/s4.png"
  },
  "/skills/s5.png": {
    "type": "image/png",
    "etag": "\"17c9-4OjjCMN6dRtVUOpumvZrRzYtCto\"",
    "mtime": "2024-09-05T05:46:47.497Z",
    "size": 6089,
    "path": "../../.output/public/skills/s5.png"
  },
  "/skills/s6.png": {
    "type": "image/png",
    "etag": "\"1a33-e+AKsh2fR2ciRjJ4qmiY3VJdoTA\"",
    "mtime": "2024-09-05T05:46:47.497Z",
    "size": 6707,
    "path": "../../.output/public/skills/s6.png"
  },
  "/skills/s7.png": {
    "type": "image/png",
    "etag": "\"2039-8o10M4CKEQ+kG7iiPcjX8fEXKic\"",
    "mtime": "2024-09-05T05:46:47.497Z",
    "size": 8249,
    "path": "../../.output/public/skills/s7.png"
  },
  "/skills/s8.png": {
    "type": "image/png",
    "etag": "\"1f81-BDump0I2EzCrV98lrsU7Wv9L09E\"",
    "mtime": "2024-09-05T05:46:47.498Z",
    "size": 8065,
    "path": "../../.output/public/skills/s8.png"
  },
  "/skills/s9.png": {
    "type": "image/png",
    "etag": "\"20bc-o04l48Iq02ih4QW3OXhXmCPYDz0\"",
    "mtime": "2024-09-05T05:46:47.498Z",
    "size": 8380,
    "path": "../../.output/public/skills/s9.png"
  },
  "/skills/tailwind.png": {
    "type": "image/png",
    "etag": "\"24172-36Gd5zgSNznCjquRvnMKCUCuRzs\"",
    "mtime": "2024-09-05T05:46:47.500Z",
    "size": 147826,
    "path": "../../.output/public/skills/tailwind.png"
  },
  "/skills/typescript.png": {
    "type": "image/png",
    "etag": "\"2d8c1-ThLrXSmOsyUd0eNSTQro+lmGElY\"",
    "mtime": "2024-09-05T05:46:47.500Z",
    "size": 186561,
    "path": "../../.output/public/skills/typescript.png"
  },
  "/skills/vue.png": {
    "type": "image/png",
    "etag": "\"2511a-/n85oT8m9NWFpEIBHk4Zk48v9EU\"",
    "mtime": "2024-09-05T05:46:47.500Z",
    "size": 151834,
    "path": "../../.output/public/skills/vue.png"
  },
  "/_nuxt/builds/latest.json": {
    "type": "application/json",
    "etag": "\"47-8vhWDmUpfrlRpDkjSsyiOKLrmiI\"",
    "mtime": "2024-09-05T05:46:47.479Z",
    "size": 71,
    "path": "../../.output/public/_nuxt/builds/latest.json"
  },
  "/_nuxt/builds/meta/001290d7-69c7-457d-90d5-ec1fd93303c9.json": {
    "type": "application/json",
    "etag": "\"8b-YkcKYeC/pG1UBRxjfTADNPkeU8A\"",
    "mtime": "2024-09-05T05:46:47.477Z",
    "size": 139,
    "path": "../../.output/public/_nuxt/builds/meta/001290d7-69c7-457d-90d5-ec1fd93303c9.json"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1},"/_nuxt/":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    setResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_4yj6wv = () => import('./_/renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/**', handler: _lazy_4yj6wv, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const localFetch = nitroApp.localFetch;
const closePrerenderer = () => nitroApp.hooks.callHook("close");
trapUnhandledNodeErrors();

export { useNitroApp as a, useStorage as b, closePrerenderer as c, getRouteRules as g, localFetch as l, useRuntimeConfig as u };
//# sourceMappingURL=runtime.mjs.map
