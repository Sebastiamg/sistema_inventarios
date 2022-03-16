import "./ContainerData.css";

function ContainerData() {
    return (
    <div className="global">
		<div className="contenedor" id="uno">
			<img className ="icon" src="recursoshumanos.jpg" alt="recursoshumanos"/> 
			<p className="texto"><a href="/activities/humanResources">Human<br/> resources</a></p>
			
		</div>

		<div className="contenedor" id="dos">
			<img className ="icon" src="./gastos.png" alt="gastos"/>
			<p className="texto"><a href="/activities/expenses">Expenses</a></p>
		</div>
	</div>

    );
}
export default ContainerData;