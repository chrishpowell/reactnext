import React from "react";
import Switch from "rc-switch";
import "rc-switch/assets/index.css";

const SwitchTest = () => {
  return (
    <>
      <Switch
        onChange={console.log("Switch checked")}
        disabled={false}
        checkedChildren={"Login"}
        unCheckedChildren={"Logout"}
      />
    </>
  );
};

export default SwitchTest;
