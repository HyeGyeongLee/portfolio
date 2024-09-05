import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0 = publicAssetsURL("/github.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "bg-blue-500 py-24 sm:py-32",
    style: { "height": "100vh" }
  }, _attrs))}><div class="text-center mb-20"><h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Archiving</h2><p class="mt-6 text-lg leading-8 text-gray-600"></p></div><div class="bg-white max-w-7xl m-auto rounded-lg"><img${ssrRenderAttr("src", _imports_0)} class="m-auto py-12"><div class="text-center text-blue-600 pb-12"><a target="_blank" href="https://github.com/HyeGyeongLee">https://github.com/HyeGyeongLee</a></div><div class="text-center pb-12 font-bold"><p>\uAE43 \uD5C8\uBE0C \uC800\uC7A5\uC18C \uC785\uB2C8\uB2E4.</p><p>\uC0AC\uC774\uB4DC \uD504\uB85C\uC81D\uD2B8 \uC704\uC8FC\uB85C \uC800\uC7A5\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.</p></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Archiving.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Archiving = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Archiving as default };
//# sourceMappingURL=Archiving-DsVHK_JW.mjs.map
