import './App.css';
import Header from './components/Header';
import Mapa from './components/Mapa';
import Pontos from './components/PrincipaisPontos';

function App() {

  return (

    <div className="App">

      <body className="App_body">
        <Header/>
        <Mapa/>
        <Pontos/>
        
      </body>
 
    </div>
  );
}

export default App;
