<template>
  <loading :full-page="false" :is-loading="isLoading">
    <h1 class="title" style="text-transform: capitalize;">{{ type }}</h1>
    <section class="columns is-multiline is-mobile">
      <div
        v-for="(item, index) in content"
        :key="index"
        class="column is-6"
      >
        <card
          :title="item.name"
          :footer="item.footer"
        >
          {{ item.description }}
        </card>
      </div>
    </section>
  </loading>
</template>

<script>
import Card from '@/components/Card'
import Loading from '@/components/Loading'
import apiPath, { ApiTypes, formatResult } from '@/lib/api'

const initialContent = Array(10).fill({
  title: null,
  description: null,
  url: null
})

export default {
  name: 'IndexPage',
  components: {
    Card,
    Loading
  },
  async asyncData ({
    query,
    $axios
  }) {
    const {
      type = 'people'
    } = query
    // Validate API type exists.
    if (!ApiTypes[type]) {
      // Todo: handle error
      throw new Error('Invalid type')
    }

    // Attempt to pull data.
    const content = await $axios.$get(`${apiPath}${type}`) || null

    return {
      // Set current type to reflect in page title
      type,
      // We're no longer loading after this point.
      // Todo: handle how to re-enable loader on type change.
      isLoading: false,
      // Format the resulting data based on the type.
      content: content?.results.map(item => formatResult(ApiTypes[type], item)) || []
    }
  },
  data () {
    return {
      type: 'Loading',
      content: initialContent,
      isLoading: true
    }
  },
  watchQuery (newQuery) {
    const shouldUpdate = !!newQuery.type
    // Reset state
    this.content = initialContent
    this.isLoading = shouldUpdate
    // Update content if needed.
    return shouldUpdate
  }
}
</script>
