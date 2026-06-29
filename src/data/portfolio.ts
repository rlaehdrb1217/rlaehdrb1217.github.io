import momentLedgerImage from '../assets/projects/moment-ledger.jpg';
import momentWeeklyAnalysisImage from '../assets/projects/moment-weekly-analysis.jpg';
import momentMonthlyAnalysisImage from '../assets/projects/moment-monthly-analysis.jpg';
import simpleSudokuHomeImage from '../assets/projects/simple-sudoku-home.jpg';
import simpleSudokuGameImage from '../assets/projects/simple-sudoku-game.jpg';
import kimSungeup01Image from '../assets/projects/kim-sungeup-01.png';
import kimSungeup02Image from '../assets/projects/kim-sungeup-02.png';
import kimSungeup03Image from '../assets/projects/kim-sungeup-03.png';
import kimSungeup04Image from '../assets/projects/kim-sungeup-04.png';
import kimSungeup05Image from '../assets/projects/kim-sungeup-05.png';
import kimSungeup06Image from '../assets/projects/kim-sungeup-06.png';
import kimSungeup07Image from '../assets/projects/kim-sungeup-07.png';
import kimSungeup08Image from '../assets/projects/kim-sungeup-08.png';
import kimSungeup09Image from '../assets/projects/kim-sungeup-09.png';

export type ProjectImage = {
  src: string;
  alt: string;
};

export type LinkItem = {
  label: string;
  url?: string;
};

export type WorkCase = {
  category: string;
  title: string;
  items: string[];
  roleSummary: string;
};

export const personalInfo = {
  name: '김동규',
  nameEn: 'Dongkyu Kim',
  role: '재무·회계·인사·총무·경영지원',
  headline: '재무·회계·인사·총무 업무를 폭넓게 수행해 온 경영지원 실무자',
  summary:
    '자금관리와 회계처리를 중심으로 급여·4대보험·계약·보험·입찰·ERP 운영까지 담당하며, AI를 활용해 반복업무를 표준화하고 개선합니다.',
  company: '주식회사 에스앤에이',
  period: '2024.02 ~ 재직 중',
  department: '경영지원팀 대리',
  field: '재무·회계·인사·총무·경영지원',
  email: 'rlaehdrb1217@naver.com',
  homepage: 'https://rlaehdrb1217.github.io',
  profileImagePath: 'src/assets/profile/profile-suit.png',
  profileImageAlt: '김동규 프로필 사진',
  profileImage: undefined as string | undefined,
};

export const careerIntro = [
  '김동규는 기업의 자금관리와 회계처리를 중심으로 인사·급여·4대보험·계약·보험·입찰·ERP 운영 등 경영지원 업무 전반을 수행한 실무자입니다.',
  '여러 법인의 자금 및 회계자료를 관리하고, 경영진 보고자료 작성부터 세금 납부, 급여 회계처리, 퇴직연금, 매출처 계약과 정산까지 직접 담당했습니다.',
  '업무 중 반복되는 계산과 자료관리 문제는 엑셀과 AI 활용 프로그램으로 개선하며, 실무자가 실제로 사용할 수 있는 업무 흐름을 설계해 왔습니다.',
];

export const careerCard = {
  company: '주식회사 에스앤에이',
  period: '2024.02 ~ 재직 중',
  position: '경영지원팀 대리',
  scope: '재무·회계·인사·총무·ERP 운영',
};

export const competencyGroups = [
  {
    title: '자금관리',
    items: [
      '자금수지일보 작성 및 일일 자금 현황 관리',
      '주간·월간 자금계획 수립과 자료 최신화',
      '법인 계좌 잔액 및 입출금 내역 관리',
      '거래처 대금 지급 일정 확인 및 지급결제',
      '받을어음 만기일과 결제 일정 관리',
      '미수금 현황 및 수금 예정자료 작성',
      '법인카드 정산과 현금·수표 출납',
      '경영진 보고용 자금계획 및 미수금 자료 관리',
      '국내외 송금 및 관부가세 납부 업무',
    ],
  },
  {
    title: '회계·세무',
    items: [
      '매입·매출 전표 입력 및 회계장부 관리',
      '부가세 신고 및 신고자료 관리',
      '급여·4대보험 회계처리',
      '원천세 및 각종 세금 납부',
      '지방세 세무조사 대응',
      '법인별 손익자료 작성과 관리',
      '외화 거래 및 해외송금 회계처리',
      '선급비용 관리 및 월별 비용대체',
      '구매·영업 마감자료 검토와 회계 반영',
      '회계처리 결과와 증빙자료 검증',
    ],
  },
  {
    title: '인사·급여',
    items: [
      '신입사원 입사서류 작성 및 입문교육',
      '근로계약서 작성과 인사서류 관리',
      '급여자료 검토 및 급여 지급 품의',
      '급여 및 4대보험 회계처리',
      '임직원 4대보험 취득·상실 관련 업무',
      '퇴직금 지급 및 퇴직연금 이전 업무',
      '개인형 IRP 계좌 관련 지급 안내',
      '재직자와 퇴직자 관련 행정업무 지원',
    ],
  },
  {
    title: '총무·보험·자산관리',
    items: [
      '법인차량 리스 승계 및 자동차보험 변경·해지·환급',
      '공장 화재보험 가입·갱신 및 보험료 결제',
      '회사 재산과 재고자산 보험 관리',
      '회사 시설과 비품 이전 및 사무환경 관리',
      '임직원 숙소 확인과 임대차계약 지원',
      '법인 인감·증명서·계약서 등 주요 문서관리',
      '대표자 변경에 따른 법인 행정업무',
      '공장 및 법인 소재지 관련 대외기관 실사 지원',
    ],
  },
  {
    title: '계약·입찰·대외업무',
    items: [
      '나라장터 대표자 정보 변경',
      '매출처 전자조달 입찰 업무',
      '공공기관·대기업 매출처 입찰 준비',
      '매출처 계약 정산 및 잔금 수금',
      '선급금보증보험과 하자보증보험 관리',
      '보증보험 해지 및 예탁금 반환',
      '공공기관 및 대기업 입찰서류 준비',
      '산학연 입주신청서 및 대표자 변경 관련 행정처리',
      '지방투자촉진보조금 현장 실사 준비 및 대응',
      '계약 완료 후 정산과 관련 증빙 관리',
    ],
  },
  {
    title: 'ERP·업무 프로세스',
    items: [
      'ERP 기반 매입·매출 및 회계업무 운영',
      '구매·영업 마감자료와 회계전표 연계',
      'ERP 업무 흐름 분석 및 사용자 관점 개선',
      'ERP 운영자료와 사용자 매뉴얼 정리',
      '반복적으로 발생하는 업무 오류 원인 분석',
      '자금계획·미수금·선급비용 자료 표준화',
      'AI를 활용한 업무 보조 프로그램 기획 및 구현',
      '실무 규칙을 화면과 계산 로직으로 구조화',
    ],
  },
];

export const workCases: WorkCase[] = [
  {
    category: '회계·세무',
    title: '부가세 신고 및 회계·세무 관리',
    items: [
      '매입·매출 마감자료 검토',
      '세금계산서와 증빙자료 확인',
      '부가세 신고자료 작성 및 신고',
      '매입·매출 전표와 회계장부 대사',
      '법인별 신고 기초자료 관리',
      '신고 후 관련 회계처리 및 자료 보관',
    ],
    roleSummary: '매입·매출 자료 확인부터 증빙 검토, 신고자료 작성, 부가세 신고와 후속 회계처리까지 수행',
  },
  {
    category: '세무·대외 대응',
    title: '지방세 세무조사 대응',
    items: [
      '지방세 세무조사 요청자료 확인',
      '회계장부와 신고자료 검토',
      '과세대상 자료 및 관련 증빙 준비',
      '요청자료 제출과 보완 대응',
      '조사 관련 자료 체계화 및 보관',
    ],
    roleSummary: '세무조사 요청자료를 검토하고 회계자료와 증빙을 준비하여 조사 대응 업무 수행',
  },
  {
    category: '재무·자금',
    title: '자금계획 및 미수금 관리',
    items: [
      '여러 법인의 계좌잔액과 입출금 확인',
      '일일 자금수지일보 작성',
      '주간·월간 자금계획 수립',
      '거래처 지급 일정과 받을어음 만기 관리',
      '매출처 미수금 및 수금 예정일 관리',
      '경영진 보고자료 작성과 최신화',
    ],
    roleSummary: '계좌 현황, 지급 일정, 미수금과 수금계획을 연결해 자금계획 및 경영진 보고자료 관리',
  },
  {
    category: '인사·급여',
    title: '급여·퇴직·4대보험 처리',
    items: [
      '급여자료 검토와 지급 품의',
      '급여 및 4대보험 회계처리',
      '원천세와 4대보험 납부',
      '입·퇴사자 인사서류 관리',
      '4대보험 취득·상실 관련 업무',
      '퇴직금 지급 및 퇴직연금 이전 처리',
    ],
    roleSummary: '입·퇴사 행정부터 급여, 원천세, 4대보험, 퇴직연금까지 인사·급여 업무 수행',
  },
  {
    category: '보험·회계',
    title: '보험·보증보험·선급비용 관리',
    items: [
      '자동차보험과 공장 화재보험 가입·갱신',
      '보험 계약 변경과 해지환급 처리',
      '선급금보증보험과 하자보증보험 관리',
      '계약 종료 후 보증보험 해지',
      '예탁금 반환 및 관련 회계처리',
      '보험료 선급비용 월별 비용대체',
      '중도해지와 환급정산 자료 관리',
    ],
    roleSummary: '보험 가입부터 선급비용 회계처리, 계약 종료 후 해지·환급·예탁금 반환까지 전체 흐름 관리',
  },
  {
    category: '계약·총무',
    title: '계약·입찰·정산 및 대외기관 대응',
    items: [
      '나라장터 및 전자조달 정보 관리',
      '공공기관·대기업 매출처 입찰서류 준비',
      '계약 잔금 수금과 정산자료 관리',
      '계약 종료 후 보증보험 해지 처리',
      '대표자 변경에 따른 기관별 정보 정정',
      '지방투자촉진보조금 현장 실사 준비 및 대응',
      '법인 소재지·공장 관련 자료와 증빙 준비',
    ],
    roleSummary: '입찰 준비부터 계약 정산, 잔금 수금, 보증보험 해지와 대외기관 실사 대응까지 수행',
  },
];

export const improvementCases = [
  {
    title: '선급비용매니저(김선급)',
    label: '업무 흐름 개선',
    background:
      '보험과 보증보험의 선급비용을 엑셀로 관리하면서 월별 일할 계산, 중도해지, 환급정산 과정에서 오류 가능성이 존재했습니다.',
    improvements: [
      '계약·보험·보증보험 통합관리',
      '보험기간 기준 일할 계산',
      '월별 비용대체 금액 자동 산출',
      '중도해지 및 환급 정산',
      '과거 처리완료 월의 회계이력 보존',
      '증권과 계약서 첨부관리',
    ],
    images: [
      { src: kimSungeup01Image, alt: '김선급 선급비용매니저 화면 01' },
      { src: kimSungeup02Image, alt: '김선급 선급비용매니저 화면 02' },
      { src: kimSungeup03Image, alt: '김선급 선급비용매니저 화면 03' },
      { src: kimSungeup04Image, alt: '김선급 선급비용매니저 화면 04' },
      { src: kimSungeup05Image, alt: '김선급 선급비용매니저 화면 05' },
      { src: kimSungeup06Image, alt: '김선급 선급비용매니저 화면 06' },
      { src: kimSungeup07Image, alt: '김선급 선급비용매니저 화면 07' },
      { src: kimSungeup08Image, alt: '김선급 선급비용매니저 화면 08' },
      { src: kimSungeup09Image, alt: '김선급 선급비용매니저 화면 09' },
    ] satisfies ProjectImage[],
    role: '실무 규칙 정의, 계산 기준 설계, 화면 기획, AI 활용 개발, 결과 검증',
  },
  {
    title: 'ERP 업무 보조 및 자료 표준화',
    label: '업무 흐름 개선',
    background:
      'ERP 운영과 회계자료 확인 과정에서 조회속도와 자료정리의 불편이 있었습니다.',
    improvements: [
      '필요한 ERP 정보를 빠르게 확인하는 뷰어와 관리화면 기획',
      '자금계획과 미수금 보고자료 표준화',
      '반복 확인업무를 줄이기 위한 업무 흐름 정리',
      'AI를 활용한 화면 구현과 기능 검증',
    ],
    role: '업무 흐름 분석, 요구사항 정리, 화면 구성, 기능 검증',
  },
];

export const aiPrinciple =
  '개발 자체가 목적이 아니라, 실무자가 업무 규칙을 직접 정의하고 AI를 도구로 활용해 반복업무를 줄이는 것이 목적입니다.';

export const personalProjects = [
  {
    title: 'MOMENT',
    status: '개발 중',
    description: '사진과 장소로 소비를 기록하는 모바일 가계부',
    role: '서비스 기획, 화면 구성, 기능 설계, AI 개발 도구를 활용한 구현 및 테스트',
    images: [
      { src: momentLedgerImage, alt: 'MOMENT 모바일 가계부의 월별 가계부 화면' },
      { src: momentWeeklyAnalysisImage, alt: 'MOMENT 모바일 가계부의 주별 분석 화면' },
      { src: momentMonthlyAnalysisImage, alt: 'MOMENT 모바일 가계부의 월별 분석 화면' },
    ],
    links: [{ label: 'Play Store', url: undefined }] satisfies LinkItem[],
  },
  {
    title: 'Simple Sudoku',
    status: 'Google Play 내부 테스트',
    description: 'Flutter 기반 다국어 모바일 스도쿠 게임',
    role: '게임 기획, 기능 설계, AI 개발 도구를 활용한 Flutter 구현, 테스트 및 Google Play 등록',
    images: [
      { src: simpleSudokuHomeImage, alt: 'Simple Sudoku 난이도 선택 화면' },
      { src: simpleSudokuGameImage, alt: 'Simple Sudoku 모바일 게임 플레이 화면' },
    ],
    links: [{ label: 'Play Store', url: undefined }] satisfies LinkItem[],
  },
];

export const navItems = [
  { label: '홈', href: '#home' },
  { label: '경력 소개', href: '#career' },
  { label: '업무 역량', href: '#competencies' },
  { label: '주요 업무 경험', href: '#work-experience' },
  { label: '업무개선 사례', href: '#improvements' },
  { label: '연락처', href: '#contact' },
];
