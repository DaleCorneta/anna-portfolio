import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Article = () => {
  const [images, setImages] = useState([]);
  const imagesperpage = 6;
  const [page, setPage] = useState(1);
  const data = [
    "1rQfh8KCcVhzlnQzOU1FISNUWWnCctoe0",
    "17tM2wRX_4jzGvhdiNWn-14CIV5SR87y9",
    "1ydASnFzxdieHZbrSEyQlxl8KK_syRRXC",
    "1okEEHKChKyUJoSInCFmEBeJDY3SLsUHb",
    "15ufmrIyIbp4wlWxgeEc8j3e-zeoe0Jh3",
    "1xrBORkOFjWGZm580ZZCrvusX3pj_N1rs",
    "1NDz0kOYWNOUUd9XjH7_rp1ZBcw2dhnPm",
    "1vPcqa1dMlxw4SujCtWO5ErpwtUbcWmyV",
    "1krK0sOrgMac0vjwcTLlu3rlDA1JDSbTA",
    "1keJ11bARv95OkfEbqUKkFimGlxgRuD6e",
    "1qHQAmVGoh_8k1IiH458O-tnyKEW-TOuB",
    "1E4kLwyU3W68GoiI3reOD-_bcXglwLOzk",
    "1LbVy9cM8B5LGHgiJ8-B0DXGGzkl95XyS",
    "1-LMt1JyYCt8ON6oIGrcIyi2FXhLlplwg",
    "1YmCkIKvQMwz_bd9y_T99Ir2DQ7EU1O34",
    "15DZhvz9oiESdqvqKUUjviHjk-XLjnrkT",
    "1NGKIic0WDlsACXun1uuOQdRjjjG4IGMz",
    "1jiEYBxHkzWeQmgkIOq15SdnT_YbH4SdS",
    "18DFdOzGCrv8n52xGL_UxkaOdTmO1YJlI",
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

export default Article;
