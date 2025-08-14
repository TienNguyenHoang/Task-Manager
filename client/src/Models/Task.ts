enum Status {
    Todo = 'Todo',
    InProgress = 'In progress',
    Done = 'Done',
}

enum Priority {
    Low = 'Low',
    Normal = 'Normal',
    High = 'High',
}

export interface Task {
    taskId: number;
    userId: number;
    title: string;
    description: string;
    status: Status;
    priority: Priority;
    dueDate: Date;
    createAt: Date;
}
