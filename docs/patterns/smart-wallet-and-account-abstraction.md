---
title: "스마트월렛과 계정 추상화"
description: "사용자 UX와 위임 실행 관점에서 스마트월렛과 계정 추상화를 설명한다."
level: advanced
category: patterns
status: stable
tags:
  - smart-wallet
  - account-abstraction
  - ux
---

# 스마트월렛과 계정 추상화

## 문서 목적

세미나 4단계의 핵심인 `가스와 키 복잡성을 얼마나 서비스 안으로 흡수할 수 있는가`를 중심으로 스마트월렛과 계정 추상화 구조를 정리한다.

## 핵심 요약

- 스마트월렛은 사용자 계정을 더 유연한 정책 실행 단위로 바꾸려는 접근이다.
- 계정 추상화는 서명, 수수료 부담, 복구, 위임 실행을 더 세밀하게 설계할 수 있게 한다.
- 핵심은 기술 명칭보다 `누가 비용을 내고 누가 실행 권한을 갖는가`를 어떻게 설계하느냐다.

## 주요 설계 질문

- 가스 대납은 누가 어떤 조건에서 부담하는가
- 위임 실행은 어느 범위까지 허용하는가
- 키 분실 시 복구 정책은 어떻게 둘 것인가
- 사용자에게 어떤 복잡성을 숨기고 어떤 책임은 남길 것인가

## 선행 개념

- [계정, 상태, 트랜잭션, 확정성](/foundations/accounts-state-transactions-and-finality)
- [DID, VC, 정책 자동화](/patterns/did-vc-and-policy)

## 다음으로 읽을 문서

- [자산, 정산, 권리 구조](/patterns/assets-settlement-and-rights)
- [스테이블코인 결제와 CCTP](/patterns/stablecoin-settlement-and-cctp)

## 관련 문서

- [하이브리드 아키텍처](/patterns/hybrid-architecture)
- [Enterprise Adoption Patterns](/operations/enterprise-adoption-patterns)
