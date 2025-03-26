import logo from '../assets/logo.svg'
import './Order.css';
import { Form, FormGroup, Input, Label, Col, Button, ButtonGroup, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const mockData = {
    name: "",
    size: "",
    selectedDough: "",
    pizzaCounter: "",
    toppings: [],
    note: ""
}

export default function Order(prop) {
    const {handleSubmit} = prop;
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

    useEffect(() => {
        setPizzaValue(pizzaCounter*(toppings.length * 5 + 85.50));
        setUser({
            name: name,
            size: size,
            selectedDough: selectedDough,
            pizzaCounter: pizzaCounter,
            toppings: toppings,
            note: orderNote
        })
        
        if(size !== "" && toppings.length < 11 && toppings.length > 3 && name.length > 3){
            setIsDisabled(false);
        }else{
            setIsDisabled(true);
        }
    }, [size, pizzaCounter, toppings, selectedDough, name, orderNote])

    return (
        <>
            <div className="header">
                <img src={logo} alt="Teknolojik Yemekler" id='header-logo' />
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
                            <Label for="button" id='me-2-form'><b>Boyut Seç</b></Label>
                            <ButtonGroup onClick={(event) => event.preventDefault()}>
                                <Button
                                    name='s'
                                    color="primary"
                                    outline
                                    onClick={() => setSize("S")}
                                    active={size === "S"}
                                >
                                    S
                                </Button>
                                <Button
                                    name='m'
                                    color="primary"
                                    outline
                                    onClick={() => setSize("M")}
                                    active={size === "M"}
                                >
                                    M
                                </Button>
                                <Button
                                    name='l'
                                    color="primary"
                                    outline
                                    onClick={() => setSize("L")}
                                    active={size === "L"}
                                >
                                    L
                                </Button>
                            </ButtonGroup>
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


                    <div className='checkbox-column' >
                        <FormGroup
                            check
                            inline

                            onClick={handleCheckbox}
                        >
                            <Input type="checkbox" name="Peperoni" />
                            <Label check>
                                Peperoni
                            </Label>
                        </FormGroup>
                        <FormGroup
                            check
                            inline
                            onClick={handleCheckbox}
                        >
                            <Input type="checkbox" name="Sosis" />
                            <Label check>
                                Sosis
                            </Label>
                        </FormGroup>
                        <FormGroup
                            check
                            inline

                            onClick={handleCheckbox}
                        >
                            <Input type="checkbox" name="Kanada Jambonu" />
                            <Label check>
                                Kanada Jambonu
                            </Label>
                        </FormGroup>
                        <FormGroup
                            check
                            inline

                            onClick={handleCheckbox}
                        >
                            <Input type="checkbox" name="Tavuk Izgara" />
                            <Label check>
                                Tavuk Izgara
                            </Label>
                        </FormGroup>
                        <FormGroup
                            check
                            inline

                            onClick={handleCheckbox}
                        >
                            <Input type="checkbox" name="Soğan" />
                            <Label check>
                                Soğan
                            </Label>
                        </FormGroup>
                    </div>
                    <div className='checkbox-column'><FormGroup
                        check
                        inline

                        onClick={handleCheckbox}
                    >
                        <Input type="checkbox" name="Domates" />
                        <Label check>
                            Domates
                        </Label>
                    </FormGroup>
                        <FormGroup
                            check
                            inline

                            onClick={handleCheckbox}
                        >
                            <Input type="checkbox" name="Mısır" />
                            <Label check>
                                Mısır
                            </Label>
                        </FormGroup>
                        <FormGroup
                            check
                            inline

                            onClick={handleCheckbox}
                        >
                            <Input type="checkbox" name="Sucuk" />
                            <Label check>
                                Sucuk
                            </Label>
                        </FormGroup>
                        <FormGroup
                            check
                            inline

                            onClick={handleCheckbox}
                        >
                            <Input type="checkbox" name="Jalepano" />
                            <Label check>
                                Jalepano
                            </Label>
                        </FormGroup>
                        <FormGroup
                            check
                            inline

                            onClick={handleCheckbox}
                        >
                            <Input type="checkbox" name="Sarımsak" />
                            <Label check>
                                Sarımsak
                            </Label>
                        </FormGroup>
                    </div>
                    <div className='checkbox-column last-checkbox'>
                        <FormGroup
                            check
                            inline
                            className='last-checkbox'

                            onClick={handleCheckbox}
                        >
                            <Input type="checkbox" name="Biber" />
                            <Label check>
                                Biber
                            </Label>
                        </FormGroup>
                        <FormGroup
                            check
                            inline
                            className='last-checkbox'

                            onClick={handleCheckbox}
                        >
                            <Input type="checkbox" name="Sucuk" />
                            <Label check>
                                Sucuk
                            </Label>
                        </FormGroup>
                        <FormGroup
                            check
                            inline
                            className='last-checkbox'

                            onClick={handleCheckbox}
                        >
                            <Input type="checkbox" name="Ananas" />
                            <Label check>
                                Ananas
                            </Label>
                        </FormGroup>
                        <FormGroup
                            check
                            inline
                            className='last-checkbox'

                            onClick={handleCheckbox}
                        >
                            <Input type="checkbox" name="Kabak" />
                            <Label check>
                                Kabak
                            </Label>
                        </FormGroup>
                    </div>
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
                                <CardTitle tag="h5" style={{color:"black"}}>
                                    Sipariş Toplamı
                                </CardTitle>

                                <div className='order-lines' style={{color:"black"}}>
                                    <CardText>
                                        Seçimler:
                                    </CardText>
                                    <CardText>
                                        {`${pizzaCounter * toppings.length * 5}.00₺`}
                                    </CardText>
                                </div>
                                <div className='order-lines'>
                                    <CardText style={{color:"red"}}>
                                        Toplam:
                                    </CardText>
                                    <CardText style={{color:"red"}}>
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
        </>
    );
};