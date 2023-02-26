import useBackgrund from '../../../hooks/useBackground';
import Button from '../../common/Button/Button';
import styled from './section.module.css';

export default function Section05() {
  const [height, backgroundImage] = useBackgrund('1315px', {
    pc: 'url(/images/bg03.jpg)',
    mobile: 'url(/images/mobile/bg03_m.jpg)',
    mobileHeight: 1706
  });

  return (
    <section className={styled.section}>
      <div className={styled.background} style={{ backgroundImage, height }}></div>
      <div className={styled.text}>
        <div className={styled.title}>
          <img className="title_img" src="/images/title05.png" alt='EVENT2' />
        </div>
        <div className={styled.subtext}>
          <img className={styled.pc} src="/images/event02_txt01.png" alt='지금 아니면 받을 수 없는 혜택!' />
          <img className={styled.mobile} src="/images/mobile/event02_txt01_m.png" alt='지금 아니면 받을 수 없는 혜택!' />
          <h2>9UP 접속 보상<span>NOW!</span></h2>
          <p>사전예약 신청 기간 중 9UP에<br className={styled.mobile} /> 접속한 유저분들에게 드립니다.</p>
          <p>(보상 꾸러미를 클릭하면<br className={styled.mobile} /> 꾸러미 내용이 나옵니다.)</p>
        </div>
        <img className={styled.pc}  src='/images/present03.png' alt='보상' />
        <img className={styled.mobile}  src='/images/mobile/present03_m.png' alt='보상' />
        <div className={styled.download}>
          <h3>{'<9UP 프로야구>'}</h3>
          <Button background='#1fb0c5' border><span className={styled.download_text}>다운로드하러 가기</span></Button>
        </div>
        <div className={styled.link}>
          <div><img src="/images/googleplay.png" alt="구글"/></div>
          <div><img src="/images/appstore.png" alt="애플"/></div>
        </div>
      </div>
    </section>
  )
}