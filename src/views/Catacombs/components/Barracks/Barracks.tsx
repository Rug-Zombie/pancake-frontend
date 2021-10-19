import { useTranslation } from 'contexts/Localization'
import React from 'react'
import Menu from '../../../../components/Catacombs/Menu'
import Page from '../../../../components/layout/Page'


const Barracks: React.FC = () => {
    const { t } = useTranslation()
    return (
      <Menu>
        <Page>
          <div className='parent-div'>
            Barracks are coming soon!
          </div>
        </Page>
      </Menu>
    )
}

export default Barracks
