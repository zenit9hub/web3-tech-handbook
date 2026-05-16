---
title: "설계 패턴"
description: "중급·고급 영역에서 반복적으로 재사용되는 Web3 실무 패턴을 정리한다."
---

# 설계 패턴

Web3를 실제 서비스와 조직 시스템에 붙일 때 핵심은 `체인을 쓸 것인가`가 아니라 `어떤 신뢰 문제를 어느 계층에서 해결할 것인가`다. 이 챕터는 반복적으로 등장하는 설계 판단을 패턴 단위로 묶는다.

## 핵심 질문

- 온체인, 오프체인, 앵커링의 경계는 어디에 둘 것인가
- 신원, 자격, 정책 증명은 어떤 형식으로 교환할 것인가
- 지갑과 계정 추상화는 사용자 경험과 보안 책임을 어떻게 바꾸는가
- 자산, 정산, 권리 상태를 어떤 수준까지 프로그래머블하게 만들 것인가
- 멀티체인 구조에서 유동성, 메시지, 보안 경계를 어떻게 분리할 것인가

## 읽을 문서

1. [하이브리드 아키텍처](/patterns/hybrid-architecture)
2. [DID, VC, 정책 자동화](/patterns/did-vc-and-policy)
3. [스마트월렛과 계정 추상화](/patterns/smart-wallet-and-account-abstraction)
4. [자산, 정산, 권리 구조](/patterns/assets-settlement-and-rights)
5. [스테이블코인 결제와 CCTP](/patterns/stablecoin-settlement-and-cctp)
6. [멀티체인과 상호운용](/patterns/multichain-and-interoperability)
