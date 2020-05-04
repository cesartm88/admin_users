export abstract class crudModel{
    
    abstract connect();

    abstract saveItem(key,value);

    abstract editItem();

    abstract deleteItem();

    abstract readItem();

    abstract listAll();
}