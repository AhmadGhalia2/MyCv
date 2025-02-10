import React from 'react'

export default function FooterTop() {
  return (
    <div class="footer-top">
    <aside class="left">
      <div className="tittle-text">
      <h1 class="name">Ahmad Ghalia</h1>
      <h6 class="under-name"> Datateknik Ingenjör </h6>
    </div>
    </aside>
    <aside class="right">
      <div className="icons">
        <a href='https://www.facebook.com/ahmadghalea5/'><box-icon name="facebook-circle" type="logo" flip="horizontal" animation="tada" color="#0866FF"></box-icon></a>
        <a href='https://www.instagram.com/ahmad_ghalea/?fbclid=IwZXh0bgNhZW0CMTAAAR00rynle9HGrmvFs4bh9YOhqVxmYno4iCKtfjBiaOoKrbvH4iqG4mRZmK0_aem_-2zcMJ-uy2NOp-tvSD1gEA#'>  <box-icon name="instagram-alt" type="logo" animation="tada" flip="horizontal" color="#E1306C"></box-icon></a>
        <a href='https://www.linkedin.com/in/ahmad-ghalia-7a950bb3'> <box-icon name="linkedin-square" type="logo" animation="burst" flip="horizontal" color="#0077B5"></box-icon></a>
        <a href='https://www.youtube.com/'> <box-icon name="youtube" type="logo" animation="burst" flip="vertical" color="#FF0000"></box-icon></a>
      </div>
    </aside>
  </div>
  )
}
