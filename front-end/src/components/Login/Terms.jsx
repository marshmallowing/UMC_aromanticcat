import React  from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Cancel from '../../assets/img/VectorX.svg';
import ReactMarkdown from 'react-markdown';

const Backlogo = styled.div`
  width: 30px;
  height: 36px;
  left: 600px;
  top: 60px;
  position: absolute;
  cursor: pointer;
`;

const Container=styled.div`
    left:650px;
    top:110px;
    position: absolute;
    width:640px;
    height:700px;
`
const Title=styled.div`
    margin-top:30px;
    font-family: Pretendard;
    font-size: 24px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
`
const Contents=styled.div`
    margin-left:5px;
    margin-top:30px;
    padding-bottom:130px;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.20000000298023224px;
    text-align: left;
    line-height:22px;
`

export default function Terms(){

    const navigate = useNavigate();

    const navigateBack = () => {
        navigate("/CreateAccount");
    };

    const Markdown1=`

**제1조(목적)**

<낭만고양이>의 서비스를  이용해주셔서 감사합니다. 이 약관은 <낭만고양이>(이하 “회사”)가 운영하는 인터넷 사이트 낭만 고양이(이하 “사이트”)를 이용함에 있어 회사와 이용자의 권리**·**의무 및 책임사항을 규정함을 목적으로 합니다.

**제2조(용어의 정의)**

1. 회사가 운영하는 사이트는 아래와 같습니다.
    - 사이트 이름 : '낭만 고양이’
    - 사이트 주소 :
2. 이용자 : 사이트에 접속하여 이 약관에 따라 “사이트”를 사용하는 회원 및 비회원을 말합니다.
3. 회원 : ”사이트”에 회원등록을 한 자로서, 사이트에서 제공하는 서비스를 이용하기 위해 가입신청을 하여 지속적으로 “사이트”가 제공하는 서비스를 이용할 수 있고, 약관에 따른 권리와 의무를 갖는 자를 말합니다.
4. 비회원 : 회원으로 가입하지 않고 “사이트”가 제공하는 서비스를 이용하는 자를 말합니다.
5. 서비스 : 회사가 제공하는 서비스 일체를 의미합니다.
6. 닉네임 : 아이디(유저네임) 대신 별도로 남에게 표시되는 별명(별칭, 닉네임)을 말합니다. 
7. 내 우편함 : 유저간 편지를 주고 받을 수 있는 서비스를 의미합니다.
8. 주소록 : 유저와 친구신청이 된 유저의 닉네임 혹은 우편번호를 검색할 수 있는 서비스 입니다. 친구가 되지 않은 유저도 닉네임 혹은 우편번호로 검색해 친구신청을 할 수 있습니다.
9. 낭만 우편함 : 익명으로 편지를 작성하면 익명으로 답장이 도착하는 우편 중개 서비스입니다.
10. 낭만 모음집 : 업로드 동의 후 익명으로 작성된 편지와 그 답장을 모아볼 수 있는 서비스 입니다. 
11. 상점 : 코인으로 편지지와 우표를 구매할 수 있는 서비스입니다.
12. 코인 : 편지지와 우표를 구매할 수 있는 낭만 고양이 웹 내 재화입니다. 미션을 통해 획득할 수 있씁니다.
13. 마이디자인 : 유저가 직접 파일을 업로드해 업로드한 파일을 편지지와 우표로 이용할 수 있게 하는 서비스입니다.

**제 3조(약관 동의 명시와 설명 및 개정)**

1. 회사는 이 약관을 이용자가 알 수 있도록 웹사이트를 통해 이용자에게 고지함으로써 효력이 발생합니다.
2. 이 약관은 “사이트”를 이용하고자 하는 모든 이용자에 대하여 그 효력이 발생합니다. 관계법령에 위배되지 않는 범위 안에서 개정이 될 수 있으며, 이는 웹사이트 게시 등 기타 수단으로 게시하여 효력을 인정 받습니다.
3. 이용자의 이 약관에 대한 동의는 ‘낭만 고양이’ 웹사이트나 모바일 웹사이트, 어플리케이션 등을 방문하여 약관의 변경 사항을 확인하는 것에 대한 동의를 포함합니다.
4. 이용자는 개정된 약관에 동의하지 않을 경우 ‘낭만 고양이’ 에게 계약해지 및 이용정지를 요청할 수 있으며, 계속 서비스를 사용할 경우 변경된 약관에 동의하는 것으로 간주됩니다.

**제 4조 약관 외 준칙**

이 약관에서 정하지 아니한 사항에 관하여는 「전자상거래 등에서의 소비자보호에 관한 법률」, 「약관의 규제에 관한 법률」, 「정보통신망이용촉진 및 정보보호 등에 관한 법률」, 「콘텐츠산업진흥법」 등 관련 법령 및 상관례에 따릅니다.

**제 5조 이용 계약의 성립**

1. 서비스 이용계약은 이용자가 각종 정보 입력을 완료하고 이 약관 및 개인정보 수집 및 이용에 동의하면 그 이용신청에 대한 회사의 이용승낙으로 성립합니다. 이용자의 서비스 이용신청 완료 후 서비스가 정상적으로 이용되는 경우에는 이용이 승낙된 것으로 간주됩니다.
2. 이용자는 서비스 이용과정에서 타인의 개인정보를 도용하는 경우 이 약관에 의한 이용자의 권리를 주장할 수 없으며, 회사는 이용계약을 취소하거나 해지할 수 있습니다. 이용자가 플랫폼사업자에게 개인정보를 제공하고 플랫폼사업자를 통해 서비스를 이용하는 경우에도 동일하게 간주됩니다.
3. 회사는 이용자의 상태와 이용기간, 이용횟수, 서비스 접근방식 등에 따라 합리적인 기준을 통해 서비스 범위에 차등을 둘 수 있으며, 이용자는 상기 내용에 따라 서비스 이용에 제약을 받을 수 있습니다.
4. 회사는 1항의 방법으로 서비스 이용을 신청한 자가 아래의 각 호에 해당하는 경우 서비스 이용신청 승낙을 유보 또는 거부할 수 있습니다.
    
    1) 타인의 정보 도용 등 등록내용을 허위로 기재한 사실이 있는 경우
    
    2) 이용자가 “사이트” 약관 및 서비스 이용에 관한 관계법령을 위반하여 “사이트”에서 제공하는 서비스의 이용자격을 상실한 경우가 있는 경우
    
    3) 회사가 필수적으로 입력을 요청한 부분을 기재하지 않은 경우
    
    4) 만 14세 미만인 자
    
    5) 사회질서 및 미풍양속을 문란하게 하는 자
    
    6) 부정한 용도로 서비스를 사용하고자 하는 경우
    
    7) 기타 회사의 여건상 이용승낙이 곤란하거나 가입결격 사유에 해당하는 자
    
5. 이용 신청 계약 성립 시점은 회사의 이용신청 승낙이 이용자에게 도달한 시점을 기준으로 합니다.

**제 6조 서비스의 종류 및 범위**

1. 이용자는 무료로 “사이트” 이용을 신청할 수 있습니다.
2. “사이트”는 연중무휴, 365일 24시간 제공을 원칙으로 하되, 이용자의 접속 폭주와 기타 회사 사정에 의해 지연될 수 있으며 이에 대해 회사는 손해배상 등의 책임을 부담하지 않습니다.
3. 회사는 “사이트”의 원활한 서비스 제공을 위하여 고객센터를 운영하고 있습니다. 웹 사이트 내 문의 접수 및 신고 기능을 통해 신고가 접수되고, 신고된 이용자의 행위가 서비스의 질서를 어지럽혔거나, 타인의 권리를 침해한다고 판단 될 경우 해당 이용자에 대하여 이용제한, 이용 영구불능조치, 법적책임 추궁 등의 조치를 취할 수 있습니다.

**제 7조 게시물에 대한 저작권**

1. 회원이 서비스 내에 작성한 텍스트 등의 기타 정보(이하 “게시물”)에 대한 책임 및 권리는 게시물을 등록한 회원에게 있습니다.
2. 회원 또는 회사가 서비스 내에 게시한 게시물은 저작권법에 의한 보호를 받으며, 게시물의 저작권은 해당 게시물의 작성자에게 귀속합니다.
3. 회원은 다음 각 호에 해당하는 범위 내에서 회원이 등록한 게시물을 회사가 사용하고, 본질적인 내용에 변경을 가하지 않는 범위 내에서 수정, 편집할 것을 허락합니다.
    
    1) 서비스 내에서 게시물의 복제, 전송, 전시, 배포를 위해 수정, 사용하는 것
    
    3) 공개 페이지를 캡처한 화면을 마케팅 용도로 사용하는 것
    
    2) 본 항에 따른 복제, 전송, 전시, 배포의 범위에는 회사가 운영하는 관련 사이트의 서비스가 포함됩니다.
    
4. 회사는 3항 이외의 방법으로 회원의 게시물을 이용하고자 하는 경우 전화, E-mail 또는 기타 서비스 내에서 회사가 제공하는 방식으로 사전에 회원에게 동의를 얻어야 합니다.
5. 회원과의 이용계약이 해지 또는 종료되더라도, 본인이 생성한 게시물은 자동적으로 삭제되지 않습니다. 게시물의 삭제를 원하는 회원은 반드시 회원탈퇴 이전에 자신의 게시물을 삭제하거나 회사에 삭제를 요청하여야 합니다.
6. 다른 사람의 계정(우편함)에 작성한 메시지는 작성자를 인증할 수 없으므로 이용자의 요청을 받아도 삭제가 불가능합니다.
7. 게시물이 제 3자에 의하여 보관되거나 무단복제 등을 통하여 복제됨으로써 해당 게시물이 삭제되지 않고 재 게시된 경우에 대하여 회사는 책임을 지지 않습니다.
8. 회사는 회사의 합병, 영업양도, 회사가 운영하는 서비스 제품 간의 통합, 서비스 개편 등의 사유로 원래의 게시물의 내용을 변경하지 않고 게시물의 게시 위치를 변경할 수 있습니다.

**제 8조 회사의 의무**

1. 회사는 이 약관과 관련법령에 따라 지속적이고 안정적인 서비스를 제공하는데 최우선의 노력을 다합니다.
2. 회사는 서비스에 관한 회원의 문제제기나 불편사항 신고가 정당하다고 판단되는 경우 우선적으로 이를 해결하기 위해 노력하며, 신속한 해결이 곤란한 경우에는 회원에게 그 사유와 처리절차를 안내합니다.
3. 회사는 회사가 정한 이용약관 및 운영정책 혹은 법령을 위반하는 이용자들을 강제 이용 중단 조치할 수 있습니다.
4. 서비스 내에서 회원은 물론 비회원 이용자의 정보 게재에 따른 문제가 발생하여 문의접수 시, 최대한 빠르게 문의내용을 파악하여 대응할 의무가 있습니다.
5. 회사는 회원의 서비스 이용과 관련한 자료를 수사기관이 수사목적으로 요청하거나 기타 공공기관이 관련 법률에 따른 절차를 통해 요청하는 경우 회원의 동의 없이 해당 기관에 제공할 수 있습니다.
6. 회사는 회원의 서비스 이용과 관련한 자료를 통계자료 작성, 서비스의 개선, 신규서비스의 개발 등의 목적으로 활용할 수 있습니다.
7. 회사는 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 관계법령에 따라 이용자가 서비스 이용 신청 시 기록한 개인정보, 이후에 추가로 기록한 개인정보 및 서비스 이용 중 생성되는 개인정보를 보호하여야 합니다.

**제 9조 회원의 의무**

1. ID와 비밀번호에 관한 관리책임은 전적으로 회원에게 있습니다.
2. 회원은 자신의 ID 및 비밀번호를 제3자에게 이용하게 해서는 안됩니다.
3. 회원이 자신의 ID 및 비밀번호를 도난 당하거나 제3자가 사용하고 있음을 인지한 경우에는 바로 회사에 통보하고 회사의 안내가 있는 경우에는 그에 따라야 합니다.
4. 회원이 본조에 따른 의무를 소홀히 하여 발생하는 모든 불이익에 대해 회사는 일체 책임을 지지 않습니다.

**제 10조 이용자의 금지행위**

1. 이용자는 아래 각호의 행위를 하여서는 안 됩니다.
    1. 이 약관, 운영정책, 관련법령 등을 위반하는 행위
    2. 회사 또는 제3자의 지식재산권 등 권리를 침해하는 행위
    3. “사이트”의 이용자 정보를 부정하게 취득하는 행위
    4. “사이트”를 회사가 지정하지 않은 방법으로 접근하여 서비스 혹은 서비스 내 데이터를 이용/활용한 행위
    5. 게시물 작성 시, 비회원 이용자의 정보를 당사자의 동의 없이 게재하는 경우
    6. 타인의 개인정보(휴대전화번호, 이름 등)을 도용하는 행위
    7. 개인정보를 허위 또는 타인의 것으로 등록하는 행위
    8. 외설 또는 폭력적인 메시지나 기타 공서양속에 반하는 정보를 서비스 내에 공개 또는 게시하는 행위
    9. 타 이용자에 대한 비방 또는 인격모독을 하거나 이를 작성 및 유포하는 행위
    10. 사이트 내에서 불법적으로 물건을 판매하거나 상행위를 하는 행위
    11. 음란물 및 동영상을 게시하는 행위
    12. “낭만 고양이”서비스 운영업무를 방해하는 행위 또는 “낭만 고양이”에 대한 허위 사실을 유포하는 등의 행위
    13. “낭만 고양이” 서비스 제공에 유해한 게시물을 작성하는 등 회사가 정한 이용정책을 위반하는 행위
2. 기타 “낭만 고양이” 서비스 및 제반 설비를 이용하여 범죄 또는 불법행위를 하거나, 이외에 운영자의 판단하에 이용에 부적절하다고 여겨지는 행위 이상 위 2항 각 호 해당 사항에 명시한 내용을 위반한 이용자는 강제이용 중단 및 영구이용 중단처리될 수 있으며 민형사상의 책임을 지게 됩니다.
3. 본 약관을 위반하거나, 기타 대한민국 관계 법령에 위반하는 행위에 대해서는 경고 없이 이용자의 권한이 박탈되며, 이에 대해 회사는 이용자에게 어떠한 보상도 하지 않습니다.

**제 11조 계약의 종료**

“낭만 고양이”는 다음과 같은 조건을 계약의 종료 조건으로 인정합니다.

1. 이용자의 자의에 의해 회사가 제공하는 서비스 내의 계정삭제 (탈퇴) 기능을 통하여 계정삭제 신청을 할 경우
2. 이용자의 의무를 성실히 이행하지 않거나, 약관에서 정한 사항 및 정책과 “낭만 고양이” 운영정책에 위배되는 행위를 한 이용자는 사전 고지 없이 강제 이용 중지 및 영구 이용정지 처리될 수 있습니다.
3. 이용자가 10조 2항에 해당하는 경우, 회사에 의해 계약이 종료될 수 있습니다.
4. 이용계약을 해지 또는 회원탈퇴하는 경우, 회사는 개인정보처리방침에 따라 이용자의 정보를 보유하는 경우를 제외하고, 이용자가 회원가입 시 제공했던 정보를 삭제합니다. 단, 본인이 작성한 메시지는 삭제되지 않습니다.

**제 12조 서비스의 중단**

1. 회사는 통신, 전력 등의 공급이 중단되는 불가피한 경우는 물론 정보통신설비의 보수점검, 증설, 교체, 이전 등의 유지 관리 업무의 수행, 기타 경영상의 사정 등으로 인해 필요한 경우 7일 이전에 공지 후 서비스의 제공을 일시적으로 중단할 수 있습니다. 다만, 불가피하게 사전 공지를 할 수 없는 경우 회사는 사후 공지할 수 있습니다.
2. 회사는 천재지변, 전쟁, 폭동, 테러, 해킹, DDOS, 기간통신사업자 등 제3자의 귀책사유, 기타 기술적 장애 등으로 서비스가 중단된 경우 회원에게 즉시 이러한 사실을 공지하되 정보통신설비의 작동불능 등의 사정으로 인해 사전공지가 불가능한 경우에는 이러한 사정이 해소된 이후 즉시 공지합니다. 회사는 본항에 따른 서비스 중단에 대해 어떠한 책임도 지지 않습니다.
3. 회사는 제1항에 따른 서비스 중단에 대해 고의 또는 중대한 과실이 없는 경우 회원에 대하여 손해배상의 책임을 부담하지 않습니다.

**제 13조 손해배상**

1. 이용자가 서비스를 이용함에 있어 행한 불법적 행위나 본 약관의 규정을 위반함으로 인하여 회사에 손해가 발생하거나 제3자로부터 회사가 손해배상 청구 또는 소송을 비롯한 각종 이의제기를 받는 경우 이용자는 회사에 발생하는 모든 손해를 배상하여야 합니다.

**제 14조 면책조항**

“낭만 고양이”는 본 서비스(모든 게시물을 포함함)에 사실상 또는 법률상의 하자(안전성, 신뢰성, 정확성, 완전성, 유효성, 특정 목적과 부합 여부, 보안 등에 관련된 결함, 오류와 버그, 권리 침해 등을 포함함)가 없음을 명시적으로도 암묵적으로도 보증하지 않습니다.

1. 회사는 운영상 또는 기술상의 필요에 따라 제공하고 있는 서비스를 변경할 수 있습니다. 변경될 서비스의 내용 및 제공일자 등에 대해서는 회사가 운영하는 웹사이트에 게시하거나 E-mail, SMS, 푸시 알림 등으로 이용자에게 통지합니다. 단, 회사가 사전에 통지할 수 없는 치명적인 버그 발생, 서버기기결함, 긴급 보안문제 해결 등의 부득이한 사정이 있는 경우에는 사후에 통지할 수 있습니다.
2. 회사는 다음 각호에 해당하는 경우 서비스의 전부 또는 일부를 제한하거나 중지할 수 있습니다.
    1. 전시, 사변, 천재지변 또는 국가 비상사태 등 불가항력적인 사유가 있는 경우
    2. 정전, 제반설비의 장애 또는 이용량의 폭주 등으로 정상적인 서비스 이용에 지장이 있는 경우
    3. 서비스용 설비의 보수 또는 공사 등 부득이한 사유가 있는 경우
    4. 회사의 제반 사정으로 서비스를 할 수 없는 경우
3. 회사는 서비스 개편이나 운영상 또는 회사의 긴박한 상황 등에 의해 서비스 전부나 일부를 장기간 중단(또는 종료)할 필요가 있는 경우 최소 7일 전에 웹사이트에 이를 공지하고 서비스의 제공을 중단할 수 있습니다. 무료로 제공된 서비스의 경우, 서비스 중단 공지 시 공지된 서비스의 종료일까지를 이용기간으로 봅니다.
4. 회사는 기간통신 회사가 전기통신 서비스를 중지하거나 정상적으로 운영을 하지 못해 발생하는 문제에 대하여 책임이 면제됩니다.
5. 회사는 이용자의 귀책사유로 인한 서비스 이용 장애에 대한 책임을 지지 않습니다.
6. 회사는 이용자가 회사의 서비스 제공으로부터 기대되는 이익을 얻지 못하였거나, 서비스 내용을 숙지하지 못하여 발생하는 손해 등에 대해서는 책임을 지지 않습니다.
7. 회사는 이용자가 작성한 게시물에 대해 신뢰도 및 정확도 대한 책임을 지지 않으며 이로 인해 발생한 정신적, 물질적 손해 등의 피해에 대한 책임이 면제됩니다.
8. 회사의 서비스 내 게시물의 진실성이나 명예훼손, 저작권 위반과 같은 문제가 발생하여 벌어지는 민/형사 상의 모든 책임은 이용자 본인에게 있습니다.
9. 회사는 이용자의 서비스 이용에 필요한 서버의 보수로 인한 교체, 일시 정지, 개편 작업이 발생할 경우에는 서비스 중지에 대한 책임이 면제됩니다. 이용자가 서비스 중인 웹사이트의 공지사항 등을 확인해야 하는 의무를 게을리하여 그 내용을 숙지하지 못하여 발생하는 문제의 책임은 이용자 본인에게 있습니다.
10. 이용자간 혹은 이용자와 제3자 상호간의 온라인 및 오프라인상에서 이루어진 행위에 대해서는 이용자 본인에게 책임이 있습니다. 단, 회사는 이에 대한 수사기관의 수사, 재판, 분쟁 등이 발생한 경우 이에 대한 최대한의 도움을 지원합니다.
11. 회사의 서비스에 배너광고 등으로 게재된 제3의 사이트 주소로 링크된 곳에서 발생하는 현상에 대해 회사는 어떠한 통제권도 가지지 않으며 해당 사이트의 운영방침에 따릅니다. 이로 인하여 발생하는 문제에 대한 책임은 해당 사이트와 이용자 본인에게 있습니다.
12. 회사는 이용자가 본 약관 규정을 위배하여 발생한 손실에 대해서는 책임을 지지 않습니다. 이용자가 “낭만 고양이” 서비스에 업로드한 자료에 대해 발생되는 모든 문제에 대해서는 회사의 책임이 면제 됩니다.
13. 회사의 동의 없이 제3자에게 이용자의 권한을 판매 및 양도할 경우 이용자 자격 박탈 및 민사청구 및 형사상의 고소 또는 고발이 가능합니다. 또한 이로 인한 모든 피해는 불법으로 이용자 권한을 판매/양도한 이용자에게 귀속됩니다.
14. 이용자가 작성한 정보가 본인이 확인 가능한 이메일이 아니거나 연락처 갱신을 하지 않아 회사가 전달하는 공지사항이 그 전달방법인 이메일 등을 통해 전달되지 못하여 발생하는 손해에 대한 책임은 이용자 본인에게 있습니다.

**제 15조 고지의 의무**

1. 회사가 이용자에 대하여 고지를 하는 경우 서비스 내 전달 기능 또는 웹사이트에 게시 또는 이용자가 회사에 등록한 이메일 주소로 할 수 있습니다.
2. 회사는 이용자가 이메일 또는 연락처 수신이 곤란한 경우나 불특정다수 이용자에게 통지를 해야 할 경우 서비스 내 공지사항 등에 게시함으로써 개별 통지에 갈음할 수 있습니다.
3. 현 이용약관의 내용 추가, 삭제 및 수정이 있을 시에는 개정 최소 7일 전부터 “낭만 고양이” 내 안내 페이지를 통해 고지할 것입니다.

**부칙**

본 약관은 2024년 2월 19일부터 시행합니다.
    `
const Markdown2=`

개인정보보호법에 따라 <낭만 고양이>에 회원가입 신청하시는 분께 수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적, 개인정보의 보유 및 이용기간, 동의 거부권 및 동의 거부 시 불이익에 관한 사항을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.

1. **수집하는 개인정보**
이용자는 회원가입을 하지 않아도 홈화면, 낭만우편함>낭만모음집, 낭만고양이 유저의 우편함에 방문하여 편지 작성 등 낭만 고양이 서비스를 회원과 동일하게 이용할 수 있습니다. 이용자가 내 우편함, 낭만 우편함 편지 작성 등과 같이 개인화 혹은 회원제 서비스를 이용하기 위해 회원가입을 할 경우, 낭만 고양이는 서비스 이용을 위해 필요한 최소한의 개인정보를 수집합니다.
    
    회원가입 시점에 낭만 고양이가 이용자로부터 수집하는 개인정보는 아래와 같습니다.
    
    - 회원 가입 시 필수항목으로 이용자 고유 식별자, 이메일 주소, 닉네임을, 선택항목으로 이메일주소를 수집합니다.

서비스 이용 과정에서 이용자로부터 수집하는 개인정보는 아래와 같습니다.

- 내 정보에서 프로필 정보(닉네임)를 설정할 수 있습니다. 회원정보에 별명을 입력하지 않은 경우에는 가입이 불가합니다.
- 낭만 고양이 내의 개별 서비스 이용 과정에서 해당 서비스의 이용자에 한해 추가 개인정보 수집이 발생할 수 있습니다. 추가로 개인정보를 수집할 경우에는 해당 개인정보 수집 시점에서 이용자에게 ‘수집하는 개인정보 항목, 개인정보의 수집 및 이용목적, 개인정보의 보관기간’에 대해 안내 드리고 동의를 받습니다.

서비스 이용 과정에서 IP 주소, 쿠키, 서비스 이용 기록, 기기정보, 위치정보가 생성되어 수집될 수 있습니다. 
구체적으로

 1) 서비스 이용 과정에서 이용자에 관한 정보를 자동화된 방법으로 생성하여 이를 저장(수집)하거나, 

2) 이용자 기기의 고유한 정보를 원래의 값을 확인하지 못 하도록 안전하게 변환하여 수집합니다.

이와 같이 수집된 정보는 개인정보와의 연계 여부 등에 따라 개인정보에 해당할 수 있고, 개인정보에 해당하지 않을 수도 있습니다.

생성정보 수집에 대한 추가 설명
IP(Internet Protocol) 주소란?
IP 주소는 인터넷 망 사업자가 인터넷에 접속하는 이용자의 PC 등 기기에 부여하는 온라인 주소정보 입니다. IP 주소가 개인정보에 해당하는지 여부에 대해서는 각국마다 매우 다양한 견해가 있습니다.

서비스 이용기록이란?
낭만 고양이 접속 일시, 이용한 서비스 목록 및 서비스 이용 과정에서 발생하는 정상 또는 비정상 로그 일체, 편지 수발신 과정에서 기록되는 우편번호, 이용자와 낭만고양이 간 상담내역 등을 의미합니다.

기기정보란?
본 개인정보처리방침에 기재된 기기정보는 생산 및 판매 과정에서 기기에 부여된 정보뿐 아니라, 기기의 구동을 위해 사용되는 S/W를 통해 확인 가능한 정보를 모두 일컫습니다. OS(Windows, MAC OS 등) 설치 과정에서 이용자가 PC에 부여하는 컴퓨터의 이름, PC에 장착된 주변기기의 일련번호, 스마트폰의 통신에 필요한 고유한 식별값(IMEI, IMSI), AAID 혹은 IDFA, 설정언어 및 설정 표준시, USIM의 통신사 코드 등을 의미합니다. 단, 낭만 고양이는 IMEI와 같은 기기의 고유한 식별값을 수집할 필요가 있는 경우, 이를 수집하기 전에 낭만 고양이도 원래의 값을 알아볼 수 없는 방식으로 암호화 하여 식별성(Identifiability)을 제거한 후에 수집합니다.

쿠키(cookie)란?
쿠키는 이용자가 웹사이트를 접속할 때에 해당 웹사이트에서 이용자의 웹브라우저를 통해 이용자의 PC에 저장하는 매우 작은 크기의 텍스트 파일입니다. 이후 이용자가 다시 웹사이트를 방문할 경우 웹사이트 서버는 이용자 PC에 저장된 쿠키의 내용을 읽어 이용자가 설정한 서비스 이용 환경을 유지하여 편리한 인터넷 서비스 이용을 가능케 합니다. 또한 방문한 서비스 정보, 서비스 접속 시간 및 빈도, 서비스 이용 과정에서 생성된 또는 제공(입력)한 정보 등을 분석하여 이용자의 취향과 관심에 특화된 서비스(광고 포함)를 제공할 수 있습니다. 이용자는 쿠키에 대한 선택권을 가지고 있으며, 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다. 다만, 쿠키의 저장을 거부할 경우에는 로그인이 필요한 낭만 고양이 일부 서비스의 이용에 불편이 있을 수 있습니다.

1. **수집한 개인정보의 이용**
낭만 고양이 서비스(모바일 웹/앱 포함)의 회원관리, 서비스 개발・제공 및 향상, 안전한 인터넷 이용환경 구축 등 아래의 목적으로만 개인정보를 이용합니다.
    - 회원 가입 의사의 확인, 연령 확인 및 법정대리인 동의 진행, 이용자 및 법정대리인의 본인 확인, 이용자 식별, 회원탈퇴 의사의 확인 등 회원관리를 위하여 개인정보를 이용합니다.
    - 콘텐츠 등 기존 서비스 제공(광고 포함)에 더하여,  서비스 방문 및 이용기록의 분석, 개인정보 및 관심에 기반한 이용자간 관계의 형성, 지인 및 관심사 등에 기반한 맞춤형 서비스 제공 등 신규 서비스 요소의 발굴 및 기존 서비스 개선 등을 위하여 개인정보를 이용합니다. 신규 서비스 요소의 발굴 및 기존 서비스 개선 등에는 정보 검색, 다른 이용자와의 커뮤니케이션, 콘텐츠 생성·제공·추천이 포함됩니다.
    - 법령 및 낭만 고양이 이용약관을 위반하는 회원에 대한 이용 제한 조치, 부정 이용 행위를 포함하여 서비스의 원활한 운영에 지장을 주는 행위에 대한 방지 및 제재, 계정도용 및 부정거래 방지, 약관 개정 등의 고지사항 전달, 분쟁조정을 위한 기록 보존, 민원처리 등 이용자 보호 및 서비스 운영을 위하여 개인정보를 이용합니다.
    - 서비스 이용기록과 접속 빈도 분석, 서비스 이용에 대한 통계, 서비스 분석 및 통계에 따른 맞춤 서비스 제공 및 광고 게재 등에 개인정보를 이용합니다.
    - 보안, 프라이버시, 안전 측면에서 이용자가 안심하고 이용할 수 있는 서비스 이용환경 구축을 위해 개인정보를 이용합니다.

1. **개인정보 보관기간**
    
    회사는 원칙적으로 이용자의 개인정보를 회원 탈퇴 시 지체없이 파기하고 있습니다. 단, 이용자에게 개인정보 보관기간에 대해 별도의 동의를 얻은 경우, 또는 법령에서 일정 기간 정보보관 의무를 부과하는 경우에는 해당 기간 동안 개인정보를 안전하게 보관합니다.
    
    이용자에게 개인정보 보관기간에 대해 회원가입 시 또는 서비스 가입 시 동의를 얻은 경우는 아래와 같습니다.
    
    - <낭만고양이>는 1년간 서비스를 이용하지 않은 이용자는 휴면계정으로 전환하고,
    개인정보를 별도로 분리하여 보관합니다. 분리 보관된 개인정보는 1년간 보관 후 지체없이
    파기합니다.
    - <낭만고양이>는 휴면전환 30일 전까지 휴면예정 회원에게 별도 분리 보관되는 사실 및 휴면 예정일, 별도 분리 보관하는 개인정보 항목을 이메일을 작성한 이용자에게만 통지 가능한 방법으로 알리고 있습니다.
    - 휴면계정으로 전환을 원하지 않으시는 경우, 휴면계정 전환 전 서비스 로그인을 하시면 됩니다. 또한, 휴면계정으로 전환되었더라도 로그인을 하는 경우 이용자의 동의에 따라 휴면계정을 복원하여 정상적인 서비스를 이용할 수 있습니다.
    
    전자상거래 등에서의 소비자 보호에 관한 법률, 전자문서 및 전자거래 기본법, 통신비밀보호법 등 법령에서 일정기간 정보의 보관을 규정하는 경우는 아래와 같습니다. 낭만 고양이는 이 기간 동안 법령의 규정에 따라 개인정보를 보관하며, 본 정보를 다른 목적으로는 절대 이용하지 않습니다.
    
    - 전자상거래 등에서 소비자 보호에 관한 법률
    계약 또는 청약철회 등에 관한 기록: 5년 보관
    소비자의 불만 또는 분쟁처리에 관한 기록: 3년 보관
    - 통신비밀보호법
    로그인 기록: 3개월

1. **개인정보 수집 및 이용 동의를 거부할 권리**
이용자는 개인정보의 수집 및 이용 동의를 거부할 권리가 있습니다. 회원가입 시 수집하는 최소한의 개인정보, 즉, 필수 항목에 대한 수집 및 이용 동의를 거부하실 경우, 회원가입이 어려울 수 있습니다.
`
    return(
        <div>
            <Backlogo><img src={Cancel} alt='back' onClick={navigateBack}/></Backlogo>
            <Container>
                <Title>이용약관</Title>
                <Contents>
                    <ReactMarkdown children={Markdown1} />
                </Contents>
                <Title>개인정보수집이용 동의</Title>
                <Contents>
                    <ReactMarkdown children={Markdown2} />
                </Contents>
            </Container>
        </div>
    )
}