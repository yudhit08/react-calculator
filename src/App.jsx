import React, { useState } from "react";

import History from "./components/History";

import { FaHistory } from "react-icons/fa";

import "./App.css";

function App() {
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");
    const [history, setHistory] = useState([]);
    const [showHistory, setShowHistory] = useState(false)

    calc.length === 0 && setCalc("0");
    result.length === 0 && setResult("0");

    function handleNumber(digit) {
        setCalc((prevCalc) => (prevCalc === "0" ? digit : prevCalc + digit));
    }

    function handleOperator(opt) {
        const currentCalc = calc.toString();
        const lastChar = currentCalc.charAt(currentCalc.length - 1);
        if (
            lastChar === "+" ||
            lastChar === "-" ||
            lastChar === "*" ||
            lastChar === "/"
        ) {
            setCalc((prevCalc) => prevCalc.slice(0, -1) + opt);
        } else {
            setCalc((prevCalc) => prevCalc + opt);
        }
    }

    function handleResult() {
        let result = eval(calc);
        setResult(calc);
        setCalc(result.toString());
        setHistory([...history, {calc: calc, result: result}])
    }

    function deleteBack() {
        setCalc((prevCalc) => prevCalc.slice(0, -1));
    }

    function resetCalc() {
        setCalc("0");
        setResult("0");
    }

    function plusMinus() {
        !isNaN(calc) && setCalc((prevCalc) => prevCalc * -1);
    }

    function percentage() {
        setCalc((prevCalc) => prevCalc + "/100");
    }

    function resetHistory() {
        setHistory([])
    }

    function handleShowHistory() {
        setShowHistory(prevShowHistory => !prevShowHistory)
    }

    function historyToCalc(calc, result) {
        setCalc(result.toString())
        setResult(calc.toString())
    }

    return (
        <div className='container'>
            <div className='calc-body'>
                <div className='calc-screen'>
                    <div className='calc-operation'>{result}</div>
                    <div className='calc-typed'>{calc}</div>
                    <div className='show-history-button'>
                        <FaHistory onClick={handleShowHistory}/>
                    </div>
                </div>
                <History
                    history={history}
                    resetHistory={resetHistory}
                    showHistory={showHistory}
                    historyToCalc={historyToCalc}
                />
                <div className="all-button-container">
                <div className='calc-button-row'>
                    <div
                        className='button c'
                        onClick={() => {
                            resetCalc();
                        }}
                    >
                        C
                    </div>
                    <div
                        className='button l'
                        onClick={() => {
                            deleteBack();
                        }}
                    >
                        &larr;
                    </div>
                    <div
                        className='button l'
                        onClick={() => {
                            percentage();
                        }}
                    >
                        %
                    </div>
                    <div
                        className='button l'
                        onClick={() => {
                            handleOperator("/");
                        }}
                    >
                        /
                    </div>
                </div>
                <div className='calc-button-row'>
                    <div
                        className='button'
                        onClick={() => {
                            handleNumber("7");
                        }}
                    >
                        7
                    </div>
                    <div
                        className='button'
                        onClick={() => {
                            handleNumber("8");
                        }}
                    >
                        8
                    </div>
                    <div
                        className='button'
                        onClick={() => {
                            handleNumber("9");
                        }}
                    >
                        9
                    </div>
                    <div
                        className='button l'
                        onClick={() => {
                            handleOperator("*");
                        }}
                    >
                        x
                    </div>
                </div>
                <div className='calc-button-row'>
                    <div
                        className='button'
                        onClick={() => {
                            handleNumber("4");
                        }}
                    >
                        4
                    </div>
                    <div
                        className='button'
                        onClick={() => {
                            handleNumber("5");
                        }}
                    >
                        5
                    </div>
                    <div
                        className='button'
                        onClick={() => {
                            handleNumber("6");
                        }}
                    >
                        6
                    </div>
                    <div
                        className='button l'
                        onClick={() => {
                            handleOperator("-");
                        }}
                    >
                        −
                    </div>
                </div>
                <div className='calc-button-row'>
                    <div
                        className='button'
                        onClick={() => {
                            handleNumber("1");
                        }}
                    >
                        1
                    </div>
                    <div
                        className='button'
                        onClick={() => {
                            handleNumber("2");
                        }}
                    >
                        2
                    </div>
                    <div
                        className='button'
                        onClick={() => {
                            handleNumber("3");
                        }}
                    >
                        3
                    </div>
                    <div
                        className='button l'
                        onClick={() => {
                            handleOperator("+");
                        }}
                    >
                        +
                    </div>
                </div>
                <div className='calc-button-row'>
                    <div
                        className='button'
                        onClick={() => {
                            handleNumber(".");
                        }}
                    >
                        .
                    </div>
                    <div
                        className='button'
                        onClick={() => {
                            handleNumber("0");
                        }}
                    >
                        0
                    </div>
                    <div className='button' onClick={() => plusMinus()}>
                        &plusmn;
                    </div>
                    <div
                        className='button l'
                        onClick={() => {
                            handleResult();
                        }}
                    >
                        =
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default App;
