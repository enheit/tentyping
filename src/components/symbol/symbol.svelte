<script lang="ts">
  export let symbol: string
  export let invalid: boolean = false
  export let active: boolean = false
  export let typed: boolean = false
  export let isCapsLock: boolean = false

  $: space = symbol === ' '
  $: activeBackground = active ? 'dark:bg-slate-600 bg-slate-300' : ''
  $: textColor = typed && !invalid ? 'text-slate-400 dark:text-slate-500' : 'dark:text-slate-100'
  $: textInvalid = invalid ? 'text-rose-500 dark:text-rose-500' : ''

  $: dynamicClasses = `${textColor} ${activeBackground} ${textInvalid}`
</script>

<div class="flex relative">
  {#if isCapsLock && active}
  <div class="absolute w-[125px] -top-14 flex flex-col justify-center">
    <div class="asd flex gap-2 bg-[#F9E7EC] dark:bg-[#3F2136] p-2 rounded-lg text-rose-500">
      <span class="bi-exclamation-triangle-fill"></span>
      <p class="font-semibold">Caps Lock</p>
    </div>
    <div class="arrow-down border-[#F9E7EC] dark:border-[#3F2136]"></div>
  </div>

  {/if}

  <h3 class:space class="symbol rounded-sm {dynamicClasses}">
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