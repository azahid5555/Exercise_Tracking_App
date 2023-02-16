import React from 'react'
import imgAbout from '../imgs/aboutimg.jpg'

const Aboutus = () => {
  return (
    <div className='about_sec'>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className='secTitle'>About us</h1>
                </div>
            </div>
            <div className="row">
                <div className="about_img">
                    <img src={imgAbout} alt="" />
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12 col-md-6">
                    <p className='about_des'>Mauris nibh id sagittis, est, viverra urna, ac proin elit. Eu lacus elementum proin aliquet quis ultrices nunc morbi leo. Eget erat in enim elementum elit amet sit commodo sollicitudin. Augue et pharetra eros praesent ut tempor.</p>
                </div>
                <div className="col-12 col-md-6">
                    <p className='about_des'>Eu viverra tellus vestibulum cursus vivamus aenean nec eu. Donec hac quis tortor, cursus sem. Convallis vulputate proin pellentesque viverra. At sagittis montes, tellus lorem pellentesque rhoncus dolor tortor dui.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <a href="#link" className='animated_link'>LEARN MORE <i class="bi bi-arrow-right"></i></a>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Aboutus