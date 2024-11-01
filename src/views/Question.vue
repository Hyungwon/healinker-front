<template>
  <div :class="$style.frameworkPc">
    <div :class="$style.header">
      <div :class="$style.block">
        <div :class="$style.logo">
          <div :class="$style.biTemporary">
            <img :class="$style.vectorIcon" alt="힐링커 로고" :src="icons.logo_main" />
            <div :class="$style.healinker">Healinker</div>
          </div>
        </div>
      </div>
      <div :class="$style.navigationPillList" />
      <div :class="$style.headerAuth">
        <div :class="$style.avatar">
          <div :class="$style.initials">F</div>
        </div>
        <img :class="$style.chevronDownIcon" alt="" :src="icons.icon_chevron_down" />
      </div>
    </div>
    <div :class="$style.heroActions">
      <div :class="$style.textContentTitle">
        <b :class="$style.title">건강검진 결과지 있으세요?</b>
      </div>
      <div :class="$style.buttonGroup">
        <div :class="$style.button">
          <div :class="$style.button1">예</div>
        </div>
        <div :class="$style.button2">
          <div :class="$style.button1">아니요</div>
        </div>
      </div>
    </div>
    <div :class="$style.footer">
      <div :class="$style.menuSeparator">
        <div :class="$style.rule" />
      </div>
      <div :class="$style.textLinkListItem">
        <div :class="$style.div">힐링커 | 사업자등록번호: 000-00-00000 | 통신판매번호 2021-서울구로-0459 | 대표자: 000 | 주소: 서울시 영등포구 은행로 11, 2층 | 대표전화: 1666-2837</div>
        <div :class="$style.listItem">서비스이용약관 | 개인정보처리방침</div>
      </div>
      <div :class="$style.textLinkListItem1">
        <div :class="$style.healinkerAllRights">© Healinker. All rights reserved.</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "question",
  computed: {
    icons() {
      return {
        logo: 'images/logo.svg',
        logo_main: 'images/logo_main.svg',
        icon_kakao: 'images/icon_kakao.svg',
        icon_email: 'images/icon_email.svg',
        icon_file: 'images/icon_file.svg',
        icon_chevron_down: 'images/icon_chevron_down.svg',
      }
    }
  }
})
</script>
<style module>.vectorIcon {
  width: 40px;
  position: relative;
  height: 40px;
}
.healinker {
  position: relative;
  letter-spacing: -0.02em;
  line-height: 120%;
  font-weight: 600;
}
.biTemporary {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--space-100);
}
.logo {
  width: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.block {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.navigationPillList {
  flex: 1;
  height: 32px;
}
.initials {
  position: absolute;
  top: calc(50% - 10.5px);
  left: calc(50% - 4px);
  line-height: 140%;
}
.avatar {
  width: var(--icon-small);
  position: relative;
  border-radius: var(--radius-full);
  background-color: var(--background-brand-default);
  height: var(--icon-small);
  overflow: hidden;
  flex-shrink: 0;
}
.chevronDownIcon {
  width: 16px;
  position: relative;
  height: 16px;
  overflow: hidden;
  flex-shrink: 0;
}
.headerAuth {
  border-radius: var(--radius-200);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--space-200) var(--space-300);
  gap: var(--space-200);
  text-align: center;
  font-size: var(--body-small-size);
  color: var(--background-default-secondary);
}
.header {
  width: var(--device-width);
  background-color: var(--background-default-default);
  border-bottom: 1px solid var(--border-default-default);
  box-sizing: border-box;
  height: 72px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: center;
  padding: var(--space-400) var(--space-800);
  gap: 0px 24px;
  color: #000;
}
.title {
  align-self: stretch;
  position: relative;
  letter-spacing: -0.02em;
  line-height: 120%;
}
.textContentTitle {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.button1 {
  position: relative;
  line-height: 100%;
}
.button {
  flex: 1;
  border-radius: var(--radius-200);
  background-color: var(--background-neutral-tertiary);
  border: 1px solid var(--border-neutral-secondary);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--space-300);
}
.button2 {
  flex: 1;
  border-radius: var(--radius-200);
  background-color: var(--background-brand-default);
  border: 1px solid var(--background-brand-default);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--space-300);
  color: var(--background-default-secondary);
}
.buttonGroup {
  width: 240px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--space-400);
  text-align: left;
  font-size: var(--single-line-body-base-size);
}
.heroActions {
  align-self: stretch;
  background-color: var(--background-default-secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--space-4000) var(--space-600);
  gap: var(--space-800);
  text-align: center;
  font-size: var(--title-page-size);
}
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
.div {
  width: 561px;
  position: relative;
  line-height: 140%;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}
.listItem {
  position: relative;
  line-height: 140%;
}
.textLinkListItem {
  width: 1096px;
  height: 44px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
}
.healinkerAllRights {
  flex: 1;
  position: relative;
  line-height: 140%;
}
.textLinkListItem1 {
  width: 1096px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
}
.footer {
  width: var(--device-width);
  background-color: var(--background-default-default);
  border-top: 1px solid var(--border-default-default);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-13xl);
  gap: var(--space-800);
  font-size: var(--single-line-body-base-size);
}
.frameworkPc {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  font-size: var(--heading-size);
  color: var(--text-default-default);
  font-family: var(--single-line-body-base);
}

</style>