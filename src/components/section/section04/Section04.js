import styled from './section.module.css';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import Checkbox from '../../common/Checkbox/Checkbox';

export default function Section04() {
  return (
    <section className={styled.section}>
      <div>
        <div className={styled.input}>
          <Input placeholder="숫자만 입력해주세요" label='010-' button={<Button width={250}>인증번호 받기</Button>} />
          <Input placeholder="인증번호를 입력해주세요" />
        </div>
        <div className={styled.check}>
          <div className={styled.all}>
            <Checkbox><span className={styled.check_span}>아래 내용을 모두 확인했으며, 모두 동의합니다</span></Checkbox>
          </div>
          <div className={styled.subcheck}>
            <div><Checkbox><span className={styled.check_span}>(필수) 개인정보 수집 및 이용 동의<a href='/'>자세히보기</a></span></Checkbox></div>
            <div><Checkbox><span className={styled.check_span}>(필수) 9UP 프로야구 정보 수신 동의</span></Checkbox></div>
            <div><Checkbox><span className={styled.check_span}>(선택) 에이스프로젝트 게임 관련 정보 수신 동의</span></Checkbox></div>
          </div>
        </div>
        <div className={styled.button}>
          <Button border>사전 등록</Button>
        </div>
      </div>
    </section>
  )
}