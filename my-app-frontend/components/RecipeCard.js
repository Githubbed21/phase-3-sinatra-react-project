import React from 'react';
import { Card } from 'semantic-ui-react';

class RecipeCard extends React.Component {
  state = {
    displayFont: true,
  };

  handleClick = (e) => {
    e.preventDefault();
    this.setState({ displayFont: !this.state.displayFont });
  };

  render() {
    const { title, meal, directions } = this.props.recipes;
    const ImageUrl = this.props.recipe.image.find(ImageUrl).value;
    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            <img src={ImageUrl} alt="I was hungry" />
          </div>
          <div className="content">
            <div className="header">{title}</div>
            <div className="text">{meal}</div>
            <div className="body">{directions}</div>
            <span>
              <i className="icon yum" />
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default RecipeCard;
