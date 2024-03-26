import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoClose, IoMenu } from 'react-icons/io5';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [status, setStatus] = useState(false);
  return (
    <div className="navigation-bar">
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="btn-group">
          <button className="btn-left active">Presentation</button>
          <button className="btn-middle">City</button>
          <button className="btn-right">Blog</button>
        </div>

        <div className="nav-links">
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Features
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Experience
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Pricing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Trucks
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Ads Setting
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Coverage
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Order Process
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="order-btn">
          <button>Order</button>
        </div>

        <div className="responsive-btns">
          <IoClose className="icon" />
          <IoMenu className="icon" />
        </div>
      </div>

      <div className="responsive-navbar">
        <div className="header">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>

          <div className="order-btn">
            <button>Order</button>
            <div className="responsive-btns">
              {status && (
                <IoClose className="icon" onClick={() => setStatus(!status)} />
              )}
              {!status && (
                <IoMenu className="icon" onClick={() => setStatus(!status)} />
              )}
            </div>
          </div>
        </div>

        {status && (
          <div className="btn-group">
            <button className="btn-left active">Presentation</button>
            <button className="btn-middle">City</button>
            <button className="btn-right">Blog</button>
          </div>
        )}

        {status && (
          <div className="nav-links">
            <ul className="nav-list">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Features
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Experience
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Pricing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Trucks
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Ads Setting
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Coverage
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Order Process
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
