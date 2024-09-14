import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
import logo from '../Components/favicon.png'
class NavBar extends Component {

  constructor(props) {
    super(props)
    this.state = { text: '' }
  }


  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }


  render() {
    return (
      <React.Fragment>





        <nav class="navbar  navbar-expand-md custom-navbar navbar-dark">
          <img class="navbar-brand" src={logo} id="logo_custom" alt="logo" />
          <h1 className="text-center"><span className='head1'>Block</span><span className='head2'>Auth</span></h1>
          <button class="navbar-toggler navbar-toggler-right custom-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon "></span>
          </button>
          <div class="collapse navbar-collapse " id="collapsibleNavbar">
            <ul class="navbar-nav ml-auto ">

              <li className="nav-item">
                <Link className="nav-link boldcss active-" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link boldcss active-" to="admin">Admin</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link boldcss active-" to="manufacturer">Manufacturer</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link boldcss active-" to="sell">Sell Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link boldcss active-" to="qr">QR Code</Link>
              </li>
            </ul>
          </div>
        </nav>


        <div className="container py-4">

          <h6 className="text-center"><i>MY ADDRESS : {this.props.account}</i></h6>

        </div>


      </React.Fragment>
    );
  }
}

export default NavBar;