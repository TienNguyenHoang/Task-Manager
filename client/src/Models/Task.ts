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
    TaskId: number;
    UserId: number;
    Title: string;
    Description: string;
    Status: Status;
    Priority: Priority;
    DueDate: Date;
    CreateAt: Date;
}
