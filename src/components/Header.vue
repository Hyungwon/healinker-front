<template>
  <div>
    <img alt="힐링커 로고" src="/images/logo_main.svg" />
    <div>Healinker</div>

    <div>
      <div @click="login">로그인</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    login() {
      alert("로그인");
      console.log("로그인");
    },
  },
}
</script>

<style scoped></style>