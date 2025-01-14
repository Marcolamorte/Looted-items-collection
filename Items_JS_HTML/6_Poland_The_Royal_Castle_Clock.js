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
store.add(ITO('Royal_Castle_Clock'), RDF('type'), CRM('E24'));
store.add(ITO('Royal_Castle_Clock'), DC('title'), literal('The Royal Castle Clock of Warsaw'));
store.add(ITO('Royal_Castle_Clock'), DC('type'), literal('timepiece'));
store.add(ITO('Royal_Castle_Clock'), DCTERMS('created'), literal('1622'));
store.add(ITO('Royal_Castle_Clock'), DC('subject'), literal('Tower clock,'));
store.add(ITO('Royal_Castle_Clock'), DC('subject'), literal('Warsaw History'));
store.add(ITO('Royal_Castle_Clock'), DC('subject'), literal('Baroque Art'));
store.add(ITO('Royal_Castle_Clock'), DCTERMS('spatial'), WD('Q270'));
store.add(WD('Q270'),RDF('type'), CRM('E53'));
store.add(WD('Q270'), WDT('P17'), WD('Q36'));
store.add(WD('Q36'), RDF('type'), CRM('E53'));
store.add(ITO('Royal_Castle_Clock'), DC('creator'), ITO('Gerardo_Priami'));
store.add(ITO('Gerardo_Priami'), RDF('type'), CRM('E21'));
store.add(ITO('Gerardo_Priami'), RDF('type'), DCTERMS('Agent'));
store.add(ITO('Gerardo_Priami'), RDFS('label'), literal('Gerardo Priami'));
store.add(ITO('Royal_Castle_Clock'), DC('creator'), ITO('Jan_Sulej'));
store.add(ITO('Jan_Sulej'), RDF('type'), CRM('E21'));
store.add(ITO('Jan_Sulej'), RDFS('label'), literal('Jan Sulej'));
store.add(ITO('Jan_Sulej'), WDT('P106'), WD('Q2700922'));
store.add(ITO('Jan_Sulej'), RDF('type'), DCTERMS('Agent'));
store.add(ITO('Royal_Castle_Clock'), DC('description'), literal('The Royal Castle Clock in Warsaw is an iconic timepiece located within the Royal Castle. It is a masterpiece of medieval craftsmanship that symbolizes the rich history and cultural heritage of Poland but it was looted during military conflicts.'));
store.add(ITO('Royal_Castle_Clock'), CRM('P44'), ITO('Well_preserved_state'));
store.add(ITO('Well_preserved_state'), RDFS('label'), literal('Well preserved state'));
store.add(ITO('Well_preserved_state'), RDF('type'), CRM('E3'));
store.add(ITO('Well_preserved_state'), CRM('P3'), literal('The clock was almost entirely destroyed during World War II but it was reconstructed and now is still working and keeping time accurately.'));
store.add(ITO('Royal_Castle_Clock'), CRM('P55'), WD('Q756098'));
store.add(WD('Q756098'), WDT('P131'), WD('Q270'));
store.add(WD('Q756098'), RDF('type'), CRM('E53'));
store.add(WD('Q756098'), RDF('type'), WD('Q33506'));
store.add(WD('Q756098'), RDF('type'), WD('Q35112127'));
store.add(WD('Q756098'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P71i_is_listed_in'), WD('Q15981101'));
store.add(WD('Q756098'), WDT('P402'), literal('64436', XSD('integer')));
store.add(WD('Q756098'), GEO('lat'), literal('52.247778', XSD('float')));
store.add(WD('Q756098'), GEO('long'), literal('21.014167', XSD('float')));
store.add(WD('Q756098'), OWL('sameAs'), namedNode('https://www.openstreetmap.org/relation/64436'));
store.add(ITO('Royal_Castle_Clock'), CRM('P43'), WD('Q208826'));
store.add(WD('Q208826'), CRM('P90'), literal('2.5', XSD('float')));
store.add(WD('Q208826'), CRM('P91'), literal('meter'));
store.add(WD('Q208826'), RDF('type'), CRM('E54'));
store.add(ITO('Royal_Castle_Clock'), CRM('P43'), WD('Q35059'));
store.add(WD('Q35059'), CRM('P90'), literal('1', XSD('float')));
store.add(WD('Q35059'), CRM('P91'), literal('meter'));
store.add(WD('Q35059'), RDF('type'), CRM('E54'));
store.add(ITO('Royal_Castle_Clock'), CRM('P43'), WD('Q3250078'));
store.add(WD('Q3250078'), CRM('P90'), literal('1', XSD('float')));
store.add(WD('Q3250078'), CRM('P91'), literal('meter'));
store.add(WD('Q3250078'), RDF('type'), CRM('E54'));
store.add(ITO('Royal_Castle_Clock'), CRM('P45'), WD('Q287'));
store.add(WD('Q287'), RDF('type'), CRM('E57'));
store.add(ITO('Royal_Castle_Clock'), CRM('P45'), WD('Q39782'));
store.add(WD('Q39782'), RDF('type'), CRM('E57'));
store.add(ITO('Royal_Castle_Clock'), CRM('P45'), WD('Q34095'));
store.add(WD('Q34095'), RDF('type'), CRM('E57'));
store.add(ITO('Royal_Castle_Clock'), CRM('P45'), WD('Q677'));
store.add(WD('Q677'), RDF('type'), CRM('E57'));
store.add(ITO('Royal_Castle_Clock'), CRM('P52'), WD('Q1338983'));
store.add(WD('Q1338983'), RDF('type'), CRM('E39'));
store.add(ITO('Royal_Castle_Clock'), WDT('P3081'), WD('Q678146'));
store.add(WD('Q678146'), RDF('type'), CRM('E6'));
store.add(WD('Q678146'), DC('date'), literal('1939', XSD('gYear')));
store.add(WD('Q678146'), CRM('P14'), WD('Q128781'));
store.add(WD('Q678146'), CRM('P10'), WD('Q362'));
store.add(WD('Q362'), RDF('type'), CRM('E5'));
store.add(ITO('Royal_Castle_Clock'),  namedNode('http://www.cidoc-crm.org/cidoc-crm/P13i_was_destroyed_by'), WD('Q179057'));
store.add(WD('Q179057'), DC('date'), literal('1944', XSD('gYear')));
store.add(WD('Q179057'), RDF('type'), CRM('E6'));
store.add(WD('Q179057'), CRM('P10'), WD('Q362'));
store.add(WD('Q179057'), CRM('P14'), WD('Q128781'));
store.add(ITO('Royal_Castle_Clock'),  namedNode('http://www.cidoc-crm.org/cidoc-crm/P31i_was_modified_by'), WD('Q3422086'));
store.add(WD('Q3422086'), RDF('type'), CRM('E7'));
store.add(WD('Q3422086'), CRM('P4'), ITO('E52_Time_Span_1'));
store.add(ITO('E52_Time_Span_1'), RDFS('label'), literal('Time Span 1'));
store.add(ITO('E52_Time_Span_1'), RDFS('subClassOf'), CRM('E52'));
store.add(ITO('E52_Time_Span_1'), DCTERMS('temporal'), literal('1970-1980'));
store.add(ITO('Royal_Castle_Clock'),  namedNode('http://www.cidoc-crm.org/cidoc-crm/P31i_was_modified_by'), WD('Q192623'));
store.add(WD('Q192623'), RDF('type'), CRM('E7'));
store.add(WD('Q192623'), CRM('P14'), WD('Q783911'));
store.add(WD('Q783911'), RDF('type'), CRM('E39'));
store.add(WD('Q783911'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P11i_participated_in'), WD('Q631163'));
store.add(WD('Q192623'), CRM('P17'), WD('Q631163'));
store.add(WD('Q631163'), RDF('type'), CRM('E5'));
store.add(WD('Q631163'), RDF('type'), WD('Q467011'));
store.add(WD('Q631163'), DCTERMS('spatial'), WD('Q36'));
store.add(WD('Q631163'), CRM('P4'), ITO('E52_Time_Span_2'));
store.add(ITO('E52_Time_Span_2'), RDFS('label'), literal('Time Span 2'));
store.add(ITO('E52_Time_Span_2'), RDFS('subClassOf'), CRM('E52'));
store.add(ITO('E52_Time_Span_2'), DCTERMS('temporal'), literal('1655-1660'));
store.add(ITO('Royal_Castle_Clock'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P12i_was_present_at'), WD('Q631163'));



// Aggiungi label per classi/entità di Cidoc-crm/Wikidata/DC/DCTerms
store.add(CRM('E24'), RDFS('label'), literal("Physical Human-made thing"));
store.add(CRM('E3'), RDFS('label'), literal('Condition State'));
store.add(CRM('E53'), RDFS('label'), literal('Place')); 
store.add(CRM('E21'), RDFS('label'), literal('Person'));
store.add(CRM('E54'), RDFS('label'), literal('Dimension'));
store.add(CRM('E57'), RDFS('label'), literal('Material'));
store.add(CRM('E39'), RDFS('label'), literal('Actor'));
store.add(CRM('E7'), RDFS('label'), literal('Activity'));
store.add(CRM('E5'), RDFS('label'), literal('Event'));
store.add(CRM('E6'), RDFS('label'), literal('Destruction'));
store.add(CRM('E52'), RDFS('label'), literal("Time-Span"));
store.add(WD('Q270'), RDFS('label'), literal('Warsaw'));
store.add(WD('Q36'), RDFS('label'), literal('Poland'));
store.add(WD('Q2700922'), RDFS('label'), literal('Clockmaker'));
store.add(WD('Q756098'), RDFS('label'), literal('Royal Castle in Warsaw'));
store.add(WD('Q33506'), RDFS('label'), literal('Museum'));
store.add(WD('Q35112127'), RDFS('label'), literal('Historic Building'));
store.add(WD('Q15981101'), SKOS('altLabel'), literal('list of Historic Monuments in Poland'));
store.add(WD('Q35059'),  RDFS('label'), literal('Width'));
store.add(WD('Q3250078'),  RDFS('label'), literal('Depth'));
store.add(WD('Q208826'), RDFS('label'), literal('Height'));
store.add(WD('Q287'), RDFS('label'), literal('Wood'));
store.add(WD('Q39782'), RDFS('label'), literal('Brass'));
store.add(WD('Q34095'), RDFS('label'), literal('Bronze'));
store.add(WD('Q677'), RDFS('label'), literal('Iron'));
store.add(WD('Q1338983'), SKOS('altLabel'), literal('Polish Government'));
store.add(WD('Q678146'), RDFS('label'), literal('Bombardment'));
store.add(WD('Q128781'), SKOS('altLabel'), literal('Armed Forces of Germany'));
store.add(WD('Q362'), RDFS('label'), literal('World War II'));
store.add(WD('Q179057'), RDFS('label'), literal('Explosion'));
store.add(WD('Q3422086'), RDFS('label'), literal('Post-war Reconstruction'));
store.add(WD('Q192623'), RDFS('label'), literal('Looting'));
store.add(WD('Q783911'), RDFS('label'), literal('Swedish Armed Forces'));
store.add(WD('Q631163'), RDFS('label'), literal('Deluge'));
store.add(WD('Q467011'), RDFS('label'), literal('Invasion'));
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
salvaGrafo('C:\\Users\\HWRUser\\Desktop\\DHDK Course\\Web Design and Technologies\\Vitali project\\rdf_files_graphs\\6_Poland_The_Royal_Castle_Clock.rdf');