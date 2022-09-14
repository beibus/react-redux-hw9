import React, { useState, useEffect } from "react";
import { Button, Form, Input, Modal, Upload } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import { addProduct, createProduct, setModalState, setEditProduct, editProducts } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from "uuid";


export const CreateProduct = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((store) => store.isModalOpen)
  const [open, setOpen] = useState(false);
  const editProduct = useSelector((store) => store.editProduct)
  const [form] = Form.useForm();

  useEffect(() => {
    if (!editProduct) return
    form.setFieldsValue(editProduct)

  }, [form, editProduct])

  const showModal = () => {
    dispatch(setModalState(true))
  };

  const closeModal = () => {
    dispatch(setModalState(false));
    dispatch(setEditProduct(null))
    form.resetFields()
  }


  const onFinish = (values, ) => {
    console.log("Success:", values);
    if (editProduct) {
      

      dispatch(editProducts(values))
    }
    else{
      let payload = {
        id: uuid(),
        name: values.name,
        description: values.description,
        phone: values.phone,
      }
      dispatch(addProduct(payload))
      console.log(payload);
    }
    dispatch(setModalState(false))
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
        open={isModalOpen}
        onCancel={closeModal}
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
                message: "Please input name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input description!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              {
                required: true,
                message: "Please input phone number!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Upload" valuePropName="fileList">
          <Upload listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
