import { MenuEntry, menuStatus } from 'toolkitUI'

const config: MenuEntry[] = [
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/',
  },
  {
    label: 'Continuous Raise',
    icon: 'FarmIcon',
    href: '/continuousraise',
  },
  {
    label: 'NFTs',
    icon: 'FarmIcon',
    href: '/nftmarket',
  },
  {
    label: 'Protocol Explorer',
    icon: 'FarmIcon',
    href: '/viewprotocol',
  },
  {
    label: 'Zap Labs',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Bond',
        href: `/labs/bond/${encodeURIComponent('0xF02491e199565B9822ECf001eB6a336959D655C8CoinCap.io Datafeed')}`,
      },
      {
        label: 'Bond Kov',
        href: `/labs/bond/${encodeURIComponent('0x7a19D7c4a1a8BbA505180b4FE645582ba016650FA-OK')}`,
      },
      {
        label: 'Marketplace',
        href: '/labs/marketplace',
      },
      {
        label: 'New Token Wizard',
        href: '/labs/newtoken',
      },
      {
        label: 'Block Explorer',
        href: '/labs/blockexplorer',
      },
    ],
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'Overview',
  //       href: 'https://pancakeswap.info',
  //     },
  //     {
  //       label: 'Tokens',
  //       href: 'https://pancakeswap.info/tokens',
  //     },
  //     {
  //       label: 'Pairs',
  //       href: 'https://pancakeswap.info/pairs',
  //     },
  //     {
  //       label: 'Accounts',
  //       href: 'https://pancakeswap.info/accounts',
  //     },
  //   ],
  // },
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: 'Contact',
  //       href: 'https://docs.pancakeswap.finance/contact-us',
  //     },
  //     {
  //       label: 'Voting',
  //       href: 'https://voting.pancakeswap.finance',
  //     },
  //     {
  //       label: 'Github',
  //       href: 'https://github.com/pancakeswap',
  //     },
  //     {
  //       label: 'Docs',
  //       href: 'https://docs.pancakeswap.finance',
  //     },
  //     {
  //       label: 'Blog',
  //       href: 'https://pancakeswap.medium.com',
  //     },
  //     {
  //       label: 'Merch',
  //       href: 'https://pancakeswap.creator-spring.com/',
  //     },
  //   ],
  // },
]

export default config
