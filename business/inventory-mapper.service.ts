import Inventory from "../core/models/inventory";

export default class InventoryMapperService {
	public mapObjectToInventory(object: Object): Inventory {
		return object as Inventory;
	}

	public mapInventoryToJSONString(inventory: Inventory): string {
		return JSON.stringify(inventory);
	}
}
