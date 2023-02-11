// cathes all routes under /docs and passes them to the docs component

import { useRouter } from "next/router";

function docs () {
    const router = useRouter();
    const {params = [] } = router.query;
    console.log(params);
  return (
    <div>
      <h1>Docs</h1>
        <p>Docs for {params[1]} , {params[0]}</p>
    </div>
  )
}


export default docs

