import React, {Component} from "react"
import List from "./lists"


class TwoLists extends Component {
  constructor(props) {
    super(props);
    this.state = {brand: null, model: null};

    this.brandChanged = this.brandChanged.bind(this);
    this.modelChanged = this.modelChanged.bind(this);
  }

  knownBrand(brand) {
   return this.brands().indexOf(brand) !== -1
  }

  brandChanged(event) {
    let brand = event.target.value;
    if(this.knownBrand(brand)) {
      this.setState({brand, model: null});
    } else {
      this.setState({brand: null, model: null});
    }
  }

  knownModel(model) {
    return this.models().indexOf(model) !== -1
  }

  modelChanged(event) {
    let model = event.target.value;
    if(this.knownModel(model)) {
      this.setState({model});
    } else {
      this.setState({model: null});
    }
  }

  brands() {
   return Object.keys(this.props.data);
  }

  models() {
    let {brand} = this.state;
    return (brand !== null ? this.props.data[brand] : []);
  }

  render() {
    let {id} = this.props;	 
    return(
      <div id={id}>
	      <List name="Brand" handler={this.brandChanged} items={this.brands()} value={this.brand} />
	      <List name="Model" items={this.models()} value={this.model} handler={this.modelChanged} />
      </div>	
     )
  }
}

TwoLists.defaultProps = {
  data: {
    'Opel': ['Agila', 'Astra'],
    'Skoda': ['Fabia', 'Octavia'],
    'Toyota': ['Auris', 'Avensis']
  }
}

export default TwoLists;
