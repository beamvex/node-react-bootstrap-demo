var MainView = React.createClass({
 

    render: function() {
    	return (
        <div onClick={this.props.onClick}>
        
        <AppNavBar/>

    
    <JumbotronContainer/>

    <AppContainer/>
    </div>);
    }
      });
