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
store.add(WD('Q2040958'), RDF('type'), CRM('E24'));
store.add(WD('Q2040958'), DCTERMS('isPartOf'), WD('Q20350'));
store.add(WD('Q20350'), DC('description'), literal('They are massive stone statues, carved by the Rapa Nui people, represent the ancestors of the islanders and reflect their deep spiritual beliefs and complex society.'));
store.add(WD('Q2040958'), DC('type'), literal('statue'));
store.add(WD('Q2040958'), DCTERMS('created'), literal('1000 -1600 AD'));
store.add(WD('Q2040958'), DC('subject'), literal('Rapa Nui (Easter Island people)'));
store.add(WD('Q2040958'), DC('subject'), literal('Moai (Megalithic monuments)'));
store.add(WD('Q2040958'), DC('subject'), literal('Easter Island--Antiquities'));
store.add(WD('Q2040958'), DC('title'), literal("The Hoa Hakananai'a Statue"));
store.add(WD('Q2040958'), DC('description'), literal ("The Moai statue known as Hoa Hakananai’a is one of the most famous and significant artifacts representing the Rapa Nui culture, symbolizing ancestral worship and the island’s culture and religious practices.The name Hoa Hakananai’a translates roughly to 'lost, stolen, or hidden friend'in the Rapa Nui language, highlighting the cultural significance of the statue"));
store.add(WD('Q2040958'), DCTERMS('spatial'), WD('Q1551834'));
store.add(WD('Q1551834'), RDF('type'), CRM('E53'));
store.add(WD('Q1551834'), WDT('P131'), WD('Q9009773'));
store.add(WD('Q9009773'), RDF('type'), CRM('E53'));
store.add(WD('Q9009773'), WDT('P17'), WD('Q298'));
store.add(WD('Q298'), RDF('type'), CRM('E53'));
store.add(WD('Q2040958'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P108i_was_produced_by'), CRM('E12'));
store.add(CRM('E12'), CRM('P33'), WD('Q42195'));
store.add(WD('Q42195'), RDF('type'), CRM('E29'));
store.add(WD('Q2040958'), DC('creator'), WD('Q852486'));
store.add(WD('Q852486'), RDF('type'), DCTERMS('Agent'));
store.add(WD('Q852486'), RDF('type'), CRM('E39'));
store.add(WD('Q2040958'), CRM('P44'), ITO('Good_State_Overall'));
store.add(ITO('Good_State_Overall'), RDF('type'), CRM('E3'));
store.add(ITO('Good_State_Overall'), RDFS('label'), literal('Good State Overall'));
store.add (ITO('Good_State_Overall'), CRM('P3'), literal("Minor surface erosion. The carvings on the back of the statue, which depict symbols from the Tangata Manu (Birdman) cult, remain visible, though they show some signs of wear due to age."));
store.add(WD('Q2040958'), CRM('P43'), WD('Q25288'));
store.add(WD('Q2040958'), CRM('P43'), WD('Q35059'));
store.add(WD('Q2040958'), CRM('P43'), WD('Q208826'));
store.add(WD('Q2040958'), CRM('P43'), WD('Q37221'));
store.add(WD('Q25288'), CRM('P90'), literal('4.2', XSD('float')));
store.add(WD('Q25288'), CRM('P91'), literal('ton'));
store.add(WD('Q25288'), RDF('type'), CRM('E54'));
store.add(WD('Q35059'), CRM('P90'), literal('96', XSD('float')));
store.add(WD('Q35059'), CRM('P91'), literal('centimeter'));
store.add(WD('Q35059'), RDF('type'), CRM('E54'));
store.add(WD('Q208826'), CRM('P90'), literal('2.42', XSD('float')));
store.add(WD('Q208826'), CRM('P91'), literal('meter'));
store.add(WD('Q208826'), RDF('type'), CRM('E54'));
store.add(WD('Q2040958'), CRM('P43'), WD('Q37221'));
store.add(WD('Q37221'), CRM('P90'), literal('47', XSD('float')));
store.add(WD('Q37221'), CRM('P91'), literal('centimeter'));
store.add(WD('Q37221'), RDF('type'), CRM('E54'));
store.add(WD('Q2040958'), CRM('P45'), WD('Q43338'));
store.add(WD('Q43338'), RDF('type'), CRM('E57'));
store.add(WD('Q2040958'), CRM('P45'), WD('Q29386288'));
store.add(WD('Q29386288'), RDF('type'), CRM('E57'));
store.add(WD('Q2040958'), CRM('P45'), WD('Q22731'));
store.add(WD('Q22731'), RDF('type'), CRM('E57'));
store.add(WD('Q2040958'), CRM('P51'), WD('Q9439'));
store.add(WD('Q9439'), RDF('type'), CRM('E39'));
store.add(WD('Q9439'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P23i_surrendered_title_through'), WD('Q707482'));
store.add(WD('Q2040958'), CRM('P52'), WD('Q6373'));
store.add(WD('Q6373'), RDF('type'), CRM('E39'));
store.add(WD('Q6373'), RDF('type'), CRM('E53'));
store.add(WD('Q6063'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P22i_acquired_title_through'), WD('Q707482'));
store.add(WD('Q707482'), RDF('type'), CRM('E8'));
store.add(WD('Q707482'), DC('date'), literal('1869', XSD('gYear')));
store.add(WD('Q2040958'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P24i_changed_ownership_through'), WD('Q707482'));
store.add(WD('Q2040958'), CRM('P55'), WD('Q6373'));
store.add(WD('Q6373'),  WDT('P131'), WD('Q84'));
store.add(WD('Q6373'),  WDT('P1566'), literal('6697862', XSD('integer')));
store.add(WD('Q6373'), GEO('lat'), literal('51.51945', XSD('float')));
store.add(WD('Q6373'), GEO('long'), literal('-0.12708', XSD('float')));
store.add(WD('Q6373'), OWL('sameAs'), namedNode('http://sws.geonames.org/6697862/'));
store.add(WD('Q2040958'), CRM('P26'), WD('Q84'));
store.add(WD('Q2040958'), CRM('P27'), WD('Q1551834'));
store.add(WD('Q1551834'),  WDT('P1566'), literal('12087293', XSD('integer')));
store.add(WD('Q1551834'), GEO('lat'), literal('-27.18467', XSD('float')));
store.add(WD('Q1551834'), GEO('long'), literal('-109.44419', XSD('float')));
store.add(WD('Q1551834'), OWL('sameAs'), namedNode('http://sws.geonames.org/12087293/'));
store.add(WD('Q2040958'), WDT('P575'), literal('1868', XSD('gYear')));
store.add(WD('Q2040958'), CRM('P51'), WD('Q852486'));
store.add(WD('Q852486'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P23i_surrendered_title_through'), WD('Q23009442'));
store.add(WD('Q2040958'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P24i_changed_ownership_through'), WD('Q23009442'));
store.add(WD('Q2040958'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P25i_moved_by'), WD('Q23009442'));
store.add(WD('Q23009442'), RDF('type'), CRM('E7'));
store.add(WD('Q23009442'), CRM('P17'), ITO('British_Discovery_Expedition'));
store.add(ITO('British_Discovery_Expedition'), RDFS('label'), literal('British Discovery Expedition'));
store.add(ITO('British_Discovery_Expedition'), RDF('type'), CRM('E7'));
store.add(ITO('British_Discovery_Expedition'), RDF('type'), WD('Q2401485'));
store.add(ITO('British_Discovery_Expedition'), DC('date'), literal('1868', XSD('gYear')));
store.add(ITO('British_Discovery_Expedition'), CRM('P10'), ITO('Modern_Imperialism'));
store.add(ITO('Modern_Imperialism'), RDFS('label'), literal('Modern Imperialism'));
store.add(ITO('Modern_Imperialism'), RDF('type'), CRM('E2'));
store.add(ITO('Modern_Imperialism'), DCTERMS('temporal'), literal('19th-20th century'));
store.add(WD('Q23009442'), CRM('P14'), ITO('Ship_HMS_Topaze_Crew_Members'));
store.add(ITO('Ship_HMS_Topaze_Crew_Members'), RDFS('label'), literal('Ship HMS Topaze Crew_Members'));
store.add(ITO('Ship_HMS_Topaze_Crew_Members'), RDF('type'), CRM('E39'));
store.add(ITO('Ship_HMS_Topaze_Crew_Members'), DCTERMS('isPartOf'), WD('Q172771'));
store.add(WD('Q172771'), RDF('type'), CRM('E74'));
store.add(ITO('Ship_HMS_Topaze_Crew_Members'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P11i_participated_in'), ITO('British_Discovery_Expedition'));
store.add(ITO('Ship_HMS_Topaze_Crew_Members'), WDT('P61'), WD('Q2040958'));

// Aggiungi label per classi/entità di Cidoc-crm/Wikidata/DC/DCTerms
store.add(CRM('E24'), RDFS('label'), literal("Physical Human-made thing"));
store.add(CRM('E53'), RDFS('label'), literal('Place')); 
store.add(CRM('E12'), RDFS('label'), literal('Production'));
store.add(CRM('E29'), RDFS('label'), literal('Design or procedure'));
store.add(CRM('E3'), RDFS('label'), literal('Condition State'));
store.add(CRM('E54'), RDFS('label'), literal('Dimension'));
store.add(CRM('E57'), RDFS('label'), literal('Material'));
store.add(CRM('E8'), RDFS('label'), literal('Acquisition'));
store.add(CRM('E39'), RDFS('label'), literal('Actor'));
store.add(CRM('E7'), RDFS('label'), literal('Activity'));
store.add(CRM('E2'), RDFS('label'), literal('Temporal Entity'));
store.add(CRM('E74'), RDFS('label'), literal('Group'));
store.add(WD('Q20350'), SKOS('altLabel'), literal('Easter Island heads'));
store.add(WD('Q1551834'), RDFS('label'), literal('Orongo'));
store.add(WD('Q9009773'), SKOS('altLabel'), literal('Easter Island Commune'));
store.add(WD('Q298'), RDFS('label'), literal('Chile'));
store.add(WD('Q42195'), RDFS('label'), literal('Petroglyph'));
store.add(WD('Q852486'), RDFS('label'), literal('Rapa Nui people'));
store.add(WD('Q25288'),  RDFS('label'), literal('Weight'));
store.add(WD('Q35059'),  RDFS('label'), literal('Width'));
store.add(WD('Q208826'), RDFS('label'), literal('Height'));
store.add(WD('Q37221'), RDFS('label'), literal('Diameter'));
store.add(WD('Q43338'), RDFS('label'), literal ('Basalt'));
store.add(WD('Q29386288'), RDFS('label'), literal ('Coral'));
store.add(WD('Q22731'), RDFS('label'), literal ('Stone'));
store.add(WD('Q6373'), RDFS('label'), literal('British Museum'));
store.add(WD('Q9439'), RDFS('label'), literal("Queen Victoria"));
store.add(WD('Q707482'), SKOS('altLabel'), literal('Donation'));
store.add(WD('Q84'), RDFS('label'), literal('London'));
store.add(WD('Q23009442'), RDFS('label'), literal('Removal'));
store.add(WD('Q2401485'), RDFS('label'), literal('Expedition'));
store.add(WD('Q172771'), SKOS('altLabel'), literal('British Royal Navy'));
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
salvaGrafo('C:\\Users\\HWRUser\\Desktop\\DHDK Course\\Web Desing and Technologies\\Vitali project\\rdf_files_graphs\\7_Oceania_Hoa_Hakananai’a_(Moai_Statue).rdf');