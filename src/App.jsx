import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";

function App() {

const [modalisVisible, setModalIsVisible] = useState(true);

function handleHideModal() {
  setModalIsVisible(false);
}

  return (
    <>
      <MainHeader />
      <main>
        <PostsList isPosting={modalisVisible}/>
      </main>
    </>
  );
}

export default App;
