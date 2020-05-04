import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

// key that is used to access the data in local storageconst 
let STORAGE_KEY = 'local_todolist';

@Injectable({
	providedIn: 'root'
})

export class LocalStorageService {
	anotherTodolist = [];
	
	constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }
	
	get(key:string){
		return this.storage.get( key );
	}

	set( key:string, data ) : void{
		this.storage.set( key ,data);
	}

	delete(key):void{
		this.storage.remove( key );
	}

	deleteAll():void{
		localStorage.clear();
	}
}