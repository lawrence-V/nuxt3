<template>
  <div>
    <article class="sidebar">
      <p>Dashboard</p>
      <p>Seting</p>
    </article>

    <main>
      <slot></slot>
    </main>
  </div>
</template>

<style>
.sidebar {
  display: flex;
  flex-direction: column;
}
</style>
