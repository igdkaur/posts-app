import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";
import { useState } from "react";


function App() {

const [modalisVisible, setModalIsVisible] = useState(false);

function handleHideModal() {
  setModalIsVisible(false);
}

function handleOpenModal() {
  setModalIsVisible(true);
}

  return (
    <>
      <MainHeader onCreatePost={handleOpenModal}/>
      <main>
        <PostsList isPosting={modalisVisible} onStopPosting={handleHideModal} />
      </main>
    </>
  );
}

export default App;
