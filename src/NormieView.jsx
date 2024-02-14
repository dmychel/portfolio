import "/src/styles/normie/normie.scss";
import Header from "./components/normie/Header";
import Content from "./components/normie/content/Content";
import { useState } from "react";

const NormieView = () => {
  const [component, setComponent] = useState(null);
  return (
    <section className="normie-app">
      <Header setComponent={setComponent} />
      <Content component={component} setComponent={setComponent} />
    </section>
  );
};

export default NormieView;
