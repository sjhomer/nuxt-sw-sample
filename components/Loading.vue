<template>
  <section>
    <b-notification :closable="false">
      <slot />
      <b-loading :is-full-page="fullPage" :active="isLoading" :can-cancel="true">
        <b-icon
          pack="fas"
          icon="sync-alt"
          size="is-large"
          custom-class="fa-spin"
        >
        </b-icon>
      </b-loading>
    </b-notification>
  </section>
</template>

<script>
export default {
  name: 'BuefyLoading',
  props: {
    fullPage: {
      type: Boolean,
      required: false,
      default: false
    },
    isLoading: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>
