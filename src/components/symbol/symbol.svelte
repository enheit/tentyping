<script lang="ts">
  export let symbol: string
  export let invalid: boolean = false
  export let active: boolean = false
  export let typed: boolean = false

  $: space = symbol === ' '
  $: activeBackground = active ? 'dark:bg-slate-600 bg-slate-300' : ''
  $: textColor = typed && !invalid ? 'text-slate-400 dark:text-slate-500' : ''
  $: textInvalid = invalid ? 'text-rose-500 dark:text-rose-500' : ''

  $: dynamicClasses = `dark:text-slate-100 ${textColor} ${activeBackground} ${textInvalid}`
</script>

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
</style>