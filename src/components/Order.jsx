import logo from '../assets/logo.svg'
import './Order.css';
import { Form, FormGroup, Input, Label, Col, Row, Button, ButtonGroup } from 'reactstrap';
import { useState } from 'react';

export default function Order() {
    const [rSelected, setRSelected] = useState(null);
    const [pizzaCounter, setPizzaCounter] = useState(1)

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
            <Form >
                <FormGroup className='form' check>

                    <Col className='col-1'>
                        <div className='size-radio'>
                            <Label for="button" id='me-2-form'><b>Boyut Seç</b></Label>
                            <ButtonGroup onClick={(event) => event.preventDefault()}>
                                <Button
                                    color="primary"
                                    outline
                                    onClick={() => setRSelected(1)}
                                    active={rSelected === 1}
                                >
                                    S
                                </Button>
                                <Button
                                    color="primary"
                                    outline
                                    onClick={() => setRSelected(2)}
                                    active={rSelected === 2}
                                >
                                    M
                                </Button>
                                <Button
                                    color="primary"
                                    outline
                                    onClick={() => setRSelected(3)}
                                    active={rSelected === 3}
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
                                    name="select"
                                    type="select"
                                >
                                    <option>
                                        İnce
                                    </option>
                                    <option>
                                        Normal
                                    </option>
                                    <option>
                                        Kalın
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
                    
                    
                    <div className='checkbox-column'>
                        <FormGroup
                            check
                            inline
                        >
                            <Input type="checkbox" />
                            <Label check>
                                Peperoni
                            </Label>
                        </FormGroup>
                        <FormGroup
                            check
                            inline
                        >
                            <Input type="checkbox" />
                            <Label check>
                                Sosis
                            </Label>
                        </FormGroup>
                        <FormGroup
                            check
                            inline
                        >
                            <Input type="checkbox" />
                            <Label check>
                                Kanada Jambonu
                            </Label>
                        </FormGroup>
                        <FormGroup
                            check
                            inline
                        >
                            <Input type="checkbox" />
                            <Label check>
                                Tavuk Izgara
                            </Label>
                        </FormGroup>
                        <FormGroup
                            check
                            inline
                        >
                            <Input type="checkbox" />
                            <Label check>
                                Soğan
                            </Label>
                        </FormGroup>
                    </div>
                    <div className='checkbox-column'><FormGroup
                        check
                        inline
                    >
                        <Input type="checkbox" />
                        <Label check>
                            Domates
                        </Label>
                    </FormGroup>
                        <FormGroup
                            check
                            inline
                        >
                            <Input type="checkbox" />
                            <Label check>
                                Mısır
                            </Label>
                        </FormGroup>
                        <FormGroup
                            check
                            inline
                        >
                            <Input type="checkbox" />
                            <Label check>
                                Sucuk
                            </Label>
                        </FormGroup>
                        <FormGroup
                            check
                            inline
                        >
                            <Input type="checkbox" />
                            <Label check>
                                Jalepano
                            </Label>
                        </FormGroup>
                        <FormGroup
                            check
                            inline
                        >
                            <Input type="checkbox" />
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
                        >
                            <Input type="checkbox" />
                            <Label check>
                                Biber
                            </Label>
                        </FormGroup>
                        <FormGroup
                            check
                            inline
                            className='last-checkbox'
                        >
                            <Input type="checkbox" />
                            <Label check>
                                Sucuk
                            </Label>
                        </FormGroup>
                        <FormGroup
                            check
                            inline
                            className='last-checkbox'
                        >
                            <Input type="checkbox" />
                            <Label check>
                                Ananas
                            </Label>
                        </FormGroup>
                        <FormGroup
                            check
                            inline
                            className='last-checkbox'
                        >
                            <Input type="checkbox" />
                            <Label check>
                                Kabak
                            </Label>
                        </FormGroup>
                    </div>
                </div>


            </Form>
        </>
    );
};