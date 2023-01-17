import styles from './App.module.css';
import Table from './components/Table'
function App() {
  return (
    <div className="App">
      <h1 className={styles.heading}>Contest Finder</h1>
      <Table />
    </div>
  );
}

export default App;
