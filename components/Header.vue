<template>
  <header>
    <!-- 로그인 상태에 따라 이미지 소스를 동적으로 변경 -->
    <img :src="userImage" id="dropdownMenuImage" alt="User Image"/>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      // 실제 로그인 여부와 프로필 이미지 URL은 변경될 수 있음
      isLoggedIn: false,
      userProfileImage: '/images/user-profile.png'
    }
  },
  computed: {
    userImage() {
      return this.isLoggedIn ? this.userProfileImage : '/images/blank.png';
    }
  }
}
</script> 