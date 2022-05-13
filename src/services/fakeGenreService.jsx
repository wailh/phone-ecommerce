export const genres = [
    {_id: 'slkdfja5s56df8a3d2f1df6S', name:'Samsung'},
    {_id: 'slkdfja5s56df8a3d2f1df6A', name:'Apple'},
    {_id: 'slkdfja5s56df8a3d2f1df6', name:'Huawei'},
    {_id: 'slkdfja5s56df8a3d2f1df6Z', name:'Xiaomi'},
    {_id: 'slkdfja5s56df8a3d2f1df6O', name:'Oppo'}
];

export function getGenres() {
    return genres.filter(g => g)
}