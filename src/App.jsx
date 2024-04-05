import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";

function App() {

const [modalisVisible, setModalIsVisible] = useState(true);

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
