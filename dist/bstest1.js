var Navbar = ReactBootstrap.Navbar;
var Nav = ReactBootstrap.Nav;
var NavItem = ReactBootstrap.NavItem;
var NavDropdown = ReactBootstrap.NavDropdown;
var MenuItem = ReactBootstrap.MenuItem;
var Panel = ReactBootstrap.Panel;
;var modelMaster = new Backbone.Model();

modelMaster.set({prop1: 0})

;var AppContainer = React.createClass({
 

    render: function() {
    	return (<div className="container-fluid">
      
      <div className="row">
        <Paragraph/>
        <Paragraph/>
        <Paragraph/>
      </div>

      <hr/>

      <footer>
        <p>&copy; 2017 Beamvex.co.uk</p>
      </footer>
        </div>);
    }
});;var AppNavBar = React.createClass({
    handleClick: function(e) {
    e.preventDefault();
    console.log('he clicked it');
  },
  render: function() {

    return (

<Navbar inverse collapseOnSelect fixedTop fluid>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Nodemazon</a>
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

});class AppNavLinks extends React.Component {
	
	constructor(props) {
	    super(props);

	    this.state = {
	      links: [
	              
	              ]
	    };
	    
	    this.onChange = this.onChange.bind(this);
	  }
	
	
  
	componentDidMount() {
        modelMaster.on('change', this.onChange);
    }
    onChange() {
        console.log('yip', this.state);
        this.setState({links:modelMaster.get('links')});
        console.log('yup nope', this.state);
    }
	  
	  render() {
     
		  //alert(this.state.links.length);
		  
		  var itms = [];

  for (var i = 0; i < this.state.links.length; i++) {
        itms.push(<NavItem href={this.state.links[i].url}>{this.state.links[i].label}</NavItem>);
      }

  return (<Nav>{[itms]}</Nav>);

  }
}
;var Jumbotron = React.createClass({
     
 
    render: function() {
        return (
        		
        		<div className="jumbotron">
        		 	
        		
        		
        		<Panel bsStyle="info">
        	      Panel content
        	    </Panel>
        	      
        	      <div className="container-fluid"> 	
      
       
        <h1>Welcome to the Demo{this.props.prop1}</h1>
        <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
        <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
      </div>
        </div>
        
);
    }
});;var MainView = React.createClass({
 

    render: function() {
    	return (
        <div onClick={this.props.onClick}>
        
        <AppNavBar/>

    
    <JumbotronContainer/>

    <AppContainer/>
    </div>);
    }
      });
;var Paragraph = React.createClass({
 

    render: function() {
    	return (<div className="col-md-4">
          <h2>Heading</h2>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
          <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
        </div>);
    }
});;class JumbotronContainer extends React.Component {
     constructor(props) {
         super(props);
         this.state = {prop1 : 0};
         this.onChange = this.onChange.bind(this);
     }
     componentDidMount() {
         modelMaster.on('change', this.onChange);
     }
     onChange() {
         console.log('yip', this.state);
         this.setState({prop1:modelMaster.get('prop1')});
         console.log('yup nope', this.state);
     }
    render() {
        return (
<Jumbotron prop1={this.state.prop1}/>);
    }
};var MainApp = React.createClass({
	
	componentDidMount: function() {
		  
		var parent = this;
		  reqwest({
		       url: 'api/links'
		     , method: 'get'
		     , success: function (resp) {
		    	 
		    	 modelMaster.set({links:resp.links});
		       }
		   });
		
	  } ,
	  
	
       handleClick: function(e) {
    	   

    	   
    	   
modelMaster.set({prop1: modelMaster.get('prop1')+1});
    //e.preventDefault();
    console.log('The link was clicked x. ', e._targetInst._hostNode.href);
    if (e._targetInst._hostNode.href) {
    window.location = e._targetInst._hostNode.href;
    }
  },
 
    render: function() {
    	return (
          <MainView onClick={this.handleClick}/>
        );
    }
      });
;// Split location into `/` separated parts, then render `Application` with it
function handleNewHash() {
  var location = window.location.hash.replace(/^#\/?|\/$/g, '').split('/');
  
  
  
}

// Handle the initial route and browser navigation events
handleNewHash()
window.addEventListener('hashchange', handleNewHash, false);;
ReactDOM.render(<MainApp/>, document.getElementById('app'));
