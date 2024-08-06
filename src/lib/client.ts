import axios from 'axios'

const apikey = '2fcefddab19fef30192ec51f0be9f671'
const lastfmApi = "http://ws.audioscrobbler.com/2.0/"

const lastFmClient =  () => {
    return{
        getMyself: getMyself
    }
		
   
}

const getMyself = async() =>   await fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=gracrys&api_key=${apikey}&format=json`)
.then((response) => response.json())
.then((data) => data);


export default lastFmClient