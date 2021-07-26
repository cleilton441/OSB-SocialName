import React from 'react'
import { Button } from 'components/Button'
import { useStyles } from './FooterButtons.style'
import vector from '../../_assets/img/Vector.svg'
import vector1 from '../../_assets/img/vector1.svg'
import { useDispatch } from 'react-redux'

export const FooterButtons : React.FC = () =>{
    const dispatch = useDispatch();
    const style = useStyles();
    const styles = useStyles();
    return (
        <div className={style.buttonsWrapper}>
            <Button palette="secondary" onClick={()=> console.log("Voltar")} startIcon={<img src={vector1} alt="concluido"
             className={styles.imgconc}/>} >
                 <div className={style.back}>
                   Voltar
                </div>
            </Button>

            <Button palette="primary" onClick={() => dispatch({type: "SHOW"})} endIcon={<img src={vector} alt="concluido" className={styles.imgconc}/>}
             >
                <div className={style.back}>
                  Próximo
                </div>
            </Button>
        </div>
    )
}