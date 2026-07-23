
function GetValue() {
	// Получаем значения
    const hInput = document.getElementById("isHours");
    const mInput = document.getElementById("isMinutes");
	const resultField = document.getElementById("result");

	// Очистка мусора
	if (resultField) {resultField.value = 0};
	
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
    //alert(finalValue);
    // Не работает в embede, очень плохо для портала тестировщика    
    if (resultField) {
        resultField.value = finalValue;

        // Копирование в буфер обмена
        if (navigator.clipboard) {
            navigator.clipboard.writeText(finalValue).then(() => {
                // Визуальное подтверждение (вспышка)
                // Удаляем класс, если он уже был (для повторных кликов)
                resultField.classList.remove("copy-flash");
                // Триггерим перерисовку для перезапуска анимации
                void resultField.offsetWidth;
                // Добавляем класс анимации
                resultField.classList.add("copy-flash");

                console.log("Скопировано успешно: " + finalValue);
            });
        }
    }
    return finalValue;
}
