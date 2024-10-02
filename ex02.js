/**

## Bài 2 (2 điểm): Viết hàm kiểm tra 1 số:

Hàm `checkNumber(n)` nhận vào số n thực hiện yêu cầu sau:
  - Trả về "Invalid" nếu n không phải là số hợp lệ. Trả về "Không chia hết" cho tất cả các trường hợp khác. (0.5đ)
  - Trả về "Chia hết cho 3" nếu n chia hết cho 3. Trả về "Chia hết cho 5" nếu n chia hết cho 5. (0.5đ)
  - Trả về "Chia hết cho cả 3 số 3, 5 và 15" nếu n chia hết cho cả 3 số 3, 5 và 15. (0.5đ)

**Kết quả kỳ vọng:**

```javascript
console.log(checkNumber(15)); // "Chia hết cho cả 3 số: 3, 5 và 15"
console.log(checkNumber(9)); // "Chia hết cho 3"
console.log(checkNumber(10)); // "Chia hết cho 5"
console.log("15"); // "Invalid"
console.log(11); // "Không chia hết"
```

*/
const n = "15";
console.log(checkNumber(n));

function checkNumber( n ) {

	if (!n || n === isNaN || typeof n === 'string') {
		return 'invalid';
	}

	console.log(' typeof n ', typeof n);

	if ( n % 3 === 0 && n % 5 === 0 && n % 15 === 0 ) {
		return `Chia hết cho cả 3 số 3, 5 và 15`
	}

	if ( n % 3 === 0 ) {
		return `Chia hết cho 3`
	}

	if ( n % 5 === 0 ) {
		return `Chia hết cho 5`
	}

	return `Không chia hết`



}
