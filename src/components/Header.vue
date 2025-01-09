<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container">
        <a class="navbar-brand" href="#"><img src="/images/logo_text.png"/></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="ms-auto">
          <!-- Dropdown -->
          <div class="dropdown">
            <img src="/images/blank.png"
                 class="profile-img dropdown-toggle"
                 id="dropdownMenuButton"
                 data-bs-toggle="dropdown"
                 aria-expanded="false"/>
            <button
                class="arrow-btn"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false">

            </button>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
              <li><a class="dropdown-item" href="#">설정</a></li>
              <li><a class="dropdown-item" href="#">로그아웃</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
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

<style scoped>
</style>