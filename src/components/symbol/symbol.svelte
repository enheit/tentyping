<script lang="ts">
  import type { CaretType } from "src/helpers/caret-type";
  import { createEventDispatcher } from "svelte";

  export let symbol: string
  export let invalid: boolean = false
  export let active: boolean = false
  export let typed: boolean = false
  export let isCapsLock: boolean = false
  export let caretType: CaretType

  const dispatch = createEventDispatcher<{ caretChange: void }>()

  $: space = symbol === ' '
  $: textColor = typed && !invalid ? 'text-slate-400 dark:text-slate-500' : 'dark:text-slate-100'
  $: textInvalid = invalid ? 'text-rose-500 dark:text-rose-500' : ''

  $: dynamicClasses = `${textColor} ${textInvalid}`
</script>

<div on:click={() => active && dispatch('caretChange')} class:cursor-pointer={active} class="flex relative">
  {#if active}
    {#if caretType === 'box'}
      <div class="absolute h-full -left-0.5 -right-0.5 border-2 p-1 dark:border-slate-500 border-slate-400 rounded-sm"></div>
    {:else if caretType === 'background'}
      <div class="absolute h-full w-full rounded-sm dark:bg-slate-600 bg-slate-300"></div>
    {:else if caretType === 'line'}
      <div class="flex self-center absolute h-5/6 w-0.5 rounded-sm -left-0.5 dark:bg-white bg-black"></div>
    {:else}
      <div class="absolute h-1 w-full rounded-sm bottom-0.5 dark:bg-white bg-black"></div>
    {/if}
  {/if}

  {#if isCapsLock && active}
    <div class="absolute w-[125px] -top-14 flex flex-col justify-center">
      <div class="asd flex gap-2 bg-[#F9E7EC] dark:bg-[#3F2136] p-2 rounded-lg text-rose-500">
        <span class="bi-exclamation-triangle-fill"></span>
        <p class="font-semibold">Caps Lock</p>
      </div>
      <div class="arrow-down border-[#F9E7EC] dark:border-[#3F2136]"></div>
    </div>
  {/if}

  <h3 class:space class="symbol z-10 rounded-sm {dynamicClasses}">
    {#if space}
      {#if invalid}
        <div class="circle bg-rose-500" />
      {:else}
        &nbsp;
      {/if}
    {:else}
      {symbol}
    {/if}
  </h3>
</div>


<style>
  .space {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14px;
  }

  .symbol {
    margin: 0;
    font-family: 'Roboto Mono', monospace;
    font-size: 24px;
  }

  .circle {
    position: relative;
    top: 2px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
  }

  .asd {
    transform: translateX(-50%);
  }

  .arrow-down {
    width: 0; 
    height: 0; 
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    
    border-top-width: 8px;
    border-top-style: solid;
  }
</style>