$("document").ready(function () {
  const searchInput = $("#search");

  //getPokemonList(searchInput);

  searchInput.keypress(async (e) => {
    if (e.keyCode == "13") {
      const pokemon = await getPokemon(searchInput.val());

      displayInfo(pokemon);
    }
  })
})


const displayInfo = (pokemon) => {
  const speciesField = $("#species .desc");
  const typeField = $("#type .desc");
  const heightField = $("#height .desc");
  const weightField = $("#weight .desc");
  const evolutionField = $("#evolution .desc");
  const biologyField = $("#bio .desc");
  const imageField = $("#display .pokemon-image");

  const defaultImage = 'https://i.imgur.com/bySvmKH.jpg';
  const defaultText = '...';
  const {
    species = defaultText,
    type = defaultText,
    height = defaultText,
    weight = defaultText,
    evolution = defaultText,
    biology = defaultText,
    imageUrl = defaultImage
  } = pokemon;

  speciesField.text(species);
  typeField.text(type);
  heightField.text(height);
  weightField.text(weight);
  evolutionField.text(evolution);
  biologyField.text(biology);
  imageField.css("background-image", `url(${imageUrl}`);
}

const displaySearchMessage = (value = true) => {
  const mainScreen = $("#display");

  if (value) {
    mainScreen.addClass("is-searching");
  } else {
    mainScreen.removeClass("is-searching");
  }
}

const displayNotFoundMessage = (value = true) => {
  const mainScreen = $("#display");

  if (value) {
    mainScreen.addClass("is-not-found");
  } else {
    mainScreen.removeClass("is-not-found");
  }
}

const getPokemon = async (text) => {
  //const searchTerm = getSearchTerm(text);

  //if (Boolean(searchTerm) === false) {
    //return {};
  //}
  function nftprofile(resturaunt,nftname,hours,location,description,img) {
    this.restaurant = resturaunt;
    this.nftname = nftname;
    this.hours = hours;
    this.location = location;
    this.description = description;
    this.img = img;
  }
  const fake = new nftprofile('Fake Restaurant','Fakey','Fake Hours','Not Real Road','Defends his resturaunt with valor','https://i.imgur.com/sibleZo.png')
  const fake2 = new nftprofile('Evil Restaurant','Evil Fakey','Fake Hours 2','Bad Fake Street','Cheats at card games','https://i.imgur.com/tVnaLYv.png')
  const lemonman = new nftprofile("Del's Lemonade",'Lemon Man','Del Lemonade Hours','Dels Drive','A sweet friend, but a bitter rival','https://i.imgur.com/ufEq45t.png')
  const doughboi = new nftprofile("Iggy's Doughboys",'DoughBoi','Iggy Hours','Iggy Place','Like getting hit by a sack of dough','https://i.imgur.com/zLDORq6.png')
  const nftlist = [fake,fake2,lemonman,doughboi]
  
  displayNotFoundMessage(false); // Hide previous 404 result before starting a new search
  displaySearchMessage();

  var found = -1;
  for(var i=0; i<nftlist.length; i++) {
	  if(nftlist[i].nftname == text) {
		  // __FOUND is set to the index of the element
		  found = i;
		  break;
	  }
  }

  // NFT not found
  if (found == -1) {
    displaySearchMessage(false);
    displayNotFoundMessage();
    return {}
  }

  //const speciesInfo = await getSpeciesInfo(generalInfo.species.url);
  //const evolutionInfo = await getEvolutionInfo(speciesInfo.evolution_chain?.url, generalInfo.name);
  
  const pokemon = {
    name: nftlist[found].nftname,
    species: nftlist[found].nftname,
    type: nftlist[found].restaurant,
    height: '0',
    weight: '0',
    evolution: '0',
    biology: nftlist[found].description,
    imageUrl:nftlist[found].img
  }

  displaySearchMessage(false);

  return pokemon;
}

