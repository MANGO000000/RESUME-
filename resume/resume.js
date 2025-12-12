const resumeData = {
  ko: {
    headerTitle: "Hello, I'm Nina.",
    name: "강한니나",
    contactTitle: "연락처",
    introTitle: "자기소개서",
    personalityTitle: "성격의 장단점",
    volunteerTitle: "봉사활동",
    motivationTitle: "네이버 지원 동기 및 입사 후 포부",

    introText: `저는 사용자 중심의 서비스를 개발하는 것에 열정을 가진 개발자입니다.
다양한 프로젝트 경험을 통해 백엔드와 프론트엔드 역량을 쌓아왔으며
특히 Spring Boot와 React 기반 개발에 강점을 가지고 있습니다.`,

    personalityText: `[장점] 책임감이 강하고 꼼꼼합니다.
[단점] 완벽주의 성향을 일정 관리로 개선하고 있습니다.`,

    volunteerText: `2024년 농촌 봉사활동에 참여하여
취사팀으로 약 30명의 식사를 담당했습니다.`,

    motivationText: `네이버의 기술 철학에 공감하며
사용자 중심의 안정적인 서비스를 개발하는 개발자로 성장하고 싶습니다.`
  },

  en: {
    headerTitle: "Hello, I'm Nina.",
    name: "Nina Kang",
    contactTitle: "Contact",
    introTitle: "Profile",
    personalityTitle: "Strengths & Weaknesses",
    volunteerTitle: "Volunteer Experience",
    motivationTitle: "Motivation & Career Goals",

    introText: `I am a developer passionate about user-centered services,
with strong experience in Spring Boot and React.`,

    personalityText: `[Strength] Responsible and detail-oriented.
[Weakness] Perfectionism, improving through planning.`,

    volunteerText: `Participated in rural volunteer work in 2024,
preparing meals for around 30 people.`,

    motivationText: `I aim to grow as a core developer contributing
to stable and scalable services at Naver.`
  },

  jp: {
    headerTitle: "こんにちは、ニナです。",
    name: "カン・ニナ",
    contactTitle: "連絡先",
    introTitle: "自己紹介",
    personalityTitle: "長所と短所",
    volunteerTitle: "ボランティア活動",
    motivationTitle: "志望動機・将来の目標",

    introText: `ユーザー中心のサービス開発に情熱を持つ開発者です。`,
    personalityText: `[長所] 責任感が強い。
[短所] 完璧主義を改善中。`,
    volunteerText: `農村ボランティア活動に参加しました。`,
    motivationText: `NAVERで成長したいと考えています。`
  },

  cn: {
    headerTitle: "你好，我是Nina。",
    name: "姜韩妮娜",
    contactTitle: "联系方式",
    introTitle: "个人简介",
    personalityTitle: "性格优缺点",
    volunteerTitle: "志愿活动",
    motivationTitle: "申请动机与目标",

    introText: `我是一名以用户为中心的开发者。`,
    personalityText: `[优点] 责任心强。
[缺点] 正在改善完美主义。`,
    volunteerText: `参加过农村志愿服务。`,
    motivationText: `希望在NAVER成长为核心工程师。`
  }
};

function setLang(lang) {
  const d = resumeData[lang];
  document.getElementById("title").innerText = d.headerTitle;
  document.getElementById("name").innerText = d.name;
  document.getElementById("contactTitle").innerText = d.contactTitle;
  document.getElementById("introTitle").innerText = d.introTitle;
  document.getElementById("personalityTitle").innerText = d.personalityTitle;
  document.getElementById("volunteerTitle").innerText = d.volunteerTitle;
  document.getElementById("motivationTitle").innerText = d.motivationTitle;
  document.getElementById("introText").innerText = d.introText;
  document.getElementById("personalityText").innerText = d.personalityText;
  document.getElementById("volunteerText").innerText = d.volunteerText;
  document.getElementById("motivationText").innerText = d.motivationText;
}

function savePDF() {
  window.print();
}

window.onload = () => setLang("ko");
