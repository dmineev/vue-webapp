<script setup lang="ts">
import { onMounted, ref } from "vue";


interface IOption {
  name: string
  value: string
}

// api-placeholder

const options: IOption[] = [{name: "Project name", value: "my-vue-project"},{name: "Splash screen", value: "false"},{name: "PWA", value: "false"},{name: "Open graph meta tags", value: "false"},{name: "Google Analytics", value: "false"},{name: "Github Actions Workflow", value: "false"},{name: "App Layout", value: "MainLayout"},{name: "Navigation drawer", value: "SimpleDrawer"},{name: "Navbar", value: "SimpleNavbar"},{name: "Header", value: "SimpleHeader"},{name: "Footer", value: "SimpleFooter"},{name: "undefined", value: "false"},{name: "REST API adapter", value: "false"}];
</script>

<template>
  <div>
    <h2>Congratulations with scaffolding your vue webapp!</h2>
    <h3 v-if="options.length">
      Selected options:
    </h3>
    <ul>
      <li
        v-for="option in options"
        :key="option.name"
        :class="{ dimmed: option.value === 'false' }"
      >
        <span class="name">{{ option.name }}</span>
        <span class="value">{{ option.value }}</span>
      </li>
    </ul>
      </div>
</template>

<style scoped>
ul {
  color: var(--vwa-c-text-2);
  border: 1px solid var(--vwa-c-divider);
  margin-bottom: 2em;
  li {
    padding: .4rem;
    display: flex;
    &:nth-child(even) {
      background-color: var(--vwa-c-bg-alt);
    }
    &.dimmed {
      opacity: 0.5;
    }
    span {
      width: 50%;
    }
  }
}
button {
  padding: 0.3em 1em;
}
</style>
