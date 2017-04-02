class JumbotronContainer extends React.Component {
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
}