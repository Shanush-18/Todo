import { AppRoutesModel } from "./todo.interface";

export class TododConstant {
    static readonly appHeaderRoutes: AppRoutesModel[] = [
        {
            path: 'tasks',
            title: 'Tasks'
        },
        {
            path: 'dashboard',
            title: 'Dashboard'
        }
    ]
}