import React from 'react'
import Page from 'components/layout/Page'
import Header from './Header'
import ProviderWizard from './ProviderWizard'

export interface TitleProps {
    wrapper: string
}

const ProviderTitle: React.FC<TitleProps> = ({wrapper}) => (
        <Page>
            <Header />
            <ProviderWizard wrapper={wrapper} />
        </Page>
)

export default ProviderTitle