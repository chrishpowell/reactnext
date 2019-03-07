// -------------------------------------
//         LANG-FLAG
// -------------------------------------
import Select from "react-select";
import { langGroups } from "../config/i18n/I18NLangLists";

// @TODO: Get below from punycode.JS soon!! Being deprecated in node
const { ucs2 } = require("punycode");

// "Regional Indicator Symbol Letter A" - "Latin Capital Letter A"
const UNICODE_BASE = 127462 - "A".charCodeAt(0);

const getEmojiFlag = ctryCode => {
  return ucs2.encode(
    ctryCode.split("").map(letter => UNICODE_BASE + letter.charCodeAt(0))
  );
};

//
// - Locale (dropdown) styling
const localeStyles = {
  control: styles => ({
    ...styles,
    backgroundColor: "white",
    padding: 0,
    minHeight: 25,
    height: 20,
    width: 150,
    fontSize: 12,
    border: "1px solid grey",
    borderRadius: 2
  }),
  option: () => ({ fontSize: 11 })
};

const groupStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: 11
};

const groupBadgeStyles = {
  backgroundColor: "#EBECF0",
  borderRadius: "2em",
  color: "#172B4D",
  display: "inline-block",
  fontSize: 11,
  fontWeight: "normal",
  lineHeight: "1",
  minWidth: 1,
  padding: "0.16666666666667em 0.5em",
  textAlign: "center"
};

const formatGroupLabel = data => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

//
//-----------------------------
//      M A I N
//-----------------------------
const LangsFlag = ({ isoCode }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div>
        {getEmojiFlag(isoCode)} {isoCode}
      </div>
      <div style={{ marginLeft: 3 }}>
        <Select
          styles={localeStyles}
          formatGroupLabel={formatGroupLabel}
          options={langGroups}
        />
      </div>
    </div>
  );
};

export default LangsFlag;
