import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import axios from "axios";

function Security() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3900/api/changePassword",
        {
          idUser: localStorage.getItem("id"),
          oldPassword: values.oldPassword,
          newPassword: values.newPassword,
        }
      );

      if (response.data.msg === "Mot de passe ancien incorrect") {
        message.error("Veuillez vérifier votre ancien mot de passe.");
      } else if (values.newPassword !== values.confirmPassword) {
        message.error("Le nouveau mot de passe et la confirmation ne correspondent pas.");
      } else if (response.data.msg === "ok") {
        message.success("Mot de passe modifié avec succès");
        form.resetFields();
      } else {
        message.error("Erreur lors du changement de mot de passe");
      }
    } catch (error) {
      console.error("Network error:", error.message);
      message.error("Impossible de se connecter au serveur. Veuillez réessayer plus tard.");
    }
    setLoading(false);
  };

  return (
    <div className="container-fluid">
      <div className="bg-blue-700">
        <h1 className="text-center text-white m-5 p-10">Privacy & Security</h1>
      </div>
      <h2 className="text-center p-3 m-2">Change password</h2>
      <hr className="m-2" />
      <div className="m-5 p-4">
        <Form form={form} onFinish={onFinish}>
          <Form.Item
            label="Old Password"
            name="oldPassword"
            rules={[
              {
                required: true,
                message: "Please input your old password!",
              },
            ]}
          >
            <Input.Password placeholder="Current password" />
          </Form.Item>
          <Form.Item
            label="New Password"
            name="newPassword"
            rules={[
              {
                required: true,
                message: "Please input your new password!",
              },
            ]}
          >
            <Input.Password placeholder="New password" />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={['newPassword']}
            rules={[
              {
                required: true,
                message: "Please confirm your new password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('newPassword') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject('The two passwords do not match!');
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm new password" />
          </Form.Item>
          <div className="d-flex justify-content-center mt-4">
            <Button type="primary" htmlType="submit" loading={loading}>
              Confirm
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Security;
