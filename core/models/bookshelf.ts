export default interface Bookshelf {
	CatType: number;
	CatID: number;
	ItemID: string;
	Description: string;
	Balance: number | null;
	Position: number | null;
	PositionTotal: number | null;
}
