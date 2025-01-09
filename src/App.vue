<template>
    <!-- Header -->
    <Header/>

    <!-- Main Content -->
    <MainContent/>

    <!-- Footer -->
    <Footer/>
</template>
<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import MainContent from "./components/MainContent.vue";

export default {
  name: 'App',
  components: {
    Footer,
    Header,
    MainContent
  },
}
</script>

<style lang="scss" scoped></style>