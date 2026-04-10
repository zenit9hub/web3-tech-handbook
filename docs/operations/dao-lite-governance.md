---
title: "DAO-lite 거버넌스"
description: "기업과 공공 환경에 맞는 온체인 투표와 오프체인 집행 구조를 설명한다."
level: advanced
category: operations
status: stable
tags:
  - dao
  - governance
  - audit
---

# DAO-lite 거버넌스

## 문서 목적

세미나 8단계의 핵심인 `의사결정은 투명하게, 집행은 현실적으로`라는 원칙을 handbook 문서로 정리한다.

## 핵심 요약

- DAO-lite는 완전한 탈중앙 조직보다 기업·공공 환경에 적합한 거버넌스 절충안이다.
- 온체인 투표, 오프체인 집행, 감사 추적을 분리하면 현실성과 투명성을 함께 가져가기 쉽다.
- 핵심은 툴보다 제안, 투표, 집행, 감사의 책임 구조를 명확히 하는 것이다.

## 기본 흐름

```mermaid
flowchart LR
    A["제안"] --> B["투표"]
    B --> C["승인 결과 기록"]
    C --> D["오프체인 집행"]
    D --> E["감사 추적"]
```

## 설계 질문

- 누가 제안권을 갖는가
- 어떤 안건이 온체인 투표 대상인가
- 집행 책임과 승인 책임은 어떻게 나누는가
- 감사 추적은 어디까지 자동화할 것인가

## 선행 개념

- [스마트컨트랙트 보안 운영](/operations/smart-contract-security-operations)
- [자산, 정산, 권리 구조](/patterns/assets-settlement-and-rights)

## 다음으로 읽을 문서

- [Enterprise Adoption Patterns](/operations/enterprise-adoption-patterns)
- [읽기 순서와 핵심 메시지](/seminar/reading-path-and-core-messages)

## 관련 문서

- [Security, Governance, Scalability](/operations/security-governance-and-scalability)
- [8단계 세미나 로드맵](/seminar/web3-upskilling-roadmap)
