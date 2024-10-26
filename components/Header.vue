<template>
        <!--
        <div class="preloader">
            <div class="preloader-inner">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>-->
        <div class="sidemenu-wrapper">
            <div class="sidemenu-content">
                <button class="closeButton sideMenuCls"><img src="/assets/img/icon/close.svg" alt="icon"></button>
                <div class="widget footer-widget">
                    <div class="widget-about">
                        <div class="footer-logo">
                            <NuxtLink to="/"><img src="/assets/img/logo-white.png" alt="Logo"></NuxtLink>
                        </div>
                        <p class="about-text">We are digital agency that helps businesses develop immersive and engaging</p>
                        <div class="sidebar-wrap">
                            <h6>1 Avenue des Fleurs, Gombe</h6>
                            <h6>Kinshasa, Democratic Republic of Congo</h6>
                        </div>
                        <div class="sidebar-wrap">
                            <h6><NuxtLink to="tel:+243 894 549 315">+243 894 549 315</NuxtLink></h6>
                            <h6><NuxtLink to="mailto:contact@congoadvisory.cd">contact@congoadvisory.cd</NuxtLink></h6>
                        </div>
                        <div class="social-btn style2">
                            <NuxtLink to="https://www.facebook.com/">
                                <span class="link-effect">
                                    <span class="effect-1"><i class="fab fa-facebook"></i></span>
                                    <span class="effect-1"><i class="fab fa-facebook"></i></span>
                                </span>
                            </NuxtLink>
                            <a href="https://instagram.com/">
                                <span class="link-effect">
                                    <span class="effect-1"><i class="fab fa-instagram"></i></span>
                                    <span class="effect-1"><i class="fab fa-instagram"></i></span>
                                </span>
                            </a>
                            <a href="https://twitter.com/">
                                <span class="link-effect">
                                    <span class="effect-1"><i class="fab fa-twitter"></i></span>
                                    <span class="effect-1"><i class="fab fa-twitter"></i></span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-end">
                    <NuxtLink to="/contact" class="chat-btn gsap-magnetic">Let’s Talk with us</NuxtLink>
                </div>
            </div>
        </div>
        <div class="mobile-menu-wrapper">
            <div class="mobile-menu-area">
                <button class="menu-toggle"><i class="fas fa-times"></i></button>
                <div class="mobile-logo">
                    <NuxtLink to="/"><img src="/assets/img/logo.png" alt="Logo"></NuxtLink>
                </div>
                <div class="mobile-menu">
                    <ul>
                        <li>
                            <NuxtLink to="/">HOME</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/services">SERVICES</NuxtLink>
                        </li>
                        <li><NuxtLink to="/about">ABOUT US</NuxtLink></li>
                        <li>
                            <NuxtLink to="/contact">CONTACT</NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="sidebar-wrap">
                    <h6>1 Avenue des Fleurs, Gombe</h6>
                    <h6>Kinshasa, Democratic Republic of Congo</h6>
                </div>
                <div class="sidebar-wrap">
                    <h6><a href="tel:+243 894 549 315">+243 894 549 315</a></h6>
                    <h6><a href="mailto:contact@congoadvisory.cd">contact@congoadvisory.cd</a></h6>
                </div>
                <div class="social-btn style3">
                    <a href="https://www.facebook.com/">
                        <span class="link-effect">
                            <span class="effect-1"><i class="fab fa-facebook"></i></span>
                            <span class="effect-1"><i class="fab fa-facebook"></i></span>
                        </span>
                    </a>
                    <a href="https://instagram.com/">
                        <span class="link-effect">
                            <span class="effect-1"><i class="fab fa-instagram"></i></span>
                            <span class="effect-1"><i class="fab fa-instagram"></i></span>
                        </span>
                    </a>
                    <a href="https://twitter.com/">
                        <span class="link-effect">
                            <span class="effect-1"><i class="fab fa-twitter"></i></span>
                            <span class="effect-1"><i class="fab fa-twitter"></i></span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
        <div class="desk-menu-wrapper">
            <div class="desk-menu-area text-center">
                <button class="menu-toggle2"><img src="/assets/img/icon/close.svg" alt="img"></button>
                <div class="desk-menu">
                    <div class="h">
                        <NuxtLink to="/"><img src="/assets/img/logo-white.png" width="70%" alt="Logo"></NuxtLink>
                        <p class="pt-3 text-smoke text-capitalize">Every day, We work Alongside our clients to help them grow, control and reduce their risks, and materialize the opportunities they face..</p>
                    </div>
                    <ul>
                        <li>
                            <NuxtLink to="/">HOME</NuxtLink>
                        </li>
                        <li class="menu-item-has-children">
                            <a href="services.html">SERVICES</a>
                            <ul class="sub-menu">
                                <li><a href="service-details.html">FINANCIAL SERVICES </a></li>
                                <li><a href="#">TRANSACTION SERVICES </a></li>
                                <li><a href="#">TRANSFORMATION </a></li>
                                <li><a href="#">TAX </a></li>
                                <li><a href="#">ESG & TRACEABILITY </a></li>
                                <li><a href="#">FINANCIAL ENGINEERING </a></li>
                            </ul>
                        </li>
                        <li><a href="about.html">ABOUT US</a></li>
                        <li>
                            <a href="contact.html">CONTACT</a>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
        <header class="nav-header header-layout2">
            <div class="sticky-wrapper">
                <!-- Main Menu Area -->
                <div class="menu-area">
                    <div class="container">
                        <div class="row align-items-center justify-content-between">
                            <div class="col-auto">
                                <div class="header-logo">
                                    <NuxtLink to="/"><img src="/assets/img/logo-white.png" width="250" alt="logo"></NuxtLink>
                                </div>
                            </div>
                            <div class="col-auto m-lg-auto">
                                <nav class="main-menu d-none d-lg-inline-block">
                                    <ul>
                                        <li>
                                            <NuxtLink to="/" class="active">
                                                <span class="link-effect">
                                                    <span class="effect-1">HOME</span>
                                                    <span class="effect-1">HOME</span>
                                                </span>
                                            </NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/services" class="">
                                                <span class="link-effect">
                                                    <span class="effect-1">SERVICES</span>
                                                    <span class="effect-1">SERVICES</span>
                                                </span>
                                            </NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/about">
                                                <span class="link-effect">
                                                    <span class="effect-1">ABOUT US</span>
                                                    <span class="effect-1">ABOUT US</span>
                                                </span>
                                            </NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/contact">
                                                <span class="link-effect">
                                                    <span class="effect-1">CONTACT</span>
                                                    <span class="effect-1">CONTACT</span>
                                                </span>
                                            </NuxtLink>
                                        </li>
                                    </ul>
                                </nav>
                                <div class="navbar-right d-inline-flex d-lg-none">
                                    <button type="button" class="menu-toggle sidebar-btn">
                                        <span class="line"></span>
                                        <span class="line"></span>
                                        <span class="line"></span>
                                    </button>
                                </div>
                            </div>
                            <div class="col-auto d-none d-lg-block">
                                <div class="header-button ms-0">
                                    
                                    <a href="#" class="search-btn">
                                        <i class="fa fa-globe"></i>
                                        <span class="link-effect">
                                            <span class="effect-1">EN</span>
                                            <span class="effect-1">EN</span>
                                        </span>
                                    </a>

                                    <button type="button" class="sidebar-btn menu-toggle2">
                                        <span class="line"></span>
                                        <span class="line"></span>
                                        <span class="line"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        
</template>
