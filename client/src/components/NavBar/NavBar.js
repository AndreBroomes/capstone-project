import React from 'react';
import SearchBar from "../SearchBar/SearchBar";
import { Navbar, Nav } from 'react-bootstrap';

export default function NavBar({ searchWord, handleChange, userInfo, user, setUser, meetups, setMeetups, handleLogOutClick }) {
  
    return (
    <>
      <Navbar fixed="top" bg="light" variant="light" className="nav-bar" style={{ minWidth: 700 }}>
  {/* <img id="umbrella" src={umbrella} alt="umbrella"/> */}
      <Navbar.Brand href="/" className="Logo">Soccer Meetups</Navbar.Brand>
      <div className="SearchBar">
          <SearchBar
            searchWord={searchWord}
            // setSearchWord={setSearchWord}
            handleChange={handleChange}
            meetups={meetups}
            setMeetups={setMeetups}
          />
        </div>
          <Nav
          className="navlinks"
          style={{ paddingRight: 50 }}
          >
              <Nav.Link href="/">Home</Nav.Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              <Nav.Link href="/tickets">Tickets</Nav.Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              <Nav.Link href="/profile">Account</Nav.Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              <Nav.Link onClick={handleLogOutClick}>Logout</Nav.Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Nav>
</Navbar>
      {/* <div className="NavBar">
        <div className="Logo">
       <p>chefish</p>
        </div>
        <div className="SearchBar">
          <SearchBar
            searchWord={searchWord}
            // setSearchWord={setSearchWord}
            handleChange={handleChange}
            meetups={meetups}
            setMeetups={setMeetups}
          />
        </div>
        <div className="NavLinks">
          <Link to="/main">Home</Link>
          <br></br>
          <Link to="/profile">Account</Link>
          <br></br>
          <Link to="/signin">Logout</Link>
        </div>
      </div> */}
    </>
    );
  }