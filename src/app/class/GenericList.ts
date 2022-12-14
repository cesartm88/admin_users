import { List } from './List.abstract';
import {FormObj} from '../interfaces/form.obj';

/**
 * The GenericList.
 */
export class GenericList<T> extends List{

    List: Array<T> = [];
    pageSize = 10;

    constructor(type?: string){
        super(type);
    }

    setData(lList: Array<T>){
      this.List = lList;
    }

    setDataPerPage(pages: number, focusPage){
        this.pageSize = pages;
        return this.paginate(focusPage);
    }

    addItem(Item: T): boolean {
        return true;
    }
    editItem(id: string, Item: T): Array<T> {
        return this.List;
    }
    deleteItem(id: string): boolean {
        return true;
    }
    readItem(id: string): Array<T> {
        return this.List;
    }
    readAllItems(): Array<T> {
        return this.List;
    }
    paginateItems(itemsPerPage?: number): Array<T> {
        return [];
    }

    paginate(pageNumber) {
        return this.List.slice((pageNumber - 1) *  this.pageSize, pageNumber *  this.pageSize);
    }

    getTotalPages(pageSize?: number){
      this.pageSize = (pageSize) ? pageSize : this.pageSize;
      return Math.ceil(this.List.length / this.pageSize);
    }

    orderItems(orderType?: number, field?: string): Array<T> {
        let order;
        if (orderType === 0){
            order = this.List.sort((a, b) => (a[field] > b[field])? 1 : -1);
        }else{
            order = this.List.sort((b ,a) => (a[field] > b[field])? 1 : -1);
        }
        return order;
    }


}
