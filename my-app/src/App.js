import './App.css';
import Wishlist from './Components/Wishlist';
import Vegetables from './Components/Vegetables';

function App() {
  return (
   <>
   <div className="container">
    <Wishlist />
    <hr />
    <Vegetables />
    </div>

    </>
  );
}

export default App;
