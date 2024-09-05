import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "devalue";
const _imports_0 = publicAssetsURL("/github.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "bg-blue-500 py-24 sm:py-32",
    style: { "height": "100vh" }
  }, _attrs))}><div class="text-center mb-20"><h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Archiving</h2><p class="mt-6 text-lg leading-8 text-gray-600"></p></div><div class="bg-white max-w-7xl m-auto rounded-lg"><img${ssrRenderAttr("src", _imports_0)} class="m-auto py-12"><div class="text-center text-blue-600 pb-12"><a target="_blank" href="https://github.com/HyeGyeongLee">https://github.com/HyeGyeongLee</a></div><div class="text-center pb-12 font-bold"><p>깃 허브 저장소 입니다.</p><p>사이드 프로젝트 위주로 저장되어 있습니다.</p></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Archiving.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Archiving = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Archiving as default
};
//# sourceMappingURL=Archiving-DsVHK_JW.js.map
