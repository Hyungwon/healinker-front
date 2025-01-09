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
    // Initialize Kakao SDK
    initKakao();
    // Handle the Kakao login callback here
    const param_code = new URL(window.location.href).searchParams.get('code');
    console.log('code:', param_code);
    if (param_code) {
      // Process the authorization code
      console.log('Authorization code:', param_code);
      // You can send the code to your server to exchange for an access token
      this.getAccessToken(param_code);
    }
  },
  methods: {
    async getAccessToken(param_code) {
      try {
        const response = await axios.post('https://kauth.kakao.com/oauth/token', null,{
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          },
          params: {
            grant_type: 'authorization_code',
            client_id: import.meta.env.VITE_KAKAO_REST_KEY,
            redirect_uri: 'http://localhost:5173/',
            code: param_code
          }
        });
        localStorage.setItem('kakao_access_token', response.data.access_token);
        console.log('Access token:', response.data.access_token);
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