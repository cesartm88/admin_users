import { List } from './List.abstract';
import {  User } from '../models/User';
import  _users from '../../assets/json/users';
import { Input } from '@angular/core';

export class ListUsers extends List{
    
    List:Array<User> = [];
    pageSize:number = 10;
    
    constructor(){
        super('sync');
        this.List = <Array<User>> _users;
    }

    setDataPerPage(pages:number,focusPage){
        this.pageSize = pages;
        return this.paginate(focusPage);
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

    getTotalPages(pageSize?:number){
        this.pageSize = (pageSize)?pageSize:this.pageSize;

        console.warn("pageSize:",this.pageSize);

        console.log("calc_pages:",Math.ceil(this.List.length/this.pageSize));
        return Math.ceil(this.List.length/this.pageSize);
    }

    orderItems(orderType?:number,field?:string):Array<User> {
        let order;
        if(orderType == 0){
            order = this.List.sort((a, b) => (a[field] > b[field])? 1 : -1);
        }else{
            order = this.List.sort((b ,a) => (a[field] > b[field])? 1 : -1);
        }
    return order;
    }

    
}