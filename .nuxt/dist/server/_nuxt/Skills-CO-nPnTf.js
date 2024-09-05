import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
const _imports_0 = publicAssetsURL("/skills/s1.png");
const _sfc_main = {
  __name: "Skills",
  __ssrInlineRender: true,
  setup(__props) {
    const fontend = [
      {
        name: "HTML",
        imageUrl: "/skills/s7.png"
      },
      {
        name: "CSS",
        imageUrl: "/skills/s8.png"
      },
      {
        name: "JAVASCRIPT",
        imageUrl: "/skills/s9.png"
      },
      {
        name: "JSP",
        imageUrl: "/skills/s6.png"
      },
      {
        name: "VUE",
        imageUrl: "/skills/vue.png"
      },
      {
        name: "REACT",
        imageUrl: "/skills/react.png"
      },
      {
        name: "TAILWIND",
        imageUrl: "/skills/tailwind.png"
      },
      {
        name: "TYPESCRIPT",
        imageUrl: "/skills/typescript.png"
      }
      // More people...
    ];
    const control = [
      {
        name: "GIT",
        imageUrl: "/skills/s2.png"
      },
      {
        name: "GITHUB",
        imageUrl: "/skills/s3.png"
      },
      {
        name: "BITBUCKET",
        imageUrl: "/skills/s4.png"
      }
      // More people...
    ];
    const communication = [
      {
        name: "JIRA",
        imageUrl: "/skills/s5.png"
      },
      {
        name: "ZEPLIN",
        imageUrl: "/skills/s10.png"
      },
      {
        name: "FIGMA",
        imageUrl: "/skills/s11.png"
      }
      // More people...
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-indigo-600 py-24 sm:py-32" }, _attrs))}><div class="text-center mb-20"><h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">SKILLS</h2><p class="mt-6 text-lg leading-8 text-gray-600"></p></div><div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-4"><ul role="list" class="bg-white p-12 rounded-lg grid gap-x-8 gap-y-12 sm:grid-cols-1 sm:gap-y-16 xl:col-span-1"><p class="text-2xl font-bold text-center">FRONT-END</p><!--[-->`);
      ssrRenderList(fontend, (list) => {
        _push(`<li><div class="flex items-center gap-x-6"><img class="h-16 w-16"${ssrRenderAttr("src", list.imageUrl)} alt=""><div><h3 class="text-lg font-bold leading-7 tracking-tight text-gray-900">${ssrInterpolate(list.name)}</h3></div></div></li>`);
      });
      _push(`<!--]--></ul><ul role="list" class="bg-white p-12 rounded-lg h-[20rem]"><p class="text-2xl font-bold text-center">DEPLOYMENT</p><li><div class="flex items-center gap-x-6 mt-16"><img class="h-16 w-16"${ssrRenderAttr("src", _imports_0)} alt=""><div><h3 class="text-lg font-bold leading-7 tracking-tight text-gray-900">NETLIFY</h3></div></div></li></ul><ul role="list" class="bg-white p-12 rounded-lg h-[30rem]"><p class="text-xl font-bold text-center">VERSION CONTROL</p><!--[-->`);
      ssrRenderList(control, (list) => {
        _push(`<li><div class="flex items-center gap-x-6 mt-8"><img class="h-16 w-16"${ssrRenderAttr("src", list.imageUrl)} alt=""><div><h3 class="text-lg font-bold leading-7 tracking-tight text-gray-900">${ssrInterpolate(list.name)}</h3></div></div></li>`);
      });
      _push(`<!--]--></ul><ul role="list" class="bg-white p-12 rounded-lg h-[30rem]"><p class="text-xl font-bold text-center">COMMUNYCATION</p><!--[-->`);
      ssrRenderList(communication, (list) => {
        _push(`<li><div class="flex items-center gap-x-6 mt-8"><img class="h-16 w-16"${ssrRenderAttr("src", list.imageUrl)} alt=""><div><h3 class="text-lg font-bold leading-7 tracking-tight text-gray-900">${ssrInterpolate(list.name)}</h3></div></div></li>`);
      });
      _push(`<!--]--></ul></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Skills.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Skills-CO-nPnTf.js.map
