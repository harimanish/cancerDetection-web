import React from "react";
import ImageUploading from "react-images-uploading";
import { CgTrash, CgAdd } from "react-icons/cg";
import { storage } from "../firebaseConfig";
export function ImgUpload() {
    const [images, setImages] = React.useState([]);
    const maxNumber = 1;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList);
        setImages(imageList);
        console.log(images);
    };

    return (
        <div className="App">
            <ImageUploading
                multiple
                value={images}
                dataURLKey="data_url"
                onChange={onChange}
                maxNumber={maxNumber}
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                }) => (
                    <div className="upload__image-wrapper border border-gray-500 flex justify-center">
                        <button
                            className="bg-white p-2 rounded absolute mt-4 right-6 z-10"
                            onClick={onImageRemoveAll}
                        >
                            <CgTrash className="text-xl " />
                        </button>
                        <button
                            className="bg-blue-300 rounded text-base m-2 py-64 flex px-96 relative"
                            style={isDragging ? { color: "red" } : undefined}
                            onClick={onImageUpload}
                            {...dragProps}
                        >
                            <CgAdd className="text-2xl" /> Click or Drop here
                            {imageList.map((image, index) => (
                                <div key={index} className="image-item flex">
                                    <img
                                        className="absolute"
                                        src={image["data_url"]}
                                        alt=""
                                        width="100"
                                    />
                                </div>
                            ))}
                        </button>
                        &nbsp;
                    </div>
                )}
            </ImageUploading>
        </div>
    );
}
