import "./ContainerActivities.css";

function ContainerActivities() {
    return (
			<div className="containerDiv">
				<h1><font size="5">Administrative activities</font></h1><br/>
				<div className="contenedor" id="uno">
					<img className ="icon" src="recursoshumanos.jpg" alt="recursoshumanos"/> 
					<p className="texto"><a href="/activities/humanResources">Human<br/> resources</a></p>
					
				</div>

				<div className="contenedor" id="dos">
					<img className ="icon" src="./gastos.png" alt="gastos"/>
					<p className="texto"><a href="/activities/expenses">Expenses</a></p>
				</div>

				<div className="contenedor" id="tres">
					<img className ="icon" src="./activosfijos.png" alt="activosFijos"/>
					<p className="texto"><a href="/activities/fixedAssets">Fixed <br/>assets</a></p>
				</div>
				
			</div>

    );
}
export default ContainerActivities;