import { Component, PropTypes } from 'react';
import { HOC } from 'formsy-react';
import { get } from 'lodash';

class Select extends Component {
  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    setValue: PropTypes.func,
    showRequired: PropTypes.func,
    showError: PropTypes.func,
    getErrorMessage: PropTypes.func,
    getValue: PropTypes.func,
    keyLabel: PropTypes.string,
    keyValue: PropTypes.string,
    items: PropTypes.array,
    multiple: PropTypes.boolean,
  }

  static defaultProps = {
    keyLabel: undefined,
    keyValue: undefined,
    items: [],
    mutliple: false,
  }

  constructor() {
    super();
  }

  render() {
    const { props } = this;
    const { items, multiple } = this.props;
    const addClassName = get(props, 'className', '');
    const className = `form-group + ${addClassName}`;
    const defaultLabel = get(this.props, 'keyLabel', 'label');
    const defaultValue = get(this.props, 'keyValue', 'value');

    return (
      <div className={className}>
        <label htmlFor={props.name}>{props.title}</label>
        <select
          name={props.name}
          onChange={this.changeValue.bind(this)}
          multiple={multiple}>
          <option selected hidden>Choose here</option>
          { items.map((item, key) => {
            return <option key= {key} value= {item[defaultValue]}> {item[defaultLabel]} </option>;
          })}
        </select>
      </div>
    );
  }

  changeValue(event) {
    const { setValue } = this.props;
    const select = event.target;
    const values = [...select.options].filter(option => option.selected).map(option => option.value);
    setValue(values);
  }
}

export default HOC(Select);