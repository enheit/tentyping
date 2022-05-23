<script lang="ts">
  import type { CaretType } from 'src/helpers/caret-type';

  import Letter from '../symbol/symbol.svelte'

  export let word: string;
  export let caretIndex: number;
  export let startIndex: number;
  export let actualSentece: string;
  export let typosIndexes: Set<number>
  export let done: boolean = false;
  export let isCapsLock = false
  export let caretType: CaretType

  const symbols = word.split("")
</script>

<div class="word">
  {#each symbols as symbol, index}
    {@const symbolIndex = startIndex + index}
    {@const typed = caretIndex > symbolIndex}
    {@const wrongSymbol = actualSentece.at(symbolIndex) !== symbol}

    <Letter
      symbol={symbol}
      invalid={done ? typosIndexes.has(symbolIndex) : typed && wrongSymbol}
      active={caretIndex === symbolIndex}
      typed={typed}
      isCapsLock={isCapsLock}
      caretType={caretType}
      on:caretChange
    />
  {/each}
</div>

<style>
  .word {
    display: flex;
  }
</style>

