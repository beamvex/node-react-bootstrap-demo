var AppNavBar = React.createClass({
    handleClick: function(e) {
    e.preventDefault();
    console.log('he clicked it');
  },
  render: function() {

    return (

<Navbar inverse collapseOnSelect fixedTop fluid>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#"><img className="rf-logo" src="images/roberto-forster-logo.png"/></a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <AppNavLinks/>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1} onClick={this.handleClick}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Link Right</NavItem>
        <NavItem eventKey={2} href="#">Link Right</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

    );

  }

})