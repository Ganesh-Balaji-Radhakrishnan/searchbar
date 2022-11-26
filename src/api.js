import axios from 'axios'

const getPictures = async (word) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
    headers: {
        Authorization: 'Client-ID AT6MFEHOH-8nx20D2BpvQb8Q-Hi7VTnbpgInWOR8Qyo'
    },
    params:{
        query: word
    }
    })

    return response.data.results

}

export default getPictures