import Bookshelf from "../core/models/bookshelf";

export default class BookshelfMapperService {
	public mapObjectToBookshelf(object: Object): Bookshelf {
		return object as Bookshelf;
	}

	public mapJSONStringToBookshelf(jsonString: string): Bookshelf {
		return JSON.parse(jsonString) as Bookshelf;
	}


	public mapObjectArrayToBookshelfArray(objectArray: Object[]): Bookshelf[] {
		let bookshelfArray: Bookshelf[] = [];
		objectArray.forEach(object => {
			bookshelfArray.push(object as Bookshelf);
		});
		return bookshelfArray;
	}

	public mapJSONStringToBookshelfArray(jsonString: string): Bookshelf[] {
		return JSON.parse(jsonString) as Bookshelf[];
	}

	public mapBookshelfToJSONString(bookshelf: Bookshelf): string {
		return JSON.stringify(bookshelf);
	}

	public mapBookshelfArrayToJSONString(bookshelf: Bookshelf[]): string {
		return JSON.stringify(bookshelf);
	}

}
