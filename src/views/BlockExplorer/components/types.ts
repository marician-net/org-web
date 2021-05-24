export type TableProps = {
  data?: TableDataTypes[]
  selectedFilters?: string
  sortBy?: string
  sortDir?: string
  onSort?: (value: string) => void
}

export type ColumnsDefTypes = {
  id: number
  label: string
  name: string
  translationId: number
  sortable: boolean
}

export type ScrollBarProps = {
  ref: string
  width: number
}

export type TableDataTypes = {
  POOL: string
  APY: string
  EARNED: string
  STAKED: string
  DETAILS: string
  LINKS: string
}

export const MobileColumnSchema: ColumnsDefTypes[] = [
  {
    id: 1,
    name: 'farm',
    translationId: 999,
    sortable: true,
    label: '',
  },
  {
    id: 3,
    name: 'txHash',
    translationId: 736,
    sortable: true,
    label: 'TxHash',
  },
  // {
  //   id: 5,
  //   name: 'timestamp',
  //   translationId: 999,
  //   sortable: true,
  //   label: 'Timestamp',
  // },
  {
    id: 6,
    name: 'txAction',
    translationId: 999,
    sortable: true,
    label: 'Transaction Action',
  },
  {
    id: 6,
    name: 'details',
    translationId: 999,
    sortable: true,
    label: '',
  },
]

export const DesktopColumnSchema: ColumnsDefTypes[] = [
  {
    id: 1,
    name: 'farm',
    translationId: 999,
    sortable: true,
    label: '',
  },
  {
    id: 2,
    name: 'txHash',
    translationId: 736,
    sortable: true,
    label: 'Transaction Hash',
  },
    {
    id: 3,
    name: 'status',
    translationId: 1072,
    sortable: true,
    label: 'Status',
  },
  {
    id: 4,
    name: 'block',
    translationId: 999,
    sortable: true,
    label: 'Block',
  },
  {
    id: 5,
    name: 'timestamp',
    translationId: 999,
    sortable: true,
    label: 'Timestamp',
  },
  {
    id: 6,
    name: 'txAction',
    translationId: 999,
    sortable: true,
    label: 'Transaction Action',
  },
  {
    id: 7,
    name: 'details',
    translationId: 999,
    sortable: true,
    label: '',
  },
]

export enum ViewMode {
  'TABLE' = 'TABLE',
  'CARD' = 'CARD',
}
