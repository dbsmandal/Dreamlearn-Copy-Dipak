import React, { useState } from "react";
import VideoCourseTitle from './VideoCourseTitle';

export default function VideoInput(props) {

  const { width, height } = props;

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

  const handleChoose = (event) => {
    inputRef.current.click();
  };

  const uploadDemoVideo = () => {
    let error = false;
    const errorObj = { ...errorsObj };
    if (uploadVideo === '') {
      errorObj.uploadVideo = '**Please select video';
      error = true;
    }
    setErrors(errorObj);
    if (!error) {
      console.log("video uploaded")

    }
  }
  return (
    <div className=" mt-16 m-auto pb-20 flex flex-col w-80">

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
      <button className="border p-1 mt-6 text-lg rounded-lg bg-purple-900 text-white w-32 m-auto hover:bg-purple-700" onClick={handleChoose}>Choose Video</button>

      <VideoCourseTitle video={uploadVideo} />
    </div>
  );
}
