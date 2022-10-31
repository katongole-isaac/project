import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { useContext } from "react";
import { UserState } from "../../userContext";
import { SingleComplaintContext } from "./SingleComplaintView";
import ReactHTMLParser from "react-html-parser";
import Html from "react-pdf-html";

const SYS_NAME = `Immigrant Mgt Sys`;

//Letter fonts
Font.register({
  family: "Times-Roman",
});

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FAFAFA",
    display: "flex",
    padding: 30,
    fontSize: 12,
    fontFamily: "Times-Roman",
  },
  view: {
    // border: "1px solid purple",
    fontFamily: "Times-Roman",
    fontWeight: 400,
    padding: 5,
  },
  reSection: {
    textDecoration: "underline",
    fontWeight: 700,
  },
  text: {
    fontFamily: "Times-Roman",
    fontSize: 12,
  },
  Viewletter: {
    fontFamily: "Times-Roman",
    padding: 2,
  },
});

const firstLetterUpperCase = (str) => {
  return `${str.charAt(0).toUpperCase()}${str.substring(1)}`;
};

const LetterPDF = ({ user, res, letterText }) => {
  const { location, name, email, phone } = user;
  console.log(letterText);
  return (
    <Document producer={SYS_NAME} creator={SYS_NAME}>
      <Page size="A4" style={styles.page}>
        {/* complaint ID */}
        <View
          style={{
            ...styles.view,
            display: "flex",
            width: "100%",
          }}
        >
          <Text render={() => `ComplaintID:  ${res._id}`} />
        </View>
        {/* Agencyc section address */}

        <View style={styles.view}>
          <Text render={() => `${firstLetterUpperCase(name)}`} />
          <Text render={() => `${firstLetterUpperCase(location)}`} />
          <Text render={() => `${email}`} />
          <Text render={() => `${phone}`} />
        </View>

        {/* Date on creation */}
        <View style={styles.view}>
          <Text render={() => `${new Date().toDateString()}`} />
        </View>

        {/* Ministry Address */}
        <View style={styles.view}>
          <Text render={() => `Ministry`} />
          <Text render={() => `Permanent Secretary`} />
          <Text
            render={() => `Ministry Of Gender Labour & Social Development`}
          />
          <Text render={() => `P.0.BOX 7136`} />
          <Text render={() => `Kampala (U)`} />
        </View>

        {/* salution */}
        <View style={styles.view}>
          <Text render={() => `Dear Madam`} />
        </View>

        {/* Re -section */}
        <View style={{ ...styles.view }}>
          <Text
            style={{ ...styles.reSection }}
            render={() =>
              `RE: Complaint for a ${res.reason} which was issued by ${res.fullname}`
            }
          />
        </View>
        {/* letter context */}

        {letterText && (
          <View style={styles.view}>
            <Html style={styles.text}> {letterText} </Html>
          </View>
        )}
        {/* <Text render={() => `${ReactHTMLParser(letterText)}`} />
         */}

        {/* <View style={styles.view}>
          <Text render={() => `${content.substring(1, 50)}`} />
        </View> */}

        {/* signature part */}
        <View style={styles.view}>
          <Text render={() => `Your sincerely`} />
          <Text render={() => `${name}`} />
        </View>
      </Page>
    </Document>
  );
};
export default LetterPDF;
