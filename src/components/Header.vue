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
            <img src="/images/blank.png" class="profile-img dropdown-toggle" id="dropdownMenuImage" data-bs-toggle="dropdown" aria-expanded="false"/>
            <button
                class="arrow-btn"
                id="dropdownArrowBtn"
                data-bs-toggle="dropdown"
                aria-expanded="false">
            </button>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuImage dropdownArrowBtn">
              <li><a class="dropdown-item" href="#">설정</a></li>
              <li><a class="dropdown-item" href="#" @click="isLogin ? logout() : showLoginModal()">{{ isLogin ? '로그아웃' : '로그인' }}</a></li>
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
import {initKakao, resetKakao} from "../utils/kakao";
import Cookies from 'js-cookie';
import axios from "axios";
import router from "../router/index.js";

export default {
  name: "Header",
  data() {
    return {
      // isLogin 제거
    }
  },
  computed: {
    isLogin() {
      return this.checkLogin();
    }
  },
  methods: {
    checkLogin() {
      const loginValue = localStorage.getItem('kakao_access_token');
      return !(!loginValue || loginValue === 'expired');
    },
    logout() {
      localStorage.removeItem('kakao_access_token');
      Cookies.remove('kakao_access_token');
      resetKakao();
      // 페이지 강제 새로고침으로 변경
      window.location.href = '/';
    },
    showLoginModal() {
      const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
      loginModal.show();
    },
    kakaoLogin: debounce(async function () {
      try {
        initKakao();
        
        // 기존 토큰이 있다면 로그아웃 처리
        if (Kakao.Auth.getAccessToken()) {
          await new Promise((resolve, reject) => {
            Kakao.API.request({
              url: '/v1/user/unlink',
              success: (response) => resolve(response),
              fail: (error) => reject(error),
            });
          });
          Kakao.Auth.setAccessToken(undefined);
        }

        // 카카오 인증 프로세스 시작
        await new Promise((resolve, reject) => {
          Kakao.Auth.authorize({
            redirectUri: import.meta.env.VITE_KAKAO_REDIRECT_URI,
            success: () => resolve(),
            fail: (error) => reject(error),
          });
        });

        // 사용자 정보 요청
        const userInfo = await new Promise((resolve, reject) => {
          Kakao.API.request({
            url: '/v2/user/me',
            data: {
              property_keys: ["kakao_account.email"]
            },
            success: (response) => resolve(response),
            fail: (error) => reject(error),
          });
        });

        console.log('카카오 로그인 성공:', userInfo);
        
      } catch (error) {
        console.error('카카오 로그인 실패:', error);
        // 에러 처리를 위한 사용자 피드백 추가 가능
      }
    }, 500),
    emailLogin() {
      console.log("Email login initiated");
    }
  },
  async mounted() {
    // isLogin이 computed 속성이므로 직접 할당할 필요 없음
    if (!this.isLogin) {
      this.showLoginModal();
    }

    const p_url = new URL(window.location.href);
    const p_code = p_url.searchParams.get('code');
    const p_path = p_url.pathname;
    if (p_code && p_path === '/callback-kakao') {
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
      localStorage.setItem('kakao_access_token', kakaoToken);
      if( this.checkLogin() ) {
        this.$router.push('/');
      }
    }
  },

}
</script>
