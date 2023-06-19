import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Form() {
  // form states
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [designation, setDesignation] = useState('');
  const [salary, setSalary] = useState('');

  // retrived data state
  const [data, setData] = useState([]);

  // submit event
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    // console.log(name, age, designation, salary);

    // our object to pass
    // const data = {
    //   name,
    //   age,
    //   designation,
    //   salary,
    // };
    axios
      .post('https://sheet.best/api/sheets/e7a8bead-e947-4de5-9421-8e17433a3fff', data)
      .then((response) => {
        // console.log(response);
        setName('');
        setAge('');
        setDesignation('');
        setSalary('');
      });
  };
  // getting data function
  const getData = () => {
    axios
      .get('https://sheet.best/api/sheets/e7a8bead-e947-4de5-9421-8e17433a3fff')
      .then((response) => {
        setData(response.data);
      });
  };

  // triggering function
  useEffect(() => {
    getData();
  }, [data]);

  return <div className="form-wrapper">form</div>;
}
