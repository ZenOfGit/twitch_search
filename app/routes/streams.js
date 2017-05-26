import Ember from 'ember';

export default Ember.Route.extend({
    model() {
     return [
         { id: '1', name:'Streamer Guy', game: 'WOW'},
         { id: '2', name:'Streamer Girl', game: 'Wii'}
         ];   
    }
});
