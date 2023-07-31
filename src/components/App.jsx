import Home from '../pages/Home';
import Layout from './Layout';

function App() {
  return (
    <div className='bg-bodyBackground font-appFont min-h-screen'>
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
