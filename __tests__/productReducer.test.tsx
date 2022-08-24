import {
    GET_PRODUCTS_STARTED,
    GET_PRODUCTS_SUCCEEDED,
    GET_PRODUCTS_FAILED
} from '../src/lib/constants/actionTypes';
import productReducer from '../src/reducers/productReducer';
import initialState from '../src/reducers/initialState';

describe("product reducer", () => {

    it("product reducer start render", () => {

        const action: any = {
            type: GET_PRODUCTS_STARTED,
        };
        const productList: any = initialState.productData
        expect(productReducer(productList, action)).toEqual({
            "product": {},
            "products": [],
            "error": null,
            "isLoading": true,
        });
    });

    it("product reducer sucess render", async () => {
        const action: any = {
            type: GET_PRODUCTS_SUCCEEDED,
        };
        const productList: any = initialState.productData;
       expect(productReducer(productList, action)).toEqual({ products: undefined, product: {}, isLoading: false, error: null })
    }
);

    it("product reducer failed render", () => {
        const action: any = {
            type: GET_PRODUCTS_FAILED,
        };
        const productList: any = initialState.productData
        expect(productReducer(productList, action)).toEqual({ products: [], product: {}, isLoading: false, error: undefined })

    });
});

