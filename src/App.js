import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import getPictures from "./api";
import { useState } from "react";

function App() {

  const [images,setImages] = useState([])

  const onClick = async (word) => {
    const results = await getPictures(word)
    console.log(results)
    setImages(results)
  }
  return (

    <div>
      <SearchBar onClick={onClick}/>
      <ImageList images={images}/>
    </div>
  );
}

export default App;
