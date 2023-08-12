const generateBtn = document.querySelector('.generate-btn')
const renderIMG = document.querySelector('.renderIMG')


generateBtn.addEventListener('click', generateMeme)

const url = 'https://memes-from-reddit.p.rapidapi.com/memes';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a70f384ddcmsh3afc67a057b6b39p1c2a31jsn724a8cd0cf18',
		'X-RapidAPI-Host': 'memes-from-reddit.p.rapidapi.com'
	}
};

let index = 0
async function generateMeme() {
    renderIMG.src = ''
    try {

        const response = await fetch(url, options);
        const result = await response.json();
        
        renderIMG.src = `${result.data[index].url}`

        index++
        if (index == result.data.length) {
            index = 0
        }
        
    } catch (error) {
        console.error(error);
    }
}