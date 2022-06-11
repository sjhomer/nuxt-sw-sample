<template>
  <section>
    <b-rate
      v-model="rate"
      icon-pack="fas"
      @change="success"
    ></b-rate>
  </section>
</template>
<script>
export default {
  name: 'BuefyRating',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      rate: this.$store.getters.getRating(this.name)
    }
  },
  methods: {
    success (rate) {
      this.$store.commit('updateRating', {
        rate,
        name: this.name
      })
      this.$buefy.toast.open({
        message: 'Thanks for you rating!',
        type: 'is-success'
      })
    }
  }
}
</script>
