import React, {Component} from "react"

export default class List extends Component {
  render() {
    let {name, items, value, handler} = this.props;
    let options = [];

    options.push(<option value={name}>{name}</option>);

    for(var index in items) {
      let item = items[index];
      options.push(<option value={item}>{item}</option>);

    }

    if(value === null) {value = name;}

    return(
      <select onChange={handler} value={value}>{options}</select>
    )
  }
}
