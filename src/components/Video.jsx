import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Video = () => {
  const [images, setImages] = useState([]);
  const imagesperpage = 6;
  const [page, setPage] = useState(1);
  const data = [
    "1vdJKbrSguMpY8glImmYd1WmPniMgYcA3",
    "1qn9ZgZfNgpVRp_d2FfomS4t3u1PbZr6D",
    "1PcDXBZFj7ro6qnccNSv9OTJveqqUL8RT",
    "11z51XyWt4-aH9jf7vGEiCgI1pIqeczZi",
    "1yOfb6RoslcwWJVZtWNn-TBzoD-NiEBtV",
    "1oe1wvkHym0FWUO04wYyPtL-m9RqDh2E_",
    "1wGoBOOyhAVYtvNU0rF-Nbgx5lEXjbMkq",
    "1HL25TccvEQomcZD5SA-TprUm5nBUx8-p",
    "1XSJ40qKkE0sFa3TGHc1YzLZYaH8hsBQF",
    "1X1w8VPwhGMd-LaQolDGyDm4Cqv0LqQsT",
    "13mlObdWhigd1hhNGdHpGucc5jhLoWRUe",
    "1Eaxdx6ZWqzd207jPP1YHfS6jNdb3PbT5",
    "119_EkDdtqYS9SDz7xV0IUcokr-_VwfyE",
    "1LGzwkG9ZK3-9ILNUmnDFNePWTHMhV6QZ",
    "1P7B57etN9kSgIWbLfw9uODFA4t2f9Dcf",
    "1_1uPEv5UaUaLv6KEafNuMlCfTxaRmIZ5",
    "15vHdqwHLN8Cyh7d1McXlatiPcFgAjRIC",
    "17m02BXpgG_B2U9cmK36z_YTQY7M_LBFE",
    "11cdWreNzCiH9PJ8XYdKWCyvMfugKL7AD",
    "1MSx9GKdkzsXGkDf1oWPBfQMFec53Ez5L",
    "1uw448gDUvcBEtv3K39Faky6ISFxrN37b",
    "1e7QK8UzuZI3Sp-j8jImmB0VkU-CtmY0K",
    "1rGgby-zxTs6lZliYe6OOAQrPhDpREe1V",
    "1nkaH4KHFQk0UNv7D-a1yQsDPUjqjFLvC",
  ];

  useEffect(() => {
    setImages(data.slice(0, page * imagesperpage));
  }, [page]);

  function redirectHandler(url) {
    const link = `https://drive.google.com/file/d/${url}/view?usp=drive_link`;
    window.open(link, "_blank", "noreferrer");
  }
  return (
    <>
      <div className="*:w-full grid mx-auto md:grid-rows-2 md:grid-cols-3 max-w-4xl md:px-0 px-10 *:h-full *:object-cover *:border-4 *:dark:border-white *:rounded-md gap-4 *:cursor-pointer group hover:*:!grayscale-0 *:hover:grayscale *:duration-1000">
        {images.map((image, index) => {
          return (
            <LazyLoadImage
              key={index}
              src={`https://drive.google.com/thumbnail?id=${image}`}
              alt={image}
              onClick={() => redirectHandler(image)}
            />
          );
        })}
      </div>
      {images.length !== data.length && (
        <div className="gap-4 mt-6 flex-center">
          <button onClick={() => setPage(page + 1)} className="btn btn-filled">
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default Video;
