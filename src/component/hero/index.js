import React, { Component } from 'react';
import Wave from '../../assets/images/wave.svg';

export default class Hero extends Component {
  render() {
    return (
        <>
            <section class="hero">
                <nav class="navbar navbar-expand-lg navbar-dark" id="whites">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Weblatters</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarText">
                            <span class="navbar-text">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li classNmae="nav-item text-dark" onClick={() => this.props.changeHandler('Edaran')}>Edaran</li>
                                <li classNmae="nav-item text-dark" onClick={() => this.props.changeHandler('Izin')}>Izin</li>
                                <li classNmae="nav-item text-dark" onClick={() => this.props.changeHandler('Keterangan')}>Keterangan</li>
                                <li classNmae="nav-item text-dark" onClick={() => this.props.changeHandler('Lamaran')}>Lamaran</li>
                                <li classNmae="nav-item text-dark" onClick={() => this.props.changeHandler('Pesan')}>Pesan</li>
                                <li classNmae="nav-item text-dark" onClick={() => this.props.changeHandler('Undangan')}>Undangan</li>
                            </ul>
                        </span>
                        </div>
                    </div>
                </nav>

                {/* <img src="./circle-hero.svg" alt="circle-hero" class="circle-hero" /> */}
                <div class="first-title">
                    <h1>Surat Digital</h1>
                    <a target="__blank" href="https://api.whatsapp.com/send?phone=+6282244956781&text=Hai admin buruhit :)"><button class="btn-purple">Pesan sekarang <i class="fas fa-play"></i></button></a>
                </div>
            </section>
            <img src={Wave} alt="wave" className="wave" />
                    
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                <a class="navbar-brand" href="#">Weblatter</a>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item" onClick={() => this.props.changeHandler('Edaran')}>
                        <a class="nav-link active" aria-current="page" href="#">Edaran</a>
                        </li>
                        <li class="nav-item" onClick={() => this.props.changeHandler('Izin')}>
                        <a class="nav-link" href="#">Izin</a>
                        </li>
                        <li class="nav-item" onClick={() => this.props.changeHandler('Keterangan')}>
                        <a class="nav-link" href="#">Keterangan</a>
                        </li>
                        <li class="nav-item" onClick={() => this.props.changeHandler('Lamaran')}>
                        <a class="nav-link" href="#">Lamaran</a>
                        </li>
                        <li class="nav-item" onClick={() => this.props.changeHandler('Pesan')}>
                        <a class="nav-link" href="#">Pesan</a>
                        </li>
                        <li class="nav-item" onClick={() => this.props.changeHandler('Undangan')}>
                        <a class="nav-link" href="#">Undangan</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
       </div>
    </>
    );
  }
}
