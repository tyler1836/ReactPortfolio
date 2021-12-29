import hero from './hero-bg.jpg';
import air from './air-quality.jpg';
import workout from './workout-tracker.jpg';
import cleanfreak from './cleanfreak.jpg';

const photos = [
    {
        id: 1,
        image: hero,
        name: 'Run Buddy', 
        text: 'A mock up of a workout subscription service website',
        url: 'https://tyler1836.github.io/Run-Buddy/'
    },
    {
        id: 2,
        image: air,
        name: 'Air quality',
        text: 'Check your city\'s air quality forecast',
        url: 'https://zunaty.github.io/air-quality/'
    },
    {
        id: 3,
        image: workout,
        name: 'Workout Tracker',
        text: 'A full stack application with sign up and login. Once logged in keep track of workouts through your dashboard thats tailored to you specifically',
        url: 'https://blooming-shelf-02541.herokuapp.com/'
    },
    {
        id: 4,
        image: cleanfreak,
        name: 'Clean Freak',
        text: 'A MERNG full stack application for buying house cleaning packages',
        url: 'https://cleaning-freak.herokuapp.com/'
    }
]

export default photos;