<template>
  <div class="layoutSuper">
    <!-- Header -->
    <div class="header">
      <Header/>
    </div>
    <!-- Contents -->
    <div>
    </div>
    <!-- Footer -->
    <div class="footer">
      <Footer/>
    </div>
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

<style lang="scss" scoped>
.layoutSuper {
  width: 100%;
  position: relative;
  height: 100%;
  text-align: left;
  font-size: var(--heading-size);
  color: var(--text-default-default);
  font-family: var(--heading);
}

.header {
  //position: absolute;
  //top: 0px;
  //left: 0px;
  background-color: var(--background-default-default);
  border-bottom: 1px solid var(--border-default-default);
  box-sizing: border-box;
  width: var(--device-width);
  height: 64px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: center;
  padding: var(--space-400) var(--space-800);
  gap: 0px 24px;
  color: var(--color-black);
}

.footer {
  //position: absolute;
  //top: 522px;
  //left: 0px;
  background-color: var(--background-default-default);
  border-top: 1px solid var(--border-default-default);
  box-sizing: border-box;
  width: var(--device-width);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-13xl);
  gap: var(--space-800);
  font-size: var(--single-line-body-base-size);
}
</style>