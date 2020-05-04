import { List } from './List.abstract';
import {  User } from '../models/User';
import  _users from '../../assets/json/users';

export class ListUsers extends List{
    
    List:Array<User> = [];
    
    constructor(){
        super('sync');
        this.List = <Array<User>> _users;
    }

    addItem(Item: User): boolean {
        return true;
    }
    editItem(id: string, Item: User): Array<User> {
        return this.List;
    }
    deleteItem(id: string): boolean {
        return true;
    }
    readItem(id: string): Array<User> {
        return this.List;
    }
    readAllItems(): Array<User> {
        return this.List;
    }
    paginateItems(itemsPerPage?: number): Array<User> {
        return [];
    }
    orderItems(orderType?:string):Array<User> {
        return [];
    }

    
}