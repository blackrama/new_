
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarHeader from './components/NavbarHeader';
import Cards from './components/Cards';

const productsInfo = [{
      title: 'first product',
      meta: 'lorem  ipsum dolor'
    },
    {
      title: 'second product',
      meta: "Some quick example text to build on the card title and make up the bulk of the card's content!!!"
    },
    {
      title: 'third product',
      meta: "Some quick example text to build on the card title and make up the bulk of the card's content!!!"
    },
    {
      title: 'fourth product',
      meta: "Some quick example text to build on the card title and make up the bulk of the card's content!!!"
    }]

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="container">
          <div className="row">
            <div className="col-12">
            <NavbarHeader/>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="row">
              {productsInfo.map((item,i)=>{ return <div className="col-md-3" key={i}><Cards title={item.title} meta={item.meta}> </Cards>  </div>})}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
