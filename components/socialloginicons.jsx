//--------------------------------
//      SOCIAL LOGIN
//--------------------------------
import {
  FbIcon,
  LiIcon,
  MsIcon,
  GlIcon,
  YaIcon,
  WeIcon
} from "../svgicons/svgicons";

export const SocialLoginIcons = () => {
  return (
    <>
      <FbIcon
        height={18}
        width={18}
        fill={"#3B5998"}
        style={{ marginRight: 4, marginBottom: 2 }}
      />
      <LiIcon
        height={18}
        width={18}
        fill={"#0077B5"}
        style={{ marginRight: 4, marginBottom: 2 }}
      />
      <MsIcon
        height={18}
        width={18}
        fill={"#666666"}
        style={{ marginRight: 4, marginBottom: 2 }}
      />
      <GlIcon
        height={18}
        width={18}
        fill={"#4285F4"}
        style={{ marginRight: 4, marginBottom: 2 }}
      />
      <YaIcon
        height={18}
        width={18}
        fill={"#FF0000"}
        style={{ marginRight: 4, marginBottom: 2 }}
      />
      <WeIcon
        height={18}
        width={18}
        fill={"#20B8E5"}
        style={{ marginBottom: 2 }}
      />
    </>
  );
};
