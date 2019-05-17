// -------------------------------------
//           HOME PAGE
// -------------------------------------
import * as Grid from "../layouts/prediktgrids";
import { TopLogo } from "../components/home/toplogo";
import { BigDate } from "../components/home/bigdate";
import { LoginBox } from "../components/loginregister/loginnregisterbox";
import { Nav } from "../components/navigation/nav";
import { TweetsList } from "../components/tweets/tweetslist";

let lang = "";

//
//------------------------------
//     M A I N
//------------------------------
export const Home = () => {
  return (
    <Grid.PrediktBaseGrid>
      <Grid.LeftBaseCell
        style={{
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
          fontFamily: "Arial",
          fontSize: 30,
          marginTop: -30,
          textAlign: "right",
          lineHeight: "75%",
          color: "#311B92",
          borderWidth: "0 0 0 1px",
          borderStyle: "solid",
          borderImage: "linear-gradient(to bottom, #311B92, white 99%) 1"
        }}
      >
        Predikt.io
      </Grid.LeftBaseCell>
      <Grid.RLeftBaseCell style={{ width: 30 }} />
      <Grid.LogoBaseCell
        style={{
          display: "flex"
        }}
      >
        <TopLogo />
      </Grid.LogoBaseCell>
      <Grid.NavBaseCell>
        <Nav
          style={{
            background: "#f4f6f6",
            borderRadius: 2,
            marginRight: 40,
            marginLeft: 30
          }}
        />
      </Grid.NavBaseCell>
      <Grid.LoginNStateBaseCell>
        <LoginBox />
      </Grid.LoginNStateBaseCell>
      <Grid.ContentBaseCell>
        <Grid.PrediktHomeGrid>
          <Grid.ContentCellA style={{ marginLeft: 10 }}>
            contentA argle bargle said the gargle
          </Grid.ContentCellA>
          <Grid.ContentCellB
            style={{
              marginTop: 100,
              marginLeft: 30,
              width: 400,
              overflow: "auto"
            }}
          >
            <img
              src="../static/images/jupiter-hd.png"
              alt="Jupiter"
              style={{
                height: 65,
                width: 94,
                float: "left",
                padding: 3,
                marginLeft: -10,
                clipPath: "circle()",
                shapeOutside: "circle()"
              }}
            />
            <div style={{ background: "#f4f6f6", borderRadius: 2 }}>
              <span
                style={{ color: "#311B92", fontWeight: "bold", fontSize: 16 }}
              >
                Predikt.io
              </span>{" "}
              is a new, scientific approach to arranging your life. Be it,
              personal, family or team oriented,{" "}
              <span
                style={{ color: "#311B92", fontWeight: "bold", fontSize: 16 }}
              >
                Predikt.io
              </span>{" "}
              allows you to ask many, many questions per month.
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
              ducimus aut, quisquam ipsam quam quaerat deleniti amet fugit
              officiis unde nam ipsum ullam, et iusto ab explicabo sed molestias
              odio.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
              <img
                src="../static/images/moon-hd.png"
                alt="Jupiter"
                style={{
                  height: 45,
                  width: 45,
                  float: "right",
                  padding: 5,
                  margin: 0,
                  clipPath: "circle()",
                  shapeOutside: "circle()"
                }}
              />
              ducimus aut, quisquam ipsam quam quaerat deleniti amet fugit
              officiis unde nam ipsum ullam, et iusto ab explicabo sed molestias
              odio. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Error ducimus aut, quisquam ipsam quam quaerat deleniti amet fugit
              officiis unde nam ipsum ullam, et iusto ab explicabo sed molestias
              odio.
            </p>
          </Grid.ContentCellB>
          <Grid.ContentCellC style={{ marginTop: 20 }}>
            <TweetsList />
          </Grid.ContentCellC>
          <Grid.BigDateCell>
            <BigDate lang={lang} />
          </Grid.BigDateCell>
        </Grid.PrediktHomeGrid>
      </Grid.ContentBaseCell>
      <Grid.FooterBaseCell style={{ border: "1px solid darkgrey" }}>
        footer
      </Grid.FooterBaseCell>
    </Grid.PrediktBaseGrid>
  );
};
