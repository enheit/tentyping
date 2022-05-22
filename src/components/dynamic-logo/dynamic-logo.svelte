<script>
  import { writable } from 'svelte/store'

  const title = writable('')
  const misspelledLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  const arbitraryIndex = Math.floor(Math.random() * misspelledLetters.length)
  const misspelledLetter = misspelledLetters[arbitraryIndex]
  const text = 'tentypin' + misspelledLetter;
  const speedInMs = 100;

  let index = 0;

  const typingAnimation = () => {
    if (index < text.length) {
      $title += text.at(index)
      index++

      setTimeout(typingAnimation, speedInMs);
    } else {
      setTimeout(() => {
        $title = $title.slice(0, -1)

        setTimeout(() => $title += 'g', speedInMs)
      }, 500)
    }
  }

  typingAnimation()
</script>

<h1 class="font-bold text-3xl dark:text-slate-100">{$title}</h1>

