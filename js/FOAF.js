var foaf = $rdf.Namespace("http://xmlns.com/foaf/0.1/");

var FOAF = {
    KNOWS : foaf('knows'),
    PERSON : (personName)=>{return $rdf.sym(foaf('person').value+'/'+personName)},
    NAME : foaf('name'),
    GIVEN_NAME : foaf('givenName'),
    NICK: foaf('nick'),
    MBOX: foaf('mbox'),
    PHONE: foaf('phone'),
    FAMILY_NAME:foaf('familyName'),
    GENDER: foaf('gender'),
    IMG: foaf('img'),
    DEPICTION: foaf('depiction'),
    WEB_LOG: foaf('weblog'),
    HOME_PAGE: foaf('homepage'),
    VORKPLACE: foaf('workplace'),
    STRING: (string)=>{return $rdf.lit(string, 'en')}
}
