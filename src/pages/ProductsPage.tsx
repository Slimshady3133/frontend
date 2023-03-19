import React, { useContext } from 'react';
import ErrorMessage from '../components/ErrorMessage';
import Loader from '../components/Loader';
import Modal from '../components/Modal';
import Product from '../components/Product';
import CreateProudct from '../components/createProudct';
import { useProducts } from '../hooks/products';
import { IProduct } from '../models';
import { ModalContext } from '../Context/ModalContext';

function ProductsPage() {
  const { loading, products, error, addProduct } = useProducts();
  const { modal, open, close } = useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    close();
    addProduct(product);
  };
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      {modal && (
        <Modal title="Create new product" onClosess={close}>
          <CreateProudct onCreate={createHandler} />
        </Modal>
      )}
      <button
        className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
        onClick={open}
      >
        +
      </button>
    </div>
  );
}

export default ProductsPage;
