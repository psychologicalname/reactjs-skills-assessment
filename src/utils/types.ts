export interface CartItem {
    product_id: number;
    count: number;
}

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }
}

export interface User {
    isLoggedIn: boolean;
    email: string;
    name: string;
}

export interface UserSignupData {
    email: string;
    name: string;
    password: string;
}
