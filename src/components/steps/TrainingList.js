import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export default function TrainingList(props) {
    const {trainings, onDelClick, onEditClick} = props;

    function formatDate(date) {
        return `${date.split('-')[2]}.${date.split('-')[1]}.${date.split('-')[0]}`;
    }

    return (
        <div className='training_list'>
            <div className='training_list__title'>
                <p>Дата</p>
                <p>Пройдено, км</p>
                <p>Действия</p>
            </div>
            <div className='training_list__items'>
                {trainings.map((training) => (
                    <div className='training_item' key={nanoid()}>
                        <div>{formatDate(training.date)}</div>
                        <div>{training.path}</div>
                        <div className='training_item__actions'>
                            <i className='material-icons material-icons-outlined' onClick={() => onEditClick(training)}>edit</i>
                            <i className='material-icons material-icons-outlined' onClick={() => onDelClick(training)}>clear</i>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

TrainingList.propTypes = {
    trainings: PropTypes.array,
};
