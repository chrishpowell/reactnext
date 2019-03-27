// -------------------------------------
//         LANGUAGE SELECT
// -------------------------------------
import Select from "react-select";

//
// - Languages
const europeOptions = [
  {
    value: "es-ES",
    label: "es-ES [Castellano Español]"
  },
  { value: "el-GR", label: "el-GR [Ελληνικά]" },
  {
    value: "fr-FR",
    label: "fr-FR [Français standard]"
  }
];

const asiaOptions = [
  { value: "zh-HK", label: "zh-HK [HK, trad. chars]" },
  { value: "zh-CN", label: "zh-CN [中国大陆, 简化字符]" }
];

//
// - Language groups
const langGroups = [
  { label: "European", options: europeOptions },
  { label: "Asian", options: asiaOptions }
];

const formatGroupLabel = data => (
  <div>
    <span>{data.label}</span>
  </div>
);

//
//-----------------------------
//      M A I N
//-----------------------------
const SelectComp = () => {
  return (
    <div>
      <Select formatGroupLabel={formatGroupLabel} options={langGroups} />
    </div>
  );
};

export default SelectComp;
