<template>
  <!-- Header -->
  <div>
    <Header />
  </div>
  <!-- Contents -->
  <div>
  </div>
  <!-- Footer -->
  <div>
    <Footer />
  </div>
</template>
<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Footer,
    Header
  },
}
</script>

<style lang="scss" scoped></style>