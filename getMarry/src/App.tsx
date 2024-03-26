import Adicionar from "./components/icons/Adicionar"
import Leitor from "./components/icons/Leitor"
import List from "./components/List"
import Navbar from "./components/Navbar"

function App() {
  return (
    
      <div>
        <div id="navbar-div-app">
          <Navbar />
        </div>
        <div id="icons-div-app">
          <Leitor />
          <Adicionar />
        </div>
        <div id="list-div-app">
          <List />
        </div>
      </div>
    
  )
}
export default App

// cores: verde claro: #dfece6 | verde oliva: #92c7a3 | azul ciano: #3ca2a2 | azul escuro: #215a6d | preto: #2d2d29
