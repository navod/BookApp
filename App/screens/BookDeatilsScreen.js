import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";
import colors from "../components/colors";

export default class BookDeatilsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ["ISBN No", "Name", "Author", "Price", "Update", "Delete"],
      tableData: [
        ["I001", "2", "3", "4", "D", "D"],
        ["I002", "b", "c", "d", "E", "D"],
        ["I003", "2", "3", "4", "F", "D"],
        ["I004", "b", "c", "d", "G", "D"],
      ],
    };
  }

  _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }

  render() {
    const state = this.state;
    const element = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Update</Text>
        </View>
      </TouchableOpacity>
    );
    const element2 = (data, index) => (
      <TouchableOpacity>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Delete</Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <View style={styles.container}>
        <Text
          style={{
            textAlign: "center",
            color: colors.yellow,
            paddingBottom: 15,
            fontSize: 20,
          }}
        >
          Book Details
        </Text>
        <Table borderStyle={{ borderColor: "black", borderWidth: 1 }}>
          <Row
            data={state.tableHead}
            style={styles.head}
            textStyle={styles.text}
          />
          {state.tableData.map((rowData, index) => (
            <TableWrapper key={index} style={styles.row}>
              {rowData.map((cellData, cellIndex) => (
                <Cell
                  key={cellIndex}
                  data={cellIndex === 5 ? element(cellData, index) : cellData}
                  textStyle={styles.text}
                />
              ))}
            </TableWrapper>
          ))}
        </Table>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 45, backgroundColor: "#808B97" },
  text: { margin: 6 },
  row: { flexDirection: "row", backgroundColor: "#FFF1C1", height: 45 },
  btn: {
    width: 55,
    height: 38,
    backgroundColor: "#78B7BB",
    borderRadius: 2,
    padding: 5,
  },
  btnText: { textAlign: "center", color: "#fff" },
});
