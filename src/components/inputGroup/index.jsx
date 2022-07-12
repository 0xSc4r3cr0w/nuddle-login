import React, { useState } from "react";
// aqui é o componente inpuGroup, que foi carregado lá no jsx do APp

function InputGroup() {
    const [input, setInput] = useState("email");

    function backInput(e) {
        const inputGroup = document.querySelector("#inputGroup");

        const email = inputGroup.querySelector("#email");
        const password = inputGroup.querySelector("#password");
        const backButton = inputGroup.querySelector("#backButton");

        email.style.display = "inline";
        password.style.display = "none";
        backButton.style.display = "none";

        setInput("email");
    }

    function checkInput(e) {
        e.preventDefault();
        const inputGroup = document.querySelector("#inputGroup");

        const email = inputGroup.querySelector("#email");
        const password = inputGroup.querySelector("#password");
        const backButton = inputGroup.querySelector("#backButton");

        const emailInput = email.querySelector("#email-input");
        const psswdInput = password.querySelector("#password-input");

        const validEmailInput = emailInput.value && emailInput.value.includes("@");

        if(input === "email" && validEmailInput){
            email.style.display = "none";
            password.style.display = "inline";
            backButton.style.display = "inline";

            setInput("psswd");
        }else if(input === "psswd" && psswdInput.value){
            alert("Faz algum trigger aí")
        }
    }

    return(
        <div id="inputGroup">
            <div id="email" className="mb-3">
                <input id="email-input" type="email" name="email" className="form-control" placeholder="Email"/>
                <p className="text-center fsll">If you don't have a account <a className="fst-italic">click here</a> to create one</p>
                <br/>
                <div className="d-flex flex-row-reverse">
                    <button className="btn btn-primary mt-3" onClick={checkInput} type="button">Next</button>
                </div>
            </div>

            <div id="password" className="mb-3">
                <input id="password-input" type="password" className="form-control" name="password" placeholder="Password" />
                <p className="text-center fsll">Forgotten your password? <a className="fst-italic">click here</a></p>
                <br/>
                
                <div id="backButton" className="d-flex justify-content-between mt-3">
                    <div>
                        <button className="btn btn-dark" onClick={backInput} type="button">Back</button>
                    </div>
                    <div>
                        <button className="btn btn-primary" onClick={checkInput} type="submit">Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InputGroup;
