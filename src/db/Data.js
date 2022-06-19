import {
  faPersonRunning,
  faChartLine,
  faDumbbell,
  faUtensils,
  faLocationDot,
  faStore,
  faUser,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const db = [
  {
    id: 0,
    car: "포르쉐911",
    price: "3억~",
  },
  {
    id: 1,
    car: "포르쉐 마칸",
    price: "1억5천~",
  },
  {
    id: 2,
    car: "마세라티",
    price: "2억5천~",
  },
  {
    id: 3,
    car: "벤츠 마흐바흐",
    price: "2억1천~",
  },
  {
    id: 4,
    car: "롤스로이스 팬텀",
    price: "5억~",
  },
];

export const Frontlanguage = [
  {
    id: 0,
    title: "HTMLS",
    contents:
      "하이퍼 텍스트 마크업 언어는 웹 페이지를 위한 지배적인 마크업 언어다. 또한, HTML은 제목, 단락, 목록 등과 같은 본문을 위한 구조적 의미를 나타내는 것뿐만 아니라 링크, 인용과 그 밖의 항목으로 구조적 문서를 만들 수 있는 방법을 제공한다.",
    img: "https://velog.velcdn.com/images/dldnjswns31/post/acf9ed03-21a9-4a8c-aabd-664e8a344424/image.webp",
    link: "https://www.google.com/search?q=html&rlz=1C1AVFC_enKR847KR925&oq=H&aqs=chrome.1.69i57j35i39l2j0i131i433i512l2j0i512j46i131i199i433i465i512j0i433i512l2j46i131i199i291i433i512.2245j0j15&sourceid=chrome&ie=UTF-8",
  },
  {
    id: 1,
    title: "CSS3",
    contents:
      "종속형 시트 또는 캐스케이딩 스타일 시트는 마크업 언어가 실제 표시되는 방법을 기술하는 스타일 언어로, HTML과 XHTML에 주로 쓰이며, XML에서도 사용할 수 있다. W3C의 표준이며, 레이아웃과 스타일을 정의할 때의 자유도가 높다. 기본 파일명은 style.css이다.",
    img: "https://images.velog.io/images/jakeseo_me/post/7492518b-f81c-4ebe-be44-a40f2af5064c/css%20shield.png",
    link: "https://www.google.com/search?q=css&rlz=1C1AVFC_enKR847KR925&sxsrf=ALiCzsaMbiDE-SqfrtHInaGP7cp0UBq_tQ%3A1655373430333&ei=dv6qYtbmE_GG1e8Pj6C0gA4&ved=0ahUKEwjW-aPK2rH4AhVxQ_UHHQ8QDeAQ4dUDCA4&uact=5&oq=css&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBAgjECcyBAgjECcyEAgAEIAEEIcCELEDEIMBEBQyCwgAEIAEELEDEIMBMgsIABCABBCxAxCDATILCAAQgAQQsQMQgwEyCwgAEIAEELEDEIMBMgsIABCABBCxAxCDATILCAAQgAQQsQMQgwE6EQguEIAEELEDEIMBEMcBENEDOggIABCABBCxAzoRCC4QgAQQsQMQgwEQxwEQowJKBAhBGABKBAhGGABQAFjeAmCHBWgAcAF4AIABbIgBwgKSAQMwLjOYAQCgAQHAAQE&sclient=gws-wiz",
  },
  {
    id: 2,
    title: "JAVASCRIPT",
    contents:
      "자바스크립트는 객체 기반의 스크립트 프로그래밍 언어이다. 이 언어는 웹 브라우저 내에서 주로 사용하며, 다른 응용 프로그램의 내장 객체에도 접근할 수 있는 기능을 가지고 있다. 또한 Node.js와 같은 런타임 환경과 같이 서버 프로그래밍에도 사용되고 있다.",
    img: "https://s3-ap-northeast-2.amazonaws.com/opentutorials-user-file/course/3700/11366.png",
    link: "https://www.google.com/search?q=javascript&rlz=1C1AVFC_enKR847KR925&sxsrf=ALiCzsYcKMIWPeBwEPKdVq8Yk7RhAmQcXg%3A1655373473984&ei=of6qYpnbO8-joATczquYDw&oq=java&gs_lcp=Cgdnd3Mtd2l6EAEYADIECCMQJzIICAAQgAQQsQMyCwgAEIAEELEDEIMBMgQIABADMgQIABADMgsIABCABBCxAxCDATILCAAQgAQQsQMQgwEyBAgAEAMyCwgAEIAEELEDEIMBMgQIABADOgcIIxCwAxAnOgsIABCABBCxAxCwAzoICC4QgAQQsAM6DggAEIAEELEDEIMBELADOgcIABCwAxADSgQIQRgBSgQIRhgAUIYDWJkDYOsHaAFwAHgAgAFmiAHMAZIBAzAuMpgBAKABAcgBCsABAQ&sclient=gws-wiz",
  },
];

export const griddb = [
  {
    id: 0,
    title: "걸음",
    sub: "걸음걸이 측정",
    icon: <FontAwesomeIcon icon={faPersonRunning} />,
  },
  {
    id: 1,
    title: "기록/분석",
    sub: "걸음걸이 기록/분석실입니다.",
    icon: <FontAwesomeIcon icon={faChartLine} />,
  },
  {
    id: 2,
    title: "운동법",
    sub: "운동방법을 알려드립니다.",
    icon: <FontAwesomeIcon icon={faDumbbell} />,
  },
  {
    id: 3,
    title: "식단",
    sub: "식단 및 레시피를 알려드립니다.",
    icon: <FontAwesomeIcon icon={faUtensils} />,
  },
  {
    id: 4,
    title: "위치",
    sub: "자녀의 위치를 알려드립니다.",
    icon: <FontAwesomeIcon icon={faLocationDot} />,
  },
  {
    id: 5,
    title: "마켓",
    sub: "온라인마켓 연결",
    icon: <FontAwesomeIcon icon={faStore} />,
  },
  {
    id: 6,
    title: "프로필",
    sub: "자신의 프로필을 알려드립니다.",
    icon: <FontAwesomeIcon icon={faUser} />,
  },
  {
    id: 7,
    title: "설정",
    sub: "",
    icon: <FontAwesomeIcon icon={faGear} />,
  },
];
