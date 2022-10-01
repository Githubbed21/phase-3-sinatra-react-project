import React from 'react';
import RecipeCard from './RecipeCard';
import { Card } from 'semantic-ui-react';

class RecipeCollection extends React.Component {
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.props.recipes.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}
      </Card.Group>
    );
  }
}

export default RecipeCollection;
