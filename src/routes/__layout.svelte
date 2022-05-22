<script>
  import "../app.css";
  import DynamicLogo from '../components/dynamic-logo/dynamic-logo.svelte'

  let { version } = PACKAGE_JSON
</script>

<div class="container">
  <header>
    <DynamicLogo />
  </header>

  <main class="flex flex-col">
    <slot />
  </main>

  <footer>
    <div class="flex gap-6">
      <a href="mailto:roman.mahotskyi@gmail.com">
        <i class="bi bi-envelope-fill" />
        Contact
      </a>

      <a href="https://github.com/enheit/tentyping/issues/new">
        <i class="bi bi-bug-fill" />
        Bug report
      </a>

      <a href="https://github.com/enheit/tentyping/discussions/new">
        <i class="bi bi-question-circle-fill" />
        Question
      </a>
    </div>

    <div class="flex gap-6">
      <a href="https://github.com/enheit/tentyping">
        <i class="bi bi-github" />
        GitHub
      </a>

      <a href="https://github.com/enheit/tentyping/releases">
        <i class="bi bi-git" />
        {version}
      </a>
    </div>
  </footer>
</div>

<style>
  :root {
    --fontFamily: 'Lato', sans-serif;
  }

  :global(html, body) {
    height: 100%;
  }

  :global(body) {
    font-family: var(--fontFamily)
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

  header {
    padding: 16px;
  }

  footer {
    padding: 16px;
    display: flex;
    justify-content: space-between;
  }

  footer a {
    display: flex;
    align-items: center;
    gap: 4px;
  }
</style>
