<script lang="ts">
  import "bootstrap-icons/font/bootstrap-icons.css";
  import { ignoredKeys, Key } from "../helpers/key.enum";
  import { writable } from "svelte/store";
  import Word from "../components/word/word.svelte";
  import InfoItem from "../components/info-item/info-item.svelte";

  const sentence = 'lorem ipsum dolor sit amet consectetur adipiscing elit phasellus et turpis lacus donec dolor justo lacinia et odio nec placerat dapibus ex donec accumsan dui quis dolor sollicitudin eu facilisis purus malesuada donec vitae eleifend arcu vel interdum enim'
  const words = sentence.split(/(\s+)/)

  let RAFId: number = -1
  const wpm = writable(0)
  const typos = writable(0)
  const caretIndex = writable(0)
  const typedSymbols = writable('')
  const typosIndexes = writable(new Set<number>())

  $: done = $caretIndex === sentence.length
  $: accuracy = 100 - Math.round($typos / ($typedSymbols.length || 1) * 100) // || 1 ignore 0 to prevent rendiring NaN

  $: if (done) {
    cancelAnimationFrame(RAFId)
  }

  let startTimestamp: number | null = null
  let lastTimestamp = 0;
  let speedInMs = 500;

  function step (timestamp: number): void {
    if (!startTimestamp) {
      startTimestamp = timestamp
    }

    const localTimestamp = timestamp - startTimestamp

    if (timestamp - lastTimestamp >= speedInMs) {
      lastTimestamp = timestamp;

      const progressInMinutes = (localTimestamp / 1000) / 60

      $wpm = calculateGrossWpm($typedSymbols.length, progressInMinutes || 1) // `... || 1` removes 0 case, which renders Infinity
    }

    RAFId = requestAnimationFrame(step)
  }

  function reset(): void {
    $wpm = 0
    $caretIndex = 0
    $typos = 0
    $typedSymbols = ''
    $typosIndexes = new Set()
    startTimestamp = null
    lastTimestamp = 0

    cancelAnimationFrame(RAFId)
  }

  function clearLastSymbol (): void {
    $typedSymbols = $typedSymbols.slice(0, -1)
    $caretIndex = Math.max($caretIndex - 1, 0)
  }
 
  function handleInput (event: KeyboardEvent): void {
    if (event.code === Key.Enter) {
      reset()
      return
    }

    if (done) {
      return
    }

    const isKeyIgnored = ignoredKeys.some(ignoredKey => ignoredKey === event.key)

    if (event.metaKey || event.ctrlKey || isKeyIgnored) {
      return
    } 
    
    if (event.code === Key.Backspace) {
      clearLastSymbol()
      return
    }

    if ($caretIndex === 0) {
      RAFId = requestAnimationFrame(step)
    }

    const typedSymbol = event.key
    const expectedSymbol = sentence.at($caretIndex)
    const typo = expectedSymbol !== typedSymbol

    if (typo) {
      $typos += 1
      typosIndexes.update(prevTyposIndexes => prevTyposIndexes.add($caretIndex))
    }

    $typedSymbols += typedSymbol
    $caretIndex += 1
  }

  function getTyposEmoji (progress: number, typos: number, done: boolean): string {
    if (done && typos === 0) {
      return 'bi-emoji-heart-eyes'
    } else if (typos > 0 && typos <= 3) {
      return 'bi-emoji-expressionless'
    } else if (typos > 3 && typos <= 10) {
      return 'bi-emoji-frown'
    } else if (typos > 10) {
      return 'bi-emoji-angry'
    }
    
    return 'bi-emoji-neutral'
  }

  function calculateGrossWpm (symbols: number, ellapsedTimeInMinutes: number): number {
    const averageCharacters = 5
    const grossWpm = Math.round((symbols / averageCharacters) / ellapsedTimeInMinutes)

    return grossWpm
  }
</script>

<svelte:head>
  <title>Tentyping</title>
</svelte:head>

<svelte:window on:keydown={handleInput} />

<div class="container">
  <div class="typing-info">
    <InfoItem icon='bi-lightning' label='words/min' value={$wpm.toString()} />
    <InfoItem icon='bi-percent' label='accuracy' value={`${accuracy}`} />
    <InfoItem icon={getTyposEmoji(0, $typos, done)} label='typos' value={$typos.toString()} />
  </div>
  <div class="sentence">
    {#each words as word, i}
      <Word
        done={done}
        word={word}
        caretIndex={$caretIndex}
        startIndex={words.slice(0, i).join("").length}
        actualSentece={$typedSymbols}
        typosIndexes={$typosIndexes}
      />
    {/each}
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    height: calc(100% - 30px); /* minus (top + bottom) paddings */
    padding: 15px;
    gap: 36px;
  }

  .typing-info {
    display: flex;
    align-self: center;
    gap: 16px;
  }

  .sentence {
    display: flex;
    flex-wrap: wrap;
  }
</style>
