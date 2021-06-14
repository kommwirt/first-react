
import './App.css';
// Import  Variablenname from './path to file'
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CommentCard from './components/CommentCard';
function App() {
  return (
    <main>
<Navigation />
<Hero />
<div className="wrapper">
<CommentCard />
<CommentCard />
<CommentCard />
</div>

    </main>
  );
}

export default App;
