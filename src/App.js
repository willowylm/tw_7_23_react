import React, { Component } from "react";
import "./App.css";
import Button from "antd/lib/button";
import Modal from "antd/lib/modal";
import DatePicker from "antd/lib/date-picker";
import Radio from "antd/lib/radio";
import RadioGroup from "antd/lib/radio/group";
import Input from "antd/lib/input";
import Card from "antd/lib/card";
import Row from "antd/lib/row";
import Icon from "antd/lib/icon";

class App extends Component {
  state = {
    dialogShow: false,
    selectRadio: 0,
    list: []
  };
  showDialog = () => {
    this.setState({ dialogShow: true });
  };
  handleCancel = () => {
    this.setState({ dialogShow: false });
  };
  onChange = e => {
    this.setState({ selectRadio: e.target.value });
  };
  onPush = () => {
    let list = this.state.list;
    list.push({ type: this.state.selectRadio });
    this.setState({ list: list });
    this.setState({ dialogShow: false });
  };
  remove = index => {
    let list = this.state.list.filter((item, i) => i !== index);
    this.setState({ list: list });
  };

  render() {
    const radioStyle = {
      display: "block",
      height: "30px",
      lineHeight: "30px"
    };
    return (
      <div className="App">
        <Button type="primary" onClick={this.showDialog}>
          添加
        </Button>
        <Card style={{ width: 300 }}>
          {this.state.list.map((item, index) => {
            if (item.type === 1) {
              return (
                <Row key={index}>
                  <Input placeholder="Basic usage" style={{ width: 180 }} />
                  <Icon
                    onClick={() => {
                      this.remove(index);
                    }}
                    type="close"
                    style={{ color: "rgb(230, 37, 11)" }}
                  />
                </Row>
              );
            } else {
              return (
                <Row key={index}>
                  <DatePicker style={{ width: 180 }} />
                  <Icon
                    onClick={() => {
                      this.remove(index);
                    }}
                    type="close"
                    style={{ color: "rgb(230, 37, 11)" }}
                  />
                </Row>
              );
            }
          })}
        </Card>
        <Modal
          title="Select input type"
          visible={this.state.dialogShow}
          onOk={this.onPush}
          onCancel={this.handleCancel}
        >
          <RadioGroup onChange={this.onChange} value={this.state.selectRadio}>
            <Radio style={radioStyle} value={1}>
              Text Input
            </Radio>
            <Radio style={radioStyle} value={2}>
              DatePicker
            </Radio>
          </RadioGroup>
        </Modal>
      </div>
    );
  }
}

export default App;
