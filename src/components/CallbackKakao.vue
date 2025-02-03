<script>
import { initKakao } from '../utils/kakao';
import axios from "axios";
import Cookies from 'js-cookie';

export default {
  name: "CallbackKakao",
  data() {
    return {
      code: null,
    };
  },
  created() {
    // Kakao SDK 초기화
    initKakao();
    this.$nextTick(() => {
      this.getAccessToken();
    });
  },
  methods: {
    async getAccessToken() {
      try {
        const p_code = new URL(window.location.href).searchParams.get('code');
        if (!p_code) return; // 코드가 없으면 early return

        const q_data = {
          grant_type: 'authorization_code',
          client_id: import.meta.env.VITE_KAKAO_REST_KEY,
          redirect_uri: import.meta.env.VITE_KAKAO_REDIRECT_URI,
          code: p_code
        };
        const q_string = Object.keys(q_data)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(q_data[k]))
            .join('&');
        const response = await axios.post('https://kauth.kakao.com/oauth/token', q_string,{
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        });
        
        const kakaoToken = response.data.access_token;
        
        // window와 Kakao 객체가 존재하는지 확인
        if (typeof window !== 'undefined' && window.Kakao && window.Kakao.Auth) {
          window.Kakao.Auth.setAccessToken(kakaoToken);
        } else {
          console.warn('Kakao SDK가 초기화되지 않았습니다.');
        }

        localStorage.setItem('kakao_access_token', kakaoToken);
        Cookies.set('kakao_access_token', kakaoToken);
        
        // 토큰 저장 후 필요한 리다이렉션이나 상태 업데이트를 여기서 수행할 수 있습니다
        this.$router.push('/');
      } catch (error) {
        console.error('Failed to get access token:', error);
      }
    },
  }
}
</script>

<template>
  <div>
    <h1>카카오 로그인 콜백</h1>
  </div>
</template>