import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";


export default function Catalog() {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    // The [useEffect] allows us to add a [sideEffect] to a [Component] when [it loads]
    useEffect(() => {
        // The [then] will get a [Response].
        agent.Catalog.list()
            .then(products => setProducts(products))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <LoadingComponent message='Loading products...' />
    }

    return (
        <>
            <ProductList products={products} />
        </>
    );
}

