import { useEffect, useState } from "react"
import Map from "./Map"
import InfoBox from "./InfoBox"
import NavBar from "./NavBar";

function App(){

	const [findingHoveredState,setfindingHoveredState] = useState(null);
	const [boxPosition,setboxPosition] = useState({x : 0 , y : 0});
	const [navIsOpen,setnavIsOpen] = useState(true);

	useEffect(() => {
		const handleMouseMovement = (event) => {
			setboxPosition({x : event.clientX + 15 , y : event.clientY + 15});
		}

		window.addEventListener("mousemove",handleMouseMovement);

		return() => {
			window.removeEventListener("mousemove",handleMouseMovement);
		};
	},[]);

	return(
		<>
		
			<NavBar navBarStatus={navIsOpen} toggleNav={() => setnavIsOpen(!navIsOpen)}></NavBar>
			<div className={navIsOpen ? "blur-sm" : ""}>
				<Map onStateHover={setfindingHoveredState}></Map>
				{findingHoveredState && 
				<InfoBox
			 	currentState={findingHoveredState}
				boxPosition={boxPosition}>
				</InfoBox>}
			</div>
		</>
	)
}

export default App
