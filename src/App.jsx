import React from "react";
import InputGroup from './components/inputGroup/';
import './App.css';

function App() {
    return (
        <div className="d-flex flex-column vh-100 align-items-center justify-content-center">
            <div className="border shadow fixed-width p-4 bg-white">
                <img width="80px" src="logo.jpg"/>
                <span>Nuddle</span>

                <br /><br />
                    <form method="POST">
                        <InputGroup />
                    </form>
            </div>
        </div>
    );
}

export default App;