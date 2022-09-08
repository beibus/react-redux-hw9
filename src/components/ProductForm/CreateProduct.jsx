import React, { useState } from "react";
import { Button, Form, Input, Modal, Space } from "antd";
import { createProduct } from '../../store/actions';
import { useDispatch } from 'react-redux';


export const CreateProduct = () => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    form.resetFields();
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
    
  };

  const dispatch = useDispatch();

  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(createProduct(values))
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <h1>Create Product</h1>
      <Button type="primary" onClick={showModal}>
        Add product
      </Button>
      <Modal
        title="Modal"
        open={open}
        onOk={hideModal}
        onCancel={hideModal}
        footer={null}
        okText="Confirm"
        cancelText="Cancel"
      >
        <Form
          form={form}
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input Product Name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            rules={[
              {
                required: true,
                message: "Please input Product Price!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" onClick={hideModal}>
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
