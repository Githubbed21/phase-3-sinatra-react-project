import React from 'react';
import { Form } from 'semantic-ui-react';

class RecipeForm extends React.Component {
  constructor() {
    super();
  }

  state = {
    title: '',
    meal: '',
    directions: '',
    Image: '',
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let theObjectPosted = {
      title: this.state.title,
      meal: this.state.meal,
      directions: this.state.directions,
      image: this.state.ImageUrl,
    };

    fetch('http://localhost:3001/Recipes', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(theObjectPosted),
    })
      .then((res) => res.json())
      .then((newRecipe) => {
        this.props.addRecipe(newRecipe);
      });
  };

  render() {
    return (
      <div>
        <h3>Add a Recipe!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Title"
              value={this.state.title}
              onChange={this.changeHandler}
              placeholder="Name Of Dish"
              title="title"
              type="text"
            />
            <Form.Input
              fluid
              label="Meal"
              value={this.state.title}
              onChange={this.changeHandler}
              placeholder="Meal of the day"
              meal="meal"
              type="text"
            />
            <Form.Input
              fluid
              label="Directions"
              value={this.state.directions}
              onChange={this.changeHandler}
              placeholder="Recipe"
              directions="directions"
              type="text"
            />

            <Form.Input
              fluid
              label="Image URL"
              placeholder="url"
              name="ImageUrl"
              value={this.state.ImageUrl}
              onChange={this.changeHandler}
            />
          </Form.Group>
          <Form.Button type="submit">Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default RecipeForm;
