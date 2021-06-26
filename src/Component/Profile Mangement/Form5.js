import React, {useState} from "react";
function Form5() {
  const [disable, setdisable] = useState(true);
  const [show, setshow] = useState("none");
  const language = [
    {
      id: 1,
      lang: "Hindi",
    },
    {
      id: 2,
      lang: "english",
    },
    {
      id: 3,
      lang: "spanish",
    },
    {
      id: 4,
      lang: "Chinese",
    },
    {
      id: 5,
      lang: "German",
    },
    {
      id: 6,
      lang: "French",
    },
    {
      id: 7,
      lang: "Italian",
    },
    {
      id: 8,
      lang: "Turkish",
    },
    {
      id: 9,
      lang: "Polish",
    },
    {
      id: 10,
      lang: "Russian",
    },
  ];
  const currencies = [
    {
      id: 1,
      currency: "฿Bitcoin",
    },
    {
      id: 2,
      currency: "¥Chinese Yuan",
    },
    {
      id: 3,
      currency: "€Euro",
    },
    {
      id: 4,
      currency: "£British Pound Sterling",
    },
    {
      id: 5,
      currency: "₹Indian Rupee",
    },
    {
      id: 6,
      currency: "₱Philippine Peso",
    },
    {
      id: 7,
      currency: "₽Russian Ruble",
    },
    {
      id: 8,
      currency: "﷼Saudi Riyal",
    },
    {
      id: 9,
      currency: "$United States Dollar",
    },
    {
      id: 10,
      currency: "RSouth African Rand",
    },
  ];
  return (
    <>
      <div className=" mr-3 ml-3 mt-3" style={{marginBottom: "125%"}}>
        <span
          className=""
          style={{
            float: "right",
            color: "white",
            border: "2px solid #55489c",
            backgroundColor: "#55489c",
            borderRadius: "50%",
            padding: "5px",
          }}
        >
          <i
            className="fas fa-pen"
            onClick={() => {
              setdisable(false);
              setshow("block");
            }}
          />
        </span>
        <h3 className="" style={{color: "black"}}>
          Settings
        </h3>
        <form>
          <div class="form-group">
            <label for="exampleFormControlSelect1" style={{color: "grey"}}>
              Language
            </label>
            <select
              class="form-control"
              id="exampleFormControlSelect1"
              disabled={disable}
            >
              {language.map((item) => {
                return <option value={item.id}>{item.lang}</option>;
              })}
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1" style={{color: "grey"}}>
              currency
            </label>
            <select
              class="form-control"
              id="exampleFormControlSelect1"
              disabled={disable}
            >
              {currencies.map((item) => {
                return <option value={item.id}>{item.currency}</option>;
              })}
            </select>
          </div>
          <div className="FormBtn" style={{display: show}}>
            <div className="btn btn-purple mt-3">Update</div>
            <span>
              <div
                className="btn btn-outline-primary mt-3 ml-1"
                onClick={() => {
                  setdisable(true);
                  setshow("none");
                }}
              >
                Cancel
              </div>
            </span>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form5;
