import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import React, { useState } from 'react';



export const ListaTarefas = (props) => {
    const toggleChecked = ({ _id, isChecked }) =>
        Meteor.call('tasks.setIsChecked', _id, !isChecked);

    const deleteTask = ({ _id }) => Meteor.call('tasks.remove', _id);

    const [hideCompleted, setHideCompleted] = useState(false);

    const { tasks, pendingTasksCount, isLoading } = useTracker(() => {
        const noDataAvailable = { tasks: [], pendingTasksCount: 0 };
        if (!Meteor.user()) {
          return noDataAvailable;
        }
        const handler = Meteor.subscribe('tasks');
    
        if (!handler.ready()) {
          return { ...noDataAvailable, isLoading: true };
        }
    
        const tasks = TasksCollection.find(
          hideCompleted ? pendingOnlyFilter : userFilter,
          {
            sort: { createdAt: -1 },
          }
        ).fetch();
        const pendingTasksCount = TasksCollection.find(pendingOnlyFilter).count();
    
        return { tasks, pendingTasksCount };
      });

    return(
        <div>

        </div>
    )

}