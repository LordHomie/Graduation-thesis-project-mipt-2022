import { Fragment, useState } from "react";
import Header from "./Header";
import Crossroad from "./components/Crossroad/Crossroad";
import Modal from "./UI/Modal/Modal";

const App = () => {
  const [isModalShown, setIsModalShown] = useState(true);
  const showModalHandler = () => {
    setIsModalShown(false);
  };

  return (
    <Fragment>
      <Header />
      <Crossroad />
      {isModalShown && <Modal showModalHandler={showModalHandler} />}
    </Fragment>
  );
};

export default App;
