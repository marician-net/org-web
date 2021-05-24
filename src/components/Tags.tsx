import React from 'react'
import { Tag, VerifiedIcon, CommunityIcon, BinanceIcon } from 'toolkitUI'

const gradientText = (gradient) => {
  return {
    //  backgroundImage: `linear-gradient(${gradient})`,
    backgroundClip: 'text',
    textFillColor: 'transparent',
  }
}

const CoreTag = (props) => (
  <Tag variant="secondary" outline startIcon={<VerifiedIcon color="secondary" />} {...props}>
    Core
  </Tag>
)

const CommunityTag = (props) => (
  <Tag variant="textSubtle" outline startIcon={<CommunityIcon color="secondary" />} {...props}>
    Community
  </Tag>
)

const BinanceTag = (props) => (
  <Tag variant="binance" outline startIcon={<BinanceIcon color="secondary" />} {...props}>
    Binance
  </Tag>
)

const DualTag = (props) => (
  <Tag variant="textSubtle" outline {...props}>
    Dual
  </Tag>
)

const NewTag = (props) => (
  <svg
    width="70"
    height="25"
    viewBox="0 0 113 43"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginRight: '0px' }}
  >
    <rect x="2" y="2" width="109" height="39" rx="19.5" stroke="url(#paint0_linear)" strokeWidth="4" />
    <path
      d="M37.5248 28V16.408H40.0088L44.9408 23.338V16.408H47.8568V28H45.3548L40.4228 21.088V28H37.5248ZM50.5889 28V16.408H59.1389V18.64H53.4869V21.07H58.4729V23.338H53.4869V25.768H59.1389V28H50.5889ZM63.7605 28L61.0605 16.408H63.9045L65.4345 23.392L67.0185 18.046V16.408H69.3945L71.3925 23.41L72.9945 16.408H75.8385L73.1565 28H70.4745L68.5305 21.304L66.4425 28H63.7605Z"
      fill="url(#paint1_linear)"
      strokeWidth="1px"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="18.9496"
        y1="30.2817"
        x2="44.879"
        y2="69.4801"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3480F6" />
        <stop offset="1" stopColor="#0DD8D0" />
      </linearGradient>
      <linearGradient
        id="paint1_linear"
        x1="18.9496"
        y1="30.2817"
        x2="44.879"
        y2="69.4801"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3480F6" />
        <stop offset="1" stopColor="#0DD8D0" />
      </linearGradient>
    </defs>
  </svg>
)

export { CoreTag, CommunityTag, BinanceTag, DualTag, NewTag }
