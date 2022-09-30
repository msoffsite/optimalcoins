import React from "react";

const OptimalCoinsPerValue = ({onChangeValue, getCoins }) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 mb-4">
                <form>
                    <div className="row justify-content-center">
                        <div className="form-group col-4">
                            <h2>Enter Amount:</h2>
                            <input type="number" step=".01" onChange={(e) => onChangeValue(e)}  className="form-control mb-2" name="amount" id="amount" aria-describedby="amount" placeholder="Amount" />
                            <button type="button" onClick={getCoins()} className="btn btn-danger float-right">Calculate</button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
}

export default OptimalCoinsPerValue