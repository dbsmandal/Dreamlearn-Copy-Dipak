import React, { useState } from "react";
import Form1B from "./Form1B";
export default function VideoInput(props) {
    // console.log('videoAC', props)
    const { width, height, image } = props;

    const inputRef = React.useRef();

    const [source, setSource] = React.useState();
    const [uploadVideo, setUploadVideo] = React.useState()
    let errorsObj = { uploadVideo: '' };
    const [errors, setErrors] = useState(errorsObj);

    const handleFileChange = (event) => {

        const file = event.target.files[0];
        setUploadVideo(file)
        // console.log(file, "file")
        const url = URL.createObjectURL(file);
        setSource(url);
    };

    const handleChoose = () => {
        inputRef.current.click();
    };
    return (<>
        <div className="grid-flow-row mt-5 ">
            <div className=" m-auto w-80 pb-20 flex flex-col ">

                {source ? (
                    <video
                        className="w-full h-fit rounded-lg"
                        width={width}
                        height={height}
                        controls
                        src={source}
                    />
                ) :
                    <div className="w-full p-6 text-lg text-purple-900 border-2 rounded-md overflow-auto">{source || "No Video Selected"}</div>
                }
                <input
                    ref={inputRef}
                    className=" w-48 invisible"
                    type="file"
                    onChange={handleFileChange}
                    accept=".mp4,.mpeg"
                />

                {errors.uploadVideo && <div className="text-red-600 font-semibold mb-3">{errors.uploadVideo}</div>}
                <button className="border p-1 text-lg rounded-lg bg-purple-900 text-white w-32 m-auto hover:bg-purple-700" onClick={handleChoose}>Choose Video</button>

            </div>
        </div>
        <Form1B video={uploadVideo} image={image} />
    </>
    );
}
