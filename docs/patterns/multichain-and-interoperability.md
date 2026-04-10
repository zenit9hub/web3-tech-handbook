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
