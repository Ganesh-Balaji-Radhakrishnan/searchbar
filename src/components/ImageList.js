import ImageShow from "./ImageShow"
import './ImageList.css'

const ImageList = ({images}) => {
    const returnImage = images.map(image => { return <div key={image.id}> <ImageShow image={image}/> </div> })

    return <div className="image-list">{returnImage}</div>
}

export default ImageList