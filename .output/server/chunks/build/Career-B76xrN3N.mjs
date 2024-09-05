import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { ClockIcon, CheckBadgeIcon, UsersIcon, BanknotesIcon, ReceiptRefundIcon, AcademicCapIcon } from '@heroicons/vue/24/outline';

const _sfc_main = {
  __name: "Career",
  __ssrInlineRender: true,
  setup(__props) {
    const actions = [
      {
        title: "\uACBD\uCC30\uCCAD \uD504\uB85C\uC81D\uD2B8",
        date: "2024. 08 ~ ",
        href: "#",
        icon: ClockIcon,
        iconForeground: "text-teal-700",
        iconBackground: "bg-teal-50",
        company: "\uC5D0\uBCA4\uC5D0\uC140\uCF00\uC774",
        detail: "\uACBD\uCC30\uCCAD\uC5D0\uC11C \uC0AC\uC6A9\uD558\uB294 \uB3D9\uC601\uC0C1&\uC0AC\uC9C4x \uD3B8\uC9D1 \uD234 \uAC1C\uBC1C"
      },
      {
        title: "\uB450\uBE44\uB365 \uC6F9\uD230 \uD504\uB85C\uC81D\uD2B8",
        date: "2024. 04 - 2024. 07",
        href: "https://bamzrara.notion.site/f5fefc1daed84149a1277960aede5546",
        icon: CheckBadgeIcon,
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
        company: "\uB450\uBE44\uB365",
        detail: "\uBCF4\uC774\uC2A4 \uC704\uC8FC\uC758 \uC6F9\uD230 \uD2F0\uC800\uD398\uC774\uC9C0 \uAC1C\uBC1C & \uB450\uBE44\uB365 \uC6F9\uC0AC\uC774\uD2B8 ui \uAC1C\uBC1C, \uD478\uB529\uD230 \uC6F9\uD230 \uC0AC\uC774\uD2B8 \uD14C\uC2A4\uD2B8 \uD398\uC774\uC9C0 ui \uAC1C\uBC1C"
      },
      {
        title: "kt \uD615\uC0C1\uAD00\uB9AC \uC5C5\uBB34",
        date: "2024. 03 - 2024. 04",
        href: "#",
        icon: UsersIcon,
        iconForeground: "text-sky-700",
        iconBackground: "bg-sky-50",
        company: "\uC544\uC774\uB514\uBA54\uC774\uD2B8",
        detail: "\uC815\uC0B0\uAD00\uB828 \uD504\uB85C\uC2DC\uC800 \uAC1C\uBC1C \uB41C \uB0B4\uC6A9\uC744 qa\uD14C\uC2A4\uD2B8 \uD6C4 \uC218\uC815\uD558\uB294 \uC791\uC5C5"
      },
      {
        title: "skt \uC571 \uAE30\uB2A5 \uCD94\uAC00",
        date: "2023. 09 - 2023. 12",
        href: "https://bamzrara.notion.site/skt-pass-464d5df9350c410b85f6e3e43ee99711?pvs=4",
        icon: BanknotesIcon,
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
        company: "(\uC8FC)\uB9C8\uC774\uD50C\uB7AB",
        detail: "skt pass \uC571 \uBAA8\uB450\uC758 \uC99D\uBA85 \uC2E0\uADDC \uAE30\uB2A5 \uCD94\uAC00"
      },
      {
        title: "\uC778\uC2A4\uD3F0\uB4DC",
        date: "2022. 02 - 2023. 02",
        href: "https://bamzrara.notion.site/fafd74bc377a4f3eaa22eb0a9b0048b3?pvs=4",
        icon: ReceiptRefundIcon,
        iconForeground: "text-rose-700",
        iconBackground: "bg-rose-50",
        company: "\uC778\uC2A4\uD3F0\uB4DC",
        detail: "\uC0C8\uB85C\uC6B4 \uC2E0\uADDC \uC11C\uBE44\uC2A4 \uAE30\uD68D \uBC0F \uAC00\uC774\uB4DC \uC81C\uC791 \uBC0F \uD37C\uBE14, \uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C & \uAE30\uC874 \uC6B4\uC601\uD558\uB358 \uC11C\uBE44\uC2A4\uC5D0 \uC0C8\uB85C\uC6B4 \uC5B8\uC5B4\uB85C \uB9C8\uC774\uADF8\uB808\uC774\uC158"
      },
      {
        title: "tmap \uC6B4\uC601",
        date: "2021. 06 - 2021. 11",
        href: "https://bamzrara.notion.site/fafd74bc377a4f3eaa22eb0a9b0048b3?pvs=4",
        icon: AcademicCapIcon,
        iconForeground: "text-indigo-700",
        iconBackground: "bg-indigo-50",
        company: "\uAE30\uC220\uACBD\uC601\uBC1C\uC804\uC5F0\uAD6C\uD611\uB3D9\uC870\uD569 / \uC54C\uB9C8\uCEE4\uBBA4\uB2C8\uD2F0",
        detail: "tmap \uAE30\uC874 \uD648\uD398\uC774\uC9C0 \uC6B4\uC601 & tmap \uC571 \uC774\uBCA4\uD2B8 \uD398\uC774\uC9C0 \uAC1C\uBC1C & \uB9AC\uB274\uC5BC & \uC6B4\uC601"
      },
      {
        title: "\uC5E0\uC5D0\uC774\uCE58 \uAC74\uC124",
        date: "2020. 01 - 2020. 03",
        href: "#",
        icon: AcademicCapIcon,
        iconForeground: "text-indigo-700",
        iconBackground: "bg-indigo-50",
        company: "\uC5E0\uC5D0\uC774\uCE58\uAC74\uC124",
        detail: "xplatform \u2192 jsp \uB9C8\uC774\uADF8\uB808\uC774\uC158 \uAC74\uC124 \uC790\uC81C \uC7A5\uBE44 \uC190\uB9DD\uC2E4 \uC5EC\uBD80, \uC7AC\uACE0\uD30C\uC545 \uBD80\uBD84 "
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-orange-500 py-24 sm:py-32 px-20" }, _attrs))}><div class="text-center mb-20"><h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Career</h2><p class="mt-6 text-lg leading-8 text-gray-600"></p><div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-1 sm:gap-px sm:divide-y-0"><!--[-->`);
      ssrRenderList(actions, (action, actionIdx) => {
        _push(`<div class="${ssrRenderClass([actionIdx === 0 ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none" : "", actionIdx === 1 ? "sm:rounded-tr-lg" : "", actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "", actionIdx === actions.length - 1 ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none" : "", "group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"])}"><div><span class="${ssrRenderClass([action.iconBackground, action.iconForeground, "inline-flex rounded-lg p-3 ring-4 ring-white"])}"><div>${ssrInterpolate(actionIdx + 1)}</div></span></div><div class="mt-8"><h3 class="text-base font-semibold leading-6 text-gray-900"><a target="_blank"${ssrRenderAttr("href", action.href)} class="focus:outline-none"><span class="absolute inset-0" aria-hidden="true"></span> ${ssrInterpolate(action.title)}</a>`);
        if (actionIdx == 0) {
          _push(`<p>\uC9C4\uD589\uC911</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</h3> ${ssrInterpolate(action.date)} <p class="mt-2 text-lg text-gray-500">company : ${ssrInterpolate(action.company)}</p><p class="mt-2 text-lg text-gray-500">${ssrInterpolate(action.detail)}</p></div><span class="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true"><svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"></path></svg></span></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Career.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Career-B76xrN3N.mjs.map
