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
const GEO = Namespace ('http://www.w3.org/2003/01/geo/wgs84_pos#')
const OWL = Namespace ('https://www.w3.org/2002/07/owl#')
const RDF = Namespace('http://www.w3.org/1999/02/22-rdf-syntax-ns#');
const RDFS = Namespace('http://www.w3.org/2000/01/rdf-schema#');
const SKOS = Namespace ('http://www.w3.org/2004/02/skos/core#')
const XSD = Namespace ('http://www.w3.org/2001/XMLSchema#')
const WDT = Namespace('https://www.wikidata.org/prop/direct/');
const WD = Namespace('https://www.wikidata.org/wiki/');


// Aggiungi tutte le triple al grafo
store.add(WD('Q248101'),  RDF('type'), CRM('E24'));
store.add(CRM('E24'), RDFS('label'), literal('Physical Human-made thing'));
store.add(WD('Q677'), RDF('type'), CRM('E57'));
store.add(WD('Q677'), RDFS('label'), literal('Iron'));
store.add(CRM('E57'), RDFS('label'), literal('Material'));
store.add(WD('Q1371091'), RDF('type'), CRM('E39'));
store.add(CRM('E39'), RDFS('label'), literal('Actor'))
store.add(WD('Q1371091'), RDFS('label'), literal('Secretary of State for Foreign and Commonwealth Affairs'));
store.add(WD('Q1371091'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P23i_surrendered_title_through'), WD('Q707482'));
store.add(WD('Q248101'), DCTERMS('spatial'), WD('Q320704'));
store.add(WD('Q248101'), RDF('type'), CRM('E53'));
store.add(WD('Q320704'), RDFS('label'), literal('Benin City'));
store.add(CRM('E53'), RDFS('label'), literal('Place'));
store.add(WD('Q320704'),  WDT('P1566'), literal('2347283', XSD('integer')));
store.add(WD('Q320704'), GEO('lat'), literal('6.33815', XSD('float')));
store.add(WD('Q320704'), GEO('long'), literal('5.62575', XSD('float')));
store.add(WD('Q320704'), OWL('sameAS'), namedNode('http://sws.geonames.org/2347283/'));
store.add(WD('Q248101'), DC('creator'), ITO('Benin_Artisans'));
store.add(ITO('Benin_Artisans'), RDFS('label'), literal('Benin Artisans'));
store.add(WD('Q248101'), DCTERMS('created'), literal('16th-17th century'));
store.add(WD('Q248101'), DC('subject'), literal('Benin Art'));
store.add(WD('Q248101'), DC('subject'), literal('African history and culture'));
store.add(WD('Q248101'), DC('subject'), literal('Ritual'));
store.add(WD('Q248101'), DC('title'), literal('Benin Bronzes Collection'));
store.add(WD('Q248101'), DC('type'), literal('Sculptures'));
store.add(WD('Q248101'), DC('type'), literal('Metal plaques'));
store.add(WD('Q248101'), DC('description'), literal('The Benin Bronzes are a group of over a thousand metal plaques and sculptures created by the Edo people of the Kingdom of Benin. These artworks were used to decorate the royal palace in Benin City and often depicted historical figures, noblemen, warriors, and important events from the kingdom\'s history'));
store.add(WD('Q248101'), DCTERMS('isPartOf'), WD('Q27699276'));
store.add(WD('Q27699276'), RDF('type'), CRM('E78'));
store.add(WD('Q27699276'), RDFS('label'), literal('Museum Collection'));
store.add(CRM('E78'), RDFS('label'), literal('Curated Holding'));
store.add(WD('Q248101'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P108i_was_produced_by'), CRM('E12'));
store.add(CRM('E12'), RDFS('label'), literal('Production'));
store.add(WD('Q248101'), CRM('P44'), ITO('Good_State_Overall'));
store.add(ITO('Good_State_Overall'), RDF('type'), CRM('E3'));
store.add(ITO('Good_State_Overall'), RDFS('label'), literal('Good State Overall'));
store.add(CRM('E3'), RDFS('label'), literal('Condition State'));
store.add(WD('Q248101'), CRM('P45'), WD('Q39782'));
store.add(WD('Q248101'), CRM('P45'), WD('Q677'));
store.add(WD('Q248101'), CRM('P45'), WD('Q82001'));
store.add(WD('Q248101'), CRM('P45'), WD('Q753'));
store.add(WD('Q248101'), CRM('P52'), WD('Q6373'));
store.add(WD('Q248101'), CRM('P51'), WD('Q1371091'));
store.add(WD('Q248101'), CRM('P51'), ITO('King_of_Benin_Kingdom'));
store.add(ITO('King_of_Benin_Kingdom'), RDFS('label'), literal('King of Benin Kingdom'));
store.add(WD('Q248101'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P24i_changed_ownership_through'), ITO('Benin_Punitive_Expedition'));
store.add(WD('Q248101'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P24i_changed_ownership_through'), ITO('British_Plunder'));
store.add(WD('Q248101'), CRM('P55'), WD('Q6373'));
store.add(WD('Q248101'), CRM('P27'), WD('Q110925320'));
store.add(WD('Q248101'), CRM('P26'), WD('Q84'));
store.add(WD('Q248101'), CRM('P25'), ITO('Benin_Punitive_Expedition'));
store.add(ITO('Benin_Punitive_Expedition'), RDFS('label'), literal('Benin Punitive Expedition'));
store.add(WD('Q27699276'),  namedNode('http://www.cidoc-crm.org/cidoc-crm/P147i_was_curated_by'), CRM('E87'));
store.add(CRM('E87'), RDFS('label'), literal(' Curation Activity'));
store.add(WD('Q707482'), RDF('type'), CRM('E8'));
store.add(WD('Q707482'), SKOS('altLabel'), literal('donation'));
store.add(CRM('E8'), RDFS('label'), literal('Acquisition'));
store.add(WD('Q707482'), DC('date'), literal('1898', XSD('gYear')));
store.add(ITO('British_Plunder'), RDF('type'), WD('Q192623'));
store.add(ITO('British_Plunder'), RDFS('label'), literal('British Plunder'));
store.add(WD('Q192623'),RDF('type'), CRM('E7'));
store.add(WD('Q192623'), RDFS('label'), literal('Looting'));
store.add(CRM('E7'), RDFS('label'), literal('Activity'));
store.add(ITO('British_Plunder'), CRM('P17'), ITO('Benin_Punitive_Expedition'));
store.add(ITO('British_Plunder'), CRM('P14'), WD('Q172771'));
store.add(ITO('British_Plunder'), CRM('P14'), WD('Q723992'));
store.add(WD('Q172771'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P11i_participated_in'), ITO('Benin_Punitive_Expedition'));
store.add(WD('Q765814'), RDF('type'), CRM('E29'));
store.add(WD('Q765814'), RDFS('label'), literal('lost-wax casting'));
store.add(CRM('E29'), RDFS('label'), literal('Design or procedure'));
store.add(WD('Q723992'),  namedNode('http://www.cidoc-crm.org/cidoc-crm/P11i_participated_in'), ITO('Benin_Punitive_Expedition'));
store.add(WD('Q723992'), RDF('type'), CRM('E21'));
store.add(WD('Q723992'), RDFS('label'), literal('Sir Harry Rawson'));
store.add(WD('Q723992'), DBO('officerInCharge'), WD('Q172771'));
store.add(WD('Q723992'), WDT('P39'), WD('Q2501631'));
store.add(WD('Q84'), RDF('type'), CRM('E53'));
store.add(WD('Q84'), RDFS('label'), literal('London'));
store.add(WD('Q39782'), RDF('type'), CRM('E57'));
store.add(WD('Q39782'), RDFS('label'), literal('Brass'));
store.add(WD('Q179848'), RDF('type'), CRM('E2'));
store.add(WD('Q179848'), RDFS('label'), literal('The Scramble for Africa'));
store.add(CRM('E2'), RDFS('label'), literal('Temporal Entity'));
store.add(WD('Q179848'), DCTERMS('temporal'), literal('1880-1914'));
store.add(ITO('Benin_Artisans'), RDF('type'), WD('Q1294787'));
store.add(WD('Q1294787'), RDF('type'), DCTERMS('Agent'));
store.add(WD('Q1294787'), RDFS('label'), literal('Artisan'));
store.add(WD('Q172771'), RDF('type'), CRM('E39'));
store.add(WD('Q172771'), SKOS('altLabel'), literal('British Royal Navy'));
store.add(WD('Q6373'), RDF('type'), CRM('E39'));
store.add(WD('Q6373'), RDF('type'), CRM('E53'));
store.add(WD('Q6373'),  WDT('P276'), WD('Q84'));
store.add(WD('Q6373'), RDFS('label'), literal('British Museum'));
store.add(WD('Q6373'),  WDT('P1566'), literal('6697862', XSD('integer')));
store.add(WD('Q6373'), GEO('lat'), literal('51.51945', XSD('float')));
store.add(WD('Q6373'), GEO('long'), literal('-0.12708', XSD('float')));
store.add(WD('Q6373'), OWL('sameAS'), namedNode('http://sws.geonames.org/6697862/'));
store.add(WD('Q6373'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P22i_acquired_title_through'), WD('Q707482'));
store.add(ITO('King_of_Benin_Kingdom'), RDF('type'), WD('Q116'));
store.add (WD('Q116'), RDF('type'), CRM ('E21'));
store.add(WD('Q116'), RDFS('label'), literal('Monarch'));
store.add (CRM ('E21'), RDFS('label'), literal('Person'));
store.add(ITO('King_of_Benin_Kingdom'), namedNode('http://www.cidoc-crm.org/cidoc-crm/P23i_surrendered_title_through'), ITO('British_Plunder'));
store.add(ITO('Benin_Punitive_Expedition'), RDF('type'), WD('Q2401485'));
store.add(WD('Q2401485'), RDF('type'), CRM('E5'));
store.add (CRM ('E5'), RDFS('label'), literal('Event'));
store.add(ITO('Benin_Punitive_Expedition'), DC('date'), literal('1897', XSD('gYear')));
store.add(ITO('Benin_Punitive_Expedition'), DCTERMS('spatial'), WD('Q320704'));
store.add(WD('Q2401485'), RDFS('label'), literal('Expedition'));
store.add(ITO('Benin_Punitive_Expedition'), CRM('P10'), WD('Q179848'));
store.add(WD('Q82001'), RDF('type'), CRM('E57'));
store.add(WD('Q82001'), RDFS('label'), literal('Ivory'));
store.add(WD('Q110925320'), RDF('type'), CRM('E53'));
store.add(WD('Q110925320'), RDFS('label'), literal('The royal palace of the Kingdom of Benin (Oba of Benin’s Palace)'));
store.add(WD('Q110925320'),  WDT('P276'), WD('Q320704'));
store.add(WD('Q2501631'), RDFS('label'), literal('Admiral of the Fleet'));
store.add(WD('Q753'), RDF('type'), CRM('E57'));
store.add(WD('Q753'), RDFS('label'), literal('Copper'));
store.add(CRM('E12'), CRM('P33'), WD('Q765814'));
store.add(CRM('E87'), CRM('P14'), WD('Q6373'));
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
salvaGrafo('C:\\Users\\HWRUser\\Desktop\\DHDK Course\\Web Desing and Technologies\\Vitali project\\rdf_files_graphs\\1_Africa_Benin_Bronzes.rdf');