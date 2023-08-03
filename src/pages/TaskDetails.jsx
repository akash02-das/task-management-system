import { useLocation } from 'react-router-dom';
import Comment from '../components/task/Comment';
import Details from '../components/task/Details';
import { dateFormatter } from '../utils/dateFormatter';

const TaskDetails = () => {
  const { state } = useLocation();
  const { id, name, description, dueDate, status, assignee } = state;

  const showDueDate = dateFormatter(dueDate);

  return (
    <div>
      <Details
        name={name}
        description={description}
        dueDate={showDueDate}
        status={status}
        assignee={assignee}
      />

      <Comment id={id} />
    </div>
  );
};

export default TaskDetails;
