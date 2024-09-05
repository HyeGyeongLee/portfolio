import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { ref, useSSRContext } from 'vue';
import { _ as _export_sfc } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    const projects = [
      {
        name: "\uC774\uB984",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
      <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
    </svg>`,
        href: "#",
        members: "\uC774\uD61C\uACBD",
        bgColor: "bg-pink-600"
      },
      { name: "\uC0DD\uB144\uC6D4\uC77C", svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
    <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
    <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clip-rule="evenodd" />
    </svg>
    `, href: "#", members: "94.10.15", bgColor: "bg-purple-600" },
      { name: "\uC8FC\uC18C\uC9C0", svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
    <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
    </svg>
    `, href: "#", members: "\uAD00\uC545\uAD6C \uCCAD\uB8E1 4\uAE38 8", bgColor: "bg-yellow-500" },
      { name: "\uC5F0\uB77D\uCC98", svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
    <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
    </svg>
    `, href: "#", members: "010-2460-2101", bgColor: "bg-green-500" },
      { name: "\uC774\uBA54\uC77C", svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
    </svg>
    `, href: "#", members: "wingedant1@naver.com", bgColor: "bg-blue-500" },
      { name: "\uD559\uB825", svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
  <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
  <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
</svg>
`, href: "#", members: "\uACC4\uBA85\uB300\uD559\uAD50 \uC11C\uC591\uD654\uACFC(\uC911\uD1F4), \uBD80\uC0B0\uB514\uC9C0\uD138 \uB300\uD559\uAD50 \uC2EC\uB9AC\uBBF8\uC220\uD559\uACFC (\uC878\uC5C5)", bgColor: "bg-orange-500" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-335ecaf5><div class="wrapper bg-black" data-v-335ecaf5><div class="typing-demo text-white" data-v-335ecaf5> FRONTEND DEVELOPER. </div><div class="typing-demo-2 text-white -mt-[30rem]" data-v-335ecaf5> FRONTEND DEVELOPER. </div></div><div class="wrapper-mo bg-black" data-v-335ecaf5><div class="-mt-[9rem]" data-v-335ecaf5><div class="typing-demo-mo text-white" data-v-335ecaf5> FRONTEND DEVELOPER. </div><div class="typing-demo-mo text-white" data-v-335ecaf5> FRONTEND DEVELOPER. </div></div></div><div class="relative" data-v-335ecaf5><div class="arrow" data-v-335ecaf5><span data-v-335ecaf5></span><span data-v-335ecaf5></span><span data-v-335ecaf5></span><div class="text-white/30 absolute top-[70px] text-[1rem] -ml-8 whitespace-nowrap font-bold" data-v-335ecaf5>About me</div></div></div><div class="mt-20 mx-6 mb-20" data-v-335ecaf5><div data-v-335ecaf5><h2 class="underline decoration-pink-600 underline-offset-[1rem] text-3xl font-medium text-black mb-20 text-center" data-v-335ecaf5>About ME</h2><ul role="list" class="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-1 sm:gap-6 lg:grid-cols-1 lg:w-[50%] m-auto" data-v-335ecaf5><!--[-->`);
      ssrRenderList(projects, (project) => {
        var _a;
        _push(`<li class="flex rounded-md shadow-sm h-full" data-v-335ecaf5><div class="${ssrRenderClass([project.bgColor, "flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white"])}" data-v-335ecaf5><template data-v-335ecaf5><div data-v-335ecaf5>${(_a = project.svg) != null ? _a : ""}</div></template></div><div class="flex flex-1 items-center justify-between rounded-r-md border-b border-r border-t border-gray-200 bg-white" data-v-335ecaf5><div class="flex-1 px-4 py-2 text-sm" data-v-335ecaf5><a${ssrRenderAttr("href", project.href)} class="text-[18px] text-gray-900 hover:text-gray-600" data-v-335ecaf5>${ssrInterpolate(project.name)}</a><p class="text-[17px] text-gray-500" data-v-335ecaf5>${ssrInterpolate(project.members)}</p></div></div></li>`);
      });
      _push(`<!--]--></ul></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-335ecaf5"]]);

export { index as default };
//# sourceMappingURL=index-D44TPsKp.mjs.map
