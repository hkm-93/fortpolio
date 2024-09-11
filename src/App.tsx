import './App.css';
import Routine from './components/Routine/Routine.tsx';
import {useState} from "react";
import Background from "./components/Background/Background.tsx";

function App() {
    const [selectedSection, setSelectedSection] = useState('loweffort');
    const [theme, setTheme] = useState('theme-loweffort');
    
    return (
        <>
            <Background/>
            <Routine
                selectedSection={selectedSection}
                setSelectedSection={setSelectedSection}
                theme={theme}
                setTheme={setTheme}
            />
        </>
    );
}

export default App;