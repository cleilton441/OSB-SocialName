import React, { useEffect } from 'react'
import { useStyle } from './AlertConcluid.style'
import Fade from '@material-ui/core/Fade'
import iconConc from '_assets/img/ok.svg'
import { useSelector, useDispatch } from 'react-redux'

export const AlertConcluid = () => {
    const fade = useSelector(((state: any)=> state.showComplete))
    const dispatch = useDispatch()
    useEffect(()=>{
        if(fade === true){
            setTimeout(()=>{
                dispatch({type: "HIDDENCOMPLETE"})
            }, 2000)
        } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[fade])

    const style = useStyle()
    return (
        <Fade in={fade}> 
                <div className={style.box} onClick={()=> dispatch({type: "HIDDENCOMPLETE"}) }>
                        <img src={iconConc} alt="concluido" className={style.imgconc}/>
                </div>
        </Fade>


    )
}