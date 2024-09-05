import { _ as _export_sfc, a as navigateTo } from './server.mjs';
import { useSSRContext, mergeProps, ref, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { Dialog, DialogPanel } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
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

const _sfc_main$2 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const navigation = [
      // { name: 'About me', href: '/' },
      { name: "Skills", href: "/Skills" },
      { name: "Career", href: "/Career" },
      { name: "Project", href: "/Project" },
      { name: "Archiving", href: "/Archiving" }
    ];
    const mobileMenuOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "bg-black" }, _attrs))}><nav class="mx-auto flex items-center justify-between p-6 lg:px-12" aria-label="Global"><div href="#" class="-m-1.5 p-1.5"><span class="sr-only">Your Company</span><a class="text-2xl font-black font-Paperlogy9Black text-white" href="javascript:void(0)">HYEGYEONG LEE</a></div><div class="flex lg:hidden"><button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"><span class="sr-only">Open main menu</span>`);
      _push(ssrRenderComponent(unref(Bars3Icon), {
        class: "h-6 w-6",
        "aria-hidden": "true"
      }, null, _parent));
      _push(`</button></div><div class="hidden lg:flex lg:gap-x-12"><!--[-->`);
      ssrRenderList(navigation, (item) => {
        _push(`<a href="javascript:void(0)" class="hover:animate-pulse font-Paperlogy3Light text-sm font-semibold leading-6 text-white">${ssrInterpolate(item.name)}</a>`);
      });
      _push(`<!--]--></div></nav>`);
      _push(ssrRenderComponent(unref(Dialog), {
        class: "lg:hidden",
        onClose: ($event) => mobileMenuOpen.value = false,
        open: mobileMenuOpen.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="fixed inset-0 z-10"${_scopeId}></div>`);
            _push2(ssrRenderComponent(unref(DialogPanel), { class: "fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between"${_scopeId2}><div href="#" class="-m-1.5 p-1.5"${_scopeId2}><span class="sr-only"${_scopeId2}>Your Company</span><a class="text-2xl font-black font-Paperlogy9Black" href="javascript:void(0)"${_scopeId2}>HYEGYEONG LEE</a></div><button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700"${_scopeId2}><span class="sr-only"${_scopeId2}>Close menu</span>`);
                  _push3(ssrRenderComponent(unref(XMarkIcon), {
                    class: "h-6 w-6",
                    "aria-hidden": "true"
                  }, null, _parent3, _scopeId2));
                  _push3(`</button></div><div class="mt-6 flow-root"${_scopeId2}><div class="-my-6 divide-y divide-gray-500/10"${_scopeId2}><div class="space-y-2 py-6"${_scopeId2}><!--[-->`);
                  ssrRenderList(navigation, (item) => {
                    _push3(`<a href="javascript:void(0)" class="font-Paperlogy3Light -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"${_scopeId2}>${ssrInterpolate(item.name)}</a>`);
                  });
                  _push3(`<!--]--></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("div", {
                        href: "#",
                        class: "-m-1.5 p-1.5"
                      }, [
                        createVNode("span", { class: "sr-only" }, "Your Company"),
                        createVNode("a", {
                          class: "text-2xl font-black font-Paperlogy9Black",
                          href: "javascript:void(0)",
                          onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/")
                        }, "HYEGYEONG LEE", 8, ["onClick"])
                      ]),
                      createVNode("button", {
                        type: "button",
                        class: "-m-2.5 rounded-md p-2.5 text-gray-700",
                        onClick: ($event) => mobileMenuOpen.value = false
                      }, [
                        createVNode("span", { class: "sr-only" }, "Close menu"),
                        createVNode(unref(XMarkIcon), {
                          class: "h-6 w-6",
                          "aria-hidden": "true"
                        })
                      ], 8, ["onClick"])
                    ]),
                    createVNode("div", { class: "mt-6 flow-root" }, [
                      createVNode("div", { class: "-my-6 divide-y divide-gray-500/10" }, [
                        createVNode("div", { class: "space-y-2 py-6" }, [
                          (openBlock(), createBlock(Fragment, null, renderList(navigation, (item) => {
                            return createVNode("a", {
                              key: item.name,
                              href: "javascript:void(0)",
                              onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(item.href),
                              class: "font-Paperlogy3Light -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            }, toDisplayString(item.name), 9, ["onClick"]);
                          }), 64))
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "fixed inset-0 z-10" }),
              createVNode(unref(DialogPanel), { class: "fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", {
                      href: "#",
                      class: "-m-1.5 p-1.5"
                    }, [
                      createVNode("span", { class: "sr-only" }, "Your Company"),
                      createVNode("a", {
                        class: "text-2xl font-black font-Paperlogy9Black",
                        href: "javascript:void(0)",
                        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/")
                      }, "HYEGYEONG LEE", 8, ["onClick"])
                    ]),
                    createVNode("button", {
                      type: "button",
                      class: "-m-2.5 rounded-md p-2.5 text-gray-700",
                      onClick: ($event) => mobileMenuOpen.value = false
                    }, [
                      createVNode("span", { class: "sr-only" }, "Close menu"),
                      createVNode(unref(XMarkIcon), {
                        class: "h-6 w-6",
                        "aria-hidden": "true"
                      })
                    ], 8, ["onClick"])
                  ]),
                  createVNode("div", { class: "mt-6 flow-root" }, [
                    createVNode("div", { class: "-my-6 divide-y divide-gray-500/10" }, [
                      createVNode("div", { class: "space-y-2 py-6" }, [
                        (openBlock(), createBlock(Fragment, null, renderList(navigation, (item) => {
                          return createVNode("a", {
                            key: item.name,
                            href: "javascript:void(0)",
                            onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(item.href),
                            class: "font-Paperlogy3Light -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          }, toDisplayString(item.name), 9, ["onClick"]);
                        }), 64))
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = _sfc_main$2;
  const _component_Footer = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, {
    key: _ctx.$route.fullPath
  }, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<div class="flex-grow justify-center"></div>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-DdUYV5fN.mjs.map
