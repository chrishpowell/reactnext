//---------------------------------------
//        USER STATE DISPLAY
//---------------------------------------
import {
  AccountGrid,
  AccountDetail,
  InOutLocale,
  InOut,
  Locale,
  ButtonsRow,
  Search,
  Account,
  Settings,
  QandA,
  Notifications,
  NotifyCount,
  ButtonWithCount,
  Input,
  Button
} from "../../styledcomponents";
import Switch from "rc-switch";
import "rc-switch/assets/index.css";

const onChange = value => {
  console.log(`switch checked: ${value}`); // eslint-disable-line
};

let state = { disabled: false };

const UserStateDisplay = () => {
  return (
    <>
      <AccountGrid>
        <AccountDetail>
          [UserName
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]: [House
          &nbsp;&nbsp;] [HSym] [Stone &nbsp;] [Metal ] [Jewel ]
        </AccountDetail>
        <InOutLocale>
          <Locale>en-US</Locale>
          <InOut>
            Logged:
            <Switch
              onChange={onChange}
              disabled={state.disabled}
              checkedChildren={"In"}
              unCheckedChildren={"Out"}
            />
          </InOut>
        </InOutLocale>
        <ButtonsRow>
          <Account>
            <Button
              type="account"
              onClick={() => {
                console.log("account");
              }}
            >
              Account
            </Button>
          </Account>
          <Settings>
            <Button
              type="settings"
              onClick={() => {
                console.log("settings");
              }}
            >
              Settings
            </Button>
          </Settings>
          <QandA>
            <Button
              type="qanda"
              onClick={() => {
                console.log("qanda");
              }}
            >
              Q n A
            </Button>
          </QandA>
          <Notifications>
            <ButtonWithCount
              type="notifications"
              onClick={() => {
                console.log("notifications");
              }}
            >
              Notifications
            </ButtonWithCount>
            <NotifyCount>9+</NotifyCount>
          </Notifications>
        </ButtonsRow>
        <Search>
          <Input type="text" name="search" id="search" placeholder="Search" />
        </Search>
      </AccountGrid>
      <Button type="lightgreen">AButton</Button>
      <Button type="none">ANOButton</Button>
    </>
  );
};

export default UserStateDisplay;
