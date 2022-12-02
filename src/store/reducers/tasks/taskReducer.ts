import {
  ITaskAction,
  ITasksState,
  TaskActionEnum,
  taskPriorityEnum,
  TaskStatus
} from './taskTypes';

const initialState: ITasksState = {
  tasks: {
    1: {
      name: 'to eat',
      id: 1,
      status: TaskStatus.QUEUE,
      comments: [1, 2],
      createDate: '01.12.22',
      description: 'just do it',
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      files: {} as Blob,
      inProgressTime: '00.20',
      isCanAddSubTask: true,
      priority: taskPriorityEnum.STANDARD,
      readyDate: '02.01.22',
      subTasks: [1, 2]
    }
    // 2: {
    //   name: 'to sleep',
    //   id: 2,
    //   status: TaskStatus.QUEUE,
    //   comments: [3, 4],
    //   createDate: '01.12.22',
    //   description: 'just do it',
    //   files: [],
    //   inProgressTime: '00.20',
    //   isCanAddTask: true,
    //   priority: 'standard',
    //   readyDate: '02.01.22',
    // },
  }
};

export const taskReducer = (state = initialState, action: ITaskAction): ITasksState => {
  switch (action.type) {
    case TaskActionEnum.ADD_TASK: {
      const { id } = action.payload;

      const newTask = {
        ...state.tasks,
        [id]: action.payload
      };

      console.log(newTask);
      return { ...state, tasks: newTask };
    }
    case TaskActionEnum.EDIT_TASK: {
      const { id } = action.payload;

      const copyTasks = {
        ...state.tasks,
        [id]: action.payload
      };

      return { ...state, tasks: copyTasks };
    }
    case TaskActionEnum.DELETE_TASK:
      return { ...state };
    default:
      return state;
  }
};