<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Disclosure as="nav" class="navbar" v-slot="{ open }">
    <div class="max-w-8xl mx-auto sm:px-6 lg:px-4">
      <div class="relative flex items-center justify-between h-16 animate__animated animate__fadeInDown">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <font-awesome-icon class="logo" size="3x" icon="record-vinyl" />
            <h1 class="nav_title text-xl">AWA Record Store</h1>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <a v-for="item in navigation" :key="item.name" :href="item.href" class="nav-item" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:text-white', 'px-3 py-4 rounded-md text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" class="nav-item" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'

const navigation = [
  { name: 'Contact', href: '#contact', current: false },
]

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    MenuIcon,
    XIcon,
  },
  setup() {
    return {
      navigation,
    }
  },
}
</script>

<style>
  .navbar {
    background-color: #1B262C;
  }
  .nav_title{
    padding-left: 9px;
    font-weight: 500;
    color: #61befb;
  }

  .logo {
    color: #61befb;
    height: 34px;
    transition: transform .2s;
  }
  
  .logo:hover {
    transform: scale(1.3);
  }
  
  .nav-item{
    transition: transform .2s;
  }

  .nav-item:hover {
    transform: scale(1.1);
  }
</style>