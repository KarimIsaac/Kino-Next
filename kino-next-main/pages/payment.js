import { useState } from 'react';
import SalonDetails from './salonDetails';
import styles from "../styles/Payment.module.css";
import { useRouter } from 'next/router';

export default function payment() {


  const router = useRouter();
  const { totalPrice } = router.query;
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvc, setCvc] = useState('');


  
  const handleCardNameChange = (event) => {
    setCardName(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpirationDateChange = (event) => {
    setExpirationDate(event.target.value);
  };

  const handleCvcChange = (event) => {
    setCvc(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('cardName', cardName);   // save the card information in the browser
    localStorage.setItem('cardNumber', cardNumber);
    localStorage.setItem('expirationDate', expirationDate);
    localStorage.setItem('cvc', cvc);
    console.log('Payment submitted!');

    const newPay = new pay({
        cardName: cardName,
        cardNumber: cardNumber,
        expirationDate: expirationDate,
        cvc: cvc,
        totalPrice: parseInt(totalPrice),
      });
  };

  return (
    <div className={styles.formContainer}>
  <h1>Payment</h1>
  <p>Total price: {totalPrice}</p>
  <form onSubmit={handleSubmit}>
    <div className={styles.formGroup}>
      <label htmlFor="cardName">Name on Card</label>
      <input className={styles.label}
        id="cardName"
        type="text"
        value={cardName}
        onChange={handleCardNameChange}
        required
      />
    </div>
    <div className={styles.formGroup}>
      <label  htmlFor="cardNumber">Card Number</label>
      <input className={styles.label}
        id="cardNumber"
        type="text"
        value={cardNumber}
        onChange={handleCardNumberChange}
        required
      />
    </div>
    <div className={styles.formGroup}>
      <label htmlFor="expirationDate">Expiration Date</label>
      <input className={styles.label}
        id="expirationDate"
        type="text"
        value={expirationDate}
        onChange={handleExpirationDateChange}
        required
      />
    </div>
    <div className={styles.formGroup}>
      <label htmlFor="cvc">CVC</label>
      <input className={styles.label}
        id="cvc"
        type="text"
        value={cvc}
        onChange={handleCvcChange}
        required
      />
    </div>
    <button className={styles.payButton} type="submit">Pay</button>
  </form>
</div>
  );
}