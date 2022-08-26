import { useState } from "react";
import { useSelector } from "react-redux";
import EditPage from "./components/edit";
import Footer from "./components/footer";
import Header from "./components/header";
import { Loading, Error } from './components/header/styles'
import MakePost from "./components/make-post";
import Post from "./components/post";
function App() {
const [isEdit, setEdit] = useState(false);
const [isOpenPost, setOpenPost] = useState(false);
const [activeImg, setActiveImg] = useState('https://i.redd.it/7ipyf6pvqac61.png');
const pending = useSelector((state)=> state.user.pending);
const error = useSelector((state)=> state.user.error);
  return (
    <div className="App">
      {/* {console.log('render')} */}

      {isEdit ? (
        <EditPage 
          setEdit={setEdit} 
          setOpenPost={setOpenPost}
          setActiveImg={setActiveImg} 
          activeImg={activeImg} 
        />) 
      : (!isEdit && !isOpenPost ? (
        <>
          <Header 
            setEdit={setEdit} 
            setActiveImg={setActiveImg} 
            activeImg={activeImg}
          />
          {pending && (<Loading>Loading...</Loading>)}
          {!isEdit && error && 
            (<Error>Error when fetching data from server!</Error>
          )}
          <Post/>
          <Footer isOpenPost={isOpenPost} setOpenPost={setOpenPost}/>
        </>) 
        : (<>
            <Header 
              setEdit={setEdit} 
              setActiveImg={setActiveImg} 
              activeImg={activeImg}
            />
            <MakePost setOpenPost={setOpenPost} />
            <Footer isOpenPost={isOpenPost} setOpenPost={setOpenPost}/>
          </>)
        )}
    </div>
  );
}

export default App;
