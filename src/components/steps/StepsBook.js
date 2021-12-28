import { useState } from "react";
import TrainingForm from "./TrainingForm";
import TrainingList from "./TrainingList";

export default function StepsBook() {
    const [form, setForm] = useState({
        date: '2021-12-26',
        path: '10',
    });

    const [list, setList] = useState([]);

    const onChange = (e) => {
        e.target.value = e.target.value.replace(',', '.');
        setForm((prev) => ({...prev, [e.target.name]: e.target.value}));
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (!form.date || !form.path) return;

        if (/[^0-9.]/.test(form.path)) {
            setForm((prev) => ({...prev, path: ''}));
            return;
        }

        setList((prev) => {
            let copy = [...prev.map((training) => ({...training}))];

            if (!prev.find((item) => item.date === form.date)) {
                copy.push(form);
            } else  {
                const itemToChange = copy.find((item) => item.date === form.date);
                itemToChange.path = '' + (+itemToChange.path + +form.path);
            }
            return copy.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        });

        setForm((prev) => ({...prev, date: '', path: ''}));
    }

    const onDelTraining = (item) => {
        setList((prev) => [...prev].filter((training) => training !== item));
    }

    const onEditTraining = (item) => {
        setForm((prev) => ({...prev, date: item.date, path: item.path}));
    }
    return (
        <div className='training_box'>
            <TrainingForm form={form}
            onFormChange={onChange}
            onFormSubmit={onSubmit}/>
            <TrainingList trainings={list}
            onDelClick={onDelTraining}
            onEditClick={onEditTraining}/>
        </div>
    );
}
