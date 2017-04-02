var MainApp = React.createClass({
	
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
