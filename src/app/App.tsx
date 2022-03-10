import {useState} from "react";

// scss
import './App.scss';

// components
import Link from "../components/link";
import Learn from "./components/learn";
import Select from "./components/select";

// defines
import {LEARN, LINK} from "./App.defines";


function App() {
    const [test, setTest] = useState(LEARN);

    const chooseTest = (e: any): void => {
        setTest(e)
    }

    return (
        <div className="App">
            <Select placeholder="Choose Test..." chooseTest={chooseTest} />
            <br />
            <br />
            <div >
                {test === LEARN && <Learn />}
                {test === LINK && <Link />}
            </div>

        </div>
    );
}

export default App;
