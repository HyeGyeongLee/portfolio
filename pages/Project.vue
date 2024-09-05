<template>
    <div class="bg-green-500 py-24 sm:py-32 sm:px-20 px-2">
        <div class="mb-20">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">Project</h2>
          <p class="mt-6 text-lg leading-8 text-gray-600"></p>
          <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-1 sm:gap-px sm:divide-y-0">
          <div v-for="(action, actionIdx) in actions" :key="action.title" :class="[actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '', actionIdx === 1 ? 'sm:rounded-tr-lg' : '', actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '', actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '', 'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500']">
            <div>
              <span :class="[action.iconBackground, action.iconForeground, 'inline-flex rounded-lg p-3 ring-4 ring-white']">
                <div>{{ actionIdx + 1 }}</div>
              </span>
            </div>
            <div class="sm:flex">
            <div class="w-[30%] mt-12">
              <img :src="action.img"/>
            </div>
            <div class="mt-8 sm:ml-12 pb-12">
              <h3 class="text-base font-semibold leading-6 text-gray-900">
                  <!-- Extend touch target to entire panel -->
                  <span class="absolute" aria-hidden="true" />
                  {{ action.title }}
              </h3>
              <p class="mt-2 text-lg text-gray-500">teamName : {{ action.teamName }}</p>
                <p class="mt-2 text-lg text-gray-500">{{ action.detail }}</p>

                <a target='_blank' :href="action.href">
                  <p class="mt-12 text-lg text-gray-500">링크 : {{ action.href }}</p>
                </a>

                <a target='_blank' :href="action.Notionhref">
                  <p class="mt-12 text-lg text-gray-500">노션 설명 링크 : {{ action.Notionhref }}</p>
                </a>
              </div>
              <span class="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
              </span>
            </div>
          </div>
          </div>
        </div>
    </div>
  </template>
  
  <script setup>
  import {
    AcademicCapIcon,
    BanknotesIcon,
    CheckBadgeIcon,
    ClockIcon,
    ReceiptRefundIcon,
    UsersIcon,
  } from '@heroicons/vue/24/outline'
  
  const actions = [
    {
      title: 'jupjup',
      date: '2024. 08 ~ 2024. 09',
      href: 'https://jupjup.shop/',
      icon: ClockIcon,
      iconForeground: 'text-teal-700',
      iconBackground: 'bg-teal-50',
      teamName:'줍벤져스',
      detail:'나눔을 통한 미니멀리즘을 실천할 수 있는 웹사이트',
      Notionhref:'https://bamzrara.notion.site/jupjup-41feef19b9f645db85d71be870718996?pvs=4',
      img: '/jupjup.png',

    },
    {
      title: '아트폴리오',
      date: '2023. 08 - 2023. 08',
      href: 'https://hyegyeonglee-art-profile.netlify.app/',
      icon: CheckBadgeIcon,
      iconForeground: 'text-purple-700',
      iconBackground: 'bg-purple-50',
      teamName:'이혜경',
      detail:'그동안 그려왔던 디지털 그림을 위한 웹사이트',
      Notionhref:'https://hyegyeonglee-art-profile.netlify.app/',
      img: '/artporio.png',

    },
    {
      title: '아이스브레이킹',
      date: '2023. 04 - 2023. 04',
      href: 'https://bamzrara.notion.site/f5fefc1daed84149a1277960aede5546',
      icon: CheckBadgeIcon,
      iconForeground: 'text-purple-700',
      iconBackground: 'bg-purple-50',
      teamName:'이혜경',
      detail:'할 말이 떨어졌을 때, 질문 질문카드와 간단한 게임을 통해 훨씬 쉽고 빠르게 서로 가까워 질 수 있는 간단한 웹사이트',
      Notionhref:'https://bamzrara.notion.site/f5fefc1daed84149a1277960aede5546',
      img: '/icebreaking.png',

    },
  ]
  </script>