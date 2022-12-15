import * as React from 'react';
import {useCallback, useContext, useState} from "react";
import {productListMock} from "../mock-data/productListMock";

const HomeStateContext = React.createContext(null);
const HomeActionsContext = React.createContext(null);

export function HomeProvider({ children }) {
    const [selectedProductsIds, setSelectedProductsIds] = useState([]);
    const [isModalBoxOpened, setIsModalBoxOpened] = useState(false);
    const productList = productListMock;

    const removeProduct = useCallback((productId) => {
        if (selectedProductsIds.find(val => val === productId)) {
            setSelectedProductsIds(prevState => prevState.filter(actual => actual !== productId));
            return;
        }
        setSelectedProductsIds(prevState => [...prevState, productId]);
    }, [selectedProductsIds]);

    const selectProduct = useCallback((productId) => {
        if (selectedProductsIds.find(val => val === productId)) {
            setSelectedProductsIds(prevState => prevState.filter(actual => actual !== productId));
            return;
        }
        setSelectedProductsIds(prevState => [...prevState, productId]);
    }, [selectedProductsIds]);

    const getProductsById = useCallback((productIds) => {
        return productIds.map(productId => {
            return productList.find(product => product.id === productId);
        });
    }, [productList]);



    return (
        <HomeStateContext.Provider value={{
            selectedProductsIds,
            isModalBoxOpened,
            productList,
        }}>
            <HomeActionsContext.Provider value={{
                setSelectedProductsIds,
                selectProduct,
                removeProduct,
                toggleModalBox,
                getProductsById,
            }}>
                { children }
            </HomeActionsContext.Provider>
        </HomeStateContext.Provider>
    );

    function toggleModalBox(action) {
        setIsModalBoxOpened(action);
    }
}

export function withHomeProvider(Component) {
    return function HomeWrapper(props) {
        return (
            <HomeProvider>
                <Component {...props} />
            </HomeProvider>
        );
    };
}
export function useHomeState() {
    const context = useContext(HomeStateContext);
    if (context === undefined) {
        throw new Error('useHomeState must be used within a HomeProvider');
    }
    return context;
}
export function useHomeActions() {
    const context = useContext(HomeActionsContext);
    if (context === undefined) {
        throw new Error('useHomeActions must be used within a HomeProvider');
    }
    return context;
}
