<template>
  <div class="column">
    <div class="card">
      <header class="card-header">
        <p v-if="title" class="card-header-title has-text-grey">
          {{ title }}
        </p>
        <div v-if="!title">
          <b-skeleton active width="100%"></b-skeleton>
        </div>
      </header>
      <div class="card-content">
        <div v-if="title" class="content has-text-centered">
          <slot />
        </div>
        <div v-if="!title">
          <b-skeleton active width="100%"></b-skeleton>
        </div>
      </div>
      <footer v-if="title" class="card-footer">
        <p v-if="footer" v-html="footer" class="card-footer-item has-text-grey" />
        <p style="display: inline-flex; align-self: center; padding: 0 1rem;">
          <rating :name="title" />
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
import Rating from '@/components/Rating'

export default {
  name: 'BuefyCard',
  components: {
    Rating
  },
  props: {
    title: {
      type: String,
      required: true
    },
    footer: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
