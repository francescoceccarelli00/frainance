import React from 'react'
import style from './Footer.module.css'
import disco from '../../assets/images/disco.png';
import unimib from '../../assets/images/unimib.png';
import logo from '../../assets/images/logo.png'

function Footer(props1) {
    const {courseName1, courseName2, courseLink1} = props1;
  return (
    <footer>
        <div className='container'>
            <div className='row py-3'>

                <div className='col my-3 d-flex align-items-center justify-content-center'>
                    <div className={'d-flex align-items-center {style.copyright}'}>
                        <div className={style.logos} id={style.logo}>
                            <a href='/'>
                                <img src={logo} alt='logo di frainance copiato da binance'/>
                            </a>
                        </div>
                        <h3>F(ra)inance</h3>
                    </div>
                </div>

                <div className='col my-3 d-flex align-items-center justify-content-center'>
                    <div className={style.copyright}>
                        <div className={style.course}>
                            <a className='mx-auto' href={courseLink1} target='_blank' rel='noreferrer'>
                                {courseName1}<br/>{courseName2}
                            </a>
                        </div>
                    </div>
                </div>

                <div className='col my-3 d-flex align-items-center justify-content-center'>
                    <div className={'d-flex {style.copyright}'}>
                        <div className={style.logos} id={style.disco}>
                            <a href='https://www.disco.unimib.it/it' target='_blank' rel='noreferrer'>
                                <img src={disco} alt='logo Dipartimento di Informatica, Sistemistica e Comunicazione - DISCo' />
                            </a>
                        </div>
                        <div className={style.logos}>
                            <a href='https://www.unimib.it/' target='_blank' rel='noreferrer'>
                                <img src={unimib} alt='logo Università degli studi di Milano-Bicocca' />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </footer>
  )
}

export default Footer