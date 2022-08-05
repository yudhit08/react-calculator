import React from "react";

function History(props) {
    
    return (
        <div
            className='history-container'
            style={{ marginLeft: props.showHistory ? "0" : "-200px" }}
        >
            <div className='clear' onClick={props.resetHistory}>
                Clear history
            </div>
            {props.history.map((item) => {
                return (
                    <div className='history' onClick={() => props.historyToCalc(item.calc, item.result)}>
                        <div className='calc'>{item.calc}</div>
                        <div className='result'>= {item.result}</div>
                    </div>
                );
            })}
        </div>
    );
}

export default History;
