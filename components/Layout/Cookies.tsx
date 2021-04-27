import { useState } from 'react'
import style from './Cookies.module.scss'
import Link from 'next/link'

export default function Cookies (props: any) {
    const [show, setShow] = useState(true)
    if(!show) {return (<div/>)}

    return (
    <div className='fixed-bottom'>
        <div className={style.WarningContainer}>
        <div className="row">

            <div className='col-lg-6 col-md-6 col-sm-12'>
                <p className={style.textContainer}>Používáním těchto stránek vyjadřujete souhlas s <Link href='/podminky'><a style={{color: 'blue'}}>podmínkami použití webových stránek, ochranou osobních údajů a využívaním souborů cookies.</a></Link></p>
            </div>

            <div className='col-lg-6 col-md-12 col-sm-12'>
                <div className= {style.ButtonContainer}>
                    <button 
                    className= 'btn-light'
                    onClick={() => {
                        setShow(false)
                        props.setIsCoockiesEnabled(true)
                    }}      
                    >Souhlasím</button>
                </div>
            </div>
        </div>
        </div>
    </div>
    )
}