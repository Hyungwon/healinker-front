export function initKakao() {
    if (Kakao && Kakao.isInitialized()) {
        // Nothing to do
    } else {  // 카카오 SDK 초기화
        Kakao.init(import.meta.env.VITE_KAKAO_JS_KEY);
    }
}

export function resetKakao() {
    if (Kakao && Kakao.isInitialized()) {
        Kakao.Auth.logout(() => {
            console.log('Kakao logout completed');
        });
    }
}