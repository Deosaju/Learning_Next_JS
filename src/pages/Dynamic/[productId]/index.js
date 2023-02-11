import { useRouter } from "next/router";

function ProductDetailPage() {
    const router = useRouter();
    const Id = router.query.productId;


    return <h1>The Product Detail Page: {Id}</h1>;
}

export default ProductDetailPage;