<template>
  <div :class="$style.frameworkPc">
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
    <div :class="$style.heroActions">
      <div :class="$style.textContentTitle">
        <div :class="$style.title">건강검진 결과 분석하기</div>
      </div>
      <div :class="$style.statsCard">
        <div :class="$style.button">
          <img :class="$style.fileIcon" alt="파일 선택" :src="icons.icon_file" />
          <div :class="$style.button1">파일 선택</div>
        </div>
        <div :class="$style.reviewBody">
          <div :class="$style.text">
            <div :class="$style.listItem">PDF, PNG 파일을 여기에 드롭하세요</div>
          </div>
        </div>
      </div>
    </div>
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
      <div :class="$style.button2">
        <div :class="$style.button1">로그인</div>
      </div>
    </div>
    <div :class="$style.popover">
      <div :class="$style.formContact">
        <div :class="$style.block1">
          <div :class="$style.iconButton" />
          <div :class="$style.iconButton" />
          <div :class="$style.block">
            <div :class="$style.biTemporary">
              <img :class="$style.vectorIcon" alt="힐링커 로고" :src="icons.logo_main" />
              <div :class="$style.healinker">Healinker</div>
            </div>
          </div>
        </div>
        <div :class="$style.title1">검진결과를 한눈에 보세요</div>
        <div :class="$style.buttonGroupParent">
          <div :class="$style.buttonGroup">
            <div :class="$style.button4">
              <img :class="$style.kakaoIcon" alt="카카오 로그인" :src="icons.icon_kakao" />
              <div :class="$style.button1">카카오로 시작하기</div>
            </div>
          </div>
          <div :class="$style.buttonGroup">
            <div :class="$style.button4">
              <img :class="$style.fileIcon" alt="이메일 로그인" :src="icons.icon_email" />
              <div :class="$style.button1">이메일로 시작하기</div>
            </div>
          </div>
        </div>
        <div :class="$style.div1">본 서비스에 로그인함으로써 귀하는 이용약관 및 개인정보처리방침에 동의하게 됩니다.</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "FrameworkPC",
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

<style module>
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
  position: absolute;
  top: 522px;
  left: 0px;
  background-color: var(--background-default-default);
  border-top: 1px solid var(--border-default-default);
  box-sizing: border-box;
  width: var(--device-width);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-13xl);
  gap: var(--space-800);
  font-size: var(--single-line-body-base-size);
}
.title {
  align-self: stretch;
  position: relative;
  line-height: 120%;
}
.textContentTitle {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.fileIcon {
  width: 16px;
  position: relative;
  height: 16px;
  overflow: hidden;
  flex-shrink: 0;
}
.button1 {
  position: relative;
  line-height: 100%;
}
.button {
  border-radius: var(--radius-200);
  background-color: var(--text-brand-on-brand-tertiary);
  border: 1px solid var(--text-brand-on-brand-tertiary);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--space-300);
  gap: var(--space-200);
}
.text {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
}
.reviewBody {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  font-size: var(--body-small-size);
  color: var(--text-default-default);
}
.statsCard {
  width: 523px;
  border-radius: var(--radius-200);
  background-color: var(--background-default-default);
  border: 1px solid var(--border-default-default);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--space-600);
  gap: var(--space-600);
  min-width: 240px;
  text-align: left;
  font-size: var(--single-line-body-base-size);
  color: var(--background-default-secondary);
}
.heroActions {
  position: absolute;
  top: 72px;
  left: 0px;
  background-color: var(--background-default-secondary);
  width: 1440px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--space-2400) var(--space-600);
  box-sizing: border-box;
  gap: var(--space-800);
  text-align: center;
  font-size: var(--subtitle-size);
}
.vectorIcon {
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
.button2 {
  border-radius: var(--radius-200);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--space-300);
  font-size: var(--single-line-body-base-size);
  color: var(--text-neutral-default);
}
.header {
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--background-default-default);
  border-bottom: 1px solid var(--border-default-default);
  box-sizing: border-box;
  width: var(--device-width);
  height: 72px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: center;
  padding: var(--space-400) var(--space-800);
  gap: 0px 24px;
  color: var(--color-black);
}
.iconButton {
  width: 44px;
  border-radius: var(--scale-06);
  background-color: var(--background-default-secondary);
  border: 1px solid var(--border-default-default);
  box-sizing: border-box;
  height: 44px;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
}
.block1 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xl);
}
.title1 {
  align-self: stretch;
  position: relative;
  letter-spacing: -0.02em;
  line-height: 120%;
  font-weight: 600;
  color: var(--text-brand-on-brand-tertiary);
  text-align: center;
}
.kakaoIcon {
  width: 16px;
  position: relative;
  height: 16px;
  object-fit: cover;
}
.button4 {
  flex: 1;
  border-radius: var(--radius-200);
  border: 1px solid var(--border-default-tertiary);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--space-300);
  gap: var(--space-200);
}
.buttonGroup {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.buttonGroupParent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--space-300);
  font-size: var(--single-line-body-base-size);
  color: var(--text-neutral-default);
}
.div1 {
  width: 272px;
  position: relative;
  font-size: var(--body-small-size);
  line-height: 140%;
  display: inline-block;
}
.formContact {
  position: absolute;
  top: 194px;
  left: 440px;
  border-radius: var(--radius-200);
  background-color: var(--background-default-default);
  border: 1px solid var(--border-default-default);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space-800) var(--space-800) var(--space-1440);
  gap: var(--space-800);
  min-width: 320px;
}
.popover {
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: rgba(255, 255, 255, 0.5);
  width: 1440px;
  height: 733px;
  overflow: hidden;
  color: var(--color-black);
}
.frameworkPc {
  width: 100%;
  position: relative;
  height: 733px;
  text-align: left;
  font-size: var(--heading-size);
  color: var(--text-default-default);
  font-family: var(--heading);
}

</style>