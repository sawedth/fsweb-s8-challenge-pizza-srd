import logo from '../assets/logo.svg'
import './Order.css';
import { Form, FormGroup, Input, Label, Col, Button, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from './Footer.jsx'
import formBanner from '../assets/pictures/form-banner.png'

const mockData = {
    name: "",
    size: "",
    selectedDough: "",
    pizzaCounter: "",
    toppings: [],
    note: ""
}

const tick = {}

export default function Order(prop) {
    const { handleSubmit } = prop;
    const [size, setSize] = useState("");
    const [pizzaCounter, setPizzaCounter] = useState(1)
    const [toppings, setToppings] = useState([]);
    const [selectedDough, setSelectedDough] = useState("İnce");
    const [name, setName] = useState("");
    const [orderNote, setOrderNote] = useState("");
    const [user, setUser] = useState(mockData);
    const [pizzaValue, setPizzaValue] = useState(85.50);
    const [isDisabled, setIsDisabled] = useState(true);
    let history = useHistory();

    function handleCheckbox(event) {
        if (event.target.checked) {
            setToppings([...toppings, event.target.name]);
        } else {
            const newArr = toppings.filter((topping) => topping !== event.target.name);
            setToppings(newArr);
        }

    }

    function handleSizeClick(event) {
        event.preventDefault();
        setSize(event.target.innerText);
    }

    useEffect(() => {
        setPizzaValue(pizzaCounter * (toppings.length * 5 + 85.50));
        setUser({
            name: name,
            size: size,
            selectedDough: selectedDough,
            pizzaCounter: pizzaCounter,
            toppings: toppings,
            note: orderNote
        })

        if (size !== "" && toppings.length < 11 && toppings.length > 3 && name.length > 3) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [size, pizzaCounter, toppings, selectedDough, name, orderNote])

    return (
        <div className='order-main'>
            <div className="order-header">
                <img src={logo} alt="Teknolojik Yemekler" id='header-logo' />
                <img src={formBanner} alt="Position Absolute Acı Pizza" id='header-banner' />
                <nav className='header-nav'>
                    <a href="/">Anasayfa</a>
                    <a href="/">Seçenekler</a>
                    <a href="/order" id="choosen-nav">Sipariş Oluştur</a>
                </nav>
            </div>
            <div className='pizza-attiributes'>
                <h4>Position Absolute Acı Pizza</h4>
                <div className='pizza-ratings'>
                    <h2>85.50₺</h2>
                    <p id="first-child">4.9</p>
                    <p>(200)</p>
                </div>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque officia laborum accusamus, obcaecati sunt provident
                    dolorem voluptas minima ducimus numquam architecto maxime
                    placeat unde quaerat perspiciatis porro eligendi expedita et.</p>
            </div>
            <Form onSubmit={(e) => handleSubmit(e, user, pizzaValue)}>
                <FormGroup className='form' check>

                    <Col className='col-1'>
                        <div className='size-radio'>
                            {<Label for="button" id='me-2-form'><b>Boyut Seç</b></Label>}
                            <div className='size-buttons'>
                                <button
                                    className={"size-button " + (size === "S" ? "active-button" : "passive")}
                                    name='s'
                                    onClick={handleSizeClick}
                                >
                                    S
                                </button>
                                <button
                                    className={"size-button " + (size === "M" ? "active-button" : "passive")}
                                    name='m'
                                    type="checkbox"
                                    onClick={handleSizeClick}
                                >
                                    M
                                </button>
                                <button
                                    className={"size-button " + (size === "L" ? "active-button" : "passive")}
                                    name='m'
                                    onClick={handleSizeClick}
                                >
                                    L
                                </button>
                            </div>

                        </div>
                        <div className='dough-select'>
                            <Label
                                for="dough"
                                sm={0}
                            >
                                <b>Hamur Seç</b>
                            </Label>
                            <Col sm={0}>
                                <Input
                                    id="dough"
                                    name="doughSelect"
                                    type="select"
                                    onChange={(event) => setSelectedDough(event.target.value)}
                                    value={selectedDough}
                                >
                                    <option>
                                        Süpper İnce
                                    </option>
                                    <option>
                                        İnce
                                    </option>
                                    <option>
                                        Normal
                                    </option>
                                    <option>
                                        Kalın
                                    </option>
                                    <option>
                                        Kappkalın
                                    </option>
                                </Input>
                            </Col>
                        </div>
                    </Col>
                </FormGroup>
                <div className='checkbox-header'>
                    <Label for="checkbox" id='me-2-checkboxes'><b>Ek Malzemeler</b></Label>
                    <p>Lütfen en az 4, en fazla 10 malzeme seçiniz.</p>
                </div>
                <div className='checkboxes'>
                    <label className="checkbox-container">Peperoni
                        <input type="checkbox" name="Peperoni" onClick={handleCheckbox}/>
                            <span class="checkmark" name="peperoni"></span>
                    </label>
                    <label className="checkbox-container">Sosis
                        <input type="checkbox" name="Sosis" onClick={handleCheckbox}/>
                            <span class="checkmark" name="sosis"></span>
                    </label>
                    <label className="checkbox-container">Kanada Jambonu
                        <input type="checkbox" name="Kanada Jambonu" onClick={handleCheckbox}/>
                            <span class="checkmark" name="kanada jambonu"></span>
                    </label>
                    <label className="checkbox-container">Tavuk Izgara
                        <input type="checkbox" name="Tavuk Izgara" onClick={handleCheckbox}/>
                            <span class="checkmark" name="tavuk ızgara"></span>
                    </label>
                    <label className="checkbox-container">Soğan
                        <input type="checkbox" name="Soğan" onClick={handleCheckbox}/>
                            <span class="checkmark" name="soğan"></span>
                    </label>
                    <label className="checkbox-container">Domates
                        <input type="checkbox" name="Domates" onClick={handleCheckbox}/>
                            <span class="checkmark" name="domates"></span>
                    </label>
                    <label className="checkbox-container">Mısır
                        <input type="checkbox" name="Mısır" onClick={handleCheckbox}/>
                            <span class="checkmark" name="mısır"></span>
                    </label>
                    <label className="checkbox-container">Sucuk
                        <input type="checkbox" name="Sucuk" onClick={handleCheckbox}/>
                            <span class="checkmark" name="sucuk"></span>
                    </label>
                    <label className="checkbox-container">Jalepeno
                        <input type="checkbox" name="Jalepeno" onClick={handleCheckbox}/>
                            <span class="checkmark" name="jalepeno"></span>
                    </label>
                    <label className="checkbox-container">Sarımsak
                        <input type="checkbox" name="Sarımsak" onClick={handleCheckbox}/>
                            <span class="checkmark" name="sarımsak"></span>
                    </label>
                    <label className="checkbox-container">Biber
                        <input type="checkbox" name="Biber" onClick={handleCheckbox}/>
                            <span class="checkmark" name="biber"></span>
                    </label>
                    <label className="checkbox-container">Salam
                        <input type="checkbox" name="Salam" onClick={handleCheckbox}/>
                            <span class="checkmark" name="salam"></span>
                    </label>
                    <label className="checkbox-container">Ananas
                        <input type="checkbox" name="Ananas" onClick={handleCheckbox}/>
                            <span class="checkmark" name="ananas"></span>
                    </label>
                    <label className="checkbox-container">Kabak
                        <input type="checkbox" name="Kabak" onClick={handleCheckbox}/>
                            <span class="checkmark" name="kabak"></span>
                    </label>
                </div>
                <div className='notes'>
                    <Label
                        for="name"
                    >
                        <b>Ad ve Soyad</b>
                    </Label>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Adınız Soyadınız"
                        type="text"
                        onChange={(event) => setName(event.target.value)}
                        value={name}
                    />
                    <Label
                        for="orderText"
                        style={{ marginTop: "1rem" }}

                    >
                        <b>Sipariş Notu</b>
                    </Label>

                    <Input
                        id="orderText"
                        name="orderText"
                        type="textarea"
                        placeholder="Siparişinize eklemek istediğiniz bir şey var mı?"
                        onChange={(event) => setOrderNote(event.target.value)}
                        value={orderNote}
                    />
                </div>
                <div className='submitter'>
                    <div className='counter'>
                        <button className="pizza-button"
                            onClick={(event) => {
                                event.preventDefault();
                                pizzaCounter === 1 ? setPizzaCounter(1) : setPizzaCounter(pizzaCounter - 1);

                            }}>-</button>
                        <p className="pizza-count">{pizzaCounter}</p>
                        <button className="pizza-button"
                            onClick={(event) => {
                                event.preventDefault();
                                setPizzaCounter(pizzaCounter + 1);
                            }}>+</button>
                    </div>
                    <Card
                        className="pizza-card"
                        style={{
                            width: '18rem'
                        }}
                    >
                        <CardBody className='pizza-card-body'>
                            <div className="pizza-card-text" >
                                <CardTitle tag="h5" style={{ color: "black" }}>
                                    Sipariş Toplamı
                                </CardTitle>

                                <div className='order-lines' style={{ color: "black" }}>
                                    <CardText>
                                        Seçimler:
                                    </CardText>
                                    <CardText>
                                        {`${pizzaCounter * toppings.length * 5}.00₺`}
                                    </CardText>
                                </div>
                                <div className='order-lines'>
                                    <CardText style={{ color: "red" }}>
                                        Toplam:
                                    </CardText>
                                    <CardText style={{ color: "red" }}>
                                        {

                                            `${pizzaValue.toFixed(2)}₺`
                                        }
                                    </CardText>
                                </div>


                            </div>

                            <Button id="siparis-ver" disabled={isDisabled}>
                                Sipariş Ver
                            </Button>
                        </CardBody>
                    </Card>
                </div>

            </Form>
            <Footer />
        </div>
    );
};