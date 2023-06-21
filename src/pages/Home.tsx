import { TbBus, TbCoffee, TbBuildingCommunity } from 'react-icons/tb';
import Button from '../components/Button';
import Form from '../components/Form';

export default function Home() {
  return (
    <>
      <div className="home-top">
        <div className="home-top-content">
          <div className="home-top-window">
            <h2>Сотрудничество с компанией VAHTA в Московской области</h2>
            <p>Вознаграждение от 170000 ₽ до вычета налогов</p>
            <Button />
          </div>
        </div>
      </div>
      <div className="advantages-section">
        <div className="advantages-section-content">
          <div className="advantages-item">
            <TbBus />
            <div className="advantages-item-content">
              <h3>Компенсация проезда</h3>
              <p>Компенсация при оказании услуг не менее 26 дней</p>
            </div>
          </div>
          <div className="advantages-item">
            <TbCoffee />
            <div className="advantages-item-content">
              <h3>Бесплатное питание</h3>
              <p>Вкусные комплексные обеды</p>
            </div>
          </div>
          <div className="advantages-item">
            <TbBuildingCommunity />
            <div className="advantages-item-content">
              <h3>Общежитие</h3>
              <p>Бесплатное проживание в общежитии</p>
            </div>
          </div>
        </div>
      </div>
      <div id="form" className="form-section">
        <div className="form-section-wrapper">
          <h2 className="form-section-header">Отправьте анкету и мы обязательно перезвоним</h2>
          <div className="form-section-content">
            <div className="form-section-content-left">
              <Form />
            </div>
            <div className="form-section-content-right" />
          </div>
        </div>
      </div>
      <div className="how-it-work">
        <div className="how-it-work-header">
          <h2>Как начать сотрудничество с VAHTA?</h2>
        </div>
        <div className="how-it-work-steps">
          <div className="how-it-work-step">
            <img src="../../public/image/shutterstock_141763513.jpg" alt="alt" />
            <div className="how-it-work-step-circle">
              <div className="how-it-work-step-circle-2">1.</div>
            </div>
            <div className="how-it-work-step-content">
              <h3>
                Позвонить нам по контактному телефону или оставить заявку на сотрудничество через
                сайт
              </h3>
            </div>
          </div>
          <div className="how-it-work-step">
            <img src="../../public/image/Mortgage-Consultant-jobs.jpg" alt="alt" />
            <div className="how-it-work-step-circle">
              <div className="how-it-work-step-circle-2">2.</div>
            </div>
            <div className="how-it-work-step-content">
              <h3>
                Обсудить условия сотрудничества и ознакомиться с перечнем востребованных услуг
              </h3>
            </div>
          </div>
          <div className="how-it-work-step">
            <img src="../../public/image/umetdogovarivatsya1.jpg" alt="alt" />
            <div className="how-it-work-step-circle">
              <div className="how-it-work-step-circle-2">3.</div>
            </div>
            <div className="how-it-work-step-content">
              <h3>Договориться о дате начала сотрудничества с VAHTA</h3>
            </div>
          </div>
          <div className="how-it-work-step">
            <img src="../../public/image/signature-1024x684.jpg" alt="alt" />
            <div className="how-it-work-step-circle">
              <div className="how-it-work-step-circle-2">4.</div>
            </div>
            <div className="how-it-work-step-content">
              <h3>Подписать договор о сотрудничестве с VAHTA</h3>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="wrapper-content">
        <h2>Hello world!!!</h2>
      </div> */}
    </>
  );
}
