---
title: "자산, 정산, 권리 구조"
description: "자산 표현, 정산 흐름, 권리 상태를 어떤 모델로 다룰지 설명한다."
level: advanced
category: patterns
status: stable
tags:
  - asset
  - settlement
  - rights
---

# 자산, 정산, 권리 구조

## 문서 목적

세미나 1단계와 5단계 사이를 연결하는 문서로, 자산 표현과 정산, 권리 상태를 어떤 모델로 설계할지 정리한다.

## 핵심 요약

- 자산 구조를 설계할 때는 소유권, 정산 단위, 접근 권한을 함께 봐야 한다.
- FT, NFT, SBT 같은 표현 방식은 서비스의 상태 모델과 권리 모델을 선택하는 문제다.
- 정산 흐름은 결제 경험과 회계적 확정성을 분리해서 설계하는 편이 현실적이다.

## 비교표

|구조|주로 다루는 것|핵심 질문|
|---|---|---|
|FT|수량화 가능한 가치|무엇을 정산 단위로 볼 것인가|
|NFT|고유 자산 또는 소유권|무엇을 고유 권리 단위로 표현할 것인가|
|SBT|양도 불가 자격 또는 평판|무엇을 이전 불가능한 자격으로 볼 것인가|

## 설계 시 같이 봐야 하는 축

- 자산 단위
- 정산 시점
- 회계 반영 기준
- 감사 로그
- 접근 또는 사용 권리

## 실제 해석 포인트

### 1. 자산 표현

토큰은 단순 발행 수량보다 `무엇을 상태로 모델링할 것인가`를 먼저 정의해야 의미가 생긴다.

### 2. 정산 흐름

이벤트 수집, 산식 계산, 정산 확정, 감사 로그는 분리된 단계로 보는 편이 운영상 유리하다.

### 3. 권리 상태

자산 소유권과 사용 권리, 운영 권한은 같은 것이 아니므로 상태 모델을 분리해야 한다.

## 세미나 관점 메모

- 발표에서는 DeFi, NFT 같은 시장 라벨보다 `자산`, `정산`, `권리`라는 문제 축으로 설명하는 편이 더 실무적이다.
- 세미나 5단계의 결제/정산 문서와 자연스럽게 연결된다.

## 선행 개념

- [스마트컨트랙트와 정책 모델](/foundations/smart-contracts-as-policy)

## 다음으로 읽을 문서

- [스테이블코인 결제와 CCTP](/patterns/stablecoin-settlement-and-cctp)
- [DAO-lite 거버넌스](/operations/dao-lite-governance)

## 관련 문서

- [읽기 순서와 핵심 메시지](/seminar/reading-path-and-core-messages)
- [용어사전](/reference/glossary)
*** Add File: /Users/ryan9kim/내 드라이브/Obsidian/Vault/1. PROJECT/👨‍💼🔍📝 리서치/Web3 Tech 리서치/Web3-Tech-Handbook/docs/patterns/stablecoin-settlement-and-cctp.md
---
title: "스테이블코인 결제와 CCTP"
description: "결제 성공 경험과 정산 신뢰성을 분리해 설계하는 방법을 설명한다."
level: advanced
category: patterns
status: stable
tags:
  - stablecoin
  - settlement
  - cctp
---

# 스테이블코인 결제와 CCTP

## 문서 목적

세미나 5단계의 핵심인 결제 처리와 정산 기록 분리 설계를 handbook용으로 정리한다.

## 핵심 요약

- 결제와 정산은 같은 흐름 안에 있지만 같은 속도로 설계하면 운영이 불안정해지기 쉽다.
- 사용자 경험은 빠른 승인 중심으로, 정산은 신뢰 가능한 확정 기준 중심으로 분리하는 편이 좋다.
- CCTP 같은 구조는 체인 간 자산 이동과 정산 단순화 맥락에서 이해하는 것이 유효하다.

## 기본 흐름

1. 결제 요청
2. 승인 또는 실패
3. 정산 확정
4. 회계 반영
5. 감사 로그 기록

## 함께 설계할 항목

- 중복 방지 키
- 재시도 정책
- 보상 트랜잭션 전략
- 회계 반영 시점
- 체인 간 이동의 실패 복구 기준

## 선행 개념

- [하이브리드 아키텍처](/patterns/hybrid-architecture)
- [자산, 정산, 권리 구조](/patterns/assets-settlement-and-rights)

## 다음으로 읽을 문서

- [멀티체인과 상호운용](/patterns/multichain-and-interoperability)
- [스마트컨트랙트 보안 운영](/operations/smart-contract-security-operations)

## 관련 문서

- [Enterprise Adoption Patterns](/operations/enterprise-adoption-patterns)
- [8단계 세미나 로드맵](/seminar/web3-upskilling-roadmap)
*** Add File: /Users/ryan9kim/내 드라이브/Obsidian/Vault/1. PROJECT/👨‍💼🔍📝 리서치/Web3 Tech 리서치/Web3-Tech-Handbook/docs/patterns/multichain-and-interoperability.md
---
title: "멀티체인과 상호운용"
description: "L2, 체인 추상화, 상호운용 구조가 서비스 복잡도에 미치는 영향을 설명한다."
level: advanced
category: patterns
status: stable
tags:
  - multichain
  - interoperability
  - chain-abstraction
---

# 멀티체인과 상호운용

## 문서 목적

세미나 6단계의 핵심 질문인 `체인 다양성이 서비스 복잡도 폭증으로 이어지지 않게 하려면`을 중심으로 멀티체인 구조를 정리한다.

## 핵심 요약

- 멀티체인 전략은 확장성 선택인 동시에 운영 복잡도 증가 요인이다.
- 체인 추상화는 사용자가 체인 차이를 덜 의식하게 만드는 UX/서비스 설계 방향이다.
- 상호운용 구조는 자산 이동만이 아니라 실패 복구와 리스크 모델까지 포함해 설계해야 한다.

## 주요 질문

- 사용자가 체인 선택을 직접 알아야 하는가
- 자산 이동 실패를 누가 흡수하는가
- 메시지 전달과 상태 동기화를 어디까지 자동화할 것인가
- 각 체인의 finality 차이를 어떻게 운영 정책에 반영할 것인가

## 선행 개념

- [스테이블코인 결제와 CCTP](/patterns/stablecoin-settlement-and-cctp)
- [계정, 상태, 트랜잭션, 확정성](/foundations/accounts-state-transactions-and-finality)

## 다음으로 읽을 문서

- [Security, Governance, Scalability](/operations/security-governance-and-scalability)
- [스마트컨트랙트 보안 운영](/operations/smart-contract-security-operations)

## 관련 문서

- [하이브리드 아키텍처](/patterns/hybrid-architecture)
- [AI + Web3 Convergence](/lab/ai-and-web3-convergence)
*** Add File: /Users/ryan9kim/내 드라이브/Obsidian/Vault/1. PROJECT/👨‍💼🔍📝 리서치/Web3 Tech 리서치/Web3-Tech-Handbook/docs/operations/index.md
---
title: "운영과 거버넌스"
description: "중급·고급 영역의 운영, 보안, 거버넌스 판단 기준을 정리한다."
---

# 운영과 거버넌스

## 카테고리 목적

이 챕터는 세미나 7~8단계와 엔터프라이즈 적용 판단을 handbook 기준으로 정리한 영역이다. 보안, 운영, 거버넌스, 조직 적용성을 하나의 운영 축으로 묶어 다룬다.

## 권장 읽기 순서

1. [Security, Governance, Scalability](/operations/security-governance-and-scalability)
2. [스마트컨트랙트 보안 운영](/operations/smart-contract-security-operations)
3. [DAO-lite 거버넌스](/operations/dao-lite-governance)
4. [Enterprise Adoption Patterns](/operations/enterprise-adoption-patterns)

## 선행 카테고리

- [설계 패턴](/patterns/)

## 다음 카테고리

- [Lab](/lab/)
- [세미나](/seminar/)
*** Update File: /Users/ryan9kim/내 드라이브/Obsidian/Vault/1. PROJECT/👨‍💼🔍📝 리서치/Web3 Tech 리서치/Web3-Tech-Handbook/docs/operations/security-governance-and-scalability.md
