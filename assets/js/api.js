
async function fetchProfileData() {
    const url = 'https://github.com/JoaoVBLaneiro/js-developer-portfolio/blob/81f17b4a0707fbac9a683186fad5510de9ceebc6/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
