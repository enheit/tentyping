<script lang="ts">
  export let value: string
  export let label: string
  export let icon: string
</script>

<div class="container">
  <i class="icon bi {icon}"></i>

  <div class="inner-container">
    <h1 class="value">{value}</h1>
    <h3 class="label">{label}</h3>
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }

  .icon {
    font-size: 36px;
  }

  .label,
  .value {
    margin: 0;
  }
</style>