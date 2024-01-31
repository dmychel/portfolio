import "/src/styles/normie.css";
import Header from "./Header";
import Content from "./content/Content";
import { useState } from "react";

const NormieView = () => {
  const [component, setComponent] = useState(null);
  return (
    <section className="app">
      <Header setComponent={setComponent} />
      <Content component={component} setComponent={setComponent} />
    </section>
  );
};

export default NormieView;
