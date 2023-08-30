const contactsMap = () => {

    const pin = {
        iconLayout: 'default#image',
        iconImageHref: './images/sprites/svg/pin.svg',
        iconImageSize: [38, 38],
        iconImageOffset: [-19,-19]
    }

    let myMap = new ymaps.Map("map", {
        center: [55.852061, 37.530499],
        zoom: 16
    });

    myMap.geoObjects
        .add(new ymaps.Placemark([55.852061, 37.530499], {
            balloonContentBody: '<b>4-й Лихачёвский переулок, 4с2</b><br/> ' +
                                '<a href="tel: +7-495-120-81-37">+7 (495) 120-81-37</a>',
            balloonContentFooter: 'Офис: 08:00-18:00, касса 08:00-17:00'
        }, pin))
        .add(new ymaps.Placemark([59.847037, 30.446627], {
            balloonContentBody: '<b>просп. Девятого Января, 9, корп. 1</b><br/> ' +
                                '<a href="tel: +7-812-603-49-93">+7 (812) 603-49-93</a>',
            balloonContentFooter: 'Офис: 08:00-18:00, касса 08:00-17:00'
        }, pin))
        .add(new ymaps.Placemark([56.908266, 60.619106], {
            balloonContentBody: '<b>жилой район Эльмаш</b>',
            // balloonContentFooter: 'Офис: 08:00-18:00, касса 08:00-17:00'
        }, pin));

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