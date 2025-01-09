<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container">
        <a class="navbar-brand" href="/"><img src="/images/logo_text.png"/></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
              <li><a class="dropdown-item" href="#"
                     @click="isLogin ? logout() : showLoginModal()">{{ isLogin ? '로그아웃' : '로그인' }}</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <!-- Modal -->
  <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header d-block text-center bb_none">
          <h5 class="modal-title" id="loginModalLabel"><img src="/images/logo_text.png" class="text-center"/></h5>
          <button type="button" class="btn-close op0" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-center">
          <h3 class="mb-3">검진결과를 한눈에 보세요</h3>
          <button class="start" @click="kakaoLogin"><img src="/images/icon_kakao.svg"> 카카오로 시작하기</button>
          <button class="start mt-3" @click="emailLogin"><img src="/images/icon_email.svg"> 이메일로 시작하기</button>
          <p class="agree_text mt-3">본 서비스에 로그인함으로써 귀하는 <span class="heal_blue">이용약관 </span>및 <span class="heal_blue">개인정보처리방침</span>에
            동의하게 됩니다.</p>
        </div>
        <!--       <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div> -->
      </div>
    </div>
  </div>

</template>

<script>
import {debounce} from 'lodash';
import {initKakao} from "../utils/kakao";

export default {
  name: "Header",
  data() {
    return {
      isLogin: false
    }
  },
  methods: {
    checkLogin() {
      const loginValue = localStorage.getItem('loginId');
      // 로그인 값이 비어 있거나 특정 조건이 맞지 않으면 false 반환
      if (!loginValue || loginValue === 'expired') {
        return false;
      }
      return true; // 로그인 상태
    },
    logout() {
      localStorage.removeItem('loginId');
      this.isLogin = false;
    },
    showLoginModal() {
      const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
      loginModal.show();
    },
    kakaoLogin: debounce(function () {
      initKakao();

      const redirectUri = `${window.location.origin}/callback-kakao`;
      // const state = btoa(JSON.stringify({ redirectUri, appKey, previousUrl }));
      const state = btoa(JSON.stringify({}));
      Kakao.Auth.authorize({
        redirectUri: `${redirectUri}`,
        state: `${state}`,
      });
    }, 500),
    emailLogin() {
      // Email login logic here
      console.log("Email login initiated");
    }
  },
  mounted() {
    // 로그인 여부 확인
    this.isLogin = this.checkLogin();
    if (!this.isLogin) {
      this.showLoginModal();
    }
  }
}
</script>
