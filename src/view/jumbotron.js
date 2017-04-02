var Jumbotron = React.createClass({
     
 
    render: function() {
        return (
        		
        		<div className="jumbotron">
        		 	
        		
        		
        		<Panel bsStyle="info">
        	      Panel content
        	    </Panel>
        	      
        	      <div className="container-fluid"> 	
      
       
        <h1>Watcha gain tiplex {this.props.prop1}</h1>
        <p>This is a template for a simple marketing or informational website. luggy boy rules It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
        <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
      </div>
        </div>
        
);
    }
});