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
  <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel">
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
import axios from "axios";

export default {
  name: "Header",
  data() {
    return {
      isLogin: false
    }
  },
  methods: {
    checkLogin() {
      const loginValue = localStorage.getItem('kakao_access_token');
      // 로그인 값이 비어 있거나 특정 조건이 맞지 않으면 false 반환
      if (!loginValue || loginValue === 'expired') {
        return false;
      }
      return true; // 로그인 상태
    },
    logout() {
      localStorage.removeItem('kakao_access_token');
      this.isLogin = false;
      Kakao.Auth.logout()
          .then(function(response) {
            console.log(Kakao.Auth.getAccessToken()); // null
          })
          .catch(function(error) {
            console.log('Not logged in.');
          });
    },
    showLoginModal() {
      const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
      loginModal.show();
    },
    kakaoLogin: debounce(function () {
      initKakao();
      const redirectUri = `${window.location.origin}/callback-kakao`;
      // const state = btoa(JSON.stringify({}));
      // Kakao.Auth.authorize({
      //   redirectUri: `${redirectUri}`,
      //   // state: `${state}`,
      // });


      if (Kakao.Auth.getAccessToken()) {
        Kakao.API.request({
          url: '/v1/user/unlink',
          success: function (response) {
            console.log(response)
          },
          fail: function (error) {
            console.log(error)
          },
        })
        Kakao.Auth.setAccessToken(undefined)
      }
      Kakao.Auth.authorize({
        redirectUri: import.meta.env.VITE_KAKAO_REDIRECT_URI,
        success: function () {
          Kakao.API.request({
            url: '/v2/user/me',
            data: {
              property_keys: ["kakao_account.email"]
            },
            success: async function (response) {
              console.log(response);
            },
            fail: function (error) {
              console.log(error)
            },
          })
        },
        fail: function (error) {
          console.log(error)
        },
      });
    }, 500),
    emailLogin() {
      console.log("Email login initiated");
    }
  },
  async mounted() {
    this.isLogin = this.checkLogin();
    if (!this.isLogin) {
      this.showLoginModal();
    }

    const p_code = new URL(window.location.href).searchParams.get('code');
    // if (p_code) {
    //
    // }
    console.debug('Header mounted:', p_code);
    if (p_code) { // 카카오 로그인 콜백
      const q_data = {
        grant_type: 'authorization_code',
        client_id: import.meta.env.VITE_KAKAO_REST_KEY,
        redirect_uri: import.meta.env.VITE_KAKAO_REDIRECT_URI,
        code: p_code
      };
      const q_string = Object.keys(q_data)
          .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(q_data[k]))
          .join('&');
      const response = await axios.post('https://kauth.kakao.com/oauth/token', q_string, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      });
      const kakaoToken = response.data.access_token;
      console.debug('Kakao token:', kakaoToken);
      // Kakao.Auth.setAccessToken(kakaoToken);
      localStorage.setItem('kakao_access_token', kakaoToken);
      this.$router.push('/');

    }
  }
}
</script>
