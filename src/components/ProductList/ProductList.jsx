import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, List, Card } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { CreateProduct } from '../ProductForm/CreateProduct';
import { removeProduct, setModalState, setEditProduct } from '../../store/actions';

export const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products)
  const productsLoading = useSelector((store) => store.productsLoading)
  

  const showModal = () => {
    dispatch(setModalState(true))
  }

  const handleRemove = (productId) => {
    console.log(productId);
    dispatch(removeProduct(productId))
  }

  const handleEdit = (values) => {
    dispatch(setEditProduct(values))
    console.log('values', values);
    showModal()

  }

  console.log('products', products)

  return (
    <div>
      
        <CreateProduct />
      
      <h1>Products</h1>
      <List
        loading={productsLoading}
        itemLayout="horizontal"
        dataSource={products}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.image} />}
              title={item.name}
              description={<div>{item.price}</div>}
            />
            <DeleteOutlined
                onClick={() => { handleRemove(item.id) }}
              />
              <EditOutlined onClick={() => handleEdit(item.id)} />
          </List.Item>
        )}
      />
      
    </div>
  )
}
