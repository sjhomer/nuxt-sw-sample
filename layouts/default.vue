<template>
  <div>
    <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.2.0/css/all.css" />
    <section class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">
          Star Wars Encyclopedia
        </p>
        <ul class="menu-list">
          <li
            v-for="(item, key) of items"
            :key="key"
          >
            <NuxtLink
              :to="item.to"
              exact-active-class="is-active"
              style="text-transform: capitalize;"
            >
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<script>
import { ApiTypes } from '@/lib/api'

export default {
  name: 'DefaultLayout',
  data () {
    return {
      items: Object.keys(ApiTypes).map(key => (
        {
          title: key,
          to: {
            path: '/',
            query: { type: key }
          }
        }
      ))
    }
  }
}
</script>
