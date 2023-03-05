import { useEffect, useState } from "react";
import "./AnimatedLogo.scss";

interface AnimLogoProps {
  className?: string;
  onClick?: () => void;
  hidden?: boolean;
}

function AnimatedLogo({ className, onClick, hidden }: AnimLogoProps) {

  return (
    <div className={ className ? "c-animlogo" : "c-animlogo " + className} onClick={onClick}>
      <svg viewBox="0 0 181 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Robin_logo">
          <g id="Logo_background">
            <path id="Background" d="M32.0352 64C49.7278 64 64.0694 49.6733 64.0694 32C64.0694 14.3267 49.7267 0 32.0352 0C14.3438 0 0 14.3267 0 32C0 49.6733 14.3427 64 32.0352 64Z" fill="#EDEDED" />
            <g className={ hidden ? "c-animlogo__logo -hidden" : "c-animlogo__logo"}>
              <path id="Vector" d="M58.7361 31.6688V32C58.7339 36.6093 57.5375 41.1395 55.2623 45.1495C52.987 49.1595 49.7109 52.5126 45.7521 54.8819C41.7934 57.2511 37.2888 58.5554 32.6763 58.6686C28.0638 58.7818 23.5005 57.6998 19.4307 55.527C27.9271 46.4666 33.6334 34.0734 34.4495 32.5373C34.5446 32.36 34.6279 32.1784 34.7059 31.9808C35.1022 30.9916 35.5679 30.0313 36.0988 29.1073C36.478 28.4813 37.0719 28.0145 37.7695 27.7945C46.1078 25.218 49.792 20.1889 50.3326 19.3899L50.402 19.2842C50.7641 18.7276 51.201 18.1711 51.6689 17.5654C52.6858 18.4638 53.6322 19.439 54.5007 20.4805C55.5496 21.7378 56.4822 23.088 57.2855 24.5141L57.2993 24.5365C57.3912 24.701 57.4809 24.8676 57.5643 25.0375C56.1713 26.2755 55.2249 27.0126 55.2249 27.0126C56.2888 27.7934 57.4062 28.4995 58.5673 29.1265L58.8461 29.2707C58.8472 29.2771 58.8472 29.2836 58.8461 29.29C58.9241 30.0591 58.9668 30.8389 58.9743 31.6293L58.7371 31.6678L58.7361 31.6688Z" fill="#609FD2" />
              <path id="Vector_2" fillRule="evenodd" clipRule="evenodd" d="M68.7531 39.2241C67.311 40.1641 65.0155 41.1714 62.2702 41.9223C60.4607 42.4158 58.6105 42.7448 56.7423 42.9051C56.7423 42.9051 56.7113 42.9093 56.6536 42.9179C56.6098 42.9232 56.55 42.9328 56.4784 42.9424C56.4357 42.9489 56.3983 42.9756 56.3812 43.0151C56.0447 43.7607 55.673 44.4935 55.2671 45.2092C52.9929 49.2202 49.7167 52.5744 45.7569 54.9447C41.7982 57.314 37.2925 58.6193 32.679 58.7325C28.1199 58.8447 23.6196 57.7391 19.5871 55.6156C19.5134 55.5771 19.4963 55.4777 19.554 55.4169C27.1179 47.3018 32.4386 36.6315 34.0452 33.4024C34.23 33.0306 34.3646 32.7583 34.449 32.6002C34.543 32.4228 34.6274 32.2412 34.7053 32.0436C35.1006 31.0545 35.5663 30.0942 36.0972 29.1702C36.4764 28.5442 37.0703 28.0785 37.7679 27.8574C46.1062 25.2809 49.7904 20.2518 50.3309 19.4528L50.4004 19.347C50.7272 18.845 51.1161 18.3429 51.5327 17.8035C51.5775 17.7458 51.6224 17.687 51.6673 17.6283C51.9012 17.3249 52.1469 17.0194 52.3947 16.7107L52.4534 16.6349C52.6895 16.34 52.9267 16.0431 53.1574 15.7451L53.3133 15.5442C53.4533 15.3701 53.5889 15.1949 53.7235 15.0187C54.6166 13.8437 55.6655 12.7295 56.7818 11.7436C56.7818 11.7436 56.7829 11.7425 56.785 11.7415C56.7861 11.7393 56.7882 11.7383 56.7903 11.7361C56.7978 11.7297 56.8106 11.718 56.8277 11.703C56.8384 11.6945 56.8502 11.6838 56.864 11.672C57.3746 11.2341 60.184 8.90539 63.2316 7.98995C64.9567 7.47187 66.7577 7.40671 68.2628 8.39586C68.6366 8.64155 68.9924 8.95239 69.3235 9.33801C69.3235 9.33801 69.3256 9.34015 69.3267 9.34122C72.6531 13.2166 63.301 22.0036 62.6793 22.5805C62.6761 22.5847 62.6718 22.5879 62.6686 22.5911C62.6654 22.5933 62.6622 22.5965 62.659 22.5997C62.6537 22.604 62.6505 22.6072 62.6483 22.6093C61.2201 24.0183 59.7492 25.2243 58.2986 26.0297L58.07 26.1525C58.0647 26.1536 58.0593 26.1536 58.054 26.1525C57.6171 26.3961 57.1599 26.5958 56.6867 26.7486C56.2509 26.8906 55.8033 26.9921 55.3483 27.0519C55.282 27.0605 55.234 27.1192 55.2382 27.1855L55.4166 29.7096C55.4829 30.1732 56.2135 30.4445 56.9409 30.7159C57.6866 30.9936 58.4279 31.2681 58.4375 31.7467L58.5828 31.7296L58.7248 31.7125C58.7387 31.8439 58.7387 31.9518 58.7387 32.0554C58.7387 33.1054 58.6768 34.1522 58.5539 35.1895C58.5486 35.2322 58.5657 35.2739 58.5999 35.3006C58.6778 35.3625 58.7943 35.3155 58.806 35.2162C58.9182 34.2559 58.9791 33.2902 58.9865 32.3224V31.8193C58.9865 31.7552 59.0346 31.7007 59.0987 31.6933L59.2653 31.673L62.3856 31.313C62.3941 31.313 62.4016 31.3108 62.409 31.3076C62.7039 31.2136 68.8236 29.3016 71.6831 31.3108C74.6121 33.3693 71.7248 37.2831 68.7531 39.2219V39.2241Z" fill="url(#paint0_linear_117_149)" />
              <path id="Vector_3" d="M68.3827 34.2677C67.3957 35.0753 66.3018 35.744 65.1322 36.2535C63.047 37.1775 60.8081 37.7041 58.5296 37.8088L58.0981 37.828C47.9331 38.2062 40.5198 33.0649 38.737 31.7073C38.3695 31.4359 38.1132 31.0407 38.016 30.5942C37.8376 29.7204 38.4165 29.2483 39.1493 28.8413C40.0434 28.3435 40.4771 28.2677 42.3229 27.5424C42.4821 27.4793 42.6445 27.4227 42.8068 27.3672C46.8927 25.986 51.4518 22.8562 54.51 20.4955C54.9245 20.1729 55.3122 19.8663 55.6658 19.58C56.9861 18.5118 57.8545 17.7246 58.0244 17.5376C58.5179 16.9811 60.7568 14.8917 62.6358 13.9965C63.109 13.7712 63.6068 13.5532 64.1494 13.5116C65.1183 13.4689 66.3286 13.9154 66.289 14.912C66.2719 15.1769 66.1833 15.4333 66.0327 15.6523C63.5982 19.3632 60.1148 22.7825 57.7702 24.8793L57.5779 25.0513C56.1849 26.2894 55.2385 27.0264 55.2385 27.0264C56.3024 27.8073 57.4198 28.5134 58.5809 29.1404L58.8597 29.2846C62.4606 31.1817 65.1728 31.813 67.2472 31.9188C69.4584 32.0277 69.2212 33.5574 68.3806 34.2635L68.3827 34.2677Z" fill="url(#paint1_radial_117_149)" />
              <path id="Vector_4" d="M40.8371 31.1795C40.5081 30.921 40.5593 30.4318 41.0881 30.3282C42.0345 30.1476 43.812 29.5131 45.316 28.8733C48.0666 27.3468 53.1694 27.648 58.9366 30.4702C59.0979 30.5503 59.2539 30.6422 59.4184 30.718C61.6466 31.7307 64.863 32.3257 65.1717 33.6727C65.2358 33.9504 65.099 34.2709 64.6622 34.5069C62.4147 35.7087 57.7744 36.6294 51.5372 35.3134C48.2514 34.6212 43.0739 32.9463 40.8371 31.1795Z" fill="url(#paint2_linear_117_149)" />
              <path id="Vector_5" d="M53.1695 15.6928C52.9388 15.9908 52.7016 16.2878 52.4645 16.5826L52.4058 16.6574C52.1579 16.9661 51.9123 17.2727 51.6783 17.575C51.2104 18.1678 50.7736 18.7457 50.4114 19.2937L50.342 19.3995C49.8015 20.1974 46.1173 25.2414 37.7789 27.804C37.0814 28.0252 36.4875 28.4909 36.1083 29.1169C35.5774 30.0408 35.1116 31.0012 34.7153 31.9903C34.6374 32.1772 34.554 32.3578 34.459 32.5468C33.6482 34.0829 27.9366 46.4761 19.4401 55.5366C15.9311 53.6598 12.8856 51.0235 10.5271 47.8199C8.16955 44.6164 6.55764 40.9269 5.81097 37.0205C5.0643 33.1141 5.20103 29.0912 6.21154 25.2457C7.22206 21.3991 9.07965 17.8271 11.6508 14.7913C14.2209 11.7544 17.4383 9.33063 21.067 7.69629C24.6956 6.06194 28.6448 5.25866 32.6249 5.34518C36.605 5.43171 40.5146 6.4059 44.0695 8.1962C47.6245 9.9865 50.733 12.548 53.1684 15.6928H53.1695Z" fill="url(#paint3_linear_117_149)" />
              <path id="Vector_6" d="M30.4251 26.5896C30.4251 28.0755 29.28 29.4545 28.0216 29.4545C26.7633 29.4545 25.6406 28.178 25.6406 26.6922C25.6406 25.2063 26.7548 23.7236 28.0216 23.7236C29.2885 23.7236 30.4251 25.1037 30.4251 26.5885V26.5896Z" fill="#010101" />
            </g>
          </g>
          <g id="Robin">
            <path d="M105.786 22.1125C105.786 19.625 104.142 18.3812 100.855 18.3812C98.7922 18.3812 96.7047 19.0062 94.5922 20.2562C93.9797 20.6187 93.4984 20.9562 93.1484 21.2687C92.8109 21.5687 92.4859 21.7187 92.1734 21.7187C91.8609 21.7187 91.5609 21.6437 91.2734 21.4937C90.9859 21.3312 90.7297 21.1312 90.5047 20.8937C89.6797 19.9812 89.7672 19.1 90.7672 18.25C92.2672 16.9625 94.7547 16.1312 98.2297 15.7562C98.9297 15.6812 99.8172 15.6437 100.892 15.6437C101.967 15.6437 103.098 15.8375 104.286 16.225C105.486 16.6125 106.492 17.1375 107.305 17.8C108.93 19.1375 109.742 20.8437 109.742 22.9187C109.742 25.3812 108.617 27.625 106.367 29.65C104.417 31.425 102.111 32.6937 99.4484 33.4562C100.173 34.0562 100.855 34.9187 101.492 36.0437L102.992 38.725C104.305 41.1625 105.48 42.4875 106.517 42.7C106.88 42.7625 107.255 42.75 107.642 42.6625C108.03 42.575 108.28 42.5375 108.392 42.55C108.517 42.55 108.598 42.65 108.636 42.85C108.686 43.05 108.636 43.3 108.486 43.6C108.336 43.9 108.092 44.1812 107.755 44.4437C106.967 45.0687 106.105 45.3437 105.167 45.2687C104.23 45.2062 103.467 45.0187 102.88 44.7062C102.305 44.3812 101.786 43.975 101.323 43.4875C100.873 43 100.467 42.4562 100.105 41.8562C99.7547 41.2562 99.4297 40.6437 99.1297 40.0187L98.2859 38.1812C98.0234 37.5812 97.7797 37.0687 97.5547 36.6437C97.3297 36.2062 97.1359 35.8125 96.9734 35.4625C96.8109 35.1 96.6297 34.775 96.4297 34.4875C96.0047 33.8375 95.4609 33.425 94.7984 33.25C92.1734 40 89.5047 43.85 86.7922 44.8C86.5672 44.8875 86.3359 44.9312 86.0984 44.9312C85.8734 44.9312 85.6672 44.8875 85.4797 44.8C85.2922 44.725 85.1359 44.625 85.0109 44.5C84.7484 44.2625 84.6172 44 84.6172 43.7125C84.6172 43.425 84.7109 43.2125 84.8984 43.075C86.7734 41.7125 88.8547 37.7375 91.1422 31.15L92.2672 27.9812C93.5547 24.3312 94.6422 22.0812 95.5297 21.2312C95.8422 20.9937 96.1672 20.875 96.5047 20.875C96.8422 20.875 97.1359 20.9312 97.3859 21.0437C97.6359 21.1437 97.8547 21.275 98.0422 21.4375C98.4672 21.8125 98.6797 22.1937 98.6797 22.5812C98.6797 22.9687 98.5922 23.3187 98.4172 23.6312C98.2547 23.9312 98.0672 24.3562 97.8547 24.9062C97.2422 26.5062 96.7672 27.7875 96.4297 28.75L95.4734 31.45C98.1359 31.1 100.492 30.0562 102.542 28.3187C104.705 26.4937 105.786 24.425 105.786 22.1125Z" fill="white" />
            <path d="M112.723 43.525C112.198 43.025 111.786 42.3937 111.486 41.6312C111.186 40.8562 111.03 39.9437 111.017 38.8937C111.005 37.8437 111.13 36.7812 111.392 35.7062C111.667 34.6312 112.048 33.5937 112.536 32.5937C113.036 31.5937 113.63 30.6562 114.317 29.7812C115.017 28.9062 115.786 28.1437 116.623 27.4937C118.448 26.0937 120.342 25.3937 122.305 25.3937C124.88 25.3937 126.623 26.525 127.536 28.7875C128.186 30.425 128.223 32.4062 127.648 34.7312C127.123 36.8687 126.161 38.8312 124.761 40.6187C123.373 42.4062 121.736 43.675 119.848 44.425C118.898 44.8 117.961 44.9875 117.036 44.9875C116.123 44.9875 115.305 44.8687 114.58 44.6312C113.867 44.3937 113.248 44.025 112.723 43.525ZM116.305 34.4312C115.93 35.3562 115.63 36.3062 115.405 37.2812C115.192 38.2562 115.092 39.1812 115.105 40.0562C115.117 40.9187 115.248 41.6 115.498 42.1C115.761 42.5875 116.18 42.8312 116.755 42.8312C117.33 42.8312 117.892 42.6375 118.442 42.25C119.005 41.85 119.548 41.325 120.073 40.675C120.598 40.025 121.092 39.275 121.555 38.425C122.017 37.575 122.423 36.6875 122.773 35.7625C123.536 33.75 123.905 31.9625 123.88 30.4C123.88 29.025 123.598 28.15 123.036 27.775C122.811 27.625 122.492 27.55 122.08 27.55C121.68 27.55 121.217 27.7375 120.692 28.1125C120.167 28.475 119.642 28.9687 119.117 29.5937C118.592 30.2187 118.086 30.95 117.598 31.7875C117.111 32.625 116.68 33.5062 116.305 34.4312Z" fill="white" />
            <path d="M130.911 39.475C130.911 38.75 130.961 38.0562 131.061 37.3937C131.173 36.7312 131.311 36.0625 131.473 35.3875C131.648 34.7125 131.842 34.0375 132.055 33.3625L134.155 26.95C135.817 21.75 136.861 17.6875 137.286 14.7625C137.423 13.7125 137.936 13.1875 138.823 13.1875C139.348 13.1875 139.792 13.325 140.155 13.6C140.817 14.1375 141.136 14.7125 141.111 15.325C141.098 15.925 141.011 16.6 140.848 17.35C140.698 18.0875 140.498 18.8937 140.248 19.7687C140.011 20.6437 139.736 21.5625 139.423 22.525C138.586 25 137.961 26.7875 137.548 27.8875L136.48 30.6812C137.567 28.9937 138.455 27.8375 139.142 27.2125C140.517 26 141.948 25.3937 143.436 25.3937C145.623 25.3937 147.08 26.5375 147.805 28.825C148.042 29.6125 148.161 30.5937 148.161 31.7687C148.161 32.9437 147.986 34.1125 147.636 35.275C147.298 36.425 146.836 37.5 146.248 38.5C145.661 39.4875 144.973 40.3812 144.186 41.1812C143.411 41.9812 142.592 42.6625 141.73 43.225C139.905 44.4 138.136 44.9875 136.423 44.9875C134.698 44.9875 133.342 44.4625 132.355 43.4125C131.392 42.3625 130.911 41.05 130.911 39.475ZM136.161 42.55C137.336 42.55 138.53 42.025 139.742 40.975C141.592 39.375 142.836 37.0875 143.473 34.1125C143.686 33.1375 143.792 32.125 143.792 31.075C143.792 30.0125 143.673 29.2687 143.436 28.8437C143.198 28.4187 142.83 28.2062 142.33 28.2062C141.842 28.2062 141.33 28.4062 140.792 28.8062C140.255 29.2062 139.692 29.7375 139.105 30.4C138.517 31.05 137.936 31.8062 137.361 32.6687C136.786 33.5187 136.267 34.4 135.805 35.3125C134.792 37.325 134.286 39.0375 134.286 40.45C134.286 41.85 134.911 42.55 136.161 42.55Z" fill="white" />
            <path d="M161.08 21.0062C160.805 21.2937 160.492 21.5312 160.142 21.7187C159.792 21.8937 159.423 22.0062 159.036 22.0562C158.648 22.0937 158.28 22.0312 157.93 21.8687C157.592 21.7062 157.298 21.475 157.048 21.175C156.511 20.55 156.242 19.9187 156.242 19.2812C156.242 18.6437 156.342 18.1687 156.542 17.8562C156.755 17.5312 157.017 17.2687 157.33 17.0687C157.93 16.6812 158.492 16.4875 159.017 16.4875C159.555 16.4875 159.967 16.525 160.255 16.6C160.555 16.675 160.83 16.8 161.08 16.975C161.692 17.3875 161.998 17.8937 161.998 18.4937C161.998 19.0812 161.911 19.575 161.736 19.975C161.573 20.3625 161.355 20.7062 161.08 21.0062ZM157.236 41.2937C157.561 41.2937 157.723 41.5062 157.723 41.9312C157.723 42.4937 157.467 43.075 156.955 43.675C156.205 44.55 155.198 44.9875 153.936 44.9875C152.486 44.9875 151.492 44.4 150.955 43.225C150.755 42.8125 150.655 42.3125 150.655 41.725C150.655 41.1375 150.755 40.4875 150.955 39.775C151.167 39.05 151.423 38.2937 151.723 37.5062C152.036 36.7062 152.373 35.9 152.736 35.0875L153.73 32.725C154.455 30.9625 154.817 29.8 154.817 29.2375C154.817 28.675 154.755 28.3062 154.63 28.1312C154.517 27.9437 154.392 27.8 154.255 27.7L153.88 27.4375C153.755 27.35 153.692 27.2 153.692 26.9875C153.692 26.7625 153.773 26.55 153.936 26.35C154.111 26.15 154.336 25.975 154.611 25.825C155.173 25.5375 155.83 25.3937 156.58 25.3937C158.417 25.3937 159.336 25.875 159.336 26.8375C159.336 27.9625 159.042 29.25 158.455 30.7C157.867 32.1375 157.367 33.3 156.955 34.1875L155.83 36.775C155.005 38.675 154.592 40.0437 154.592 40.8812C154.592 41.4312 154.867 41.7062 155.417 41.7062C155.955 41.7062 156.361 41.6375 156.636 41.5C156.911 41.3625 157.111 41.2937 157.236 41.2937Z" fill="white" />
            <path d="M175.461 28.9375C175.073 28.9375 174.523 29.3125 173.811 30.0625C173.098 30.8 172.48 31.475 171.955 32.0875L170.361 34L167.286 37.9187C166.561 39.2937 165.992 40.4375 165.58 41.35L164.567 43.525C164.305 44.0625 164.073 44.4437 163.873 44.6687C163.686 44.8812 163.423 44.9875 163.086 44.9875C162.761 44.9875 162.442 44.925 162.13 44.8C161.83 44.6875 161.567 44.5375 161.342 44.35C160.867 43.95 160.63 43.5125 160.63 43.0375C160.63 42.85 160.767 42.4812 161.042 41.9312L161.755 40.4125C161.98 39.9625 162.242 39.3875 162.542 38.6875L163.592 36.1187C165.067 32.4312 165.805 30.05 165.805 28.975C165.805 28.4 165.617 27.975 165.242 27.7L164.867 27.4375C164.742 27.35 164.68 27.2 164.68 26.9875C164.68 26.7625 164.761 26.55 164.923 26.35C165.098 26.15 165.323 25.975 165.598 25.825C166.161 25.5375 166.723 25.3937 167.286 25.3937C167.861 25.3937 168.305 25.4562 168.617 25.5812C168.93 25.7062 169.192 25.875 169.405 26.0875C169.867 26.525 170.098 26.9812 170.098 27.4562C170.098 27.9312 170.036 28.4125 169.911 28.9C169.798 29.375 169.648 29.8625 169.461 30.3625C169.286 30.85 169.098 31.3312 168.898 31.8062C168.698 32.2812 168.517 32.6937 168.355 33.0437L167.98 33.85C167.88 34.05 167.855 34.1125 167.905 34.0375C169.292 32.1125 170.205 30.875 170.642 30.325L171.955 28.75C172.917 27.625 173.673 26.8812 174.223 26.5187C175.336 25.7687 176.211 25.3937 176.848 25.3937C177.486 25.3937 178.023 25.475 178.461 25.6375C178.898 25.8 179.28 26.0312 179.605 26.3312C180.292 26.9687 180.636 27.7812 180.636 28.7687C180.636 29.7562 180.411 30.7875 179.961 31.8625C179.511 32.9375 179.117 33.8125 178.78 34.4875C178.455 35.15 178.142 35.825 177.842 36.5125C176.905 38.6 176.436 40.1187 176.436 41.0687C176.436 41.4937 176.773 41.7062 177.448 41.7062C177.973 41.7062 178.448 41.5937 178.873 41.3687C179.311 41.1437 179.592 41.0312 179.717 41.0312C179.98 41.0312 180.111 41.1625 180.111 41.425C180.111 42.5375 179.542 43.4687 178.405 44.2187C177.642 44.7312 176.942 44.9875 176.305 44.9875C175.667 44.9875 175.136 44.9187 174.711 44.7812C174.298 44.6437 173.93 44.425 173.605 44.125C172.867 43.4625 172.498 42.5375 172.498 41.35C172.498 39.9 172.955 38.0875 173.867 35.9125C174.53 34.425 174.998 33.4062 175.273 32.8562L175.911 31.525C176.298 30.725 176.492 30.0937 176.492 29.6312C176.492 29.1687 176.148 28.9375 175.461 28.9375Z" fill="white" />
          </g>
        </g>
        <defs>
          <linearGradient id="paint0_linear_117_149" x1="72.904" y1="4.2862" x2="21.4412" y2="64.2051" gradientUnits="userSpaceOnUse">
            <stop stopColor="#CEF3FF" />
            <stop offset="1" stopColor="#50B6E2" />
          </linearGradient>
          <radialGradient id="paint1_radial_117_149" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(53.4836 25.6783) rotate(90) scale(16.9067 21.5338)">
            <stop stopColor="#001433" />
            <stop offset="1" stopColor="#0D36B7" />
          </radialGradient>
          <linearGradient id="paint2_linear_117_149" x1="40.6309" y1="30.7661" x2="68.4575" y2="33.4099" gradientUnits="userSpaceOnUse">
            <stop stopColor="#BD345F" />
            <stop offset="1" stopColor="#DB6895" />
          </linearGradient>
          <linearGradient id="paint3_linear_117_149" x1="29.2532" y1="5.33887" x2="29.2532" y2="55.5366" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00D0C4" />
            <stop offset="1" stopColor="#056DAE" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default AnimatedLogo;