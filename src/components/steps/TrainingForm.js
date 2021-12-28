import PropTypes from 'prop-types';

export default function TrainingForm(props) {
    const { form, onFormChange, onFormSubmit } = props;

    return (
        <form className='training_form' onSubmit={onFormSubmit}>
            <section className='training_section'>
                <label htmlFor='date'>
                    Дата (ДД.ММ.ГГ)
                </label>
                <input id='date'
                type='date'
                name='date'
                className='training_input'
                value={form.date}
                onChange={onFormChange}/>
            </section>
            <section className='training_section'>
                <label htmlFor='path'>
                    Пройдено, км
                </label>
                <input id='path'
                type='text'
                name='path'
                className='training_input'
                value={form.path}
                onChange={onFormChange}/>
            </section>
            <button>Ok</button>
        </form>
    );
}

TrainingForm.propTypes = {
    form: PropTypes.object,
}
