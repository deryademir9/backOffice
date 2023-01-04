import React from "react";
import {
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { Tooltip, Input, Space } from "antd";

function Login() {
  return (
    <div style={{margin:" 15% 35%", textAlign: "center", borderStyle:"double",width:"380px",height:"320px",justifyContent: "center" }}>
      <h2 style={{ textAlign: "center", justifyContent: "center" ,marginTop:" 55px"}}>
        Giriş Yapınız
      </h2>
      <div style={{ textAlign: "center", justifyContent: "center" }}>
        <Input
          placeholder="Kullanıcı Adı "
          style={{ width: "275px" }}
          prefix={<UserOutlined className="site-form-item-icon" />}
          suffix={
            <Tooltip title="Giriş İçin Kullanıcı Adı Gerekmektedir.">
              <InfoCircleOutlined
                style={{
                  color: "rgba(0,0,0,.45)",
                }}
              />
            </Tooltip>
          }
        />{" "}
        <br />{" "}
        <Space direction="vertical">
          <Input.Password
            placeholder="     Parola "
            style={{ width: "275px" }}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />{" "}
        </Space>
      </div>
      <div style={{ textAlign: "center", justifyContent: "center" }}>
        <button style={{ width: "80px", padding: "5px" }}>Giriş</button>
      </div>
    </div>
  );
}

export default Login;
