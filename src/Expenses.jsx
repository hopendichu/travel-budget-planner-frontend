import axios from 'axios';
import  { useEffect, useState } from 'react';

const Expenses = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/expenses/')
            .then(response => {
                setExpenses(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    return (
        <div>
            {expenses.map(expense => (
                <div key={expense.id}>
                    <p>{expense.description}</p>
                    <p>{expense.amount}</p>
                </div>
            ))}
        </div>
    );
};

export default Expenses;
