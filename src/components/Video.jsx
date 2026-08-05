import ProjectGallery from "./ProjectGallery";

export const videoItems = [
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

const Video = () => {
  return (
    <ProjectGallery
      items={videoItems}
      category="Video Content"
      eyebrow="Motion and storytelling"
      description="Short-form and promotional video work created to communicate ideas quickly, support digital campaigns, and keep audiences engaged across social platforms."
      tags={[
        "Short-form video",
        "Social media",
        "Promotional edits",
        "Audience engagement",
      ]}
      kind="video"
      buildLink={(itemId) =>
        `https://drive.google.com/file/d/${itemId}/view?usp=drive_link`
      }
    />
  );
};

export default Video;
