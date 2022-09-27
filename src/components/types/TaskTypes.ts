
export interface Task {
    title: string;
    
}
export interface Task_prop {
       task: Task;
       index: number;
       removeTask: (index: number) => void;
}