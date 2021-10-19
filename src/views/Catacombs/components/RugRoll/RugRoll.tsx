import { useTranslation } from 'contexts/Localization'
import React from 'react'
import Menu from '../../../../components/Catacombs/Menu'
import Page from '../../../../components/layout/Page'

const RugRoll: React.FC = () => {
    const { t } = useTranslation()
    console.log("yeEAH")
    return (
      <Menu>
          <Page>
              <div className='parent-div'>
                  Rug Roll is coming very soon!
              </div>
          </Page>
      </Menu>
    )
}

export default RugRoll
