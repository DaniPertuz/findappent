import { create } from 'zustand';
import { IProduct } from '../core/entities';
import * as ProductsUseCases from '../core/use-cases/products';

export interface ProductState {
  products: IProduct[];
  setProducts: (products: IProduct[]) => void;
  addProduct: (product: IProduct) => Promise<IProduct>;
  getProduct: (id: string) => Promise<IProduct>;
  getProductsByPlace: (placeId: string) => Promise<IProduct[]>;
  updateProduct: (id: string, data: IProduct) => Promise<IProduct>;
  deleteProduct: (id: string) => Promise<IProduct>;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  addProduct: async (product) => {
    const response = await ProductsUseCases.addProductUseCase(product);
    if (response.error || !response.product) {
      return {} as IProduct;
    }

    set((state) => ({
      products: [...state.products, response.product as IProduct],
    }));

    return product;
  },
  getProduct: async (id) => {
    const product = await ProductsUseCases.getProductsUseCase(`/products/${id}`);
    if (product.error || !product.response) {
      return {} as IProduct;
    }

    const result = product.product || {} as IProduct;

    set({ products: [result] });

    return result;
  },
  getProductsByPlace: async (placeId) => {
    const products = await ProductsUseCases.getProductsUseCase(`/products/place/${placeId}`);
    if (products.error || !products.response) {
      set({ products: [] });
      return [];
    }

    const result = products.response.products;

    set({ products: result });

    return result;
  },
  updateProduct: async (id, data) => {
    const response = await ProductsUseCases.updateProductUseCase(`/products/${id}`, data);
    if (response.error || !response.product) {
      return {} as IProduct;
    }

    set((state) => ({
      products: state.products.map((product) =>
        product._id === id ? { ...product, ...data } : product
      ),
    }));

    return response.product;
  },
  deleteProduct: async (id) => {
    const response = await ProductsUseCases.deleteProductUseCase(`/products/${id}`);
    if (response.error || !response.product) {
      return {} as IProduct;
    }

    set((state) => ({
      products: state.products.filter((product) => product._id !== id),
    }));

    return response.product;
  },
}));
