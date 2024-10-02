/**
## Bài 4 (2 điểm): Đưa thông tin dạng bảng sản phẩm ra màn hình.
- Yêu cầu đầy đủ các thông tin: `id, name, price, brand`. (Thiếu một trong các thông tin trên sẽ bị trừ 0.5đ)
- Danh sách hiển thị phải là dạng bảng HTML. (0.5đ)

*/

const products = [
	{
		id: 1,
		name: 'Iphone 12',
		price: 1000,
		brand: 'Apple'
	},
	{
		id: 2,
		name: 'Galaxy S21',
		price: 900,
		brand: 'Samsung'
	},
	{
		id: 3,
		name: 'Xperia 1',
		price: 800,
		brand: 'Sony'
	}
];
const tableProduct = document.getElementById("table-product");
console.log('tableProduct :', tableProduct);