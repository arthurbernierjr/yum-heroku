const React = require('react');
const AppLayout = require('./layouts/AppLayout.jsx')

class Index extends React.Component{
  render() {
    const extraStyles = {
      backgroundColor: 'pink',
      color: 'purple'
    }
    return (
      <AppLayout title="Yum Homepage">
      <h2>Restaurants</h2>
      {/* class should be class name*/}
        <ul className="restaurant-list">
        {this.props.restaurants.map(
          (restaurant, index) => {
            return(
              <li className="restaurant-list__item" style={extraStyles}>
                  {/* class should be class name*/}
              <a href={`/restaurants/${restaurant.id}`}>{restaurant.name}</a></li>
            )}
        )}
        </ul>
      <p>
        <a href="/restaurants">See All Restaurants</a> |
        <a href="/restaurants/new">New Restaurant</a>
      </p>
      </AppLayout>

    )
  }
}
module.exports= Index ;
