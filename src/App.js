import React, { Component } from 'react'
import Palette from './Palette';
import PaletteList from './PaletteList';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import { Route, Switch } from "react-router-dom";

class App extends Component {
  findPalette(id) {
    return seedColors.find(palette => palette.id === id);
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" render={(routeProps) =>
          <PaletteList palletes={seedColors} {...routeProps} />}
        />
        <Route exact path="/palette/:id" render={(routeProps) =>
          <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />}
        />
        <Route exact path="/palette/:paletteId/:colorId" render={(() => <h1>hej</h1>)}
        />
      </Switch>
    );
  }
}

export default App;
