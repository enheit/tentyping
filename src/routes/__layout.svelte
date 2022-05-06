<div class="container">
  <header>header</header>

  <main>
    <slot />
  </main>

  <footer>footer</footer>
</div>

<style>
  :global(html, body) {
    height: 100%;
  }

  :global(body) {
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
  }

  .container {
    min-height: 100%;
    max-width: 1000px;
    width: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 100%;
  }
</style>
