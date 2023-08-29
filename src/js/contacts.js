const contactsMap = () => {

    let myMap = new ymaps.Map("map", {
        center: [55.852061, 37.530499],
        zoom: 15
    });

    myMap.geoObjects
        .add(new ymaps.Placemark([55.852061, 37.530499], {
            balloonContent: 'г. Москва, 4-й Лихачёвский переулок, 4с2'
        }, {
            preset: 'islands#icon',
            iconColor: '#FF671F'
        }))
        .add(new ymaps.Placemark([59.847037, 30.446627], {
            balloonContent: 'г. СПб'
        }, {
            preset: 'islands#icon',
            iconColor: '#FF671F'
        }))
        .add(new ymaps.Placemark([56.908266, 60.619106], {
            balloonContent: 'г. ЕКБ'
        }, {
            preset: 'islands#icon',
            iconColor: '#FF671F'
    }));

	const tabs = D.getElementById("js-tabs-map");
	if (!tabs) return;

    const tabButtons = tabs.querySelectorAll(".tabs__btn");
    if (!tabButtons) return;

    tabButtons.forEach((tab) => {
        tab.addEventListener('click', (e) => {
            const coords = [e.target.dataset['geo-1'], e.target.dataset['geo-2']];
            myMap.setCenter(coords, 15);
        })
    })
}

D.addEventListener("DOMContentLoaded", function() {
    if (typeof ymaps !== 'undefined') ymaps.ready(contactsMap);
})