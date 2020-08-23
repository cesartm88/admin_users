import { List } from './List.abstract';
import {  User } from '../models/User';
import  _users from '../../assets/json/users';

export class ListUsers extends List{
    
    List:Array<User> = [];
    pageSize:number = 10;
    
    constructor(){
        super('sync');
        this.List = <Array<User>> _users;
        this.pageSize = 10;
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

    paginate( page_number) {
        // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
        return this.List.slice((page_number - 1) *  this.pageSize, page_number *  this.pageSize);
    }

    getTotalPages(){
        return Math.ceil(this.List.length/this.pageSize);
    }

    orderItems(orderType?:string):Array<User> {
        return [];
    }

    
}