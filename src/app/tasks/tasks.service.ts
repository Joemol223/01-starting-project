import { Injectable } from "@angular/core";
import { NewTaskData } from "./task/task.model";

@Injectable({providedIn: 'root'})
export class TaskService {
    private tasks = [
        {
            id: 't1',
            userId: 'u1',
            title: 'Master Angular',
            summary: 'Learn the basics of Angular',
            dueDate: '2026-12-31'
        },
        {
            id: 't2',
            userId: 'u2',
            title: 'Build a Project',
            summary: 'Create a sample project using Angular',
            dueDate: '2026-01-31'
        },
        {
            id: 't3',
            userId: 'u3',
            title: 'Deploy Application',
            summary: 'Deploy the application to a production environment',
            dueDate: '2026-02-28'
        },
    ];

    constructor(){
        const tasks = localStorage.getItem('tasks');

        if (tasks){
            this.tasks = JSON.parse(tasks);
        }
    }

    getUserTasks(userId: string) {
        return this.tasks.filter(task => task.userId === userId);
    }

    addTask(taskData: NewTaskData, userId: string) {
        this.tasks.unshift({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date
        });
        this.saveTasks();
    }

    removeTask(id: string){
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.saveTasks();
    }

    private saveTasks(){
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }

}