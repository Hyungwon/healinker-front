<template>
  <div class="menuSeparator">
    <div class="rule"></div>
  </div>
  <div class="footerTextLine1">
    <div class="footerCompanyInfo">힐링커 | 사업자등록번호: 637-37-01563 | 통신판매번호 2021-서울구로-0459 |<br/> 대표자: 이금희 | 주소: 서울특별시 관악구
      서림7일 24, 507호 | 대표전화: 1666-2837
    </div>
    <div calss="footerPolicy">서비스이용약관 | 개인정보처리방침</div>
  </div>
  <div class="footerTextLine2">
    <div class="healinkerAllRights">©Healinker. All rights reserved.</div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.rule {
  align-self: stretch;
  position: relative;
  background-color: var(--border-default-default);
  height: 1px;
}

.menuSeparator {
  align-self: stretch;
  border-radius: var(--br-5xs);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-sm) 0px;
}

.footerTextLine1 {
  width: 100%;
  height: 44px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
}

.footerCompanyInfo {
  width: 60%;
  position: relative;
  line-height: 140%;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.footerPolicy {
  position: relative;
  line-height: 140%;
}

.footerTextLine2 {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
}

.healinkerAllRights {
  flex: 1;
  position: relative;
  line-height: 140%;
}
</style>