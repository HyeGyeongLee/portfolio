<template>
    <header class="bg-black">
      <nav class="mx-auto flex items-center justify-between p-6 lg:px-12" aria-label="Global">
        <div href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <a class="text-2xl font-black font-Paperlogy9Black text-white" href="javascript:void(0)" @click="navigateTo('/')">HYEGYEONG LEE</a>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a v-for="item in navigation" :key="item.name" href="javascript:void(0)" @click="navigateTo(item.href)"  class="hover:animate-pulse font-Paperlogy3Light text-sm font-semibold leading-6 text-white">{{ item.name }}</a>
          <!-- <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a> -->
          <!-- <a href="https://www.instagram.com/bamzrara_/" target='_blank' class="text-gray-400 hover:text-gray-500">
              <span class="sr-only">LinkedIn</span>
              <svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
              </svg>
            </a> -->
        </div>
      </nav>
      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-10" />
        <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <div href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <a class="text-2xl font-black font-Paperlogy9Black" href="javascript:void(0)" @click="navigateTo('/')">HYEGYEONG LEE</a>
            </div>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a v-for="item in navigation" :key="item.name" href="javascript:void(0)" @click="navigateTo(item.href)" class="font-Paperlogy3Light -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
              </div>
              <!-- <div class="py-6">
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
              </div> -->
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { Dialog, DialogPanel } from '@headlessui/vue'
  import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
  
  const navigation = [
    // { name: 'About me', href: '/' },
    { name: 'Skills', href: '/Skills' },
    { name: 'Career', href: '/Career' },
    { name: 'Project', href: '/Project' },
    { name: 'Archiving', href: '/Archiving' },
  ]
  
  const mobileMenuOpen = ref(false)
  </script>
<style scoped>
</style>