import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

const siteUrl = 'https://web3.lab.rezen.dev/'
const movedCanonicalPaths: Record<string, string> = {
  'foundations/trust-infrastructure-evolution.md': '/foundations/'
}
const sitemapExcludedPaths = new Set(['foundations/trust-infrastructure-evolution'])

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

function resolveCanonicalPath(relativePath: string): string {
  if (movedCanonicalPaths[relativePath]) {
    return movedCanonicalPaths[relativePath]
  }

  if (relativePath === 'index.md') {
    return '/'
  }

  if (relativePath.endsWith('/index.md')) {
    return `/${relativePath.replace(/\/index\.md$/, '/')}`
  }

  return `/${relativePath.replace(/\.md$/, '')}`
}

export default withMermaid(
  defineConfig({
    title: 'Web3 Tech Handbook',
    description: '신뢰 인프라, 설계 패턴, 운영, 실험을 위한 Web3 기술 핸드북',
    lang: 'ko-KR',
    base: siteBase,
    head: [['meta', { name: 'theme-color', content: '#0f766e' }]],
    cleanUrls: true,
    sitemap: {
      hostname: siteUrl,
      transformItems(items) {
        return items.filter((item) => {
          const normalizedPath = item.url.replace(/^\/+/, '').replace(/\/$/, '')

          return !sitemapExcludedPaths.has(normalizedPath)
        })
      }
    },
    transformHead({ pageData }) {
      if (pageData.isNotFound) {
        return
      }

      const canonicalUrl = new URL(resolveCanonicalPath(pageData.relativePath), siteUrl).toString()

      return [
        ['link', { rel: 'canonical', href: canonicalUrl }],
        ['meta', { property: 'og:url', content: canonicalUrl }],
        ...(movedCanonicalPaths[pageData.relativePath]
          ? [['meta', { name: 'robots', content: 'noindex,follow' }] as const]
          : [])
      ]
    },
    themeConfig: {
      logo: '/logo.svg',
      logoLink: siteUrl,
      nav: [
        { text: '홈', link: '/' },
        { text: '신뢰 인프라', link: '/foundations/' },
        { text: '설계 패턴', link: '/patterns/' },
        { text: '운영과 거버넌스', link: '/operations/' },
        { text: 'Lab', link: '/lab/' },
        { text: '레퍼런스', link: '/reference/' }
      ],
      sidebar: [
        {
          text: '신뢰 인프라',
          items: [
            { text: '신뢰 인프라의 진화: Bitcoin에서 RWA까지', link: '/foundations/' },
            { text: 'Web3를 다시 정의하기', link: '/foundations/web3-overview' },
            { text: '계정, 상태, 트랜잭션, 확정성', link: '/foundations/accounts-state-transactions-and-finality' },
            { text: '스마트컨트랙트는 정책 집행 계층이다', link: '/foundations/smart-contracts-as-policy' },
            { text: '온체인, 오프체인, 앵커링, 하이브리드', link: '/foundations/onchain-offchain-design-patterns' },
            { text: '신뢰 경계와 다층 검증 스택', link: '/foundations/trust-boundaries-and-verification-stack' }
          ]
        },
        {
          text: '설계 패턴',
          items: [
            { text: '패턴 지도', link: '/patterns/' },
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
            { text: '운영 판단 지도', link: '/operations/' },
            { text: 'Security, Governance, Scalability', link: '/operations/security-governance-and-scalability' },
            { text: '스마트컨트랙트 보안 운영', link: '/operations/smart-contract-security-operations' },
            { text: 'DAO-lite 거버넌스', link: '/operations/dao-lite-governance' },
            { text: 'Enterprise Adoption Patterns', link: '/operations/enterprise-adoption-patterns' }
          ]
        },
        {
          text: 'Lab',
          items: [
            { text: '실험 주제 지도', link: '/lab/' },
            { text: 'AI + Web3 Convergence', link: '/lab/ai-and-web3-convergence' },
            { text: '에이전트 권한과 지갑', link: '/lab/agent-wallet-permissions' },
            { text: '검증 가능한 에이전트 행동 기록', link: '/lab/verifiable-agent-activity' },
            { text: 'ZK와 선택적 공개', link: '/lab/zk-selective-disclosure' },
            { text: 'RWA와 데이터 증명', link: '/lab/rwa-data-proofs' }
          ]
        },
        {
          text: '레퍼런스',
          items: [
            { text: '학습/발표 기준', link: '/reference/' },
            { text: '학습 경로와 메시지', link: '/reference/learning-paths' },
            { text: '개념 레퍼런스', link: '/reference/glossary' }
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
        message: '신뢰 인프라, 설계 패턴, 운영, 실험을 위한 공개형 Web3 기술 문서',
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
