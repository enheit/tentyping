<script lang="ts">
  export let symbol: string
  export let invalid: boolean = false
  export let active: boolean = false
  export let typed: boolean = false

  $: space = symbol === ' '
</script>

<h3 class:invalid class:typed={typed && !invalid} class:active class:space class="symbol">
  {#if space}
    {#if invalid}
      <div class="circle" />
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
    background: red;
    border-radius: 50%;
  }

  .typed {
    opacity: 0.5;
  }

  .invalid {
    color: red;
  }

  .active {
    background: pink;
  }
</style>