// Importa RDFLib e il modulo fs
import { graph, Namespace, literal, namedNode, serialize } from 'rdflib';
import { writeFile } from 'fs';



// Definisci i namespace
const CRM = Namespace('http://www.cidoc-crm.org/cidoc-crm/');
const ITO = Namespace('http://www.itemsontology.com/item_features/');
const DBO = Namespace('http://dbpedia.org/ontology/');
const DC = Namespace('http://purl.org/dc/elements/1.1/');
const DCTERMS = Namespace('http://purl.org/dc/terms/');
const GEO = Namespace ('http://www.w3.org/2003/01/geo/wgs84_pos#')
const OWL = Namespace ('https://www.w3.org/2002/07/owl#');
const RDF = Namespace('http://www.w3.org/1999/02/22-rdf-syntax-ns#');
const RDFS = Namespace('http://www.w3.org/2000/01/rdf-schema#');
const SKOS = Namespace ('http://www.w3.org/2004/02/skos/core#');
const XSD = Namespace ('http://www.w3.org/2001/XMLSchema#');
const WDT = Namespace('https://www.wikidata.org/prop/direct/');
const WD = Namespace('https://www.wikidata.org/wiki/');


// Crea un nuovo grafo RDF
const store = graph();


// Aggiungi tutte le triple al grafo
store.add(ITO('Throne_of_King_Glèlè'), RDF('type'), CRM('E24'));
store.add(ITO('Throne_of_King_Glèlè'), RDFS('label'), literal('Throne of King Glèlè'));
store.add(ITO('Throne_of_King_Glèlè'), DC('title'), literal('Throne of King Glelè of Dahomey'));
store.add(ITO('Throne_of_King_Glèlè'), DC('type'), literal('sculpture'));
store.add(ITO('Throne_of_King_Glèlè'), DCTERMS('created'), literal('19th century'));
store.add(ITO('Throne_of_King_Glèlè'), DC('subject'), literal('Thrones'));
store.add(ITO('Throne_of_King_Glèlè'), DC('subject'), literal('Dahomey (Kingdom)'));
store.add(ITO('Throne_of_King_Glèlè'), DC('subject'), literal('African art'));
store.add(ITO('Throne_of_King_Glèlè'), DC('description'), literal('The Throne of King Glèlè is a significant cultural artifact from the Kingdom of Dahomey, a  symbol of the monarchy representing power and cultural heritage.This throne, along with other royal items from the Kingdom, is often highlighted for its intricate craftsmanship and symbolic importance, reflecting the themes of power spirituality, and the king’s association with animals, which were significant in Dahomean culture.'));
store.add(ITO('Throne_of_King_Glèlè'), DCTERMS('spatial'), WD('Q468814'));
store.add(WD('Q468814'), RDF('type'), CRM('E53'));
store.add(WD('Q468814'), WDT('P17'), WD('Q962'));
store.add(WD('Q962'), RDF('type'), CRM('E53'));
store.add(ITO('Throne_of_King_Glèlè'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P108i_was_produced_by'), CRM('E12'));
store.add(CRM('E12'), CRM('P33'), WD('Q337907'));
store.add(WD('Q337907'), RDF('type'), CRM('E29'));
store.add(ITO('Throne_of_King_Glèlè'), DC('creator'), ITO('Dahomey_Artisans'));
store.add(ITO('Dahomey_Artisans'), RDFS('label'), literal('Dahomey Artisans'));
store.add(ITO('Dahomey_Artisans'), RDF('type'), DCTERMS('Agent'));
store.add(ITO('Dahomey_Artisans'), RDF('type'), WD('Q1294787'));
store.add(ITO('Throne_of_King_Glèlè'), CRM('P44'), ITO('Well_preserved_state'));
store.add(ITO('Well_preserved_state'), RDF('type'), CRM('E3'));
store.add(ITO('Well_preserved_state'), RDFS('label'), literal('Well preserved state'));
store.add(ITO('Throne_of_King_Glèlè'), CRM('P43'), WD('Q208826'));
store.add(WD('Q208826'), CRM('P90'), literal('188', XSD('float')));
store.add(WD('Q208826'), CRM('P91'), literal('centimeter'));
store.add(WD('Q208826'), RDF('type'), CRM('E54'));
store.add(ITO('Throne_of_King_Glèlè'), CRM('P43'), WD('Q35059'));
store.add(WD('Q35059'), CRM('P90'), literal('97', XSD('float')));
store.add(WD('Q35059'), CRM('P91'), literal('centimeter'));
store.add(WD('Q35059'), RDF('type'), CRM('E54'));
store.add(ITO('Throne_of_King_Glèlè'), CRM('P43'), WD('Q3250078'));
store.add(WD('Q3250078'), CRM('P90'), literal('75', XSD('float')));
store.add(WD('Q3250078'), CRM('P91'), literal('centimeter'));
store.add(WD('Q3250078'), RDF('type'), CRM('E54'));
store.add(ITO('Throne_of_King_Glèlè'), CRM('P45'), WD('Q287'));
store.add(WD('Q287'), RDF('type'), CRM('E57'));
store.add(ITO('Throne_of_King_Glèlè'), CRM('P45'), WD('Q11426'));
store.add(WD('Q11426'), RDF('type'), CRM('E57'));
store.add(ITO('Throne_of_King_Glèlè'), CRM('P45'), WD('Q161179'));
store.add(WD('Q161179'), RDF('type'), CRM('E57'));
store.add(ITO('Throne_of_King_Glèlè'), CRM('P51'), WD('Q167863'));
store.add(ITO('Throne_of_King_Glèlè'), CRM('P53'), WD('Q167863'));
store.add(WD('Q167863'), RDF('type'), CRM('E53'));
store.add(WD('Q167863'), RDF('type'), CRM('E39'));
store.add(WD('Q167863'), WDT('P131'), WD('Q90'));
store.add(WD('Q90'), RDF('type'), CRM('E53'));
store.add(WD('Q90'), WDT('P17'), WD('Q142'));
store.add(WD('Q142'), RDF('type'), CRM('E53'));
store.add(WD('Q167863'),  WDT('P10689'), literal('17954721', XSD('integer')));
store.add(WD('Q167863'), GEO('lat'), literal('48.860833', XSD('float')));
store.add(WD('Q167863'), GEO('long'), literal('2.2975', XSD('float')));
store.add(WD('Q167863'), OWL('sameAs'), namedNode('https://www.openstreetmap.org/way/17954721'));
store.add(WD('Q167863'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P23i_surrendered_title_through'), WD('Q25450340'));
store.add(WD('Q25450340'), RDF('type'), CRM('E8'));
store.add(WD('Q25450340'), DC('date'), literal('2021-11-09', XSD('date')));
store.add(ITO('Throne_of_King_Glèlè'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P24i_changed_ownership_through'), WD('Q25450340'));
store.add(ITO('Throne_of_King_Glèlè'), CRM('P52'), WD('Q7110333'));
store.add(ITO('Throne_of_King_Glèlè'), CRM('P55'), WD('Q7110333'));
store.add(WD('Q7110333'), RDF('type'), CRM('E53'));
store.add(WD('Q7110333'), RDF('type'), CRM('E39'));
store.add(WD('Q7110333'), WDT('P131'), WD('Q850031'));
store.add(WD('Q850031'), WDT('P17'), WD('Q962'));
store.add(WD('Q850031'), RDF('type'), CRM('E53'));
store.add(WD('Q850031'), WDT('P1566'), literal('2392308', XSD('integer')));
store.add(WD('Q850031'), GEO('lat'), literal('6.36307', XSD('float')));
store.add(WD('Q850031'), GEO('long'), literal('2.08506', XSD('float')));
store.add(WD('Q850031'), OWL('sameAs'), namedNode('http://sws.geonames.org/2392308/'));
store.add(ITO('Throne_of_King_Glèlè'), CRM('P26'), WD('Q142'));
store.add(ITO('Throne_of_King_Glèlè'), CRM('P27'), WD('Q468814'));
store.add(WD('Q468814'), WDT('P1566'), literal('2395915', XSD('integer')));
store.add(WD('Q468814'), GEO('lat'), literal('7.18286', XSD('float')));
store.add(WD('Q468814'), GEO('long'), literal('1.99119', XSD('float')));
store.add(WD('Q468814'), OWL('sameAs'), namedNode('http://sws.geonames.org/2395915/'));
store.add(ITO('Throne_of_King_Glèlè'), CRM('P51'), WD('Q718588'));
store.add(WD('Q718588'), RDF('type'), CRM('E21'));
store.add(WD('Q718588'), RDF('type'), CRM('E39'));
store.add(WD('Q718588'), RDF('type'), WD('Q116'));
store.add(WD('Q718588'), DC('description'), literal('King of Dahomey'));
store.add(WD('Q718588'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P23i_surrendered_title_through'), WD('Q192623'));
store.add(WD('Q192623'), RDF('type'), CRM('E7'));
store.add(WD('Q192623'), CRM('P17'), WD('Q2090475'));
store.add(WD('Q2090475'), RDF('type'), CRM('E5'));
store.add(WD('Q2090475'), DCTERMS('spatial'), WD('Q468814'));
store.add(WD('Q2090475'),  CRM('P10'), WD('Q179848'));
store.add(WD('Q179848'), RDF('type'), WD('Q7167'));
store.add(WD('Q179848'), RDF('type'), CRM('E2'));
store.add(WD('Q179848'), DCTERMS('temporal'), literal('1880-1914'));
store.add(WD('Q2090475'),  CRM('P4'), CRM('E52'));
store.add(CRM('E52'), DC('date'), literal('1892-07-04/1894-01-15'));
store.add(WD('Q192623'), CRM('P14'), WD('Q1076619'));
store.add(WD('Q1076619'), RDF('type'), CRM('E39'));
store.add(WD('Q1076619'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P11i_participated_in'), WD('Q2090475'));
store.add(ITO('Throne_of_King_Glèlè'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P24i_changed_ownership_through'), WD('Q192623'));
store.add(ITO('Throne_of_King_Glèlè'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P25i_moved_by'), WD('Q192623'));
store.add(ITO('Throne_of_King_Glèlè'),  namedNode('http://www.cidoc-crm.org/cidoc-crm/P12i_was_present_at'), WD('Q2090475'));

// Aggiungi label per classi/entità di Cidoc-crm/Wikidata/DC/DCTerms
store.add(CRM('E24'), RDFS('label'), literal("Physical Human-made thing"));
store.add(CRM('E12'), RDFS('label'), literal('Production'));
store.add(CRM('E29'), RDFS('label'), literal('Design or Procedure'));
store.add(CRM('E3'), RDFS('label'), literal('Condition State'));
store.add(CRM('E54'), RDFS('label'), literal('Dimension'));
store.add(CRM('E57'), RDFS('label'), literal('Material'));
store.add(CRM('E53'), RDFS('label'), literal('Place')); 
store.add(CRM('E39'), RDFS('label'), literal('Actor'));
store.add(CRM('E8'), RDFS('label'), literal('Acquisition'));
store.add(CRM('E21'), RDFS('label'), literal('Person'));
store.add(CRM('E7'), RDFS('label'), literal('Activity'));
store.add(CRM('E5'), RDFS('label'), literal('Event'));
store.add(CRM('E2'), RDFS('label'), literal('Temporal Entity'));
store.add(CRM('E52'), RDFS('label'), literal("Time-Span"));
store.add(WD('Q468814'), SKOS('altLabel'), literal('Kingdom of Dahomey'));
store.add(WD('Q962'), SKOS('altLabel'), literal('Republic of Benin'));
store.add(WD('Q337907'), RDFS('label'), literal('Wood Carving'));
store.add(WD('Q1294787'), RDFS('label'), literal('Artisan'));
store.add(WD('Q3250078'),  RDFS('label'), literal('Depth'));
store.add(WD('Q35059'),  RDFS('label'), literal('Width'));
store.add(WD('Q208826'), RDFS('label'), literal('Height'));
store.add(WD('Q287'), RDFS('label'), literal('Wood'));
store.add(WD('Q11426'), RDFS('label'), literal('Metal'));
store.add(WD('Q161179'), RDFS('label'), literal('Pigment'));
store.add(WD('Q167863'), RDFS('label'), literal('Musée du quai Branly'));
store.add(WD('Q90'), RDFS('label'), literal('Paris'));
store.add(WD('Q142'), RDFS('label'), literal('France'));
store.add(WD('Q25450340'), RDFS('label'), literal('Change of ownership'));
store.add(WD('Q7110333'), RDFS('label'), literal('Ouidah Museum of History '));
store.add(WD('Q850031'), RDFS('label'), literal('Ouidah'));
store.add(WD('Q718588'), RDFS('label'), literal('Glèlè'));
store.add(WD('Q116'), RDFS('label'), literal('Monarch'));
store.add(WD('Q192623'), RDFS('label'), literal('Looting'));
store.add(WD('Q2090475'), RDFS('label'), literal('Second Franco-Dahomean War'));
store.add(WD('Q179848'), RDFS('label'), literal('The Scramble for Africa'));
store.add(WD('Q7167'), RDFS('label'), literal("Colonialism"));
store.add(WD('Q1076619'), RDFS('label'), literal("French Army"));
store.add (DCTERMS('Agent'), RDFS('label'), literal('Agent'));


// Funzione per serializzare e salvare il grafo come file .rdf
function salvaGrafo(percorsoOutput) {
    serialize(null, store, 'https://www.example.org/', 'application/rdf+xml', (err, result) => {
        if (err) {
            console.error('Errore durante la serializzazione:', err);
        } else {
            writeFile(percorsoOutput, result, (err) => {
                if (err) {
                    console.error('Errore durante il salvataggio del file:', err);
                } else {
                    console.log(`File RDF salvato con successo come "${percorsoOutput}"`);
                }
            });
        }
    });
}

// Salva il file RDF
salvaGrafo('C:\\Users\\HWRUser\\Desktop\\DHDK Course\\Web Design and Technologies\\Vitali project\\rdf_files_graphs\\8_Africa_The_Throne_of_King_Glele.rdf');