import React, {Component} from 'react';
import styles from './component.scss';


export default class Counter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  onClick() {
    this.setState({
      count: (this.state.count+1)
    })
  }

  render() {
    const {count} = this.state;

    return(
      <div className={styles['container']}>
        <p className={styles['count']}>The count is: {count}</p>
        <button className={styles['button']} onClick={this.onClick.bind(this)}>Add count</button>
      </div>
    );
  }
}
