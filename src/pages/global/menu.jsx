import { useEffect } from 'react'
import {Outlet,Link} from 'react-router-dom'
import Logo from '../../images/logo.png'


export default function Menu(){


    useEffect(()=>{
        document.getElementsByClassName('navbar-toggler')[0].onclick = ()=>{
            Nav()
        }
    })

    const Submenu = ()=>{
        let dropdownMenu = document.querySelector('.dropdown-menu.dropdown-menu-light')
        let dropdownMenuStyle = window.getComputedStyle(dropdownMenu)
        if(dropdownMenuStyle.getPropertyValue('display') == 'none'){
            dropdownMenu.style.cssText= 'display:block;position:absolute;top:50%'
        }else if(dropdownMenu.style.cssText='display:block'){
            dropdownMenu.style.cssText= 'display:hidden'
        }
    }

    function Nav(){
        let NavBar = document.getElementById('navbarNav')
        const navStyle = window.getComputedStyle(NavBar)
        
        if(navStyle.getPropertyValue('display') == 'none'){
            NavBar.style.cssText='display:block'
        }
        else if(NavBar.style.cssText = 'display:block'){
            NavBar.style.cssText='display:hidden'
        }
    }

    return(
        <>
        <header className="site-header">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-8 col-12 d-flex flex-wrap">
                               <p className="d-flex mb-0">
                                <a href="mailto:imohmdsmp@gmail.com" >
                                    imohmdsmp@gmail.com
                                </a>
                                <a target={'_blank'} href='http://mohammadsmp.com' classNameName='text-white ms-5'>© Mohammad Esmaeilpour portfolio</a>
                            </p>
                        </div>

                        <div className="col-lg-3 col-12 ms-auto d-lg-block d-none">
                            <ul className="social-icon">
                                <li className="social-icon-item">
                                    <a target={'_blank'} href="https://www.instagram.com/mohammad_esmaeilpour_web/" className="social-icon-link bi-instagram"></a>
                                </li>
                                
                                <li className="social-icon-item">
                                    <a target={'_blank'} href="https://www.linkedin.com/in/mohammad-esmaeilpour-4ab401217/" className="social-icon-link bi-linkedin"></a>
                                </li>

                                <li className="social-icon-item">
                                    <a target={'_blank'} href="https://github.com/imohmdsmp" className="social-icon-link bi-github"></a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </header>
            <nav className="navbar navbar-expand-lg bg-light shadow-lg">
                <div className="container">
                    <Link className="navbar-brand" to="/" >
                        <img src={Logo} className="logo img-fluid" alt="Kind Heart Charity" />
                        <span>
                            Kind Heart Charity
                            <small>Non-profit Organization</small>
                        </span>
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link click-scroll" href="#top">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link click-scroll" href="#section_2">About</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link click-scroll" href="#section_3">Causes</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link click-scroll" href="#section_4">Volunteer</a>
                            </li>

                            <li className="nav-item dropdown" onClick={Submenu}>
                                <a className="nav-link click-scroll dropdown-toggle" href="#"
                                    id="navbarLightDropdownMenuLink" role="button">News</a>
                                <ul className="dropdown-menu dropdown-menu-light">
                                    <li><Link target={'_blank'} className="dropdown-item" to="/news">News Listing</Link></li>
                                    <li><Link target={'_blank'} className="dropdown-item" to="/newDetails">News Detail</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link click-scroll" href="#section_6">Contact</a>
                            </li>

                            <li className="nav-item ms-3">
                                <Link target={'_blank'} className="nav-link custom-btn custom-border-btn btn" to="/donate">
                                    Donate
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </>
    )
}