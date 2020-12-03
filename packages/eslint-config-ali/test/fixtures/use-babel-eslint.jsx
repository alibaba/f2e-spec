import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  Breadcrumb,
  Button,
  Search,
  Select,
  Dropdown,
  Menu,
  Notice,
} from "antd";
import Layout from "layout";
import { Translate } from "antd-i18n";
import * as actions from "../actions/index";

function scoreAudioCoverFile(imgFile) {
  const fileName = path
    .basename(imgFile.name, path.extname(imgFile.name))
    .toLowerCase();
  const relevanceScore = {
    cover: 80,
    folder: 80,
    album: 80,
    front: 80,
    back: 20,
    spectrogram: -80,
  };

  for (const keyword in relevanceScore) {
    if (fileName === keyword) {
      return relevanceScore[keyword];
    }
    if (fileName.indexOf(keyword) !== -1) {
      return relevanceScore[keyword];
    }
  }
  return 0;
}

const { Nav, Card, Section, Toolbar } = Layout;

const ButtonGroup = Button.Group;
const { Option } = Select;

class Root extends Component {
  componentDidMount() {
    this.props.getBreadcrumb();
  }

  onSearch = (searchParams) => {
    const foo = import(`./${searchParams}`);
    console.log(foo);
  };

  onSelectChange(value, data) {
    console.log(value, data);
  }

  onMenuClick(selectedKeys, menuItem, meta) {
    console.log(selectedKeys, menuItem, meta);
  }

  render() {
    const { breadcrumb } = this.props;
    const subNavData = {
      navs: [
        {
          key: "home",
          text: "导航操作区",
          active: true,
          link: "#",
        },
        {
          key: "permit",
          text: "权限",
          link: "#",
        },
        {
          key: "favorite",
          text: "常用链接",
          link: "#",
        },
      ],
    };

    return (
      <Layout>
        <Nav data={subNavData} />
        <Section>
          <Breadcrumb dataSource={breadcrumb} />
        </Section>
        <Section>
          <Notice title="提示：" type="info">
            页面提示信息区（Notice组件）
          </Notice>
        </Section>
        <Section>
          <Toolbar>
            <Toolbar.Left>
              <Toolbar.Item>
                <Button type="primary">页面操作区</Button>
              </Toolbar.Item>
              <Toolbar.Item>
                <ButtonGroup>
                  <Dropdown
                    triggerButton={<Button type="normal">批量操作</Button>}
                    triggerType="click"
                  >
                    <Menu onClick={this.onMenuClick}>
                      <Menu.Item key="submit_cr">提交发布</Menu.Item>
                      <Menu.Item key="close_cr">关闭变更</Menu.Item>
                    </Menu>
                  </Dropdown>
                  <Dropdown
                    triggerButton={<Button type="normal">更多</Button>}
                    triggerType="click"
                  >
                    <Menu onClick={this.onMenuClick}>
                      <Menu.Item key="other_1">更多操作 1</Menu.Item>
                      <Menu.Item key="other_2">更多操作 2</Menu.Item>
                      <Menu.Item key="other_3">更多操作 3</Menu.Item>
                    </Menu>
                  </Dropdown>
                </ButtonGroup>
              </Toolbar.Item>
            </Toolbar.Left>
            <Toolbar.Right>
              <Toolbar.Item>
                <Select onChange={this.onSelectChange} defaultValue="default">
                  <Option value="default">默认排序</Option>
                  <Option value="gmt_create|DESC">按创建时间降序</Option>
                  <Option value="gmt_create|ASC">按创建时间升序</Option>
                </Select>
              </Toolbar.Item>
              <Toolbar.Item>
                <Search
                  placeholder="请输入关键词搜索"
                  onSearch={this.onSearch}
                />
              </Toolbar.Item>
            </Toolbar.Right>
          </Toolbar>
        </Section>
        <Section>
          <Card
            title="详细内容展示区（Card组件）"
            extra={<a href="#">更多操作</a>}
          >
            <p>
              <a href="#" target="_blank" rel="noreferrer noopener">
                点击查看设计规范
              </a>
            </p>
            <p>
              <Button type="primary" onClick={this.props.changeLang}>
                <Translate value="buttonText" />
              </Button>
            </p>
          </Card>
        </Section>
      </Layout>
    );
  }
}

export default connect(
  ({ index, ...others }) => ({ ...index, ...others }),
  (dispatch) => bindActionCreators(actions, dispatch)
)(Root);
