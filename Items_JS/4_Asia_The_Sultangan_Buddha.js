// Importa RDFLib e il modulo fs
import { graph, Namespace, literal, namedNode, serialize } from 'rdflib';
import { writeFile } from 'fs';

// Crea un nuovo grafo RDF
const store = graph();

// Definisci i namespace
const CRM = Namespace('http://www.cidoc-crm.org/cidoc-crm/');
const ITO = Namespace('http://www.itemsontology.com/item_features/');
const DBO = Namespace('http://dbpedia.org/ontology/');
const DC = Namespace('http://purl.org/dc/elements/1.1/');
const DCTERMS = Namespace('http://purl.org/dc/terms/');
const GEO = Namespace ('http://www.w3.org/2003/01/geo/wgs84_pos#');
const OWL = Namespace ('https://www.w3.org/2002/07/owl#');
const RDF = Namespace('http://www.w3.org/1999/02/22-rdf-syntax-ns#');
const RDFS = Namespace('http://www.w3.org/2000/01/rdf-schema#');
const SKOS = Namespace ('http://www.w3.org/2004/02/skos/core#');
const XSD = Namespace ('http://www.w3.org/2001/XMLSchema#');
const WDT = Namespace('https://www.wikidata.org/prop/direct/');
const WD = Namespace('https://www.wikidata.org/wiki/');




// Aggiungi tutte le triple al grafo
store.add(WD('Q7636803'), RDF('type'), CRM('E24'));
store.add(WD('Q7636803'), DCTERMS('spatial'), WD('Q721917'));
store.add(WD('Q668'), RDF('type'), CRM('E53'));
store.add(WD('Q7636803'), DC('creator'), WD('Q4233718'));
store.add(WD('Q4233718'), RDF('type'), DCTERMS('Agent'));
store.add(WD('Q7636803'), WDT('P2348'), ITO('Gupta_Pala_Period_sculpture'));
store.add(ITO('Gupta_Pala_Period_sculpture'), RDFS('label'), literal('Gupta-Pala period sculpture')); 
store.add(ITO('Gupta_Pala_Period_sculpture'), RDF('type'), CRM('E2'));
store.add(ITO('Gupta_Pala_Period_sculpture'), DCTERMS('temporal'), literal('6th-7th century'));
store.add(WD('Q7636803'), DC('subject'), literal('Buddhist sculpture'));
store.add(WD('Q7636803'), DC('subject'), literal('Gupta art'));
store.add(WD('Q7636803'), DC('subject'), literal('Buddhist antiquities'));
store.add(WD('Q7636803'), DC('title'), literal('The Sultanganj Buddha statue'));
store.add(WD('Q7636803'), DC('type'), literal('sculpture'));
store.add(WD('Q7636803'), DC('description'), literal('It is a 1,500-year-old large bronze statue of Buddha, significant for its religious and artistic value." it is from the Gupa-Pala transition period and it is considered one of the largest substantially complete copper Buddha figure known from the time.'));
store.add(WD('Q7636803'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P108i_was_produced_by'), CRM('E12'));
store.add(CRM('E12'), CRM('P33'), WD('Q765814'));
store.add(WD('Q765814'), RDF('type'), CRM('E29'));
store.add(WD('Q7636803'), WDT('P1268'), literal('The Buddha is depicted in a standing posture, with his right hand raised in the abhaya mudra, a gesture that symbolizes protection, reassurance, and dispelling fear. His left hand is in a position that likely held a part of his robe". He is shown wearing a simple monk’s robe, draped over both shoulders, a common representation in Buddhist art.'));
store.add(WD('Q7636803'), CRM('P44'), ITO('Well_preserved_state'));
store.add(ITO('Well_preserved_state'), RDF('type'), CRM('E3'));
store.add(ITO('Well_preserved_state'), RDFS('label'), literal('Well preserved state'));
store.add(ITO('Well_preserved_state'), CRM('P3'), literal("Greenish and brown coloration due to natural oxidation. There are few small holes and thin areas in certain parts, particularly near the edges.There are some missing parts,rticularly the fingers of the Buddha's raised right hand, which have been damaged or eroded. The left hand may also show signs of breakage or erosion."));
store.add(WD('Q7636803'), CRM('P43'), WD('Q25288'));
store.add(WD('Q7636803'), CRM('P43'), WD('Q35059'));
store.add(WD('Q7636803'), CRM('P43'), WD('Q208826'));
store.add(WD('Q25288'), CRM('P90'), literal('500', XSD('float')));
store.add(WD('Q25288'), CRM('P91'), literal('kilogram'));
store.add(WD('Q25288'), RDF('type'), CRM('E54'));
store.add(WD('Q35059'), CRM('P90'), literal('1', XSD('float')));
store.add(WD('Q35059'), CRM('P91'), literal('meter'));
store.add(WD('Q35059'), RDF('type'), CRM('E54'));
store.add(WD('Q208826'), CRM('P90'), literal('2.3', XSD('float')));
store.add(WD('Q208826'), CRM('P91'), literal('meter'));
store.add(WD('Q208826'), RDF('type'), CRM('E54'));
store.add(WD('Q7636803'), CRM('P45'), WD('Q753'));
store.add(WD('Q753'), RDF('type'), CRM('E57'));
store.add(WD('Q7636803'), CRM('P52'), WD('Q1799857'));
store.add(WD('Q1799857'), RDF('type'), CRM('E39'));
store.add(WD('Q1799857'), RDF('type'), CRM('E53'));
store.add(WD('Q1799857'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P22i_acquired_title_through'), WD('Q707482'));
store.add(WD('Q707482'), RDF('type'), CRM('E8'));
store.add(WD('Q707482'), DC('date'), literal('1864', XSD('gYear')));
store.add(WD('Q7636803'), CRM('P51'), WD('Q106557778'));
store.add(WD('Q106557778'), RDF('type'), CRM('E39'));
store.add(WD('Q106557778'), WDT('P106'), WD('Q82955'));
store.add(WD('Q106557778'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P23i_surrendered_title_through'), WD('Q707482'));
store.add(WD('Q7636803'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P24i_changed_ownership_through'), WD('Q707482'));
store.add(WD('Q7636803'), WDT('P575'), literal('1861', XSD('gYear')));
store.add(WD('Q7636803'), CRM('P55'), WD('Q1799857'));
store.add(WD('Q1799857'), WDT('P131'), WD('Q2256'));
store.add(WD('Q2256'), RDF('type'), CRM('E53'));
store.add(WD('Q1799857'),  WDT('P10689'), literal('28288365', XSD('integer')));
store.add(WD('Q1799857'), GEO('lat'), literal('52.4803', XSD('float')));
store.add(WD('Q1799857'), GEO('long'), literal('-1.903786', XSD('float')));
store.add(WD('Q1799857'), OWL('sameAs'), namedNode('https://www.openstreetmap.org/way/28288365'));
store.add(WD('Q7636803'), CRM('P26'), WD('Q2256'));
store.add(WD('Q7636803'), CRM('P27'), WD('Q721917'));
store.add(WD('Q721917'), WDT('P17'), WD('Q668'));
store.add(WD('Q721917'), RDF('type'), CRM('E53'));
store.add(WD('Q721917'), WDT('P1566'), literal('8439888', XSD('integer')));
store.add(WD('Q721917'), GEO('lat'), literal('25.23831', XSD('float')));
store.add(WD('Q721917'), GEO('long'), literal('86.73559', XSD('float')));
store.add(WD('Q721917'), OWL('sameAs'), namedNode('http://sws.geonames.org/8439888/'));
store.add(WD('Q7636803'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P25i_moved_by'), WD('Q12772819'));
store.add(WD('Q12772819'), CRM('P17'), ITO('East_Indian_Railway_Construction'));
store.add(ITO('East_Indian_Railway_Construction'), RDFS('label'), literal('East Indian Railway Construction'));
store.add(ITO('East_Indian_Railway_Construction'), RDF('type'), CRM('E7'));
store.add(WD('Q7636803'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P12i_was_present_at'), ITO('East_Indian_Railway_Construction'));
store.add(ITO('East_Indian_Railway_Construction'), DCTERMS('spatial'), WD('Q668'));
store.add(ITO('East_Indian_Railway_Construction'), CRM('P4'), CRM('E52'));
store.add(CRM('E52'), DCTERMS('temporal'), literal('1845-1952')); 
store.add(ITO('East_Indian_Railway_Construction'), CRM('P10'), ITO('British_imperialism_in_China'));
store.add(ITO('British_imperialism_in_China'), RDF('type'), WD('Q7167'));
store.add(WD('Q7167'), RDF('type'), CRM('E2'));
store.add(ITO('British_imperialism_in_China'), RDFS('label'), literal('British imperialism in China'));
store.add(ITO('British_imperialism_in_China'), DCTERMS('temporal'), literal('19th-20th century'));
store.add(ITO('E_B_Harris'), WDT('P61'), WD('Q7636803'));
store.add(ITO('E_B_Harris'), RDF('type'), CRM('E21'));
store.add(ITO('E_B_Harris'), RDFS('label'), literal('E.B.Harris'));
store.add(ITO('E_B_Harris'), WDT('P106'), WD('Q66711686'));
store.add(ITO('E_B_Harris'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P11i_participated_in'), ITO('East_Indian_Railway_Construction'));



// Aggiungi label per classi/entità di Cidoc-crm/Wikidata/DC/DCTerms
store.add(CRM('E24'), RDFS('label'), literal("Physical Human-made thing"));
store.add(CRM('E53'), RDFS('label'), literal('Place'));
store.add(CRM('E2'), RDFS('label'), literal('Temporal Entity'));
store.add(CRM('E12'), RDFS('label'), literal('Production'));
store.add(CRM('E29'), RDFS('label'), literal('Design or procedure'));
store.add(CRM('E3'), RDFS('label'), literal('Condition State'));
store.add(CRM('E54'), RDFS('label'), literal('Dimension'));
store.add(CRM('E39'), RDFS('label'), literal('Actor'));
store.add(CRM('E53'), RDFS('label'), literal('Place'));
store.add(CRM('E57'), RDFS('label'), literal('Material'));
store.add(CRM('E8'), RDFS('label'), literal('Acquisition'));
store.add(CRM('E21'), RDFS('label'), literal('Person'));
store.add(CRM('E7'), RDFS('label'), literal('Activity'));
store.add(CRM('E2'), RDFS('label'), literal('Temporal Entity'));
store.add(CRM('E52'), RDFS('label'), literal("Time-Span"));
store.add(WD('Q668'), RDFS('label'), literal("India"));
store.add(WD('Q4233718'), SKOS('altLabel'), literal('Unknown Artist'));
store.add(WD('Q765814'), RDFS('label'), literal('Lost-wax casting'));
store.add(WD('Q25288'),  RDFS('label'), literal('Weight'));
store.add(WD('Q35059'),  RDFS('label'), literal('Width'));
store.add(WD('Q208826'), RDFS('label'), literal('Height'));
store.add(WD('Q753'), RDFS('label'), literal('Copper'));
store.add(WD('Q1799857'), RDFS('label'), literal('Birmingham Museum and Art Gallery'));
store.add(WD('Q707482'), SKOS('altLabel'), literal('Donation'));
store.add(WD('Q106557778'), RDFS('label'), literal('Samuel Thornton'));
store.add(WD('Q82955'), RDFS('label'), literal('Politician'));
store.add(WD('Q2256'), RDFS('label'), literal('Birmingham'));
store.add(WD('Q721917'), RDFS('label'), literal('Sultanganj'));
store.add(WD('Q12772819'), RDFS('label'), literal('Discovery'));
store.add(WD('Q66711686'), RDFS('label'), literal('Railway Engineer'));
store.add(WD('Q7167'), RDFS('label'), literal("Colonialism"));
store.add(DCTERMS('Agent'), RDFS('label'), literal('Agent'));







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
salvaGrafo('C:\\Users\\HWRUser\\Desktop\\DHDK Course\\Web Design and Technologies\\Vitali project\\rdf_files_graphs\\4_Asia_The_Sultanganj_Buddha.rdf');