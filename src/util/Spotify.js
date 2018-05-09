const clientId = 'b2b814ac6a9c41c983a21a7d1ecb7dc9'; // Your client id
const clientSecret = '6a73da9511c3452d9c12597488075964'; // Your secret
const redirectUri = 'decker_jam.surge.sh'


let accessToken='';
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
const Spotify = {

getAccessToken() {
    if (!accessToken) {
      console.log('AccessToken ' );

       let url = `clientIdhttps://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=playlist-modify-public&response_type=token` ;
       console.log('URL = ' + url );
       window.location = url;

       accessToken = window.location.href.match(/access_token=([^&]*)/);
       let expiry = getParameterByName('expires_in', window.location.href);
       console.log('token = ' + accessToken);
       console.log('expires = ' + expiry);
       window.setTimeout(() => accessToken = '', expiry * 1000);
       window.history.pushState('Access Token', null, '/');

    } else {
        console.log('Your token is : ' + accessToken);
        return accessToken
      }
 },

 search(term) {
   console.log(` search = https://api.spotify.com/v1/search?type=track&q=${term}`);
   console.log(` search access token ${accessToken}`);
     return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}` , {
     headers: {Authorization: `Bearer ${accessToken}`
     }
   }).then(response => {
     console.log(response);
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.tracks) {
        return jsonResponse.tracks.items.map(track => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          URI: track.uri
       }));
    }
 });
}

};
export default Spotify;
