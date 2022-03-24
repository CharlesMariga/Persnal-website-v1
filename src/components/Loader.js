import React from "react";
import StyledLoader from "./Styled/Loader.styled";

export default function Loader({ finishedLoading }) {
  setTimeout(() => {
    finishedLoading();
  }, 5000);

  return (
    <StyledLoader>
      <svg
        width="125"
        height="152"
        viewBox="0 0 125 152"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M92.7103 110.399C95.5371 108.342 98.0858 105.826 100.356 102.853C102.627 99.8799 104.544 98.3933 106.108 98.3933C107.686 98.3933 108.476 100.743 108.476 105.443C108.476 110.144 107.145 114.573 104.484 118.733C101.837 122.907 98.3489 126.399 94.0184 129.207C85.147 135.048 74.6442 137.969 62.51 137.969C47.7895 137.969 36.3694 134.29 28.2498 126.932C20.1303 119.574 16.0705 109.355 16.0705 96.276C16.0705 80.1635 19.9649 64.8694 27.7537 50.3936C30.355 45.6335 33.2795 41.2487 36.5273 37.2394C34.0464 34.3262 32.0691 31.2779 30.5955 28.0944C29.137 24.8959 28.4078 22.4858 28.4078 20.8641C28.4078 17.9509 29.4903 16.4943 31.6556 16.4943C33.1742 16.5994 34.9109 17.6281 36.8656 19.5802L41.8953 24.4455C43.1884 25.7369 44.5416 26.818 45.955 27.689C56.6759 18.6041 68.2313 14.0617 80.6212 14.0617C93.011 14.0617 101.048 17.5229 104.732 24.4455C106.04 27.0283 106.694 30.2117 106.694 33.9958C106.694 39.7321 104.198 44.5448 99.2059 48.434C94.2289 52.3232 87.5453 54.2679 79.1551 54.2679C70.7649 54.2679 62.0815 52.541 53.1048 49.0872C45.4063 62.1664 41.557 75.8463 41.557 90.1268C41.557 109.903 49.466 119.792 65.2841 119.792C75.0276 119.792 84.1697 116.661 92.7103 110.399ZM60.8861 39.0413C66.4044 40.8733 72.4113 41.7893 78.907 41.7893C85.4026 41.7893 88.6505 40.0024 88.6505 36.4285C88.6505 32.2239 86.0041 30.1216 80.7114 30.1216C73.4488 30.1216 66.8404 33.0949 60.8861 39.0413Z" />
      </svg>
    </StyledLoader>
  );
}
