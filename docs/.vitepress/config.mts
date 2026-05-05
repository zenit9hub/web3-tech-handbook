import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

function normalizeBase(value: string): string {
  const trimmed = value.trim()

  if (trimmed === '' || trimmed === '/') {
    return '/'
  }

  const withLeadingSlash = trimmed.startsWith('/') ? trimmed : `/${trimmed}`

  return withLeadingSlash.endsWith('/') ? withLeadingSlash : `${withLeadingSlash}/`
}

function resolveBase(): string {
  if (process.env.VITEPRESS_BASE) {
    return normalizeBase(process.env.VITEPRESS_BASE)
  }

  if (
    process.env.GITHUB_ACTIONS === 'true' &&
    process.env.GITHUB_REPOSITORY === 'zenit9hub/web3-tech-handbook'
  ) {
    return '/web3-tech-handbook/'
  }

  return '/'
}

const siteBase = resolveBase()

export default withMermaid(
  defineConfig({
    title: 'Web3 Tech Handbook',
    description: '기초, 설계 패턴, 운영, 실험, 세미나 준비를 위한 Web3 학습 문서',
    lang: 'ko-KR',
    base: siteBase,
    head: [['meta', { name: 'theme-color', content: '#0f766e' }]],
    cleanUrls: true,
    sitemap: {
      hostname: 'https://zenit9hub.github.io/web3-tech-handbook/'
    },
    themeConfig: {
      logo: '/logo.svg',
      nav: [
        { text: '홈', link: '/' },
        { text: '기초와 입문', link: '/foundations/' },
        { text: '설계 패턴', link: '/patterns/' },
        { text: '운영과 거버넌스', link: '/operations/' },
        { text: 'Lab', link: '/lab/' },
        { text: '세미나', link: '/seminar/' }
      ],
      sidebar: [
        {
          text: '기초와 입문',
          items: [
            { text: '개요', link: '/foundations/' },
            { text: 'Web3 개요와 철학', link: '/foundations/web3-overview' },
            { text: '계정, 상태, 트랜잭션, 확정성', link: '/foundations/accounts-state-transactions-and-finality' },
            { text: '스마트컨트랙트와 정책 모델', link: '/foundations/smart-contracts-as-policy' },
            { text: '온체인 vs 오프체인 설계 패턴', link: '/foundations/onchain-offchain-design-patterns' }
          ]
        },
        {
          text: '설계 패턴',
          items: [
            { text: '개요', link: '/patterns/' },
            { text: '하이브리드 아키텍처', link: '/patterns/hybrid-architecture' },
            { text: 'DID, VC, 정책 자동화', link: '/patterns/did-vc-and-policy' },
            { text: '스마트월렛과 계정 추상화', link: '/patterns/smart-wallet-and-account-abstraction' },
            { text: '자산, 정산, 권리 구조', link: '/patterns/assets-settlement-and-rights' },
            { text: '스테이블코인 결제와 CCTP', link: '/patterns/stablecoin-settlement-and-cctp' },
            { text: '멀티체인과 상호운용', link: '/patterns/multichain-and-interoperability' }
          ]
        },
        {
          text: '운영과 거버넌스',
          items: [
            { text: '개요', link: '/operations/' },
            { text: 'Security, Governance, Scalability', link: '/operations/security-governance-and-scalability' },
            { text: '스마트컨트랙트 보안 운영', link: '/operations/smart-contract-security-operations' },
            { text: 'DAO-lite 거버넌스', link: '/operations/dao-lite-governance' },
            { text: 'Enterprise Adoption Patterns', link: '/operations/enterprise-adoption-patterns' }
          ]
        },
        {
          text: 'Lab',
          items: [
            { text: '개요', link: '/lab/' },
            { text: 'AI + Web3 Convergence', link: '/lab/ai-and-web3-convergence' }
          ]
        },
        {
          text: '세미나',
          items: [
            { text: '개요', link: '/seminar/' },
            { text: '8단계 세미나 로드맵', link: '/seminar/web3-upskilling-roadmap' },
            { text: '읽기 순서와 핵심 메시지', link: '/seminar/reading-path-and-core-messages' }
          ]
        },
        {
          text: '레퍼런스',
          items: [
            { text: '개요', link: '/reference/' },
            { text: '용어사전', link: '/reference/glossary' }
          ]
        }
      ],
      outlineTitle: '이 페이지에서',
      docFooter: {
        prev: '이전',
        next: '다음'
      },
      darkModeSwitchLabel: '테마 전환',
      sidebarMenuLabel: '메뉴',
      returnToTopLabel: '맨 위로',
      lastUpdatedText: '마지막 수정',
      footer: {
        message: '기초, 패턴, 운영, 실험, 세미나 준비를 위한 공개형 Web3 학습 문서',
        copyright: 'Copyright © 2026'
      },
      socialLinks: [
        { icon: 'github', link: 'https://github.com/zenit9hub/web3-tech-handbook' }
      ],
      search: {
        provider: 'local'
      }
    },
    mermaid: {}
  })
)
