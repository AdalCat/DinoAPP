export const fetchDinos = async (url) => {
    const resp = await fetch(url);

    const { dinosaurs = [] } = await resp.json();

    const dino = dinosaurs.map(dinosaur => ({
        id: dinosaur.id,
        name: dinosaur.name,
        img: dinosaur.image,
        habitatPlace: dinosaur.habitat.place,
        habitatSubregion: dinosaur.habitat.subregion,
        historicalperiodName: dinosaur.historicalperiod.name,
        historicalperiodYear: dinosaur.historicalperiod.years,
    }));

    return dino;
}