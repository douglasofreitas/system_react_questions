import React, { Component } from 'react';

import { changeItem, addItem, removeItem } from './QuickAdd.rules';

class Quick_Add extends Component {
  constructor () {
    super();
    this.state = {
      items: ['']
    };

    this.change = this.change.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.options){
      this.setState({items: nextProps.options});
    }
  }

  change (index, event) {
    const value = event.target.value;
    this.setState(changeItem(this.state, index, value));
  }

  addItem () {
    this.setState(addItem(this.state));
  }

  removeItem (index) {
    this.setState(removeItem(this.state, index));
  }

  render () {
    return (
      <div>
        {this.state.items.map((choice, index) => (
          <div className='field has-addons' key={`container_${index}`}>
            <input key={`input_${index}`}
              className='input is-expanded'
              type='text'
              value={this.state.items[index]}
              onChange={this.change.bind(this, index)}
              placeholder={`${index + 1}° option`}
              required />

            {index === 0 &&
              <div className='control'>
                <button type='button'
                  className='button is-info'
                  onClick={() => this.addItem()}>
                Add</button>
              </div>
            }

            {!!index &&
              <div className='control'>
                <button type='button'
                  key={`btn_remove_${index}`}
                  className='button is-danger'
                  title='Remove item'
                  onClick={() => this.removeItem(index)}>
                Remove</button>
              </div>
            }
          </div>
        ))}
      </div>
    );
  }
}

export default Quick_Add;
