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
      {/* <div className="wrapper-content">
        <h2>Hello world!!!</h2>
      </div> */}
    </>
  );
}
