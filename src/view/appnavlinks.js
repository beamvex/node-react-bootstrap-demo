class AppNavLinks extends React.Component {
	
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
