import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Contact.css';

class Contact extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <p>To navigate to this specific paragraph, go to 'src/routes/contact/Contact.js'</p>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Contact);
