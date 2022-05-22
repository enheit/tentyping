<script lang="ts">
  import "bootstrap-icons/font/bootstrap-icons.css";
  import shuffle from "lodash.shuffle";
  import { writable } from "svelte/store";
  import { words as commonEnglishWords } from "../../static/data/1000-most-common-words.json";
  import Word from "../components/word/word.svelte";
  import { ignoredKeys,Key } from "../helpers/key.enum";

  function getShuffledWords(): string[] {
    return shuffle(commonEnglishWords);
  }

  function getChunkOfWords(words: string[], number: number): string[] {
    return words.slice(0, number);
  }

  function makeSentence(words: string[]): string {
    return words.join(" ");
  }

  function generateSentence(): string {
    return makeSentence(getChunkOfWords(getShuffledWords(), 20));
  }

  let sentence = generateSentence();
  // TODO: Replace with RegExp ['word ', 'word ', 'word ', 'word']
  $: words = sentence
    .split(" ")
    .map((item, i, arr) => (arr.length - 1 === i ? item : item + " "));

  let RAFId: number = -1;
  const wpm = writable(0);
  const typos = writable(0);
  const caretIndex = writable(0);
  const typedSymbols = writable("");
  const typosIndexes = writable(new Set<number>());

  $: done = $caretIndex === sentence.length;
  $: accuracy = Math.max(100 - Math.round(($typos / ($typedSymbols.length || 1)) * 100), 0); // || 1 ignore 0 to prevent rendiring NaN

  $: if (done) {
    cancelAnimationFrame(RAFId);
  }

  let startTimestamp: number | null = null;
  let lastTimestamp = 0;
  let speedInMs = 500;

  function step(timestamp: number): void {
    if (!startTimestamp) {
      startTimestamp = timestamp;
    }

    const localTimestamp = timestamp - startTimestamp;

    if (timestamp - lastTimestamp >= speedInMs) {
      lastTimestamp = timestamp;

      const progressInMinutes = localTimestamp / 1000 / 60;

      $wpm = calculateGrossWpm($typedSymbols.length, progressInMinutes || 1); // `... || 1` removes 0 case, which renders Infinity
    }

    RAFId = requestAnimationFrame(step);
  }

  function reset(): void {
    $wpm = 0;
    $caretIndex = 0;
    $typos = 0;
    $typedSymbols = "";
    $typosIndexes = new Set();
    sentence = generateSentence();
    startTimestamp = null;
    lastTimestamp = 0;

    cancelAnimationFrame(RAFId);
  }

  function clearLastSymbol(): void {
    $typedSymbols = $typedSymbols.slice(0, -1);
    $caretIndex = Math.max($caretIndex - 1, 0);
  }

  function removeLastWord(): void {
    const spacePosition = sentence.lastIndexOf(' ', $caretIndex - 2)
    const distance =  $caretIndex - spacePosition - 1

    $typedSymbols = $typedSymbols.slice(0, -distance)
    $caretIndex = spacePosition + 1
  }

  function handleInput(event: KeyboardEvent): void {
    if (event.code === Key.Enter) {
      reset();
      return;
    }

    if (done) {
      return;
    }

    if (event.code === Key.Backspace && event.altKey) {
      removeLastWord()
      return;
    }

    const isKeyIgnored = ignoredKeys.some(
      (ignoredKey) => ignoredKey === event.key
    );

    if (event.metaKey || event.ctrlKey || isKeyIgnored) {
      return;
    }

    if (event.code === Key.Backspace) {
      clearLastSymbol();
      return;
    }

    if ($caretIndex === 0) {
      RAFId = requestAnimationFrame(step);
    }

    const typedSymbol = event.key;
    const expectedSymbol = sentence.at($caretIndex);
    const typo = expectedSymbol !== typedSymbol;

    if (typo) {
      $typos += 1;
      typosIndexes.update((prevTyposIndexes) =>
        prevTyposIndexes.add($caretIndex)
      );
    }

    $typedSymbols += typedSymbol;
    $caretIndex += 1;
  }

  function calculateGrossWpm(
    symbols: number,
    ellapsedTimeInMinutes: number
  ): number {
    const averageCharacters = 5;
    const grossWpm = Math.round(
      symbols / averageCharacters / ellapsedTimeInMinutes
    );

    return grossWpm;
  }
</script>

<svelte:head>
  <title>Tentyping</title>
</svelte:head>

<svelte:window on:keydown={handleInput} />

<div class="flex flex-col grow gap-8 px-4 -mt-20 justify-center">
  <div title='WPM / Accuracy / Typos' class="flex items-end text-lg justify-center gap-2">
    <div class="flex gap-4 dark:text-slate-100">
      <div title='Words per minute' class="min-w-[100px]  justify-center flex gap-2 text-2xl items-center">
        <span class="bi-lightning font-bold text-yellow-500"></span>
        <p>{$wpm}</p>
      </div>

      <div title="Accuracy" class="min-w-[100px] justify-center flex gap-2 text-2xl  items-center">
        <span class="bi-bullseye text-sky-500"></span>
        <p>{accuracy}%</p>
      </div>
      
      <div title='Typos' class="min-w-[100px] justify-center flex gap-2 text-2xl items-center">
        <span class="bi-cone text-rose-500"></span>
        <p>{$typos}</p>
      </div>

      <!-- <div title="Accuracy" class="min-w-[100px]  justify-center flex gap-2 text-xl  items-center">
        <span class="bi-bullseye"></span>
        <p>{accuracy}%</p>
      </div>

      
      <div title='Typos' class="min-w-[100px]  justify-center flex gap-2 text-xl items-center">
        <span class="bi-cone"></span>
        <p>{$typos}</p>
      </div> -->
    </div>
  </div>

  <div class="flex flex-wrap">
    {#each words as word, i (word + i)}
      <Word
        {done}
        {word}
        caretIndex={$caretIndex}
        startIndex={words.slice(0, i).join("").length}
        actualSentece={$typedSymbols}
        typosIndexes={$typosIndexes}
      />
    {/each}
  </div>

  <div class:invisible={!done} class="flex flex-col items-center gap-4 justify-center">
    <!-- <div class="flex gap-4 text-slate-100">
      <div title="Accuracy" class="justify-center flex gap-2 text-xl  items-center">
        <span class="bi-bullseye text-rose-500"></span>
        <p>{accuracy}%</p>
      </div>
      
      <div title='Typos' class="justify-center flex gap-2 text-xl items-center">
        <span class="bi-cone text-orange-500"></span>
        <p>{$typos}</p>
      </div>
    </div> -->

    <!-- <div class="flex gap-8 text-slate-100">
      <p>WPM {$wpm} (gross)</p>
      <p>Accuracy {accuracy}%</p>
      <p>Typos {$typos}</p>
    </div> -->

    <button on:click={reset} class="flex items-center gap-2 bg-green-300 dark:bg-green-500 rounded-lg px-2 py-1">
      <span class="bi-arrow-return-left"></span>
      <p>Restart</p>
    </button>

    <!-- <p class="text-green-100">Enter — restart</p> -->
  </div>
</div>
