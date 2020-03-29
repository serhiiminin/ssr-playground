import React from "react"
import { hydrate } from "react-dom";

const IndexPage = () => <div>Index</div>;

hydrate(<IndexPage/>, document.getElementById("root"));

export default IndexPage;
