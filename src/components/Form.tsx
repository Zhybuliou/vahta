import { Button, Checkbox, TextField } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';

export default function Form() {
  // form states
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [agree, setAgree] = useState(false);

  // submit event
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      ФИО: name,
      Возраст: age,
      Телефон: phone,
      Agree: agree,
    };
    axios
      .post('https://sheet.best/api/sheets/47350a76-62d3-46d2-aeb4-185e1a9f2d17', data)
      .then(() => {
        setName('');
        setAge('');
        setPhone('');
        setAgree(false);
      });
  };
  // getting data function
  //   const getData = () => {
  //     axios
  //       .get('https://sheet.best/api/sheets/e7a8bead-e947-4de5-9421-8e17433a3fff')
  //       .then((response) => {
  //         setData(response.data);
  //       });
  //   };

  // triggering function
  //   useEffect(() => {
  //     getData();
  //   }, [data]);

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <TextField
          style={{ width: '100%', margin: '5px', background: 'white' }}
          name="name"
          type="text"
          label="Фамилия Имя Отчество"
          variant="outlined"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        />
        <TextField
          style={{ width: '100%', margin: '5px', background: 'white' }}
          name="date"
          type="date"
          label="Дата рождения"
          variant="outlined"
          InputLabelProps={{ shrink: true, required: true }}
          inputProps={{ min: '1964-01-24', max: '2005-05-31' }}
          value={age}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAge(e.target.value)}
        />
        <TextField
          style={{ width: '100%', margin: '5px', background: 'white' }}
          name="phone"
          label="Телефон"
          variant="outlined"
          type="text"
          value={phone}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
        />
        <Checkbox
          inputProps={{ required: true }}
          name="agree"
          onChange={() => setAgree((value) => !value)}
        />
        Я даю Согласие на обработку персональных данных.
        <Button
          type="submit"
          style={{ width: '100%', margin: '5px' }}
          variant="contained"
          color="primary"
        >
          Отправить анкету
        </Button>
      </form>
    </div>
  );
}
