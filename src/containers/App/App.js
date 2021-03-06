import React, {Component} from 'react';
import './App.scss';
import Header from "../../components/Header/Header";
import MainScreen from "../../components/MainScreen/MainScreen";
import FormScreen from "../../components/FormScreen/FormScreen";
import ProductScreen from "../../components/ProductScreen/ProductScreen";
import AboutScreen from "../../components/AboutScreen/AboutScreen";
import ContactsScreen from "../../components/ContactsScreen/ContactsScreen";
import MapScreen from "../../components/MapScreen/MapScreen";
import Footer from "../../components/Footer/Footer";
import OrderForm from "../../components/Forms/OrderForm";
import PopUp from "../../components/PopUp/PopUp";
import QuestionForm from "../../components/Forms/QuestionForm";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentProduct: 0,
      questionOpened: false,
      orderOpened: false,
    };

    this.aboutRef = React.createRef();
    this.contactsRef = React.createRef();
    this.productsRef = React.createRef();
  }

  setProduct = (index) => {
    this.setState({
      ...this.state,
      currentProduct: index,
    });
  };

  handleClose = (type) => {
    this.setState({
      ...this.state,
      [type]: false,
    })
  };

  openPopUp = (type) => {
    this.setState({
      ...this.state,
      [type]: true,
    })
  };

  scrollToRef = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };


  render() {
    const products = [
      {
        name: 'Добавка для ЖБИ',
        shortName: 'Для ЖБИ',
        model: 'PC-1023',
        contentNode: <>
          <p>Высокоэффективный гиперпластификатор на основе поликарбоксилатов:</p>
          <ul>
            <li>снижает расход цемента и уменьшает себестоимость изделия;</li>
            <li>повышает марочность бетона и прочность изделия;</li>
            <li>улучшает показатели водонепроницаемости и морозостойкости;</li>
            <li>придаёт бетонам повышенную начальную прочность трое суток и конечную прочность 28 суток.</li>
          </ul>
          <p>Совместим с разными видами цемента, может применяться в рядовых бетонах и в сверхжестких смесях.
            Сертифицирован НИИЖБ в соответствии с ГОСТ 30459-2008 и ГОСТ 24211-2008.</p>
        </>,
        blueNode: <>
          <h6>Дозировка</h6>
          <p>0,10% - 0,14% сухого вещества к массе цемента.</p>
          <h6>Экономия цемента</h6>
          <p>25%-30% по сравнению с бездобавочным составом.</p>
        </>,
      },
      {
        name: 'Добавка для товарного бетона',
        shortName: 'Для товарного бетона',
        model: 'Рупласт-Т14',
        contentNode: <>
          <p>Высокоэффективный гиперпластификатор на основе поликарбоксилатов:</p>
          <ul>
            <li>повышает пластичность бетонной смеси;</li>
            <li>обеспечивает длительное сохранение подвижности бетонной смеси;</li>
            <li>повышает прочность бетона;</li>
            <li>снижает себестоимость бетона за счет уменьшения до 30% количества цемента.</li>
          </ul>
          <p>Подходит для производства рядового и высокомарочного бетона для высотного монолитного строительства. Может
            применяться на крупных РБУ и при производстве бетона на месте в малых объемах. Это возможно благодаря
            минимальной партии поставки 25 кг, легкому дозированию и вводу добавки.</p>
        </>,
        blueNode: <>
          <h6>Дозировка</h6>
          <p>0,12% - 0,18% сухого вещества к массе цемента.</p>
          <h6>Сохраняемость смеси</h6>
          <p>60-120 минут.</p>
          <h6>Экономия цемента</h6>
          <p>25%-30% по сравнению с бездобавочным составом.</p>
        </>,
      },
      {
        name: 'Добавка для вибролитых изделий',
        shortName: 'Для вибролитья',
        model: 'Рупласт-Л',
        contentNode: <>
          <p>Высокоэффективный гиперпластификатор на основе поликарбоксилатов:</p>
          <ul>
            <li>Увеличивает подвижность бетонной смеси, улучшает заполняемость форм, уменьшает время на вибростоле и
              повышает качество поверхности.
            </li>
            <li>Ускоряет первичный набор прочности бетона и сокращает время нахождения изделия в форме.</li>
            <li>Повышает прочность и морозостойкость изделия.</li>
            <li>Снижает себестоимость изделий благодаря сокращению вводимых воды и цемента.</li>
          </ul>
          <p>Применяется при изготовлении фигурной тротуарной плитки, бордюров и малых архитектурных форм из бетона
            методом вибролитья.</p>
        </>,
        blueNode: <>
          <h6>Дозировка</h6>
          <p>0,12% - 0,18% сухого вещества к массе цемента.</p>
          <h6>Экономия цемента</h6>
          <p>25%-30% по сравнению с бездобавочным составом.</p>
        </>,
      },
      {
        name: 'Добавка для вибропрессованных изделий',
        shortName: 'Для вибропресса',
        model: 'Рупласт-ВП',
        contentNode: <>
          <p>Высокоэффективный гиперпластификатор на основе поликарбоксилатов:</p>
          <ul>
            <li>Уменьшает брак, предотвращает налипание и оплыв кромки изделий при извлечении из пресса.</li>
            <li>Сокращает налипание смеси на пуансон пресса и увеличивает производительность оборудования. Позволяет
              ввести в полусухую смесь дополнительное количество воды без оплывания отформованных изделий.
            </li>
            <li>Увеличивает прочность и износостойкость изделий при снижении себестоимости.</li>
          </ul>
          <p>Применяется при изготовлении тротуарной плитки и бордюров методом полусухого прессования.</p>
        </>,
        blueNode: <>
          <h6>Дозировка</h6>
          <p>0,03% - 0,06% сухого вещества к массе цемента.</p>
          <h6>Увеличение прочности изделия</h6>
          <p>15%-25% по сравнению с бездобавочным составом.</p>
        </>,
      },
      {
        name: 'Пигменты для бетона',
        shortName: 'Пигменты для бетона',
        model: 'Красители железооксидные TODA',
        contentNode: <>
          <div className='colors-wrapper'>
            <span style={{backgroundColor: '#FF0C0C'}}>UR-130R</span>
            <span style={{backgroundColor: '#FFA800'}}>UC-960-2</span>
            <span style={{backgroundColor: '#FFE70C', color: '#1F2326'}}>UY-313</span>
            <span style={{backgroundColor: '#683200'}}>UZ-686</span>
            <span style={{backgroundColor: '#058703'}}>UG-835</span>
            <span style={{backgroundColor: '#414141'}}>UB-330B</span>
          </div>
          <p>Применяются при окрашивании тротуарной плитки, фасадных элементов и других экстерьерных изделий из бетона,
            для которых поверхностное окрашивание неэффективно.</p>
          <p>Завод-изготовитель United TODA industrial co. – ведущий производитель железооксидных пигментов в Китае. Он
            выпускает продукцию аналогичную немецким пигментам Bayferrox.</p>
          <br/>
          <ul>
            <li>Яркие цвета, высокая укрывистость, стойкость от выцветания.</li>
            <li>Основные цвета всегда в наличии на складе.</li>
          </ul>
        </>,
        blueNode: <>
          <h6>Дозировка</h6>
          <p>2%-5% пигмента к массе цемента.</p>
          <h6>Гарантия от выцветания</h6>
          <p>10 лет.</p>
        </>,
      },
      {
        name: 'Добавка для наливных полов',
        shortName: 'Для наливных полов',
        model: 'РС - 1021',
        contentNode: <>
          <p>Высокоэффективный гиперпластификатор на основе поликарбоксилатов:</p>
          <ul>
            <li>существенно повышает растекаемость готовой смеси;</li>
            <li>сокращает время схватывания раствора;</li>
            <li>позволяет снизить количество воды затворения до 30%;</li>
            <li>придает смеси открытое время не менее 30 минут;</li>
            <li>увеличивает итоговую прочность пола на сжатие.</li>
          </ul>
          <p>Для производства наливных самонивелирующихся полов используют сухую смесь, в которую добавляют воду на
            месте. Пластифицирующие добавки делают смесь удобнее в использовании, уменьшают риск трещин при высыхании и
            ускоряют стяжку пола за счёт быстрого первичного набора прочности.</p>
        </>,
        blueNode: <>
          <h6>Дозировка</h6>
          <p>0,10% - 0,12% сухого вещества к массе цемента.</p>
          <h6>Снижение вводимой воды</h6>
          <p>20% - 25% по сравнению с бездобавочным составом.</p>
        </>,
      },
      {
        name: 'Добавка для пенобетона',
        shortName: 'Для пенобетона',
        model: 'Пенообразующая добавка Рупласт-ПО',
        contentNode: <>
          <p>Высокоэффективное поверхностно-активное вещество:</p>
          <ul>
            <li>существенно повышает степень воздухововлечения в бетон;</li>
            <li>позволяет производить легкие бетоны и сверхлегкие пенобетоны;</li>
            <li>можно добавлять в бетонную смесь или готовить устойчивую пену из водного раствора с помощью
              пеногенератора и вводить в бетонную смесь для получения пенобетона высокой пористости.
            </li>
          </ul>
          <p>Добавление в бетон мелких воздушных пузырьков делает его легче и объемнее, повышает теплоизоляционные
            свойства. Такой бетон подходит для производства стенных пеноблоков.</p>
        </>,
        blueNode: <>
          <h6>Дозировка</h6>
          <p>0,03% - 0,5% сухого вещества к массе цемента.</p>
          <h6>Степень воздухововлечения</h6>
          <p>30%-60% от объема смеси.</p>
        </>,
      },
    ];

    return (
      <div className="App">
        <PopUp
          active={this.state.orderOpened}
          cross={true}
          onClose={() => this.handleClose('orderOpened')}
        >
          <OrderForm name={'order-form'}/>
        </PopUp>
        <PopUp
          active={this.state.questionOpened}
          cross={true}
          onClose={() => this.handleClose('questionOpened')}
        >
          <QuestionForm name={'question-form'}/>
        </PopUp>
        <Header
          openOrder={() => this.openPopUp('orderOpened')}
          openQuestion={() => this.openPopUp('questionOpened')}
          scrollToAbout={() => this.scrollToRef(this.aboutRef)}
          scrollToContacts={() => this.scrollToRef(this.contactsRef)}
          scrollToProducts={() => this.scrollToRef(this.productsRef)}
          setProduct={this.setProduct}
        />
        <MainScreen openOrder={() => this.openPopUp('orderOpened')}/>
        <FormScreen/>
        <div ref={this.productsRef}>
          <ProductScreen
            products={products}
            current={this.state.currentProduct}
            setProduct={this.setProduct}
            openOrder={() => this.openPopUp('orderOpened')}
          />
        </div>
        <div ref={this.aboutRef}>
          <AboutScreen
            openOrder={() => this.openPopUp('orderOpened')}
          />
        </div>
        <div ref={this.contactsRef}>
          <ContactsScreen/>
        </div>
        <MapScreen/>
        <Footer/>
      </div>
    );
  }
}

export default App;
