import React from 'react'
import { useStyles } from './Socialname.style'

import { PageContainer } from 'components/PageContainer'
import { AppBar } from 'components/AppBar'
import { ProcessDescriptionHeader } from 'components/ProcessDescriptionHeader'
import { ProcessPageLayout } from 'components/ProcessPageLayout'
import { InputConfig } from 'components/InputConfig'
import { FooterButtons } from 'components/FooterButtons'
import { ConfirmPassword } from 'components/ConfirmPassword'
import { useSelector } from 'react-redux'
import { AlertConcluid } from 'components/Concluded'

export const SocialName : React.FC = () => {
    const stateShow = useSelector(((state: any) => state.showConfirm))
    const styles = useStyles()
    return (
        <PageContainer>
            <ProcessPageLayout 
            appBar={ <AppBar /> }
            header={
                    <ProcessDescriptionHeader 
                    title="Nome Social" 
                    description="xxxxxxxxxxxxxxx"
                    />
             }
             main={
                 <div className={styles.midcontent}>
                    <AlertConcluid />
                    <InputConfig />
                 </div>
             }

             footer={
                stateShow ? <ConfirmPassword /> : <FooterButtons />
             }

             />
            
        </PageContainer>
    )
}