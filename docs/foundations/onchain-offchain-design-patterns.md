---
title: "온체인 vs 오프체인 설계 패턴"
description: "Full on-chain, anchoring, hybrid 패턴을 기준으로 경계 판단 방법을 정리한다."
level: foundation
category: foundations
status: stable
tags:
  - onchain
  - offchain
  - hybrid
---

# 온체인 vs 오프체인 설계 패턴

## 문서 목적

Web3 기본기 세미나의 핵심 산출물인 온체인/오프체인 경계 판단 기준을 handbook 문서로 정리한다.

## 핵심 요약

- Web3 설계의 핵심 질문은 `무엇을 온체인에 둘 것인가`보다 `무엇을 검증 가능하게 만들 것인가`에 가깝다.
- 대표 패턴은 `Full on-chain`, `Anchoring`, `Hybrid` 세 가지로 나눠 볼 수 있다.
- 비용, 성능, 프라이버시, 감사 가능성의 trade-off로 패턴을 선택해야 한다.

## 패턴 비교

|패턴|설명|권장 상황|
|---|---|---|
|Full on-chain|로직과 핵심 데이터를 온체인 중심으로 처리|강한 투명성과 공통 검증이 우선일 때|
|Anchoring|원문은 오프체인에 두고 해시나 요약만 온체인 기록|원문 보관 부담이 크지만 무결성 증명이 필요할 때|
|Hybrid|실행은 오프체인, 정산/권리/증빙은 온체인|성능과 신뢰를 함께 요구할 때|

## 판단 기준

1. 위변조 방지가 핵심 요구인가
2. 다자간 신뢰 정렬이 필요한가
3. 사후 감사 추적이 필수인가
4. 비용과 지연을 감수할 가치가 있는가

## 세미나 관점 메모

- 이 문서는 1회차 세미나의 산출물 기준으로 쓰기 좋다.
- 팀 토론에서는 기능 1개를 골라 세 패턴 중 어떤 구조가 맞는지 설명해 보는 방식이 유효하다.
- 이 문서는 2회차 하이브리드 아키텍처 세션의 선행 문서다.

## 선행 개념

- [Web3 개요와 철학](/foundations/web3-overview)
- [계정, 상태, 트랜잭션, 확정성](/foundations/accounts-state-transactions-and-finality)

## 다음으로 읽을 문서

- [하이브리드 아키텍처](/patterns/hybrid-architecture)
- [Enterprise Adoption Patterns](/operations/enterprise-adoption-patterns)

## 관련 문서

- [자산, 정산, 권리 구조](/patterns/assets-settlement-and-rights)
- [8단계 세미나 로드맵](/seminar/web3-upskilling-roadmap)
