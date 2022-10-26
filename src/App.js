import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';


function App() {
	return (
		<div className="App">
			<NavBar />
			<ItemListContainer greeting={"BIENVENIDOS A LAMPARAS-DECO"}/>
			<img src={logo} className="App-logo" alt="logo" />
			<Footer/>
		</div>

	);
}

export default App;
