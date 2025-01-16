<script>
import { initKakao } from '../utils/kakao';
import axios from "axios";

export default {
  name: "CallbackKakao",
  data() {
    return {
      code: null,
    };
  },
  created() {
    this.$nextTick(() => {
      this.getAccessToken();
    });
  },
  methods: {
    async getAccessToken() {
      try {
        const p_code = new URL(window.location.href).searchParams.get('code');
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
        Kakao.Auth.setAccessToken(kakaoToken);
        localStorage.setItem('kakao_access_token', kakaoToken);
        Cookies.set('kakao_access_token', kakaoToken);
        // You can save the access token to the local storage or Vuex store
      } catch (error) {
        console.error('Failed to get access token:', error);
      }
    },
  },
}
</script>

<template>
  <div>
    <h1>카카오 로그인 콜백</h1>
  </div>
</template>