const firstScrin = document.querySelector(".firstscrin"),
    secondScrin = document.querySelector(".secondscrin"),
    wrapper = document.querySelector(".wrapper"),
    mapScrin = document.querySelector(".mapScrin"),
    mapMoveBtn = document.querySelector(".mapMoveBtn"),
    map = document.querySelector(".map");

setTimeout(() => {
    firstScrin.classList.add("firstscrinMove");
    secondScrin.classList.add("secondscrinMove");
    wrapper.classList.add("wrapperBg")
}, 3000)

mapMoveBtn.addEventListener("click", (event) => {
    secondScrin.classList.remove("secondscrinMove");
    secondScrin.classList.add("firstscrinMove");
    mapScrin.classList.add("secondscrinMove")
})

ymaps.ready(init);

function init() {
    let myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 15,
        controls: []
    },{
        suppressMapOpenBlock: true
    });

    myMap.setCenter([43.233735, 76.957136]);

    let myPlacemark = new ymaps.Placemark([43.233735, 76.957136], {}, 
        {
            iconLayout: 'default#image', 
            iconImageHref: 'img/location.svg', 
            iconImageSize: [21, 27], 
            iconImageOffset: [-21, -27] 
        }
    );

    myMap.geoObjects.add(myPlacemark);
}