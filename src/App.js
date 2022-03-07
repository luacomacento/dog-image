import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Cats from './Cats';
import Dogs from './Dogs';
import Home from './Home';

class App extends React.Component {
  render() {
    return (
      <main>
        <h1>Fotos de pets</h1>
        <nav>
          {/* Lembrando que o Link substitui o <a></a>, porém de uma forma com que a página não precise ser recarregada para atualizar as informações.
          Essa é uma das grandes mágicas do React. */}
          <Link to="/">Home</Link>
          <Link to="/dogs">Doguinhos</Link>
          <Link to="/cats">Gatinhos</Link>
        </nav>
        <Switch>
          <Route path="/dogs" component={ Dogs } />
          {/* Os componentes na Route podem ser passados tanto com o "component=" quanto com o "render="
          A grande diferença é que com o render podemos receber as tão úteis props da Route, que nos permite fazer a lógica de rotas dinâmicas,
          acessar o histórico de navegação, etc. */}
          <Route path="/cats" render={ (props) => <Cats { ...props } /> } />
          <Route path="/" component={ Home } />
        </Switch>
      </main>
    );
  }
}

export default App;
