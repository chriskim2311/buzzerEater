/* information about jsdocs:
* param: http://usejsdoc.org/tags-param.html#examples
* returns: http://usejsdoc.org/tags-returns.html
*
/**
 * Listen for the document to load and initialize the application
 */
$(document).ready(initializeApp);



/**
 * Define all global variables here.
 */


/***************************************************************************************************
 * initializeApp
 * @params {undefined} none
 * @returns: {undefined} none
 * initializes the application, including adding click handlers and pulling in any data from the server
 */
function initializeApp(){

}

/***************************************************************************************************
 * initMap
 * @params {undefined}
 * @returns  {undefined}
 *
 */
function initMap(){
    var areaOne = {lat: 34.101302, lng: -118.343581};
    var areaTwo = {lat: 34.103300, lng: -118.339200};
    var areaThree = {lat: 34.104600, lng: -118.341800};
    var areaFour = {lat: 34.101700, lng: -118.338200};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: areaOne});// areaOne needs to be the city we are searching
    var markerOne = new google.maps.Marker({position: areaOne, map: map});
    var infowindow = new google.maps.InfoWindow({
        content: 'Wild Wings'
    });
    markerOne.addListener('click', function() {
        infowindow.open(markerOne.get('map'), markerOne);
    });
    // var markerTwo = new google.maps.Marker({position: areaTwo, map: map});
    // var markerThree = new google.maps.Marker({position: areaThree, map: map});
    // var markerFour = new google.maps.Marker({position: areaFour, map: map});

}

// var position = {lat: 34.101302, lng: -118.343581};

var marker = new google.maps.Marker({
    position: {
        lat: 34.101302,
        lng: -118.343581
    },
    map: map
});

// for (var i = 0; i < zomatoResult.length; i++) {
//     var position = {lat: zomatoResult[i]['coordinates']['latitude'], lng: zomatoResult[i]['coordinates']['longitude']};
//     var marker = new google.maps.Marker({
//         position: position,
//         map: map,
//         title: zomatoResult['name']
//     });
//     var infowindow = new google.maps.InfoWindow({
//         content: 'Wild Wings'
//     });
//     markerOne.addListener('click', function() {
//         infowindow.open(markerOne.get('map'), markerOne);
//     });
//
// }

/***************************************************************************************************
 * attachRestaurantInfo
 * @params {undefined}
 * @returns  {undefined}
 *
 */
function attachRestaurantInfo(marker, info){
    var infowindow = new google.maps.InfoWindow({
        content: 'Wild Wings'
    });

    marker.addListener('click', function() {
        infowindow.open(marker.get('map'), marker);
    });

}

/***************************************************************************************************
 * land -
 * @param
 * @return:
 none
 */
function land(){

}


/***************************************************************************************************
 * search_result -
 * @param
 * @return:
 none
 */
function search_result(){

}
/***************************************************************************************************
 * getTwitterData -
 * @param:
 * @returns:
 * @calls:
 */
function getTwitterData(){

}
/***************************************************************************************************
 * storeTwitterData -
 * @param
 * @return
 * @calls
 */
function storeTwitterData(){

}
/***************************************************************************************************
 * getRestaurantInformation - clears out the form values based on inputIds variable
 * @param {undefined} lat, long
 * @return restaurant coordinates and restaurant information
 * @calls initMap
 */
function getRestaurantInformation(lat, long){

}
/***************************************************************************************************
 * renderRestaurants - take in a  object, create html elements from the values and then append the elements
 * into the .student_list tbody
 * @param object of restaurant info
 */
function renderRestaurants(restaurantObj){

}



/***************************************************************************************************
 * renterTwitter -
 * @param
 * @returns
 * @calls
 */
function renderTwitter(studentArray){

}

/***************************************************************************************************
 * getNBAData -
 * @param:
 * @returns
 */
function getScores(array){

}

/***************************************************************************************************
 * updateNBAScores -
 * @param:
 * @returns
 */
function updateNBAScores(){

}
/***************************************************************************************************
 * formatTeamInfo -
 * @param:
 * @returns
 */
function formatTeamInfo(){

}

/***************************************************************************************************
 * functionGenerateScoreboard -
 * @param:
 * @returns
 */
function functionGenerateScoreboard(){

}

