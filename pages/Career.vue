<template>
    <div class="bg-orange-500 py-24 sm:py-32 px-20">
        <div class="text-center mb-20">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Career</h2>
          <p class="mt-6 text-lg leading-8 text-gray-600"></p>

          <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-1 sm:gap-px sm:divide-y-0">
            <div v-for="(action, actionIdx) in actions" :key="action.title" :class="[actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '', actionIdx === 1 ? 'sm:rounded-tr-lg' : '', actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '', actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '', 'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500']">
              <div>
                <span :class="[action.iconBackground, action.iconForeground, 'inline-flex rounded-lg p-3 ring-4 ring-white']">
                  <div>{{ actionIdx + 1 }}</div>
                </span>
              </div>
              <div class="mt-8">
                <h3 class="text-base font-semibold leading-6 text-gray-900">
                  <a target='_blank' :href="action.href" class="focus:outline-none">
                    <!-- Extend touch target to entire panel -->
                    <span class="absolute inset-0" aria-hidden="true" />
                    {{ action.title }}
                  </a>
                  <p v-if="actionIdx == 0">진행중</p>
                </h3>
                {{ action.date }}
                <p class="mt-2 text-sm text-gray-500">company : {{ action.company }}</p>
                <p class="mt-2 text-sm text-gray-500">company : {{ action.detail }}</p>
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
      title: '경찰청 프로젝트',
      date: '2024. 08 ~ ',
      href: '#',
      icon: ClockIcon,
      iconForeground: 'text-teal-700',
      iconBackground: 'bg-teal-50',
      company:'에벤에셀케이',
      detail:'경찰청에서 사용하는 동영상&사진x 편집 툴 개발'
    },
    {
      title: '두비덥 웹툰 프로젝트',
      date: '2024. 04 - 2024. 07',
      href: 'https://bamzrara.notion.site/f5fefc1daed84149a1277960aede5546',
      icon: CheckBadgeIcon,
      iconForeground: 'text-purple-700',
      iconBackground: 'bg-purple-50',
      company:'두비덥',
      detail:'보이스 위주의 웹툰 티저페이지 개발 & 두비덥 웹사이트 ui 개발, 푸딩툰 웹툰 사이트 테스트 페이지 ui 개발'

    },
    {
      title: 'kt 형상관리 업무',
      date: '2024. 03 - 2024. 04',
      href: '#',
      icon: UsersIcon,
      iconForeground: 'text-sky-700',
      iconBackground: 'bg-sky-50',
      company:'아이디메이트',
      detail:'정산관련 프로시저 개발 된 내용을 qa테스트 후 수정하는 작업'
    },
    {
      title: 'skt 앱 기능 추가',
      date: '2023. 09 - 2023. 12',
      href: 'https://bamzrara.notion.site/skt-pass-464d5df9350c410b85f6e3e43ee99711?pvs=4',
      icon: BanknotesIcon,
      iconForeground: 'text-yellow-700',
      iconBackground: 'bg-yellow-50',
      company:'(주)마이플랫',
      detail:'skt pass 앱 모두의 증명 신규 기능 추가'
    },
    {
      title: '인스폰드',
      date: '2022. 02 - 2023. 02',
      href: 'https://bamzrara.notion.site/fafd74bc377a4f3eaa22eb0a9b0048b3?pvs=4',
      icon: ReceiptRefundIcon,
      iconForeground: 'text-rose-700',
      iconBackground: 'bg-rose-50',
      company:'인스폰드',
      detail:'새로운 신규 서비스 기획 및 가이드 제작 및 퍼블, 프론트엔드 개발 & 기존 운영하던 서비스에 새로운 언어로 마이그레이션'

    },
    {
      title: 'tmap 운영',
      date: '2021. 06 - 2021. 11',
      href: 'https://bamzrara.notion.site/fafd74bc377a4f3eaa22eb0a9b0048b3?pvs=4',
      icon: AcademicCapIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      company:'기술경영발전연구협동조합 / 알마커뮤니티',
      detail:'tmap 기존 홈페이지 운영 & tmap 앱 이벤트 페이지 개발 & 리뉴얼 & 운영'

    },
    {
      title: '엠에이치 건설',
      date: '2020. 01 - 2020. 03',
      href: '#',
      icon: AcademicCapIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      company:'엠에이치건설',
      detail:'xplatform → jsp 마이그레이션 건설 자제 장비 손망실 여부, 재고파악 부분 '


    },
  ]
  </script>