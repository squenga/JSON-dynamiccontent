let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');
let contentGridElement = document.getElementById('contentGrid');

let myJSON = {
	"title" : "Covet",
	"artist" : "Basement",
	"album" : "Colourmeinkindness",
	"picture_url" : "https://f4.bcbits.com/img/a3114444892_65",
	"color": "#222327",
};

function printToPage(incoming) {
	outputParagraph.innerText = incoming;
}

let jsonDatabase = [
  {
    "title" : "Emergency Contact",
    "artist" : "Pierce The Veil",
	"album" : "The Jaws of Life",
    "picture_url" : "https://m.media-amazon.com/images/I/71wLthDbWkL._UF1000,1000_QL80_.jpg",
    "color" : "#4a4a56",
  },
  {
    "title" : "Be Quiet and Drive (Far Away)",
    "artist" : "Deftones",
	"album" : "Around the Fur",
    "picture_url" : "https://m.media-amazon.com/images/I/81BbQMTakEL._UF1000,1000_QL80_.jpg",
    "color" : "#332b36",
  },
  {
    "title" : "Poor Aileen",
    "artist" : "Superheaven",
	"album" : "Ours Is Chrome",
    "picture_url" : "https://f4.bcbits.com/img/a0650676355_65",
    "color" : "#345f58",
  },
  {
    "title" : "Are You The One",
    "artist" : "Basement",
	"album" : "Be Here Now / Are You The One",
    "picture_url" : "https://i.scdn.co/image/ab67616d0000b27308b7fe7e6e51def75eea7a78",
    "color" : "#29212E",
  },
  {
    "title" : "Sextape",
    "artist" : "Deftones",
	"album" : "Diamond Eyes",
    "picture_url" : "https://m.media-amazon.com/images/I/71m2m4kGPXL._UF1000,1000_QL80_.jpg",
    "color" : "#345f58",
  },
  {
    "title" : "Uneasy Hearts Weigh The Most",
    "artist" : "Dance Gavin Dance",
	"album" : "Dance Gavin Dance",
    "picture_url" : "https://upload.wikimedia.org/wikipedia/en/6/6c/Untitled_Dance_Gavin_Dance_album_cover.jpg",
    "color" : "#332b36",
  },
  {
    "title" : "How Does It Feel?",
    "artist" : "Citizen",
	"album" : "Youth",
    "picture_url" : "https://f4.bcbits.com/img/a3503571216_65",
    "color" : "#222327",
  },
  {
    "title" : "Bedless",
    "artist" : "Pierce The Veil",
	"album" : "Misadventures",
    "picture_url" : "https://crypticrock.com/wp-content/uploads/2016/05/pierce-the-veil-album-cover1.jpg",
    "color" : "#233132",
  },
  {
    "title" : "Pine",
    "artist" : "Basement",
	"album" : "Colourmeinkindness",
    "picture_url" : "https://f4.bcbits.com/img/a3114444892_65",
    "color" : "#4a4a56",
  },
  {
    "title" : "Hell Above",
    "artist" : "Pierce The Veil",
	"album" : "Collide With The Sky",
    "picture_url" : "https://m.media-amazon.com/images/I/71ajNuf3VlL._UF1000,1000_QL80_.jpg",
    "color" : "#4a4a56",
  },
  {
    "title" : "Be Here Now",
    "artist" : "Basement",
	"album" : "Be Here Now / Are You The One",
    "picture_url" : "https://i.scdn.co/image/ab67616d0000b27308b7fe7e6e51def75eea7a78",
    "color" : "#345f58",
  },
  {
    "title" : "Change (In the House of Flies",
    "artist" : "Deftones",
	"album" : "White Pony",
    "picture_url" : "https://m.media-amazon.com/images/I/51BXwSNRwIL._UF1000,1000_QL80_.jpg",
    "color" : "#233132",
  },
  {
    "title" : "Featuring Mark Hoppus",
    "artist" : "Hot Mulligan",
	"album" : "I Won't Reach Out to You",
    "picture_url" : "https://f4.bcbits.com/img/a2550283637_65",
    "color" : "#332b36",
  },
  {
    "title" : "Creature",
    "artist" : "It Looks Sad.",
	"album" : "Kaiju",
    "picture_url" : "https://f4.bcbits.com/img/a0498581768_65",
    "color" : "#222327",
  },
  {
    "title" : "24 Hr Drive-Thru",
    "artist" : "Origami Angel",
	"album" : "Somewhere City",
    "picture_url" : "https://media.pitchfork.com/photos/5de53ae09669180008bb62e6/master/pass/somewherecity.jpg",
    "color" : "#332b36",
  },
  {
    "title" : "Whole",
    "artist" : "Basement",
	"album" : "Colourmeinkindness",
    "picture_url" : "https://f4.bcbits.com/img/a3114444892_65",
    "color" : "#222327",
  },
   {
    "title" : "Watch Your Mouth",
    "artist" : "The Backseat Lovers",
	"album" : "When We Were Friends",
    "picture_url" : "https://i.scdn.co/image/ab67616d0000b2738386795a636d72e74c958590",
    "color" : "#4a4a56",
  },
   {
    "title" : "Circles",
    "artist" : "Pierce The Veil",
	"album" : "Misadventures",
    "picture_url" : "https://crypticrock.com/wp-content/uploads/2016/05/pierce-the-veil-album-cover1.jpg",
    "color" : "#233132",
  },
   {
    "title" : "Next to Nothing",
    "artist" : "Superheaven",
	"album" : "Ours is Chrome",
    "picture_url" : "https://f4.bcbits.com/img/a0650676355_65",
    "color" : "#345f58",
  },
   {
    "title" : "Let It Happen",
    "artist" : "Tame Impala",
	"album" : "Currents",
    "picture_url" : "https://m.media-amazon.com/images/I/A1LVEJikmZL._UF1000,1000_QL80_.jpg",
    "color" : "#222327",
  },
  {
    "title" : "R U Mine?",
    "artist" : "Arctic Monkeys",
	"album" : "AM",
    "picture_url" : "https://m.media-amazon.com/images/I/71-Y-3usHkL._UF1000,1000_QL80_.jpg",
    "color" : "#233132",
  },
  {
    "title" : "The Ballad of Mona Lisa",
    "artist" : "Panic! At The Disco",
	"album" : "Vices & Virtues",
    "picture_url" : "https://upload.wikimedia.org/wikipedia/en/e/e1/Panic%21_at_the_Disco_-_Vices_%26_Virtues.jpg",
    "color" : "#345f58",
  },
  {
    "title" : "Bad Apple",
    "artist" : "Basement",
	"album" : "Colourmeinkindness",
    "picture_url" : "https://f4.bcbits.com/img/a3114444892_65",
    "color" : "#4a4a56",
  },
  {
    "title" : "Dive In",
    "artist" : "Pierce The Veil",
	"album" : "Misadventures",
    "picture_url" : "https://crypticrock.com/wp-content/uploads/2016/05/pierce-the-veil-album-cover1.jpg",
    "color" : "#332b36",
  }
];

createElement(myJSON);

for (var i = 0; i < jsonDatabase.length; i++) {
   createElement(jsonDatabase[i]);
}

function createElement(incomingJSON) {

  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = incomingJSON['color'];
  newContentElement.style.fontFamily = incomingJSON['favorite_font'];
  newContentElement.classList.add('contentItem');

  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerText = incomingJSON['title'];
  newContentElement.appendChild(newContentHeading);

  let newContentSubhead = document.createElement("DIV");
  newContentSubhead.classList.add('contentSubhead');

  let newArtistSubhead = document.createElement("H4");
  newArtistSubhead.classList.add('contentArtist');
  newArtistSubhead.innerText = 'Artist: ' + incomingJSON['artist'];
  
  let newAlbumSubhead = document.createElement("H5");
  newAlbumSubhead.classList.add('contentAlbum');
  newAlbumSubhead.innerText = 'Album: ' + incomingJSON['album'];
  
  newContentElement.appendChild(newContentSubhead);
  newContentSubhead.appendChild(newArtistSubhead);
  newContentSubhead.appendChild(newAlbumSubhead);

  let newImage = document.createElement("IMG");
  newImage.classList.add("albumImage");
  newImage.src = incomingJSON['picture_url'];
  newContentElement.appendChild(newImage);

  contentGridElement.appendChild(newContentElement);

}