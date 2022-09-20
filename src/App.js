import Nav from './components/Nav'
import ItemListContainer from './components/ItemListContainer'
import CategoryCards from './components/CategoryCards'
import './App.css';

function App() {
  return (
    <div className="dark:bg-[#282828]">
      <Nav/>
      <section className="flex flex-col items-center justify-center min-h-screen">
        <ItemListContainer greetings="Marcos"/>
        <section className="flex flex-wrap justify-center w-4/5 max-w-5xl gap-1 py-12">
          <CategoryCards />
        </section>
      </section>
    </div>
  );
}

export default App;
