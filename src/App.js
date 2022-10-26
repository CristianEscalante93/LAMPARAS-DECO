
import logo2 from './imagenes/logolampara.png'
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';


function App() {
	return (
		<div className="App">
			<NavBar />
			<ItemListContainer greeting={"BIENVENIDOS A LAMPARAS-DECO"}/>
			<img src={logo2} className="App-logo" alt="logo" />
			<Footer/>
		</div>

	);
}

export default App;
