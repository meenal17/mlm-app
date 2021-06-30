import React from "react";
import {Link} from "react-router-dom";
import MUIRichTextEditor from "mui-rte";
const save = (data) => {
  console.log(data);
};
const Compose = () => {
  return (
    <>
      <div className=" mr-4 ml-4 mt-3 pb-5 " style={{marginBottom: "10px"}}>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>Single User</option>
          <option>All User</option>
        </select>
        <label className="mt-3" style={{color: "grey"}}>
          Single User
          <span className="ml-1" style={{color: "red"}}>
            *
          </span>
        </label>
        <input class="form-control" type="text" placeholder="Default input" />
        <label className="mt-3" style={{color: "grey"}}>
          Main Content
          <span className="ml-1" style={{color: "red"}}>
            *
          </span>
        </label>
        <input class="form-control" type="text" placeholder="Default input" />
        <div className="">
          <MUIRichTextEditor
            label="Type something here..."
            onSave={save}
            inlineToolbar={true}
          />
        </div>
        <div>
          <div className="btn btn-purple" style={{marginTop: "15%"}}>
            Send Messages
          </div>
        </div>
      </div>
    </>
  );
};

export default Compose;
