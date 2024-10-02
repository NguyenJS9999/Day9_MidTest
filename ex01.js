/**
	## Bài 1 (1 điểm): Viết hàm tính tiền taxi.

Hàm `taxiFare(km)` nhận vào số km và trả về số tiền phải trả dựa trên các quy tắc sau:
  - Trả về "invalid" nếu km không phải là số hợp lệ hoặc nhỏ hơn 0. (0.25đ)
  - 1 km đầu tiên: 5000đ. (0.25đ)
  - Từ km thứ 2 đến km thứ 30: 4000đ/km. (0.25đ)
  - Từ km thứ 31 trở đi: 3000đ/km. (0.25đ)


*/

const km = 30.1;
console.log(taxiFare(km));

function taxiFare(km) {
	// console.log('taxiFare ', km);
	let initMoney = 5000;

	if (!km || km === isNaN || parseInt(km) < 0) {
		return 'invalid';
	}

	if ( Math.ceil(km) <= 1) {
		// console.log(" (km) <= 1) ");
		initMoney = 5000;

		return `C1: Số tiền phải trả là ${ Math.ceil(km) * initMoney} VNĐ`;
	}

	if ( Math.ceil(km) <= 30 || km >= 2) {
		// console.log(" (km) <= 30 && >= 2) ");
		initMoney = 4000;

		return `C1: Số tiền phải trả là ${ Math.ceil(km) * initMoney} VNĐ`;
	}

	if ( Math.ceil(km) >= 31) {
		// console.log(" >= 31 ");
		initMoney = 3000;

		return `C1: Số tiền phải trả là ${ Math.ceil(km) * initMoney} VNĐ`;
	}

}
