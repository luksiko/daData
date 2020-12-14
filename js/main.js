$(document).ready(function () {
	const token = '2f7e060cec31fbcbee6de223e4bac164ea7348a8'
	$('.address').suggestions({
		token: token,
		type: 'ADDRESS',
		/* Вызывается, когда пользователь выбирает одну из подсказок */
		onSelect: function (suggestion) {
			console.log(suggestion)
		},
	})
	$('.job').suggestions({
		token: token,
		type: 'PARTY',
		onSelect: function (suggestion) {
			console.log(suggestion)
		},
	})
	$('.fio').suggestions({
		token: token,
		type: 'NAME',
		onSelect: function (suggestion) {
			console.log(suggestion)
		},
	})
	$('.fms').suggestions({
		token: token,
		type: 'fms_unit',
		onSelect: function (suggestion) {
			console.log(suggestion)
		},
	})
})
