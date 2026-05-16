---
title: "하이브리드 아키텍처"
description: "온체인과 오프체인의 경계를 실제 서비스 아키텍처 문서 수준으로 구체화한다."
level: advanced
category: patterns
status: stable
tags:
  - hybrid
  - architecture
  - adr
---

# 하이브리드 아키텍처

## 핵심 관점

하이브리드 아키텍처의 판단 기준을 서비스 설계 문서 수준으로 정리한다.

## 핵심 요약

- 하이브리드 아키텍처는 기술 타협안이 아니라 실무에서 가장 자주 선택되는 기본 패턴이다.
- 핵심은 온체인, 오프체인, 앵커링의 책임을 명확히 나누는 것이다.
- 서비스 설계는 ADR, 운영 관측성, 보안, 회계/정산 연결까지 함께 다뤄야 한다.

## 하이브리드 구조

```mermaid
flowchart LR
    A["사용자 / 서비스 요청"] --> B["Service Layer"]
    B --> C["Off-chain Data / Workflow"]
    B --> D["On-chain Contract Layer"]
    C --> E["Anchoring / Proof"]
    D --> F["Settlement / Rights / Final State"]
    E --> F
    F --> G["Audit / Monitoring / Reporting"]
```

## 설계 질문

- 어떤 상태만 온체인에 두면 충분한가
- 어떤 원문은 오프체인에 남겨야 하는가
- 해시 또는 증빙을 언제 기록하는가
- 장애와 재시도는 누가 책임지는가

## 설계 산출물

실제 설계 검토에서는 아래와 같은 문서가 결과물로 나오면 좋다.

1. 아키텍처 원페이저
2. 온/오프/앵커링 경계 다이어그램
3. 운영·보안 런북 초안

## 선행 개념

- [온체인, 오프체인, 앵커링, 하이브리드](/foundations/onchain-offchain-design-patterns)

## 다음으로 읽을 문서

- [DID, VC, 정책 자동화](/patterns/did-vc-and-policy)
- [스테이블코인 결제와 CCTP](/patterns/stablecoin-settlement-and-cctp)

## 관련 문서

- [Enterprise Adoption Patterns](/operations/enterprise-adoption-patterns)
- [학습 경로와 메시지](/reference/learning-paths)
