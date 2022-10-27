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

const SYS_NAME = `Immigrant Mgt Sys`;
const content = `  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed inventore adipisci aut error autem quae culpa pariatur quaerat, debitis ullam dolores laudantium? Ea nemo quisquam ex quae ullam officiis sed culpa rem a id aut accusantium debitis hic ipsam, iusto velit assumenda! Non veniam natus distinctio sunt nesciunt blanditiis eligendi vel eaque praesentium iste mollitia necessitatibus, facere inventore temporibus veritatis expedita in minus atque, adipisci impedit? Magni voluptas dolor hic, doloremque at mollitia magnam eum perferendis provident possimus ipsa eius laborum praesentium recusandae repellendus! Deserunt et magnam alias, maiores consequatur accusamus, animi odio quaerat mollitia ut, a repellat laudantium sit.`;
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
});

const firstLetterUpperCase = (str) => {
  return `${str.charAt(0).toUpperCase()}${str.substring(1)}`;
};

const LetterPDF = ({ user, res }) => {
  const { location, name, email, phone } = user;
  
  return (
    <Document producer={SYS_NAME} creator={SYS_NAME}>
      <Page size="A4" style={styles.page}>
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
              `RE: Complaint for a ${res.reason} which was issued by ${res.fullname} `
            }
          />
        </View>
        {/* letter context */}
        <View style={styles.view}>
          <Text render={() => `${content}`} />
        </View>

        <View style={styles.view}>
          <Text render={() => `${content.substring(1, 50)}`} />
        </View>
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
