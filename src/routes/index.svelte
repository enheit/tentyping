<script lang="ts">
  import "bootstrap-icons/font/bootstrap-icons.css";
  import { ignoredKeys, Key } from "../helpers/key.enum";
  import { writable } from "svelte/store";
  import Word from "../components/word/word.svelte";

  const sentence = 'lorem ipsum dolor sit amet consectetur adipiscing elit phasellus et turpis lacus donec dolor justo lacinia et odio nec placerat dapibus ex donec accumsan dui quis dolor sollicitudin eu facilisis purus malesuada donec vitae eleifend arcu vel interdum enim'
  const words = sentence.split(/(\s+)/)

  const typos = writable(0)
  const caretIndex = writable(0)
  const typedSymbols = writable('')

  function reset(): void {
    $caretIndex = 0
    $typos = 0
    $typedSymbols = ''
  }

  function clearLastSymbol (): void {
    $typedSymbols = $typedSymbols.slice(0, -1)
    $caretIndex = Math.max($caretIndex - 1, 0)
  }
 
  function handleInput (event: KeyboardEvent): void {
    const isKeyIgnored = ignoredKeys.some(ignoredKey => ignoredKey === event.key)

    if (event.metaKey || event.ctrlKey || isKeyIgnored) {
      return
    } 
    
    if (event.code === Key.Enter) {
      reset()
      return
    }
    
    if (event.code === Key.Backspace) {
      clearLastSymbol()
      return
    }

    const typedSymbol = event.key
    const expectedSymbol = sentence.at($caretIndex)
    const typo = expectedSymbol !== typedSymbol

    if (typo) {
      $typos += 1
    }

    $typedSymbols += typedSymbol
    $caretIndex += 1
  }
</script>

<svelte:head>
  <title>Tentyping</title>
</svelte:head>

<svelte:window on:keydown={handleInput} />

<div class="container">
  <div class="sentence">
    {#each words as word, i}
      <Word
        word={word}
        caretIndex={$caretIndex}
        startIndex={words.slice(0, i).join("").length}
        actualSentece={$typedSymbols}
      />
    {/each}
  </div>
</div>

<style>
  .container {
    display: flex;
    height: calc(100% - 30px); /* minus (top + bottom) paddings */
    align-items: center;
    padding: 15px;
  }

  .sentence {
    display: flex;
    flex-wrap: wrap;
  }
</style>
