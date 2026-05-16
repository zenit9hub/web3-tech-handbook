---
title: "개념 레퍼런스"
description: "핸드북 전반에서 반복되는 Web3 핵심 개념을 정의, 중요성, 관련 문서 기준으로 정리한다."
level: reference
category: reference
status: stable
tags:
  - glossary
  - reference
---

# 개념 레퍼런스

## 목적

핸드북 전반에서 반복되는 개념을 빠르게 확인하기 위한 레퍼런스다. 단순한 사전식 정의보다, 해당 개념이 왜 중요한지와 어떤 문서에서 이어서 읽어야 하는지를 함께 정리한다.

## 신뢰와 검증

|개념|정의|왜 중요한가|관련 문서|
|---|---|---|---|
|검증 가능성|특정 상태, 권한, 자산, 이벤트가 외부 참여자에게 확인 가능한 성질|Web3의 핵심을 탈중앙화보다 정확하게 설명한다|[Web3를 다시 정의하기](/foundations/web3-overview)|
|신뢰 경계|공통 검증 영역과 개별 운영 영역을 나누는 설계 경계|어떤 것을 온체인에 두고 무엇을 오프체인에 남길지 결정한다|[신뢰 경계와 다층 검증 스택](/foundations/trust-boundaries-and-verification-stack)|
|Tamper-evident|조작 자체를 불가능하게 만들기보다 조작 흔적을 드러내는 성질|블록체인의 불변성을 현실적으로 설명할 때 유용하다|[Web3를 다시 정의하기](/foundations/web3-overview)|
|감사 trail|상태 변경과 운영 행위의 책임을 추적할 수 있는 기록 흐름|기업 적용, 정산, 분쟁 대응에서 필수적이다|[Enterprise Adoption Patterns](/operations/enterprise-adoption-patterns)|

## 블록체인 기본 구조

|개념|정의|왜 중요한가|관련 문서|
|---|---|---|---|
|블록체인|상태 전이 기록을 여러 참여자가 공유하고 검증하는 분산 시스템|공통 기준점과 검증 가능한 기록을 만든다|[계정, 상태, 트랜잭션, 확정성](/foundations/accounts-state-transactions-and-finality)|
|합의|어떤 상태 전이가 유효한지 네트워크 참여자가 같은 결론에 도달하도록 만드는 절차|누가 최종 상태를 인정하는지 결정한다|[신뢰 인프라의 진화](/foundations/)|
|상태|시스템이 현재 사실로 인정하는 값의 집합|잔액, 소유권, 승인 여부, 정산 여부가 모두 상태 문제다|[계정, 상태, 트랜잭션, 확정성](/foundations/accounts-state-transactions-and-finality)|
|트랜잭션|상태 변경을 요청하는 서명된 행위|Web3 시스템에서 권한과 상태 변화가 만나는 지점이다|[계정, 상태, 트랜잭션, 확정성](/foundations/accounts-state-transactions-and-finality)|
|최종성|반영된 거래를 운영상 되돌리기 어렵다고 볼 수 있는 기준|결제 완료, 정산 확정, 후속 업무 실행 시점을 정한다|[계정, 상태, 트랜잭션, 확정성](/foundations/accounts-state-transactions-and-finality)|
|Reorg|이미 관측한 블록이나 상태가 더 긴 체인에 의해 바뀌는 상황|운영 시스템이 언제 결과를 믿을지 판단해야 한다|[계정, 상태, 트랜잭션, 확정성](/foundations/accounts-state-transactions-and-finality)|

## 계정, 권한, 신원

|개념|정의|왜 중요한가|관련 문서|
|---|---|---|---|
|지갑|키와 서명 권한을 관리하고 계정 행위를 실행하는 사용자 도구|사용자 경험과 보안 책임의 접점이다|[스마트월렛과 계정 추상화](/patterns/smart-wallet-and-account-abstraction)|
|계정|체인 상태와 연결된 행위 주체|누가 어떤 상태를 바꿀 수 있는지 설명한다|[계정, 상태, 트랜잭션, 확정성](/foundations/accounts-state-transactions-and-finality)|
|계정 추상화|서명, 수수료, 복구, 위임 실행 정책을 계정 레벨에서 유연하게 구성하는 접근|대중 서비스의 지갑 UX와 권한 위임을 개선한다|[스마트월렛과 계정 추상화](/patterns/smart-wallet-and-account-abstraction)|
|DID|특정 중앙기관이나 네트워크에 덜 종속적인 식별자를 만들려는 접근|식별자와 계정 소유를 분리해 볼 수 있게 한다|[DID, VC, 정책 자동화](/patterns/did-vc-and-policy)|
|VC|검증 가능한 자격 정보를 표현하는 데이터 형식|조직 소속, 역할, 자격을 선택적으로 제시할 수 있다|[DID, VC, 정책 자동화](/patterns/did-vc-and-policy)|
|SSI|사용자가 자신의 신원 정보와 자격 증명을 더 직접적으로 통제하려는 모델|서비스 인가와 개인정보 최소 공개를 함께 설계하게 한다|[DID, VC, 정책 자동화](/patterns/did-vc-and-policy)|

## 실행, 자산, 정산

|개념|정의|왜 중요한가|관련 문서|
|---|---|---|---|
|스마트컨트랙트|상태 전이 규칙을 공개 검증 가능한 방식으로 실행하는 프로그램|정책 집행과 권한 통제를 코드화한다|[스마트컨트랙트는 정책 집행 계층이다](/foundations/smart-contracts-as-policy)|
|이벤트 로그|컨트랙트 실행 결과를 외부 시스템이 읽을 수 있게 남기는 기록|인덱싱, 모니터링, 감사, 후속 업무 자동화의 기준이 된다|[스마트컨트랙트는 정책 집행 계층이다](/foundations/smart-contracts-as-policy)|
|토큰|자산, 권리, 보상, 거버넌스를 상태 모델로 표현한 것|소유권과 접근 권한을 서비스 밖으로 확장할 수 있다|[자산, 정산, 권리 구조](/patterns/assets-settlement-and-rights)|
|NFT|고유 자산이나 고유 권리를 표현하는 토큰 모델|희소성, 소유권, 라이선스, 멤버십 표현에 쓰인다|[자산, 정산, 권리 구조](/patterns/assets-settlement-and-rights)|
|SBT|이전이 제한되거나 불가능한 자격·평판형 토큰 모델|권리보다 자격과 신뢰 상태를 표현할 때 유용하다|[자산, 정산, 권리 구조](/patterns/assets-settlement-and-rights)|
|스테이블코인|가치가 특정 법정화폐나 자산에 연동되도록 설계된 토큰|결제와 정산 실험에서 가장 실무적인 진입점이다|[스테이블코인 결제와 CCTP](/patterns/stablecoin-settlement-and-cctp)|
|CCTP|체인 간 스테이블코인 이동과 정산을 단순화하는 전송 모델|멀티체인 결제와 정산 UX를 단순화할 수 있다|[스테이블코인 결제와 CCTP](/patterns/stablecoin-settlement-and-cctp)|

## 아키텍처와 운영

|개념|정의|왜 중요한가|관련 문서|
|---|---|---|---|
|온체인|상태와 실행 결과를 블록체인에 직접 남기는 설계 영역|공통 검증성과 투명성이 필요할 때 사용한다|[온체인, 오프체인, 앵커링, 하이브리드](/foundations/onchain-offchain-design-patterns)|
|오프체인|블록체인 밖에서 데이터 저장, 계산, 워크플로를 처리하는 영역|성능, 비용, 개인정보, 운영 유연성을 확보한다|[온체인, 오프체인, 앵커링, 하이브리드](/foundations/onchain-offchain-design-patterns)|
|앵커링|원문 데이터는 오프체인에 두고 해시나 요약만 온체인에 기록하는 패턴|원문 공개 없이 존재 증명과 위변조 검증을 제공한다|[온체인, 오프체인, 앵커링, 하이브리드](/foundations/onchain-offchain-design-patterns)|
|하이브리드 아키텍처|오프체인 실행과 온체인 정산·증빙을 조합하는 구조|기업·공공 적용에서 가장 자주 등장하는 현실적 패턴이다|[하이브리드 아키텍처](/patterns/hybrid-architecture)|
|체인 추상화|여러 체인의 차이를 사용자에게 덜 노출하는 설계 방향|멀티체인 서비스의 복잡도를 낮춘다|[멀티체인과 상호운용](/patterns/multichain-and-interoperability)|
|DAO-lite|온체인 투표와 오프체인 집행을 섞어 쓰는 현실형 거버넌스 모델|완전한 DAO보다 기업·공공 환경에 맞는 책임 구조를 만들 수 있다|[DAO-lite 거버넌스](/operations/dao-lite-governance)|

## Lab 개념

|개념|정의|왜 중요한가|관련 문서|
|---|---|---|---|
|AI Agent|목표를 받아 도구 호출, 계획, 실행을 수행하는 AI 기반 행위자|권한 위임, 비용 승인, 행동 기록 문제가 발생한다|[AI + Web3 Convergence](/lab/ai-and-web3-convergence)|
|ZK|원문을 공개하지 않고도 특정 사실이 참임을 증명하는 암호학적 접근|프라이버시와 검증 가능성을 동시에 요구하는 구조에서 중요하다|[ZK와 선택적 공개](/lab/zk-selective-disclosure)|
|RWA|현실 세계 자산을 토큰 또는 검증 가능한 권리 상태로 연결하는 접근|제도권 자산과 Web3 인프라가 만나는 핵심 영역이다|[RWA와 데이터 증명](/lab/rwa-data-proofs)|
|행동 기록 증명|에이전트나 시스템이 어떤 권한으로 어떤 행동을 했는지 검증 가능한 형태로 남기는 구조|AI 자동화가 자산과 권한을 다룰 때 책임 추적의 기반이 된다|[검증 가능한 에이전트 행동 기록](/lab/verifiable-agent-activity)|
