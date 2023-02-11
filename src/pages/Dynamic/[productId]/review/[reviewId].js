import { useRouter } from "next/router";

function Review () {
    const router = useRouter();
    const productId = router.query.productId;
    const reviewId = router.query.reviewId;

    return (
        <h1>The Review Page for {reviewId} of product {productId}</h1>
        //Nested dynamic routes 
    )
}

export default Review
