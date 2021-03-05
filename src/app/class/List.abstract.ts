/**
 * class List
 * Description: List of objects
 */
export abstract class List {
    /** 
     * @param ID string 
     * description: Field for define de id in each object
    */
    ID:string="";

    /** 
     * @param List
     * Description: List of objects
    */
    abstract List;

    /** 
     * @param itemsPerPage number
     * Description  items per page for do pagination
     */
    itemsPerPage:number = 8;

    /** 
     * @param orderType string
     * description: Type of order to apply
     * Values: ASC | DESC
     * default: ASC
     */
    orderType:number = 0;

    /**
     * 
     * @param fieldID field for asign to ID
     */

    constructor(fieldID:string) {
        this.ID = fieldID;
    }

    abstract addItem(Item:Object):boolean;

    abstract editItem(id:string,Item:Object):Object;

    abstract deleteItem(id:string):boolean;

    abstract readItem(id:string):Object;

    abstract readAllItems():Array<Object>;

    abstract paginateItems(itemsPerPage?:number):Array<Object>;

    abstract orderItems(orderType?:number,field?:string):Array<Object>;

}