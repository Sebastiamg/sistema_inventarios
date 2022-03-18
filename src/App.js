//Comentario en rama
import React from "react";
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from "./components/navBar";
import Container1Data from "./components/Container1Data";
import Container2Data from "./components/Container2Data";
import ContainerActivities from "./components/ContainerActivities";
import ContainerIn from "./components/ContainerIn";
import "./components/button.css"
import WindowFilter from "./components/WindowFilter"
import WindowExport from "./components/WindowExport";

function App() {
  return (
    
    <Router>
      <Route exact path="/activities">
          <NavBar/> 
         
          <center><ContainerActivities/></center><br/>
      </Route>

      <Route exact path="/activities/humanResources">
        <NavBar/>
        <Link to="/activities">
          <img className ="icon" src="./atras.png" alt="flecha-atras"/> 
        </Link>
          Seleccionaste Recursos HUMANOS
      </Route>

      <Route exact path="/activities/expenses">
      <NavBar/> 
        <div className="group1">
            <Link to="/activities/expenses/changeView">
            <button className="button">Change</button>
            </Link>
            <WindowFilter/>
            <WindowExport/>
        </div>
        <Link to="/activities">
        <img className ="icon" src="atras.png" alt="flecha-atras"/> 
        </Link>
        <Container1Data/>
      </Route>
      
      <Route exact path="/activities/expenses/changeView">
        <NavBar/>
        <div className="group1" align="right">
          <Link to="/activities/expenses">
          <button className="button">Change 2</button>
          </Link>
          <WindowFilter/>
          <WindowExport/>
        </div>
        <Link to="/activities">
        <img className ="icon" src="atras.png" alt="flecha-atras"/> 
        </Link>
          <Container2Data/> 
      </Route>

      
      <Route exact path="/activities/fixedAssets">
      <NavBar/> 
      <Link to="/activities">
        <img className ="icon" src="atras.png" alt="flecha-atras"/> 
        </Link>
          <center><ContainerIn/></center>
      </Route>

<Route exact path="/activities/fixedAssets/inventaryE">
      <NavBar/> 
      <div className="group1" align="right">
          <Link to="/activities/fixedAssets/inventaryE/changeView">
          <button className="button">Change View</button>
          </Link>
          <Link to="/activities/fixedAssets/inventaryE/export">
          <button className="button">Export</button>
          </Link>
          <Link to="/activities/fixedAssets/inventaryE/filter">
          <button className="button">Filter</button>
          </Link>
          <Link to="/activities/fixedAssets/inventaryE/add">
          <button className="button">Add</button>
          </Link>
          </div>
          <Link to="/activities/fixedAssets">
        <img className ="icon" src="atras.png" alt="flecha-atras"/> 
        </Link>
          <Container1Data/>
      </Route>

      <Route exact path="/activities/fixedAssets/inventaryE/changeView">
        <NavBar/>
        <div className="group1" align="right">
          <Link to="/activities/fixedAssets/inventaryE">
          <button className="button">Change View</button>
          </Link>
          <Link to="/activities/fixedAssets/inventaryE/export">
          <button className="button">Export</button>
          </Link>
          <Link to="/activities/fixedAssets/inventaryE/filter">
          <button className="button">Filter</button>
          </Link>
          <Link to="/activities/fixedAssets/inventaryE/add">
          <button className="button">Add</button>
          </Link>
          </div>
          <Link to="/activities/fixedAssets">
        <img className ="icon" src="atras.png" alt="flecha-atras"/> 
        </Link>
          <Container2Data/>
      </Route>

      <Route exact path="/activities/fixedAssets/inventaryE/export">
        Pantalla emergente para Exportar
      </Route>

      <Route exact path="/activities/fixedAssets/inventaryE/filter">
      Pantalla emergente para Filtrar
      </Route>

      <Route exact path="/activities/fixedAssets/inventaryE/add">
      Pantalla emergente para Agregar
      </Route>

      
      <Route exact path="/activities/fixedAssets/inventaryF">
      <NavBar/> 
      <div className="group1" align="right">
          <Link to="/activities/fixedAssets/inventaryF/changeView">
          <button className="button">Change View</button>
          </Link>
          <Link to="/activities/fixedAssets/inventaryF/export">
          <button className="button">Export</button>
          </Link>
          <Link to="/activities/fixedAssets/inventaryF/filter">
          <button className="button">Filter</button>
          </Link>
          <Link to="/activities/fixedAssets/inventaryF/add">
          <button className="button">Add</button>
          </Link>
          </div>
          <Link to="/activities/fixedAssets">
        <img className ="icon" src="atras.png" alt="flecha-atras"/> 
        </Link>
          <Container1Data/>
      </Route>

      <Route exact path="/activities/fixedAssets/inventaryF/changeView">
        <NavBar/>
        <div className="group1" align="right">
          <Link to="/activities/fixedAssets/inventaryF">
          <button className="button">Change View</button>
          </Link>
          <Link to="/activities/fixedAssets/inventaryF/export">
          <button className="button">Export</button>
          </Link>
          <Link to="/activities/fixedAssets/inventaryF/filter">
          <button className="button">Filter</button>
          </Link>
          <Link to="/activities/fixedAssets/inventaryF/add">
          <button className="button">Add</button>
          </Link>
          </div>
          <Link to="/activities/fixedAssets">
        <img className ="icon" src="atras.png" alt="flecha-atras"/> 
        </Link>
          <Container2Data/>
      </Route>

      <Route exact path="/activities/fixedAssets/inventaryF/export">
       Pantalla emergente para Exportar
      </Route>

      <Route exact path="/activities/fixedAssets/inventaryF/filter">
      Pantalla emergente para filtrar
      </Route>

      <Route exact path="/activities/fixedAssets/inventaryF/add">
      Pantalla emergente para agregar
      </Route>

    </Router>
  );
}
export default App;
 
