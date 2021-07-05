import React, {useState, useEffect} from "react";

const CheckBox = ({checkall}) => {
  const [checked, setchecked] = useState(false);
  useEffect(() => {
    if (checkall === true) {
      setchecked(true);
    } else {
      setchecked(false);
    }
  }, []);
  return (
    <>
      <input
        type="checkbox"
        class="check-btn"
        checked={checked}
        onClick={() => setchecked(!checked)}
      />
    </>
  );
};

export default CheckBox;
