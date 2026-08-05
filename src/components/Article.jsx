import ProjectGallery from "./ProjectGallery";

export const articleItems = [
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

const Article = () => {
  return (
    <ProjectGallery
      items={articleItems}
      category="Articles"
      eyebrow="Editorial and SEO content"
      description="Written content developed to communicate information clearly, strengthen digital presence, support search visibility, and encourage meaningful website traffic."
      tags={[
        "Content writing",
        "SEO",
        "Editorial structure",
        "Website traffic",
      ]}
      kind="article"
      buildLink={(itemId) =>
        `https://drive.google.com/file/d/${itemId}/view?usp=drive_link`
      }
    />
  );
};

export default Article;
