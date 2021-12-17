<template>
  <div class="">
    <div>
      <div class="flex h-20 fixed z-10 w-full justify-between items-center bg-blue-150 px-4 lg:px-12 xl:px-16">
        <a href="/">
          <img src="../assets/brandlogo.png" alt="" class="h-14 invert" style="filter: invert(1);">
        </a>
        <div class="flex">
          <input type="text" class="bg-white w-96 rounded-l px-3" style="outline: none;">
          <button class="flex bg-c-green py-1 items-center rounded-r text-white px-10 gap-x-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
          </svg><span class="text-lg">Search</span></button>
        </div>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  }
}
</script>
