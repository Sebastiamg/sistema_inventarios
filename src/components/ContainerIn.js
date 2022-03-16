import "./ContainerIn.css";

function ContainerIn() {
    return (
    <div className="containerIn">
		<center><h1><font size="5">Inventaries</font></h1></center>
		<div className="contenedorIn" id="uno">
			<img className ="icon" src="./logo192.png" alt="InventaryE"/> 
			<p className="texto"><a href="/activities/fixedAssets/inventaryE">Electronic <br/>equipment<br/> inventory</a></p>
			
		</div>

		<div className="contenedorIn" id="dos">
			<img className ="icon" src="./" alt="InventaryF"/>
			<p className="texto"><a href="/activities/fixedAssets/inventaryF">Furniture and <br/>fixtures<br/> inventory</a></p>
		</div>
	</div>

    );
}
export default ContainerIn;
