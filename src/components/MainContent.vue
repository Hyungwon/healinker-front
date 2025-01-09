<script>
export default {
name: "MainContent"
}
</script>

<template>
  <main class="container my-5">
    <h1 class="text-center">건강검진 결과 분석하기</h1>
    <p class="text-center main_box mt-5">
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        파일 선택
      </button>
      PDF, PNG 파일을 여기에 드롭하세요.
    </p>
  </main>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header d-block text-center bb_none">
          <h5 class="modal-title" id="exampleModalLabel"><img src="/images/logo_text.png" class="text-center"/></h5>
          <!-- <button type="button" class="btn-close op0" data-bs-dismiss="modal" aria-label="Close"></button> -->
        </div>
        <div class="modal-body text-center">
          <h3 class="mb-3">검진결과를 한눈에 보세요</h3>
          <button class="start"> <img src="/images/icon_kakao.svg"> 카카오로 시작하기</button>
          <button class="start mt-3"> <img src="/images/icon_email.svg"> 이메일로 시작하기 </button>
          <p class="agree_text mt-3">본 서비스에 로그인함으로써 귀하는 <span class="heal_blue">이용약관 </span>및 <span class="heal_blue">개인정보처리방침</span>에 동의하게 됩니다.</p>
        </div>
        <!--       <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div> -->
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>