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
store.add(WD('Q158058'), RDF('type'), CRM('E24'));
store.add(WD('Q158058'), DC('subject'), literal('Pergamum Altar of Zeus'));
store.add(WD('Q158058'), DC('subject'), literal('Hellenism'));
store.add(WD('Q158058'), DC('subject'), literal('Marble sculpture'));
store.add(WD('Q158058'), DC('title'), literal('The Altar of Pergamon'));
store.add(WD('Q158058'), DC('description'), literal ("The Altar of Pergamon (also known as the Pergamon Altar) is one of the most famous and monumental structures from ancient Greece.Built during the Hellenistic period in the ancient city of Pergamon (in present-day Turkey),  the altar is considered one of the greatest achievements of Hellenistic art and architecture. It is a Mythological and cultural symbol, focusing on themes of divine order, power, and victory. Its most famous feature, the Gigantomachy frieze, depicts the legendary battle between the Olympian gods and the Giants, a central myth in ancient Greek cosmology. This battle represents the triumph of divine order and civilization (Gods) over chaos and barbarism (Giants)."));
store.add(WD('Q158058'), DC('type'), literal('altar'));
store.add(WD('Q158058'), DCTERMS('created'), literal('197–156 BCE'));
store.add(WD('Q158058'), DCTERMS('spatial'), WD('Q18986'));
store.add(WD('Q18986'), RDF('type'), CRM('E53'));
store.add(WD('Q18986'), WDT('P17'), WD('Q43'));
store.add(WD('Q43'), RDF('type'), CRM('E53'));
store.add(WD('Q18986'), WDT('P31'), WD('Q93342462'));
store.add(WD('Q158058'), DC('creator'), WD('Q270678'));
store.add(WD('Q270678'), RDF('type'), DCTERMS('Agent'));
store.add(WD('Q270678'), RDF('type'), WD('Q116'));
store.add(WD('Q270678'), RDF('type'), CRM('E39'));
store.add(WD('Q270678'), DC('description'), literal('King of Pergamon from 197 to 159 BC'));
store.add(WD('Q158058'), CRM('P44'), ITO('Good_State_Overall'));
store.add(ITO('Good_State_Overall'), RDF('type'), CRM('E3'));
store.add(ITO('Good_State_Overall'), RDFS('label'), literal('Good State Overall'));
store.add(ITO('Good_State_Overall'), CRM('P3'), literal("It has suffered from wear over time, particularly due to weathering, environmental exposure, and historical damage before and during its excavation."));
store.add(WD('Q158058'), CRM('P43'), WD('Q35059'));
store.add(WD('Q35059'), CRM('P90'), literal('35.64', XSD('float')));
store.add(WD('Q35059'), CRM('P91'), literal('meter'));
store.add(WD('Q35059'), RDF('type'), CRM('E54'));
store.add(WD('Q158058'), CRM('P43'), WD('Q3250078'));
store.add(WD('Q3250078'), CRM('P90'), literal('33.40', XSD('float')));
store.add(WD('Q3250078'), CRM('P91'), literal('meter'));
store.add(WD('Q3250078'), RDF('type'), CRM('E54'));
store.add(WD('Q158058'), CRM('P45'), WD('Q40861'));
store.add(WD('Q40861'), RDF('type'), CRM('E57'));
store.add(WD('Q158058'), CRM('P52'), WD('Q700216'));
store.add(WD('Q700216'), RDF('type'), CRM('E53'));
store.add(WD('Q158058'), CRM('P50'), WD('Q157298'));
store.add(WD('Q157298'), RDF('type'), CRM('E39'));
store.add(WD('Q157298'), RDF('type'), CRM('E53'));
store.add(WD('Q157298'), RDF('type'), WD('Q33506'));
store.add(WD('Q157298'), WDT('P361'), WD('Q700216'));
store.add(WD('Q157298'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P14i_performed'), ITO('Opening_Exhibition'));
store.add(ITO('Opening_Exhibition'), RDF('type'), CRM('E7'));
store.add(ITO('Opening_Exhibition'), RDFS('label'), literal('Opening Exhibition'));
store.add(ITO('Opening_Exhibition'), WDT('P1619'), literal('1930', XSD('gYear')));
store.add(WD('Q158058'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P12i_was_present_at'), ITO('Opening_Exhibition'));
store.add(WD('Q158058'), CRM('P55'), WD('Q157298'));
store.add(WD('Q157298'), WDT('P276'), WD('Q64'));
store.add(WD('Q157298'), WDT('P17'), WD('Q183'));
store.add(WD('Q157298'), WDT('P1566'), literal('7911193', XSD('integer')));
store.add(WD('Q157298'), GEO('lat'), literal('52.5211', XSD('float')));
store.add(WD('Q157298'), GEO('long'), literal('13.39669', XSD('float')));
store.add(WD('Q157298'), OWL('sameAs'), namedNode('http://sws.geonames.org/7911193/'));
store.add(WD('Q158058'), CRM('P27'), WD('Q18986'));
store.add(WD('Q18986'), WDT('P1566'), literal('9587350', XSD('integer')));
store.add(WD('Q18986'), GEO('lat'), literal('39.13212', XSD('float')));
store.add(WD('Q18986'), GEO('long'), literal('27.18412', XSD('float')));
store.add(WD('Q18986'), OWL('sameAs'), namedNode('http://sws.geonames.org/9587350/'));
store.add(WD('Q158058'), CRM('P26'), WD('Q64'));
store.add(WD('Q158058'), CRM('P51'), WD('Q270678'));
store.add(WD('Q270678'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P23i_surrendered_title_through'), WD('Q23009442'));
store.add(WD('Q23009442'), RDF('type'), CRM('E7'));
store.add(WD('Q23009442'), CRM('P17'), WD('Q959782'));
store.add(WD('Q959782'), RDF('type'), CRM('E5'));
store.add(WD('Q959782'), CRM('P4'), CRM('E52'));
store.add(CRM('E52'), DCTERMS('temporal'), literal('1878 - 1886'));
store.add(WD('Q959782'), CRM('P10'), WD('Q17631847'));
store.add(WD('Q17631847'), RDF('type'), CRM('E2'));
store.add(WD('Q17631847'), RDF('type'), WD('Q7167'));
store.add(WD('Q17631847'), DCTERMS('temporal'), literal('19th - 20th century'));
store.add(WD('Q23009442'), CRM('P14'), WD('Q64445'));
store.add(WD('Q64445'), RDF('type'), CRM('E39'));
store.add(WD('Q64445'), WDT('P106'), WD('Q3621491'));
store.add(WD('Q64445'), WDT('P61'), WD('Q158058'));
store.add(WD('Q64445'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P11i_participated_in'), WD('Q959782'));
store.add(WD('Q158058'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P25i_moved_by'), WD('Q23009442'));
store.add(WD('Q158058'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P24i_changed_ownership_through'), WD('Q23009442'));
store.add(WD('Q158058'), WDT('P575'), literal('1878', XSD('gYear')));
store.add(WD('Q158058'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P12i_was_present_at'), WD('Q959782'));

// Aggiungi label per classi/entità di Cidoc-crm/Wikidata/DC/DCTerms
store.add(CRM('E24'), RDFS('label'), literal("Physical Human-made thing"));
store.add(CRM('E53'), RDFS('label'), literal('Place')); 
store.add(CRM('E3'), RDFS('label'), literal('Condition State'));
store.add(CRM('E54'), RDFS('label'), literal('Dimension'));
store.add(CRM('E57'), RDFS('label'), literal('Material'));
store.add(CRM('E39'), RDFS('label'), literal('Actor'));
store.add(CRM('E7'), RDFS('label'), literal('Activity'));
store.add(CRM('E5'), RDFS('label'), literal('Event'));
store.add(CRM('E52'), RDFS('label'), literal("Time-Span"));
store.add(CRM('E2'), RDFS('label'), literal("Temporal Entity"));
store.add(WD('Q18986'), RDFS('label'), literal("Pergamon"));
store.add(WD('Q43'), RDFS('label'), literal("Turkey"));
store.add(WD('Q93342462'), RDFS('label'), literal('Ancient Greek archaeological site'));
store.add(WD('Q270678'), RDFS('label'), literal('Eumenes II'));
store.add(WD('Q116'), RDFS('label'), literal('Monarch'));
store.add(WD('Q35059'),  RDFS('label'), literal('Width'));
store.add(WD('Q3250078'),  RDFS('label'), literal('Depth'));
store.add(WD('Q40861'),  RDFS('label'), literal('Marble'));
store.add(WD('Q700216'),   SKOS('altLabel'), literal('Berlin State Museums'));
store.add(WD('Q157298'),  RDFS('label'), literal('Pergamon Museum'));
store.add(WD('Q33506'), RDFS('label'), literal('Museum'));
store.add(WD('Q23009442'), RDFS('label'), literal('Removal'));
store.add(WD('Q959782'), RDFS('label'), literal('Archaeological Excavation'));
store.add(WD('Q17631847'), RDFS('label'), literal('European Colonialism'));
store.add(WD('Q7167'), RDFS('label'), literal('Colonialism'));
store.add(WD('Q64445'), RDFS('label'), literal('Carl Humann'));
store.add(WD('Q3621491'), RDFS('label'), literal('Archeologist'));
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
salvaGrafo('C:\\Users\\HWRUser\\Desktop\\DHDK Course\\Web Design and Technologies\\Vitali project\\rdf_files_graphs\\13_Europe_The_Altar_of_Pergamon.rdf');