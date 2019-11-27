const React = require('react');
const AppLayout= require('../layouts/AppLayout.jsx');
// const { buttonStyle, h1Style } = require('../styles/edit.js');
const styles = require('../styles/edit.js');

class Edit extends React.Component{
  render() {
    return (
      <AppLayout title="Yum Edit Page">
      <h1 style={styles.h1Style}>STYLED By Arthur Hes So Cool</h1>
      <form action={`/restaurants/${this.props._id}?_method=put`} method="post">
        <p>
          <label>Name:</label>
          <input type="text" value={this.props.name} name="name"/>
        </p>
        <p>
          <label>Owner:</label>
          <input type="text" value={this.props.owner} name="owner"/>
        </p>
        <p>
          <label>Type:</label>
          <input type="text" value={this.props.type} name="type"/>
        </p>
        <p>
          <label>Capacity:</label>
          <input type="number" value={this.props.capacity} name="capacity"/>
        </p>
        <p>
          <input style={styles.buttonStyle} type="submit" value="Submit"/>
        </p>
      </form>
      </AppLayout>
    )
  }
}
module.exports= Edit ;
