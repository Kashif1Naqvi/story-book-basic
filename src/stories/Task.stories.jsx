import Task from './Task'

export default {
  component: Task,
  title: 'Components/Task',
  tags: ['autodocs']
}

export const Default = {
  args: {
    task: {
      id: '1',
      title: "bugs Fix",
      state: 'TASK_INBOX',
      position: 'left',
    },
  },
};

export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED',
      position: 'right',
    },
  },
}


export const Archive = {
  args: { 
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED',
      position: 'center',
    },
  },
}