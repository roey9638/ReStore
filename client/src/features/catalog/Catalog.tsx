import { useEffect, useState } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";


export default function Catalog() {

    const [products, setProducts] = useState<Product[]>([]);

    // The [useEffect] allows us to add a [sideEffect] to a [Component] when [it loads]
    useEffect(() => {
        //The [fetch] allows us to [make] an [Http Request] And it [Returns] a [Promise]
        fetch('http://localhost:5000/api/products')
            // The [then] will get a [Response].
            // The [response.json()] is to get the [Body] of the [Response] Into a [json object] And it's [also] a [Promise]. Continue Down VV
            .then(response => response.json())
            //The [data] is from the [api]. Then we [setProducts(data)]
            .then(data => setProducts(data))
    }, [])

    return (
        <>
            <ProductList products={products} />
        </>
    );
}

