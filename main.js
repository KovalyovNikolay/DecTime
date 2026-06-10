
function GetValue() {
	// Получаем значения
    const hInput = document.getElementById("isHours");
    const mInput = document.getElementById("isMinutes");

    // Если элементы не найдены, выходим, чтобы не было ошибок
    if (!hInput || !mInput) return;

    const aHours = parseInt(hInput.value) || 0;
    const aMinutes = parseInt(mInput.value) || 0;

    // Условие: игнорировать, если оба значения 0
    if (aHours === 0 && aMinutes === 0) {
        console.log("Пропуск: значения равны нулю");
        return; 
		// Функция просто завершается, ничего не возвращая
    }

    // Расчет (перевод в десятичную долю суток)
    const totalMinutes = (aHours * 60) + aMinutes;
    const aFactor = 1 / (24 * 60); 
    const result = totalMinutes * aFactor;

    // Округление до 2 знаков
    const finalValue = result.toFixed(2);

    // Выводим результат через сообщение Алерт
    // Не работает в embede, очень плохо для портала тестировщика
    //alert(finalValue);
    const resultField = document.getElementById("result");
    if (resultField) {
        resultField.value = finalValue;
    }
	
    return finalValue;
}
