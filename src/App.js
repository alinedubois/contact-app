import logo from './logo.svg';
import './App.css';
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
        <Contact
            avatarUrl="https://i.ebayimg.com/images/g/Xx8AAOSw5-lbi~aM/s-l300.jpg"
            name="Snoopy"
            statusText="online"
        />

        <Contact
            avatarUrl="http://data.pixiz.com/output/user/frame/preview/api/big/9/2/8/0/1680829_99a59.jpg"
            name="Minnie Mouse"
            statusText="offline"
        />

    </div>
  );
}

export default App;
